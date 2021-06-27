import React, { useState, useEffect } from 'react';
import download from 'downloadjs';
import axios from 'axios';
import Header from './header';

const FilesList = () => {
  const [filesList, setFilesList] = useState([]);
  const [errMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3050/getAllFiles`);
        setErrorMsg('');
        setFilesList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };

    getFilesList();
  }, []);

  const downloadFile = async (id, path, mimetype) => {
    try {
      const result = await axios.get(`http://localhost:3050/download/${id}`, {
        responseType: 'blob'
      });
      const split = path.split('/');
      const filename = split[split.length - 1];
      setErrorMsg('');
      return download(result.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg('Error while downloading file. Try again later');
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
            <th>Template ID</th>
            <th>Template Name</th>
            <th>Published Date</th>

            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {filesList.length > 0 ? (
            filesList.map(
              ({ _id, templateID, name, f_url, f_type, createdAt }) => (
                <tr key={_id}>
                  <td className="file-templateID">{templateID}</td>
                  <td className="file-name">{name}</td>
                  <td className="file-date">{createdAt.substr(0,10)}</td>
                  <td>
                    <a
                      href="#/"
                      onClick={() =>
                        downloadFile(_id, f_url, f_type)
                      }
                    >
                      Download
                    </a>
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={3} style={{ fontWeight: '300' }}>
                No files found. Please add some.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FilesList;