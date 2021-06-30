// this function checks the values are null or not
// if null, it returns fail

function checkNullStatus(variablePass){
    if(variablePass.state){
        return "success";
    }
    else{
        return "fail"
    }
}

module.exports = checkNullStatus;