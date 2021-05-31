import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = (props) => {

    const [profile, setProfile] = useState([]);

    useEffect(() => {
        const getProfile = async (email) => {
            try {
                const { data } = await axios.get(`http://localhost:3800/profile/${email}`);
                setProfile(data);
                console.log(profile.data.user.email);
            } catch (error) {
            }
        };

        if (props.location.query && props.location.query.email) {
            getProfile(props.location.query.email);
        }
    }, []);

    const makePayment = (e) => {
        e.preventDefault();
    }

    return (
        <div className="">
            <div className="app-wrapper">
                <Link to="/login">Logout</Link>

                <div>
                    <h2 className="title">Profile</h2>
                </div>

                <div className="form-container row">
                    <div className="form col">
                        <form className="form-wrapper" >
                            <div className="name input-container">
                                <i className="zmdi zmdi-account"></i>
                                <input
                                    className="input"
                                    disabled="diabled"
                                    placeholder="Full Name"
                                    type="text"
                                    name="fullname"
                                    value={profile.data && profile.data.user ? profile.data.user.full_name : ''}
                                />
                            </div>
                            <div className="email input-container">
                                <i className="zmdi zmdi-email"></i>
                                <input
                                    className="input"
                                    disabled="diabled"
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    value={profile.data && profile.data.user ? profile.data.user.email : ''}
                                />
                            </div>
                            <div className="phone input-container">
                                <i className="zmdi zmdi-phone-in-talk"></i>
                                <input
                                    className="input"
                                    disabled="diabled"
                                    placeholder="Phone"
                                    type="tel"
                                    name="phone"
                                    value={profile.data && profile.data.user ? profile.data.user.phone : ''}
                                />
                            </div>
                            <div className="role input-container">
                                <i className="zmdi zmdi-menu meterial-icons-name"></i>
                                <select className="input"
                                    disabled="diabled"
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
                                <div className="fileName input-container">
                                    <i className="zmdi zmdi-file"></i>
                                    <a className="fileLink" href={'http://localhost:3800' + profile.data.paper.url} target="_blank" title="Download" download="download">
                                        {profile.data ? profile.data.paper.name : ''}
                                    </a>
                                </div>}
                            {profile.data && profile.data.paper &&
                                <div className="status input-container">
                                    <i className="zmdi zmdi-time"></i>
                                    <input
                                        className="input"
                                        disabled="diabled"
                                        placeholder="Status"
                                        type="text"
                                        name="status"
                                        value={profile.data ? profile.data.paper.state : ''}
                                    />
                                </div>}
                            {profile.data && profile.data.paper &&
                                <div className="comment input-container">
                                    <i className="zmdi zmdi-comment"></i>
                                    <textarea
                                        className="input"
                                        disabled="diabled"
                                        placeholder="Comment"
                                        type="text"
                                        name="comment"
                                        value={profile.data ? profile.data.paper.description : ''}
                                    ></textarea>
                                </div>}

                            <div>
                                {/* <button className="submit" >
                                Update
                            </button> */}
                                <button className="submit" onClick={makePayment} >
                                    Make Payment
                            </button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>

        </div>
    )

};

export default Profile;