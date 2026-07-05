import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const EnquirySchema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(1).max(40),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(200).optional().default(""),
  product: z.string().trim().min(1).max(100),
  message: z.string().trim().min(1).max(2000),
});

const SHEET_FILE_NAME = "Global Fire Safety - Enquiries";
const SHEET_TAB = "Enquiries";
const HEADERS = [
  "Submitted At",
  "Name",
  "Phone",
  "Email",
  "Company",
  "Product Interested",
  "Requirement",
];

function driveHeaders(lovableKey: string, connKey: string) {
  return {
    Authorization: `Bearer ${lovableKey}`,
    "X-Connection-Api-Key": connKey,
    "Content-Type": "application/json",
  };
}

async function findSpreadsheetId(lovableKey: string, driveKey: string): Promise<string | null> {
  const q = encodeURIComponent(
    `name='${SHEET_FILE_NAME}' and mimeType='application/vnd.google-apps.spreadsheet' and trashed=false`,
  );
  const res = await fetch(
    `https://connector-gateway.lovable.dev/google_drive/drive/v3/files?q=${q}&fields=files(id,name)&pageSize=1`,
    { headers: { Authorization: `Bearer ${lovableKey}`, "X-Connection-Api-Key": driveKey } },
  );
  if (!res.ok) return null;
  const json = (await res.json()) as { files?: Array<{ id: string }> };
  return json.files?.[0]?.id ?? null;
}

async function createSpreadsheet(lovableKey: string, sheetsKey: string): Promise<string> {
  const res = await fetch("https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets", {
    method: "POST",
    headers: driveHeaders(lovableKey, sheetsKey),
    body: JSON.stringify({
      properties: { title: SHEET_FILE_NAME },
      sheets: [{ properties: { title: SHEET_TAB } }],
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Sheets create failed (${res.status}): ${text.slice(0, 300)}`);
  }
  const json = (await res.json()) as { spreadsheetId: string };
  // Write headers
  await fetch(
    `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/${json.spreadsheetId}/values/${SHEET_TAB}!A1:G1?valueInputOption=RAW`,
    {
      method: "PUT",
      headers: driveHeaders(lovableKey, sheetsKey),
      body: JSON.stringify({ values: [HEADERS] }),
    },
  );
  return json.spreadsheetId;
}

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => EnquirySchema.parse(data))
  .handler(async ({ data }) => {
    const lovableKey = process.env.LOVABLE_API_KEY;
    const sheetsKey = process.env.GOOGLE_SHEETS_API_KEY;
    const driveKey = process.env.GOOGLE_DRIVE_API_KEY;
    if (!lovableKey || !sheetsKey || !driveKey) {
      throw new Error("Google Sheets/Drive connector is not configured");
    }

    let spreadsheetId = await findSpreadsheetId(lovableKey, driveKey);
    if (!spreadsheetId) {
      spreadsheetId = await createSpreadsheet(lovableKey, sheetsKey);
    }

    const submittedAt = new Date().toISOString();
    const row = [
      submittedAt,
      data.name,
      data.phone,
      data.email,
      data.company,
      data.product,
      data.message,
    ];

    const appendRes = await fetch(
      `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/${spreadsheetId}/values/${SHEET_TAB}!A:G:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      {
        method: "POST",
        headers: driveHeaders(lovableKey, sheetsKey),
        body: JSON.stringify({ values: [row] }),
      },
    );

    if (!appendRes.ok) {
      const text = await appendRes.text();
      throw new Error(`Sheets append failed (${appendRes.status}): ${text.slice(0, 300)}`);
    }

    return { ok: true as const, spreadsheetId };
  });
