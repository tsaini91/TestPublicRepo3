{
  "RentalHousing/Licenses/Short Term/*": {
    "InspectionResultSubmitAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "",
          "operators": ""
        },
        "criteria": {
          "inspectionTypePerformed": [
            "Short-term Rental Inspection"
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
            "Short-term Rental Inspection"
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
            "Short-term Rental Inspection"
          ],
          "inspectionResult": [
            "Re-inspect"
          ]
        },
        "action": {
          "caseCopyComments": true,
          "inspectionType": "Short-term Rental Inspection",
          "rangeType": "Days",
          "range": "1",
          "sameInspector": true,
          "taskName": "Inspection",
          "taskStatus": "Re-inspect"
        },
        "postScript": ""
      }
    ]
  }
}