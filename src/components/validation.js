import React from "react";

const validation = (values) => {

    let errors={};

    if(!values.fullname){
        errors.fullname = "Name is required."
    }
    if(!values.email){
        errors.email= "Email is required."
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid."
    }
    if(!values.phone){
        errors.phone= "Phone number is required."
    }else if(values.phone.length!=10){
        errors.phone="Phone number is invalid."
    }
    // if(!values.role){
    //     errors.role = "Role is required."
    // }
    if(!values.password){
        errors.password = "Password is required."
    }else if(values.password.length<5){
        errors.password="Password must be more than five characters."
    }
    if(values.cpassword!=values.password){
        errors.cpassword="Password is not matching."
    }
  return errors;

};
export default validation;
