var myCapId = "SOL-99999";
var myUserId = "ADMIN";

var jsonName = "CONF_CUSTOM_TABLE_LOAD";
var asiTableName = "Custom Table Name";

aa.env.setValue("EventName", "ApplicationSubmitAfter");
//aa.env.setValue("EventName"ConvertToRealCapAfter");
//aa.env.setValue("EventName","ApplicationDetailUpdateAfter");
//aa.env.setValue("EventName","ApplicationSelectAfter");
//aa.env.setValue("EventName","AdditionalInfoUpdateAfter");


//aa.env.setValue("EventName","InspectionResultSubmitAfter");
/* 
var inspId = 12398021;
var inspType = "Enforcement Property Maint";
var inspResult = "Red";
var inspComment = "Inspector comments...." */

//aa.env.setValue("EventName", "WorkflowTaskUpdateAfter");
/*
var wfTask = "Intake";
var wfStatus = "Accepted";
var wfDate = "2018-01-24";
var wfDateMMDDYYYY = "01/24/2018";
var wfComment = "I ran from script test!";
var wfProcess = "MJ_EPRE_APP"
var wfNote = null
var wfActionByUserID = "JPLAISTED"
var wfActionByDept = "STDSOL/ADMIN/NA/NA/NA/NA/NA"
var wfStaffUserID = "JPLAISTED"
var wfTimeBillable = "N"
var wfTimeOT = "N"
var wfHours = "0.0"
*/
var controlString = aa.env.getValue("EventName");

var runEvent = true; // set to false if you want to roll your own code here in script test
/* master script code don't touch */
var tmpID = aa.cap.getCapID(myCapId).getOutput();
if (tmpID != null) {
	aa.env.setValue("PermitId1", tmpID.getID1());
	aa.env.setValue("PermitId2", tmpID.getID2());
	aa.env.setValue("PermitId3", tmpID.getID3());
}
aa.env.setValue("CurrentUserID", myUserId);
var preExecute = "PreExecuteForAfterEvents";
var documentOnly = false;
var SCRIPT_VERSION = 3.0;
var useSA = false;
var SA = null;
var SAScript = null;
var bzr = aa.bizDomain.getBizDomainByValue("MULTI_SERVICE_SETTINGS", "SUPER_AGENCY_FOR_EMSE");
if (bzr.getSuccess() && bzr.getOutput().getAuditStatus() != "I") {
	useSA = true;
	SA = bzr.getOutput().getDescription();
	bzr = aa.bizDomain.getBizDomainByValue("MULTI_SERVICE_SETTINGS", "SUPER_AGENCY_INCLUDE_SCRIPT");
	if (bzr.getSuccess()) {
		SAScript = bzr.getOutput().getDescription();
	}
}
if (SA) {
	eval(getScriptText("INCLUDES_ACCELA_FUNCTIONS", null, true));
	eval(getScriptText("INCLUDES_ACCELA_GLOBALS", SA)); /* force for script test*/
	showDebug = true;
	eval(getScriptText(SAScript, SA));
} else {
	eval(getScriptText("INCLUDES_ACCELA_FUNCTIONS", null, true));
	eval(getScriptText("INCLUDES_ACCELA_GLOBALS", null, true));
}
eval(getScriptText("INCLUDES_CUSTOM", null, true));
if (documentOnly) {
	doStandardChoiceActions(controlString, false, 0);
	aa.env.setValue("ScriptReturnCode", "0");
	aa.env.setValue("ScriptReturnMessage", "Documentation Successful.  No actions executed.");
	aa.abortScript();
}
var prefix = lookup("EMSE_VARIABLE_BRANCH_PREFIX", vEventName);
var controlFlagStdChoice = "EMSE_EXECUTE_OPTIONS";
var doStdChoices = true;
var doScripts = false;
var bzr = aa.bizDomain.getBizDomain(controlFlagStdChoice).getOutput().size() > 0;
if (bzr) {
	var bvr1 = aa.bizDomain.getBizDomainByValue(controlFlagStdChoice, "STD_CHOICE");
	doStdChoices = bvr1.getSuccess() && bvr1.getOutput().getAuditStatus() != "I";
	var bvr1 = aa.bizDomain.getBizDomainByValue(controlFlagStdChoice, "SCRIPT");
	doScripts = bvr1.getSuccess() && bvr1.getOutput().getAuditStatus() != "I";
}

function getScriptText(vScriptName, servProvCode, useProductScripts) {
	if (!servProvCode) servProvCode = aa.getServiceProviderCode();
	vScriptName = vScriptName.toUpperCase();
	var emseBiz = aa.proxyInvoker.newInstance("com.accela.aa.emse.emse.EMSEBusiness").getOutput();
	try {
		if (useProductScripts) {
			var emseScript = emseBiz.getMasterScript(aa.getServiceProviderCode(), vScriptName);
		} else {
			var emseScript = emseBiz.getScriptByPK(aa.getServiceProviderCode(), vScriptName, "ADMIN");
		}
		return emseScript.getScriptText() + "";
	} catch (err) {
		return "";
	}
}
logGlobals(AInfo);
if (runEvent && doStdChoices) doStandardChoiceActions(controlString, true, 0);
if (runEvent && doScripts) doScriptActions();
var z = debug.replace(/<BR>/g, "\r");
aa.print(z);
//
// User code goes here

  
	var cfgJsonStr = getScriptText(jsonName);
	if (cfgJsonStr == "") {
		logDebug("cfgJsonStr: " + cfgJsonStr)
	}
	
	var tableJSONArray = JSON.parse(cfgJsonStr);

try {

	var targetCapId = capId;
	if(tableJSONArray.length > 0){
		var tableJSONArrayObjKey = tableJSONArray[0];

		var newTableArray = new Array();
		var tableArryKeys = Object.keys(tableJSONArrayObjKey);
	
		for(iRow in tableJSONArray){
			var tableJSONArrayObj = tableJSONArray[iRow];
			var tableRow = new Array();
			for(iKey in tableArryKeys){
				var tableKey = tableArryKeys[iKey];
				//aa.print(tableKey + " = " + tableJSONArrayObj[tableKey]);
				tableRow[tableKey] = new asiTableValObj(tableKey, tableJSONArrayObj[tableKey], "N");
			}
			newTableArray.push(tableRow);
		}
	
		if (newTableArray.length > 0){
			// Remove the existing table and add the new one.
			removeASITable(asiTableName, targetCapId);
			aa.print("removeTable");
			addASITable(asiTableName, newTableArray, targetCapId);
			aa.print("addTable");
		}
	}
	else{
		logDebug("No data in tableJSONArray");
	}

   

} 
catch (e) {
	logDebug("ERROR: " + e);
}


// end user code
aa.env.setValue("ScriptReturnCode", "0");
if (showMessage) aa.env.setValue("ScriptReturnMessage", message);
if (showDebug) aa.env.setValue("ScriptReturnMessage", debug);