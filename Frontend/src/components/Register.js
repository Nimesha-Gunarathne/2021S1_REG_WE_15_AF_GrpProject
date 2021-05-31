import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Register.css';
import signpic from "../images/signup.png";
import { Link } from 'react-router-dom';

const Register = (props) => {

    const [values, setValues] = useState({
        fullname: "",
        email: "",
        password: "",
        phone: "",
        cpassword: "",
        role: "",
        fileName: "",
        document: "",
        comment: "",
        eventX: null,
    });

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

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
        setErrors(validation(values));
        setDataIsCorrect(true);
    };

    const sendDataToBackend = (event) => {

        const payload = new FormData(event.target);
        const url = "http://localhost:3800/register";

        let config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'multipart/form-data'
            }
        }

        axios.post(url, payload, config)
            .then((res) => {
                if (res.data.code == 409) {
                    console.log(res.data.message)
                    alert("Error, Email is already used. If you are already registered please sign-in.")
                } else {
                    console.log("CORRECT");
                    setDataIsCorrect(true);
                    if (Object.keys(errors).length === 0 && dataIsCorrect) {
                        console.log("submitting form")
                        window.location.href = "/login";
                    }
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            sendDataToBackend(values.eventX);
        }
    }, [errors]);

    const validation = (values) => {

        let errors = {};

        if (!values.fullname) {
            errors.fullname = "Name is required."
        }
        if (!values.email) {
            errors.email = "Email is required."
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Email is invalid."
        }
        if (!values.phone) {
            errors.phone = "Phone number is required."
        } else if (values.phone.length != 10 || !/^[0-9]+$/.test(values.phone)) {
            errors.phone = "Phone number is invalid."
        }
        if (!values.role) {
            errors.role = "Role is required."
        }
        if (!values.password) {
            errors.password = "Password is required."
        } else if (values.password.length < 5) {
            errors.password = "Password must be more than five characters."
        }
        if (values.cpassword != values.password) {
            errors.cpassword = "Password is not matching."
        }
        return errors;

    };

    return (
        <div className="">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Sign up</h2>
                </div>

                <div className="form-container row">
                    <div className="form col">
                        <form className="form-wrapper" onSubmit={handleFormSubmit}>
                            <div className="name input-container">
                                <i className="zmdi zmdi-account"></i>
                                <input
                                    className="input"
                                    placeholder="Full Name"
                                    type="text"
                                    name="fullname"
                                    value={values.fullname}
                                    onChange={handleChange}
                                />
                                {errors.fullname && <p className="error">{errors.fullname}</p>}
                            </div>
                            <div className="email input-container">
                                <i className="zmdi zmdi-email"></i>
                                <input
                                    className="input"
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <p className="error">{errors.email}</p>}
                            </div>
                            <div className="phone input-container">
                                <i className="zmdi zmdi-phone-in-talk"></i>
                                <input
                                    className="input"
                                    placeholder="Phone"
                                    type="tel"
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                />
                                {errors.phone && <p className="error">{errors.phone}</p>}
                            </div>
                            <div className="role input-container">
                                <i className="zmdi zmdi-menu meterial-icons-name"></i>
                                <select className="input"
                                    name="role"
                                    value={values.role}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled selected hidden>Role</option>
                                    <option value="Researcher">Researcher</option>
                                    <option value="Workshop Presenter">Workshop Presenter</option>
                                    <option value="Attendee">Attendee</option>
                                </select>
                                {errors.role && <p className="error">{errors.role}</p>}
                            </div>
                            <div className="password input-container">
                                <i className="zmdi zmdi-lock"></i>
                                <input
                                    className="input"
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                />
                                {errors.password && <p className="error">{errors.password}</p>}
                            </div>
                            <div className="cpassword input-container">
                                <i className="zmdi zmdi-lock"></i>
                                <input
                                    className="input"
                                    placeholder="Confirm Password"
                                    type="password"
                                    name="cpassword"
                                    value={values.cpassword}
                                    onChange={handleChange}
                                />
                                {errors.cpassword && <p className="error">{errors.cpassword}</p>}
                            </div>
                            {(values.role == 'attendee') || (values.role) &&
                                <div className="fileName input-container">
                                    <i className="zmdi zmdi-file"></i>
                                    <input
                                        className="input"
                                        placeholder="Document Title"
                                        type="text"
                                        name="fileName"
                                        value={values.fileName}
                                        onChange={handleChange}
                                    />
                                </div>}
                            {(values.role == 'attendee') || (values.role) &&
                                <div className="FileUpload input-container">
                                    <i className="zmdi zmdi-upload"></i>
                                    <input
                                        className="input file-input"
                                        placeholder="Upload File"
                                        type="file"
                                        name="document"
                                        value={values.document}
                                        onChange={handleChange}
                                    />
                                </div>}
                            {(values.role == 'attendee') || (values.role) &&
                                <div className="comment input-container">
                                    <i className="zmdi zmdi-comment"></i>
                                    <textarea
                                        className="input"
                                        placeholder="Comment"
                                        type="text"
                                        name="comment"
                                        value={values.comment}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>}

                            <div>
                                <button className="submit" >
                                    Sign Up
                            </button>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image col">
                        <figure>
                            <img src={signpic} alt="registration pic" />
                        </figure>
                        <Link to="/login">Already registered? Login here</Link>
                    </div>
                </div>

            </div>

        </div>
    )

};

export default Register;