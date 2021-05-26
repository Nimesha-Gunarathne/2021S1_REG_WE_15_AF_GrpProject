import React from "react";
import useForm from "./useForm";
import signpic from "../images/signup.png";
import {NavLink} from "react-router-dom";

const SigninForm = ({ submitForm }) => {
    const { handleChange, handleFormSubmit, values, errors } = useForm(submitForm);

    return (
        <div className="">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Sign up</h2>
                </div>

                <div className="form-container row">
                    <div className="form col">
                        <form className="form-wrapper">
                            <div className="name input-container">
                                {/* <label className="label">Full Name</label> */}
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
                                {/* <label className="label">Email</label> */}
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
                                {/* <label className="label">Phone</label> */}
                                <i className="zmdi zmdi-phone-in-talk"></i>
                                <input
                                    className="input"
                                    placeholder="Phone"
                                    type="phone"
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                />
                                {errors.phone && <p className="error">{errors.phone}</p>}
                            </div>
                            <div className = "role input-container">
                                <i className="zmdi zmdi-menu meterial-icons-name"></i>
                                <select className="input"
                                    value={values.role}
                                >
                                    <option value="" disabled selected hidden>Role</option>
                                    <option value="Researcher">Reasearcher</option>
                                    <option value="WorkshopPresentee">Workshop Presenter</option>
                                    <option value="attendee">Attendee</option>
                                </select>
                                {errors.role && <p className="error">{errors.role}</p>}
                            </div>
                            <div className="password input-container">
                                {/* <label className="label">Password</label> */}
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
                                {/* <label className="label">Confirm Password</label> */}
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
                            <div>
                                <button className="submit" onClick={handleFormSubmit}>
                                    Sign Up
                            </button>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image col">
                        <figure>
                            <img src={signpic} alt="registation pic" />
                        </figure>
                        {/* <NavLink to="/login" className="Signup-image-link">I am already register</NavLink> */}
                    </div>
                </div>

            </div>

        </div>
    )
   
}
export default SigninForm;
