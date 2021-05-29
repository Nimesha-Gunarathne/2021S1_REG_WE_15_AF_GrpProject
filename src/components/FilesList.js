import React, { useState, useEffect, Component } from 'react';
import download from 'downloadjs';
import axios from 'axios';
import { API_URL } from '../utils/constants';
import Header from './Header';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import AllPages from './all-pages.js';

const FilesList = () => {
  const [filesList, setFilesList] = useState([]);
  const [errMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3030/getAllFiles`);
        setErrorMsg('');
        setFilesList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };

    getFilesList();
  }, []);

  const approve = async (id) => {

    document.getElementById(id).style.display = "none";
  };

  const reject = async (id) => {

    document.getElementById(id).style.display = "none"; 

  };
  const viewFile = async (id) => { 
    try {
      const data = await axios.get(`http://localhost:3030/viewPDF/${id}`, {
        responseType: 'arraybuffer'
      });

      var file = new Blob([data.data], {type: 'application/pdf'});
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL);
      
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg('Error while kjovrjgojer downloading file. Try again later');
      }
    }
  };

  return (
    <div className="files-container">
      <Header />
      {errMsg && <p className="errorMsg">{errMsg}</p>}
      <table className="files-table">
        <thead>
          <tr>
            
            <th>Topic</th>
            <th>Published Date</th>
            <th>Author</th>
            <th>View</th>
            <th>Approve</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {filesList.length > 0 ? (
            filesList.map(
              ({ _id, templateID, name, f_url, f_type, createdAt}) => (
                <tr key={_id} id = {_id} >
                  <td className="topic">{name}</td>
                  <td className="file-date">{createdAt.substr(0,10)}</td>
                  <td className="author">{templateID}</td>
                  <td>
                    <a
                      onClick={() =>
                        viewFile(_id)
                      }
                      href="#/"
                      
                    >
                      View
                    </a>
                  </td>
                  <td>
                    <a
                    onClick={() =>
                      approve(_id)
                    }
                      href="#/"
                    >
                      <Button className="download-btn" variant="success" type="submit"> Approve </Button><br/>
                    </a>
                  </td>
                  <td>
                    <a
                      href="#/"
                      onClick={() =>
                        reject(_id)
                      }
                    >
                    <Button className="upload-btn" variant="danger" type="submit" to="/" exact="true"> Reject </Button>
                    </a>
                  </td>

                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={3} style={{ fontWeight: '300' }}>
                No new files found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    
  );
};

export default FilesList;