// this function checks the values are null or not
// if null, it returns fail

function checkNullValues(variablePass){
    if(variablePass.payeeName && variablePass.purpose && variablePass.payeeEmail && variablePass.cardNumber && variablePass.cvv && variablePass.paymentAmount){
        return "success";
    }
    else{
        return "fail"
    }
}

module.exports = checkNullValues;