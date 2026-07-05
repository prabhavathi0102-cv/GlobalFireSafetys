//#region \0%23tanstack-start-server-fn-resolver
var manifest = { "617707e00effff11fe2ad158ad24aa66c3e087d1885e1e35dc054328f3e2b494": {
	functionName: "submitEnquiry_createServerFn_handler",
	importer: () => import("./enquiry.functions-gS-M-KpG.js")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
