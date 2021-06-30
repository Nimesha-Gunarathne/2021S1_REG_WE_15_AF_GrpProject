// this function checks the values are null or not
// if null, it returns fail

function checkConferenceDetails(variablePass){
    if(variablePass.title && variablePass.description && variablePass.date && variablePass.keynoteSpeaker && variablePass.gender && variablePass.status){
        return "success";
    }
    else{
        return "fail"
    }
}

module.exports = checkConferenceDetails;