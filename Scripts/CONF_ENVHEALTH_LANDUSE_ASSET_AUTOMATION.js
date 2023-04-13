{
  "EnvHealth/Land Use/Septic/Application": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Create Septic Asset",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Permit Issuance"
          ],
          "status": [
            "Issued"
          ]
        },
        "action": {
          "copyContacts": [
            "Facility Owner"
          ],
          "updateExistingRefAsset": true,
          "assetType": "Building",
          "assetGroup": "Facilities",
          "checkExistingAsset": true,
          "dateOfService": "",
          "status": "Pending",
          "copyAddress": [
            "ALL"
          ],
          "customFieldsDefaultMapping": {},
          "linkParent": true,
          "copyDocumentTypes": [
            "Site Plan",
            "Building Plan"
          ],
          "copyAppNameToAssetName": true
        },
        "postScript": ""
      }
    ]
  },
  "EnvHealth/Land Use/Subdivision/Application": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Create Subdivision Asset",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Permit Issuance"
          ],
          "status": [
            "Issued"
          ]
        },
        "action": {
          "copyContacts": [
            "Facility Owner",
            "Property Manager"
          ],
          "updateExistingRefAsset": true,
          "assetType": "Building",
          "assetGroup": "Facilities",
          "checkExistingAsset": true,
          "dateOfService": "",
          "status": "Pending",
          "copyAddress": [
            "ALL"
          ],
          "customFieldsDefaultMapping": {},
          "linkParent": true,
          "copyDocumentTypes": [
            "Site Plan",
            "Building Plan"
          ],
          "copyAppNameToAssetName": true
        },
        "postScript": ""
      }
    ]
  },
  "EnvHealth/Land Use/Water Well/Application": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Create Water Well Asset",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Permit Issuance"
          ],
          "status": [
            "Issued"
          ]
        },
        "action": {
          "copyContacts": [
            "Facility Owner",
            "Property Manager"
          ],
          "updateExistingRefAsset": true,
          "assetType": "Building",
          "assetGroup": "Facilities",
          "checkExistingAsset": true,
          "dateOfService": "",
          "status": "Pending",
          "copyAddress": [
            "ALL"
          ],
          "customFieldsDefaultMapping": {},
          "linkParent": true,
          "copyDocumentTypes": [
            "Site Plan",
            "Building Plan"
          ],
          "copyAppNameToAssetName": true
        },
        "postScript": ""
      }
    ]
  }
}