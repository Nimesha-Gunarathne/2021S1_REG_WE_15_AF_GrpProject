import React from 'react';
import '../Register.css';


function Register() {
  return (
    <div className="mmm">
    {/* Created By CodingLab - www.codinglabweb.com */}
    <meta charSet="UTF-8" />
    {/*-<title> Responsive Registration Form | CodingLab </title>-*/}
    <link rel="stylesheet" href="style.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <div className="container_re">
      <div className="title">Add Conference</div>
      <div className="content">
        <form action="#">


          <div className="user-details">
            <div className="input-box">
              <span className="details">Title</span>
              <input type="text" required />
            </div>

            <div className="input-box">
              <span className="details">Description</span>
              <textarea required />
            </div>

            <div className="input-box">
              <span className="details">Date</span>
              <input type="date" required />
            </div>

            <div className="input-box">
              <span className="details">Select keynote speaker</span>
              <select>
                <option value="">Galeee</option>
                <option value="">Sadunika</option>
                <option value="">Nimeee</option>
              </select>
            </div>
            
        
            
          </div>
          <div className="gender-details">
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />
            <input type="radio" name="gender" id="dot-3" />
            <span className="gender-title">Gender</span>
            <div className="category">
              <label htmlFor="dot-1">
                <span className="dot one" />
                <span className="gender">Male</span>
              </label>
              <label htmlFor="dot-2">
                <span className="dot two" />
                <span className="gender">Female</span>
              </label>
              <label htmlFor="dot-3">
                <span className="dot three" />
                <span className="gender">Prefer not to say</span>
              </label>
            </div>
          </div>
          <div className="button">
            <input type="submit" defaultValue="Register" />
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Register;
