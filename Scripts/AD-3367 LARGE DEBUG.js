// increase/decrease debugSize & messageSize to control message size
var debugSize = 1000;
var messageSize = 1000;
var message = "Test Message:  to be large size, as  sample line so that we can duplicate to reach 100 per line <br>"
aa.print("Duplicate " + debugSize + " times and making length " + debugSize * 100 + " <br>");
aa.print(new Array(debugSize + 1).join(message));
aa.env.setValue("ScriptReturnMessage", "Duplicate " + messageSize + " times and making length " + messageSize * 100 + " <br>" + new Array(messageSize + 1).join(message));