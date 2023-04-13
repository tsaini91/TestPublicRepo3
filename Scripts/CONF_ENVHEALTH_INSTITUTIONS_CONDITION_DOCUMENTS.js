{
  "EnvHealth/Institutions/*/Application": {
    "Pageflow": [
      {
        "preScript": "",
        "metadata": {
          "description": "Required Documents - EnvHealth Institutions Applications - Compliance Forms, Site Plan",
          "operators": {}
        },
        "criteria": {
          "customFields": {}
        },
        "action": {
          "requiredDocuments": [
            "Site Plans_test",
            "Compliance Forms_test"
          ],
          "requirementType": "CONDITION",
          "validationMessage": "Documents are Required"
        },
        "postScript ": ""
      }
    ],
    "ApplicationSubmitAfter": [
      {
        "preScript": " ",
        "metadata": {
          "description": "Update Document Categories",
          "operators": {}
        },
        "criteria": {},
        "action": {
          "requiredDocuments": [],
          "updateDocumentCategories": true
        },
        "postScript ": " "
      }
    ],
    "ConvertToRealCAPAfter": [
      {
        "preScript": " ",
        "metadata": {
          "description": "Update Document Categories",
          "operators": {}
        },
        "criteria": {},
        "action": {
          "requiredDocuments": [],
          "updateDocumentCategories": true
        },
        "postScript ": " "
      }
    ]
  },
  "EnvHealth/Institutions/*/Renewal": {
    "Pageflow": [
      {
        "preScript": "",
        "metadata": {
          "description": "Required Documents - EnvHealth Institutions Applications - Compliance Forms, Site Plan",
          "operators": {}
        },
        "criteria": {
          "customFields": {}
        },
        "action": {
          "requiredDocuments": [
            "Site Plans_test",
            "Compliance Forms_test"
          ],
          "requirementType": "CONDITION",
          "validationMessage": "Documents are Required"
        },
        "postScript ": ""
      }
    ],
    "ApplicationSubmitAfter": [
      {
        "preScript": " ",
        "metadata": {
          "description": "Update Document Categories",
          "operators": {}
        },
        "criteria": {},
        "action": {
          "requiredDocuments": [],
          "updateDocumentCategories": true
        },
        "postScript ": " "
      }
    ],
    "ConvertToRealCAPAfter": [
      {
        "preScript": " ",
        "metadata": {
          "description": "Update Document Categories",
          "operators": {}
        },
        "criteria": {},
        "action": {
          "requiredDocuments": [],
          "updateDocumentCategories": true
        },
        "postScript ": " "
      }
    ]
  }
}