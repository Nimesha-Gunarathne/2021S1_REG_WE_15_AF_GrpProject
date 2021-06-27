import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>Templates</h1>
      <h6>(Research papers/Workshop Praposals)</h6>
      <div >
        <Link to="/upload"><Button className="upload-btn" variant="danger" type="submit" to="/upload" exact={true}> Upload </Button></Link>
        <Link to="/download"><Button className="download-btn" variant="success" type="submit" to="/download"> Download </Button></Link><br/>
      </div>
    </div>
  );
};

export default Header;