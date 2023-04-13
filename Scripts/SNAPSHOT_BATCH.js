var capIDModel = new com.accela.aa.aamain.cap.CapIDModel(aa.getServiceProviderCode(), "REC22", "00000", "0000J");
var pCapContactScript = new com.accela.aa.emse.dom.CapIDScriptModel(capIDModel);
var pCapContact = aa.cap.getCapPrimaryContact(pCapContactScript).getOutput();
var actionType = com.accela.aa.snapshot.model.ActionType.UPDATE;
com.accela.aa.snapshot.util.CapBusinessLogHelper.getInstance().logCapContact(pCapContact, actionType, false);

var capService = com.accela.aa.util.EJBProxy.getCapService();
capService.getCapViewByPK(capIDModel)