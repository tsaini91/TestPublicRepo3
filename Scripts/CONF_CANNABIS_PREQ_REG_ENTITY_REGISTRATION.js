{
    "Cannabis/Entity/Prequalification/Application": {
      "WorkflowTaskUpdateAfter": [
        {
          "preScript": "",
          "metadata": {
            "description": "entity issuance",
            "operators": {}
          },
          "criteria": {
            "task": [
              "Application Intake"
            ],
            "status": [
              "Accepted"
            ]
          },
          "action":{
          "contactTypeRecordTypeMapping": {
            "Affiliate Individual": "Cannabis/Entity/Registration/Individual",
            "Affiliate Business": "Cannabis/Entity/Registration/Business",
            "Employee": "Cannabis/Entity/Registration/Employee",
            "Volunteer": "Cannabis/Entity/Registration/Employee",
            "Independent Contractor":"Cannabis/Entity/Registration/Individual"
          },
          "childTempRecord": true,
          "childRecordStatus": "Pending",
          "copyCF": false,
          "copyCT": false,
          "CFGroupsToCopy": "",
          "recordIdField": "",
          "notificationTemplate": "MJ_AFFILIATE_REGISTRATION",
          "notificationReport": "",
          "postScript": ""
        }
      }
      ]
    }
  }