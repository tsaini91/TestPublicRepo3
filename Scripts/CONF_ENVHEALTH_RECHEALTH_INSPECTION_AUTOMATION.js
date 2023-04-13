{
  "EnvHealth/Rec Health/*/Application": {
    "InspectionResultSubmitAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "",
          "operators": ""
        },
        "criteria": {
          "inspectionTypePerformed": [
            "Pre-Operational"
          ],
          "inspectionResult": [
            "Passed"
          ]
        },
        "action": {
          "newAppStatus": "Inspection Passed",
          "taskName": "Inspection",
          "taskStatus": "Passed"
        },
        "postScript": ""
      },
      {
        "preScript": "",
        "metadata": {
          "description": "",
          "operators": ""
        },
        "criteria": {
          "inspectionTypePerformed": [
            "Pre-Operational"
          ],
          "inspectionResult": [
            "Failed"
          ]
        },
        "action": {
          "newAppStatus": "Inspection Failed",
          "taskName": "Inspection",
          "taskStatus": "Failed"
        },
        "postScript": ""
      },
      {
        "preScript": "",
        "metadata": {
          "description": "",
          "operators": ""
        },
        "criteria": {
          "inspectionTypePerformed": [
            "Pre-Operational"
          ],
          "inspectionResult": [
            "Re-inspect"
          ]
        },
        "action": {
          "caseCopyComments": true,
          "inspectionType": "Follow-up Inspection",
          "rangeType": "Days",
          "range": "180",
          "sameInspector": true,
          "taskName": "Inspection",
          "taskStatus": "Re-inspect"
        },
        "postScript": ""
      }
    ]
  },
  "EnvHealth/Rec Health/*/Permit": {
    "InspectionResultSubmitAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "",
          "operators": ""
        },
        "criteria": {
          "inspectionTypePerformed": [
            "Routine Inspection"
          ],
          "inspectionResult": [
            "Passed"
          ]
        },
        "action": {
          "newAppStatus": "Inspection Passed",
          "taskName": "Inspection",
          "taskStatus": "Passed"
        },
        "postScript": ""
      },
      {
        "preScript": "",
        "metadata": {
          "description": "",
          "operators": ""
        },
        "criteria": {
          "inspectionTypePerformed": [
            "Routine Inspection"
          ],
          "inspectionResult": [
            "Failed"
          ]
        },
        "action": {
          "newAppStatus": "Inspection Failed",
          "taskName": "Inspection",
          "taskStatus": "Failed"
        },
        "postScript": ""
      },
      {
        "preScript": "",
        "metadata": {
          "description": "",
          "operators": ""
        },
        "criteria": {
          "inspectionTypePerformed": [
            "Routine Inspection"
          ],
          "inspectionResult": [
            "Re-inspect"
          ]
        },
        "action": {
          "caseCopyComments": true,
          "inspectionType": "Follow-up Inspection",
          "rangeType": "Days",
          "range": "180",
          "sameInspector": true,
          "taskName": "Inspection",
          "taskStatus": "Re-inspect"
        },
        "postScript": ""
      }
    ]
  }
}