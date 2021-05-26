import {useState, useEffect} from 'react';
import validation from "./validation";


const useForm = (submitForm) => {


const [values,setValues] = useState({
    fullname: "",
    email:"",
    password:"",
    phone:"",
    cpassword:"",
});



//validation 
const [errors, setErrors] = useState({});

const [dataIsCorrect, setDataIsCorrect] = useState(false);

//assign values for each field
const handleChange = (event) => {
    setValues({
        ...values,
        [event.target.name]: event.target.value,
    });
};

//prevent page reloading behavior
const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
};

useEffect(() => {
    if(Object.keys(errors).length === 0 && dataIsCorrect){
        submitForm(true);
    }
}, [errors]);
return {handleChange, handleFormSubmit, errors, values};
};

export default useForm; 