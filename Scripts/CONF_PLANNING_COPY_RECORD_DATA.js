{
  "Planning/Home Occupation/NA/Renewal": {
    "Pageflow": [
      {
        "preScript": "",
        "metadata": {
          "description": "Copy Contact Info from parent record to amendment record",
          "operators": {}
        },
        "criteria": {
          "recordType": "Planning/Home Occupation/NA/NA"
        },
        "action": {
          "usageType": "copyFromParent",
          "Renewal": false,
          "CONTACTS": [
            "ALL"
          ],
          "ASI": [
            "ALL"
          ],
          "ASIT": [
            "ALL"
          ],
          "CONDITIONS": [
            "ALL"
          ],
          "ADDRESS": [],
          "LICENSEDPROFESSIONALS": [],
          "ASSETS": [],
          "keepExistingAPO": false,
          "RECORDDETAILS": true,
          "RECORDNAME": true,
          "PARCEL": false,
          "OWNER": false,
          "ADDITIONALINFO": false,
          "EDUCATION": true,
          "CONTEDUCATION": true,
          "EXAM": true,
          "DOCUMENT": false
        },
        "postScript": ""
      }
    ],
    "ApplicationSubmitAfter": [
      {
        "metadata": {
          "description": "Copy data from License to Renewal",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "recordType": "Planning/Home Occupation/NA/NA"
        },
        "action": {
          "usageType": "copyFromParent",
          "CONTACTS": [
            "ALL"
          ],
          "ASI": [
            "ALL"
          ],
          "ASIT": [
            "ALL"
          ],
          "CONDITIONS": [
            "ALL"
          ],
          "ADDRESS": [],
          "Renewal": true,
          "keepExistingAPO": true,
          "RECORDDETAILS": true,
          "RECORDNAME": true,
          "PARCEL": false,
          "OWNER": false,
          "ADDITIONALINFO": false,
          "EDUCATION": true,
          "CONTEDUCATION": true,
          "EXAM": true,
          "DOCUMENT": false
        },
        "postScript": ""
      }
    ]
  }
}