import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '/Login.css';
import signpic from "../images/signup.png";
import { Link } from 'react-router-dom';


const Login = (props) => {

    // const [profile, setProfile] = useState('');

    useEffect(() => {
        window.sessionStorage.clear(); // clear the logged_user
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const payload = Object.fromEntries(data.entries());
        console.log(payload);
        sendDataToBackend(payload);
    };

    const sendDataToBackend = (payload) => {

        const url = "http://localhost:3810/signin";

        let config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        }

        axios.post(url, payload, config)
            .then((res) => {
                if (res.data.status == "success") {
                    console.log("Logged-in");
                    // setProfile(res.data.data.email);
                    window.sessionStorage.setItem("logged_user", res.data.data.email); //store loguser email in session storage
                    document.getElementById('profileLink').click();
                } else {
                    console.error("invalid login");
                    alert(res.data.message)
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (

        <div className="">
            <div className="app-wrapper_IT19177106">

                <div className="form-container_IT19177106 row">
                    <div className="form_IT19177106 login-form_IT19177106 col">
                        <div>
                            <h2 className="title_IT19177106">Sign in</h2>
                        </div>
                        <form className="form-wrapper" onSubmit={submitHandler}>
                            <div className="email_IT19177106 input-container_IT19177106">
                                <i className="zmdi zmdi-email"></i>
                                <input
                                    className="input_IT19177106"
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                />
                            </div>
                            <div className="password_IT19177106 input-container_IT19177106">
                                <i className="zmdi zmdi-lock"></i>
                                <input
                                    className="input_IT19177106"
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                />
                            </div>
                            <div>
                                <button className="submit_IT19177106" >
                                    Sign in
                            </button>
                                <Link hidden="hidden" id="profileLink" to="/profile">
                                    Profile
                                </Link>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image col">
                        <figure>
                            <img className = "img_IT19177106" src={signpic} alt="sign-in pic" />
                        </figure>
                        <Link to="/register">Don't have an account? Register here</Link>
                    </div>
                </div>

            </div>

        </div>

    )

};

export default Login;
