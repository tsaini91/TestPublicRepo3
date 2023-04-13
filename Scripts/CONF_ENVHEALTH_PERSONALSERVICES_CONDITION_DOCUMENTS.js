{
  "EnvHealth/Personal Services/*/Application": {
    "Pageflow": [
      {
        "preScript": "",
        "metadata": {
          "description": "Required Documents - EnvHealth Personal Services Applications -Agreement with an Approved Medical Waste Hauler or Mail Back Program for Sharp Waste Removal ",
          "operators": {}
        },
        "criteria": {
          "customFields": {
            "Body Piercing Services": "Yes",
            "Tattooing Services": "Yes",
            "Permanent Cosmetics Services": "Yes"
          }
        },
        "action": {
          "requiredDocuments": [
            "Agreement with an Approved Medical Waste Hauler or Mail Back Program for Sharp Waste Removal",
            "Negative Biological (spore) Indicate Test for the Autoclave",
            "Infection Prevention Control Plan"
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
  "EnvHealth/Personal Services/*/Renewal": {
    "Pageflow": [
      {
        "preScript": "",
        "metadata": {
          "description": "Required Documents - EnvHealth Personal Services Applications -Agreement with an Approved Medical Waste Hauler or Mail Back Program for Sharp Waste Removal ",
          "operators": {}
        },
        "criteria": {
          "customFields": {
            "Body Piercing Services": "Yes",
            "Tattooing Services": "Yes",
            "Permanent Cosmetics Services": "Yes"
          }
        },
        "action": {
          "requiredDocuments": [
            "Agreement with an Approved Medical Waste Hauler or Mail Back Program for Sharp Waste Removal",
            "Negative Biological (spore) Indicate Test for the Autoclave",
            "Infection Prevention Control Plan"
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