{
  "EnvHealth/Rec Health/*/Application": {
    "Pageflow": [
      {
        "preScript": "",
        "metadata": {
          "description": "Required Documents - EnvHealth RecHealth Applications - Equipment Schematic Diagrams",
          "operators": {}
        },
        "criteria": {
          "customFields": {}
        },
        "action": {
          "requiredDocuments": [
            "Equipment Schematic Diagrams"
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
  "EnvHealth/Rec Health/*/Renewal": {
	    "Pageflow": [
	      {
	        "preScript": "",
	        "metadata": {
	          "description": "Required Documents - EnvHealth RecHealth Applications - Equipment Schematic Diagrams",
	          "operators": {}
	        },
	        "criteria": {
	          "customFields": {}
	        },
	        "action": {
	          "requiredDocuments": [
	            "Equipment Schematic Diagrams"
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