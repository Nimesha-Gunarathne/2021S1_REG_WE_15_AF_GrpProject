import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '/Profile.css';

const Profile = (props) => {

    const [profile, setProfile] = useState([]);

    useEffect(() => {
        const getProfile = async (email) => {
            try {
                const { data } = await axios.get(`http://localhost:3810/profile/${email}`);
                setProfile(data);
                console.log(profile.data.user.email);
            } catch (error) {
            }
        };
        var email = window.sessionStorage.getItem("logged_user"); //store loguser email in session storage

        if (email && email.length>0) {
            getProfile(email);
        }

    }, []);

    const makePayment = (e) => {
        e.preventDefault();
    }



    return (
        <div className="">
            <div className="app-wrapper_IT19177106">
                <Link to="/login">Logout</Link>

                <div>
                    <h2 className="title_IT19177106">Profile</h2>
                </div>

                <div className="form-container_IT19177106 row">
                    <div className="form_IT19177106 col">
                        <form className="form-wrapper" >
                            <div className="name_IT19177106 input-container_IT19177106">
                                <i className="zmdi zmdi-account"></i>
                                <input
                                    className="input_IT19177106"
                                    disabled="disabled"
                                    placeholder="Full Name"
                                    type="text"
                                    name="fullname"
                                    value={profile.data && profile.data.user ? profile.data.user.full_name : ''}
                                />
                            </div>
                            <div className="email_IT19177106 input-container_IT19177106">
                                <i className="zmdi zmdi-email"></i>
                                <input
                                    className="input_IT19177106"
                                    disabled="disabled"
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    value={profile.data && profile.data.user ? profile.data.user.email : ''}
                                />
                            </div>
                            <div className="phone_IT19177106 input-container_IT19177106">
                                <i className="zmdi zmdi-phone-in-talk"></i>
                                <input
                                    className="input_IT19177106"
                                    disabled="disabled"
                                    placeholder="Phone"
                                    type="tel"
                                    name="phone"
                                    value={profile.data && profile.data.user ? profile.data.user.phone : ''}
                                />
                            </div>
                            <div className="role_IT19177106 input-container_IT19177106">
                                <i className="zmdi zmdi-menu meterial-icons-name"></i>
                                <select className="input_IT19177106"
                                    disabled="disabled"
                                    name="role"
                                    value={profile.data && profile.data.user ? profile.data.user.role : ''}
                                >
                                    <option value="" disabled selected hidden>Role</option>
                                    <option value="Researcher">Researcher</option>
                                    <option value="Workshop Presenter">Workshop Presenter</option>
                                    <option value="Attendee">Attendee</option>
                                </select>
                            </div>
                            {profile.data && profile.data.paper &&
                                <div className="fileName_IT19177106 input-container_IT19177106">
                                    <i className="zmdi zmdi-file"></i>
                                    <a className="fileLink_IT19177106" href={'http://localhost:3810' + profile.data.paper.url.replace('uploads','')} target="_blank" title_IT19177106="Download" download="download">
                                        {profile.data ? profile.data.paper.name : ''}
                                    </a>
                                </div>}
                            {profile.data && profile.data.paper &&
                                <div className="status_IT19177106 input-container_IT19177106">
                                    <i className="zmdi zmdi-time"></i>
                                    <input
                                        className="input_IT19177106"
                                        disabled="disabled"
                                        placeholder="Status"
                                        type="text"
                                        name="status"
                                        value={profile.data ? profile.data.paper.state : ''}
                                    />
                                </div>}
                            {profile.data && profile.data.paper &&
                                <div className="comment_IT19177106 input-container_IT19177106">
                                    <i className="zmdi zmdi-comment"></i>
                                    <textarea
                                        className="input_IT19177106"
                                        disabled="disabled"
                                        placeholder="Comment"
                                        type="text"
                                        name="comment"
                                        value={profile.data ? profile.data.paper.description : ''}
                                    ></textarea>
                                </div>}
                            <div>
                                <Link to="/update-profile">
                                    <button className="submit_IT19177106">Edit</button> 
                                </Link>
                                {profile.data && profile.data.user && profile.data.user.role && profile.data.user.role == 'Researcher' &&
                                <button className="submit_IT19177106" onClick={makePayment} >
                                    Make Payment
                                </button>}
                            </div>
                        </form>
                    </div>

                </div>

            </div>

        </div>
    )

};

export default Profile;
