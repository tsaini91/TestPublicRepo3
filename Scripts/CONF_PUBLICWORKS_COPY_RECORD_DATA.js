{
  "PublicWorks/Valet/Long-Term/Renewal": {
    "Pageflow": [
      {
        "preScript": "",
        "metadata": {
          "description": "Copy Contact Info from parent record to amendment record",
          "operators": {}
        },
        "criteria": {
          "recordType": "PublicWorks/Valet/Long-Term/NA"
        },
        "action": {
          "usageType": "copyToParent",
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
          "LICENSEDPROFESSIONALS": [
            "ALL"
          ],
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
          "recordType": "PublicWorks/Valet/Long-Term/NA"
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
          "ADDRESS": [
            "Business"
          ],
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
  },
  "PublicWorks/Sidewalk Use/NA/Renewal": {
    "ApplicationSubmitAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "Copy data from parent record to renewal record",
          "operators": {}
        },
        "criteria": {
          "recordType": "PublicWorks/Sidewalk Use/NA/NA"
        },
        "action": {
          "usageType": "copyFromParent",
          "Renewal": true,
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
          "ADDRESS": [
            "ALL"
          ],
          "LICENSEDPROFESSIONALS": [
            "ALL"
          ],
          "ASSETS": [],
          "keepExistingAPO": true,
          "RECORDDETAILS": true,
          "RECORDNAME": true,
          "PARCEL": true,
          "OWNER": true,
          "ADDITIONALINFO": false,
          "EDUCATION": false,
          "CONTEDUCATION": false,
          "EXAM": false,
          "DOCUMENT": false
        },
        "postScript": ""
      }
    ],
    "Pageflow": [
      {
        "preScript": "",
        "metadata": {
          "description": "Copy data from parent record to renewal record",
          "operators": {}
        },
        "criteria": {
          "recordType": "PublicWorks/Sidewalk Use/NA/NA"
        },
        "action": {
          "usageType": "copyFromParent",
          "Renewal": true,
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
          "ADDRESS": [
            "ALL"
          ],
          "LICENSEDPROFESSIONALS": [
            "ALL"
          ],
          "ASSETS": [],
          "keepExistingAPO": true,
          "RECORDDETAILS": true,
          "RECORDNAME": true,
          "PARCEL": true,
          "OWNER": true,
          "ADDITIONALINFO": false,
          "EDUCATION": false,
          "CONTEDUCATION": false,
          "EXAM": false,
          "DOCUMENT": false
        },
        "postScript": ""
      }
    ]
  }
}