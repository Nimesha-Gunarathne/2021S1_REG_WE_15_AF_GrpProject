// this function checks the login values are null or not

// if it is null, it returns fail status

function checkNullLogingDetails(variableWhichPass){
    if(variableWhichPass.email && variableWhichPass.password ){
        return "success";
    }
    else{
       return "fail"
    }
}

module.exports = checkNullLogingDetails;