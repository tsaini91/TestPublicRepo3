/*------------------------------------------------------------------------------------------------------/
| Program		: PRE_SCRIPT_VALIDATE_ENVHEALTH_COPY_DATA.js
| Event			: 
|
| Usage			: Prevent the duplication when copy data between permit and renewal in EnvHealth
| Notes			: auto generated Record Script by Accela Eclipse Plugin 
| Created by	: AHASAN
| Created at	: 23/12/2018 15:51:48
|
/------------------------------------------------------------------------------------------------------*/
var _cap = aa.env.getValue("CapModel");
var _capid = cap.getCapID();

var _Contact = aa.people.getCapContactByCapID(_capid);
if (_Contact.getSuccess()) {
	capPeopleArr = _Contact.getOutput();		
	if(capPeopleArr.length > 0)
	{
		cancelCfgExecution = true;
	}
}
