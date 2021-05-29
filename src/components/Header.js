import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <br></br>
      <h1>Research Papers</h1>
      
      <h6>(Reasearch papers/Workshop Praposals)</h6>
      <br></br>
      <div >
        {/* <Link to="/"><Button className="upload-btn" variant="danger" type="submit" to="/" exact="true"> Upload </Button></Link> */}
        {/* <Link to="/"><Button className="download-btn" variant="success" type="submit" to="/" exact="true"> Download </Button></Link><br/> */}
      </div>

    </div>
  );
};

export default Header;