import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '/Register.css';
import signpic from "../images/signup.png";
import { Link } from 'react-router-dom';

const UpdateProfile = (props) => {

    const [values, setValues] = useState({
        full_name: "",
        email: "",
        //password: "",
        phone: "",
        //cpassword: "",
        //role: "",
        //fileName: "",
        //document: "",
        //comment: "",
        eventX: null,
    });

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const [profile, setProfile] = useState([]);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = (event) => {
        setValues({
            ...values,
            eventX: event,
        });
        event.preventDefault();
        // setErrors(validation(values));
        // setDataIsCorrect(true);
        sendDataToBackend(event);
    };

    const sendDataToBackend = (event) => {

        var email = window.sessionStorage.getItem("logged_user"); //store loguser email in session storage
        
        const payload = Object.fromEntries(new FormData(event.target).entries());

        const url = "http://localhost:3810/update-profile/" + email;

        let config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        }

        axios.put(url, payload, config)
            .then((res) => {
                if (res.status == 200) {
                    console.log(res.data)
                    alert("Profile updated successfully")
                } else {
                    console.log(res.data.error);
                    alert("Failed to update profile")
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };

    // useEffect(() => {
    //     if (Object.keys(errors).length === 0 && dataIsCorrect) {
    //         sendDataToBackend(values.eventX);
    //     }
    // }, [errors]);

    useEffect(() => {
        const getProfile = async (email) => {
            try {
                // const { data } = await axios.get(`http://localhost:3810/profile/${email}`);
                axios.get(`http://localhost:3810/profile/${email}`)
                    .then((res) => {
                        console.log("user ");
                        console.log(res.data.data.user);
                        setValues({
                            ...values,
                            full_name: res.data.data.user.full_name,
                            email: res.data.data.user.email,
                            phone: res.data.data.user.phone
                        });
                    })
                    .catch((e) => {
                        console.error(e);
                    })
                // setProfile(data);
                // console.log(profile.data.user.email);
            } catch (error) {
                console.error(error);
            }
        };

        var email = window.sessionStorage.getItem("logged_user"); //store loguser email in session storage

        if (email && email.length>0) {
            getProfile(email);
        }

    }, []);


    const validation = (values) => {

        let errors = {};

        if (!values.full_name) {
            errors.full_name = "Name is required."
        }
        // if (!values.email) {
        //     errors.email = "Email is required."
        // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        //     errors.email = "Email is invalid."
        // }
        if (!values.phone) {
            errors.phone = "Phone number is required."
        } else if (values.phone.length != 10 || !/^[0-9]+$/.test(values.phone)) {
            errors.phone = "Phone number is invalid."
        }
        if (!values.role) {
            errors.role = "Role is required."
        }
        // if (!values.password) {
        //     errors.password = "Password is required."
        // } else if (values.password.length < 5) {
        //     errors.password = "Password must be more than five characters."
        // }
        // if (values.cpassword != values.password) {
        //     errors.cpassword = "Password is not matching."
        // }
        return errors;

    };

    return (
        <div className="">
            <div className="app-wrapper_IT19177106">
                <Link to="/login">Logout</Link>

                <div>
                    <h2 className="title_IT19177106">Update Profile</h2>
                </div>

                <div className="form-container_IT19177106 row">
                    <div className="form_IT19177106 col">
                        <form className="form-wrapper" onSubmit={handleFormSubmit}>
                            <div className="name_IT19177106 input-container_IT19177106">
                                <i className="zmdi zmdi-account"></i>
                                <input
                                    id="full_name"
                                    className="input_IT19177106"
                                    placeholder="Full Name"
                                    type="text"
                                    name="full_name"
                                    value={values.full_name}
                                    onChange={handleChange}
                                />
                                {errors.full_name && <p className="error_IT19177106">{errors.full_name}</p>}
                            </div>
                            <div className="email_IT19177106 input-container_IT19177106">
                                <i className="zmdi zmdi-email"></i>
                                <input
                                    id="email"
                                    className="input_IT19177106"
                                    placeholder="Email"
                                    disabled="disabled"
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <p className="error_IT19177106">{errors.email}</p>}
                            </div>
                            <div className="phone_IT19177106 input-container_IT19177106">
                                <i className="zmdi zmdi-phone-in-talk"></i>
                                <input
                                    id="phone"
                                    className="input_IT19177106"
                                    placeholder="Phone"
                                    type="tel"
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                />
                                {errors.phone && <p className="error_IT19177106">{errors.phone}</p>}
                            </div>

                            <div>
                                <button className="submit_IT19177106" >
                                    Update
                                </button>
                                <Link to="/profile">
                                    <button className="submit_IT19177106">Cancel</button> 
                                </Link>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image col">
                        <figure>
                            <img className = "img_IT19177106" src={signpic} alt="registration pic" />
                        </figure>
                        
                    </div>
                </div>

            </div>

        </div>
    )

};

export default UpdateProfile;