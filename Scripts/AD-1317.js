/* -------------------------------------------------------------------------------------------------
| Program  : BATCH_TIMETRACKING updated
| Trigger  : Batch
| Client   : Leon County
| Script ID:
| Frequency: Nightly
|
| Desc: Batch runs nightly to update WF review time tracking values
|
| Batch Parameter:
|  Required:
|    - None
|  Optional:
|    - Current Env : Current environment where the batch is triggered
| ------------------------------------------------------------------------------------------------------ */
var currentEnvironment = aa.env.getValue('Current Env');
var br = '<br>';
var emailText = '';
var scriptResult = aa.workflow.handleTimeTracking();
if (scriptResult.getSuccess()) {
    logMessage('Time Tracking Updated', 'Successfully');
} else {
    logMessage('INFO', scriptResult.getErrorType() + ', ' + scriptResult.getErrorMessage());
}
if (currentEnvironment && currentEnvironment != '') {
    logMessage('Current environment', currentEnvironment);
}
email('sgong@accela.com', 'ssingh@accela.com', 'Time Tracking Updated - STANDARDDEV MULTIDB', '<html>' + emailText + br + 'Do not reply to this email' + '</html>');
function logMessage(etype, edesc) {
    printDebug(etype + ' : ' + edesc);
    emailText += etype + ' : ' + edesc + br;
}
function email(pFromEmail, pToEmail, pSubject, pText) {
    var emailResult = aa.sendMail(pFromEmail, pToEmail, '', pSubject, pText);
    printDebug('Email sent to ' + pToEmail + (emailResult.getSuccess() ? ' succeeded' : ' failed'));
}
function printDebug(dstr) {
    aa.print(dstr + br);
}