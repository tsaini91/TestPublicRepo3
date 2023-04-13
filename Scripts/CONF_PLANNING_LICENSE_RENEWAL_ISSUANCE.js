{
  "Planning/Home Occupation/NA/Renewal": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Updates parent Planning record",
          "operators": {}
        },
        "criteria": {
          "task": [
            "Permit Renewal"
          ],
          "status": [
            "Renewed"
          ]
        },
        "preScript": "",
        "action": {
          "issuedRecordStatus": "Active",
          "issuedExpirationStatus": "Active",
          "issuedLPStatus": "A",
          "expirationType": "Expiration Code",
          "expirationPeriod": "",
          "customExpirationFunction": "",
          "copyComponents": []
        },
        "postScript": ""
      }
    ]
  }
}