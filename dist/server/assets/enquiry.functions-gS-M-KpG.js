import { i as createServerFn, p as TSS_SERVER_FUNCTION } from "./esm-Dova13aH.js";
import { z } from "zod";
//#region node_modules/@tanstack/start-server-core/dist/esm/createServerRpc.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
//#endregion
//#region src/lib/enquiry.functions.ts?tss-serverfn-split
var EnquirySchema = z.object({
	name: z.string().trim().min(1).max(100),
	phone: z.string().trim().min(1).max(40),
	email: z.string().trim().email().max(255),
	company: z.string().trim().max(200).optional().default(""),
	product: z.string().trim().min(1).max(100),
	message: z.string().trim().min(1).max(2e3)
});
var SHEET_FILE_NAME = "Global Fire Safety - Enquiries";
var SHEET_TAB = "Enquiries";
var HEADERS = [
	"Submitted At",
	"Name",
	"Phone",
	"Email",
	"Company",
	"Product Interested",
	"Requirement"
];
function driveHeaders(lovableKey, connKey) {
	return {
		Authorization: `Bearer ${lovableKey}`,
		"X-Connection-Api-Key": connKey,
		"Content-Type": "application/json"
	};
}
async function findSpreadsheetId(lovableKey, driveKey) {
	const res = await fetch(`https://connector-gateway.lovable.dev/google_drive/drive/v3/files?q=${encodeURIComponent(`name='${SHEET_FILE_NAME}' and mimeType='application/vnd.google-apps.spreadsheet' and trashed=false`)}&fields=files(id,name)&pageSize=1`, { headers: {
		Authorization: `Bearer ${lovableKey}`,
		"X-Connection-Api-Key": driveKey
	} });
	if (!res.ok) return null;
	return (await res.json()).files?.[0]?.id ?? null;
}
async function createSpreadsheet(lovableKey, sheetsKey) {
	const res = await fetch("https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets", {
		method: "POST",
		headers: driveHeaders(lovableKey, sheetsKey),
		body: JSON.stringify({
			properties: { title: SHEET_FILE_NAME },
			sheets: [{ properties: { title: SHEET_TAB } }]
		})
	});
	if (!res.ok) {
		const text = await res.text();
		throw new Error(`Sheets create failed (${res.status}): ${text.slice(0, 300)}`);
	}
	const json = await res.json();
	await fetch(`https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/${json.spreadsheetId}/values/${SHEET_TAB}!A1:G1?valueInputOption=RAW`, {
		method: "PUT",
		headers: driveHeaders(lovableKey, sheetsKey),
		body: JSON.stringify({ values: [HEADERS] })
	});
	return json.spreadsheetId;
}
var submitEnquiry_createServerFn_handler = createServerRpc({
	id: "617707e00effff11fe2ad158ad24aa66c3e087d1885e1e35dc054328f3e2b494",
	name: "submitEnquiry",
	filename: "src/lib/enquiry.functions.ts"
}, (opts) => submitEnquiry.__executeServer(opts));
var submitEnquiry = createServerFn({ method: "POST" }).inputValidator((data) => EnquirySchema.parse(data)).handler(submitEnquiry_createServerFn_handler, async ({ data }) => {
	const lovableKey = process.env.LOVABLE_API_KEY;
	const sheetsKey = process.env.GOOGLE_SHEETS_API_KEY;
	const driveKey = process.env.GOOGLE_DRIVE_API_KEY;
	if (!lovableKey || !sheetsKey || !driveKey) throw new Error("Google Sheets/Drive connector is not configured");
	let spreadsheetId = await findSpreadsheetId(lovableKey, driveKey);
	if (!spreadsheetId) spreadsheetId = await createSpreadsheet(lovableKey, sheetsKey);
	const row = [
		(/* @__PURE__ */ new Date()).toISOString(),
		data.name,
		data.phone,
		data.email,
		data.company,
		data.product,
		data.message
	];
	const appendRes = await fetch(`https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/${spreadsheetId}/values/${SHEET_TAB}!A:G:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`, {
		method: "POST",
		headers: driveHeaders(lovableKey, sheetsKey),
		body: JSON.stringify({ values: [row] })
	});
	if (!appendRes.ok) {
		const text = await appendRes.text();
		throw new Error(`Sheets append failed (${appendRes.status}): ${text.slice(0, 300)}`);
	}
	return {
		ok: true,
		spreadsheetId
	};
});
//#endregion
export { submitEnquiry_createServerFn_handler };
