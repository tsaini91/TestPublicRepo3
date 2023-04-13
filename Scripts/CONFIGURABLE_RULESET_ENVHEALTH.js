{
 "WorkflowTaskUpdateAfter": { 
    "StandardScripts": [
      "STDBASE_LICENSE_ISSUANCE",         
      "STDBASE_LICENSE_RENEWAL_ISSUANCE", 
      "STDBASE_SEND_CONTACT_EMAILS"  ,
      "STDBASE_UPDATE_FIELDS" ,      
      "STDBASE_COPY_RECORD_DATA",
      "STDBASE_ASSET_AUTOMATION",
      "STDBASE_TIME_ACCOUNTING_AUTOMATION"
   
    ]
  },
 "ConvertToRealCAPAfter": { 
    "StandardScripts": [
      "STDBASE_LICENSE_RENEWAL_ISSUANCE", 
      "STDBASE_SEND_CONTACT_EMAILS",
      "STDBASE_PEOPLE_AUTOMATION"
    ]
  },
  "InvoiceFeeAfter": {  
    "StandardScripts": [ 
      "STDBASE_SEND_CONTACT_EMAILS"  
    ]
  },
  "WorkflowTaskUpdateBefore": {  
    "StandardScripts": [
      "STDBASE_RECORD_VALIDATION"      
    ]
  },
  "ApplicationSubmitAfter": {  
    "StandardScripts": [
	  "STDBASE_PEOPLE_AUTOMATION",
          "STDBASE_RECORD_ADDRESS_AUTOMATION",
	  "STDBASE_COPY_RECORD_DATA",
	  "STDBASE_CONDITION_DOCUMENTS",
	  "STDBASE_UPDATE_FIELDS"
    ]
  }
}