import React, { useState, useRef } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Header from "./header";
import Dropzone from 'react-dropzone';
import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";

const FileUpload = (props) => {
  const [document, setFile] = useState(null);
  const [state, setState] = useState({
    templateID: '',
    name: ''
  });
  const [errMsg, setErrorMsg] = useState('');
  const refference = useRef();

  const inputChangeEvent = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  //this method will be called when file has droped to the drop zone
  const fileUpload = (docs) => {
    const [uploadedFile] = docs;
    setFile(uploadedFile);

    console.log("docs in app.js" , docs);
    console.log("uploadedFile in app.js" , uploadedFile);
    const fileReader = new FileReader();
    fileReader.onload = () => {
    };
    fileReader.readAsDataURL(uploadedFile);
    console.log(fileReader)
  };

  const onSubmitEvent = async (event) => {
    event.preventDefault();

    try {
      const { templateID, name } = state;
      if (templateID.trim() !== '' && name.trim() !== '') {
        if (document) {
          const formData = new FormData();
          formData.append('file', document);
          formData.append('templateID', templateID);
          formData.append('name', name);
          console.log("document in fileUpload.js" , document);
          //console.log(formData);

          setErrorMsg('');
          //methodcall
          console.log("formData in app.js ", formData);
          await axios.post(`http://localhost:3050/upload`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          //send to the download page
          props.history.push('/download');
        } else {
          setErrorMsg('You have not selected a file. Please select a file to proceed');
        }
      } else {
        setErrorMsg('Plase make sure to insert the templateID and the name');
      }
    } catch (e) {
      //error.response && setErrorMsg(error.response.data);
      console.log(e)
    }
  };

  return (
    <div className="template-form">
      <Header />
      <React.Fragment>
        <Form className="search-form" onSubmit={onSubmitEvent}>
          {errMsg && <p className="errorMsg">{errMsg}</p>}
          <Row>
            <Col>
              <Form.Group controlId="templateID">
                <Form.Control type="text" name="templateID" value={state.templateID || ''} placeholder="Template ID" onChange={inputChangeEvent} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="name">
                <Form.Control type="text" name="name" value={state.name || ''} placeholder="Template Name" onChange={inputChangeEvent} />
              </Form.Group>
            </Col>
          </Row>

          {/* //Document drop zone */}
          <div className="upload-area">
            <Dropzone onDrop={fileUpload}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps({ className: 'file-drop-area' })} ref={refference}>
                  <input {...getInputProps()} />
                  <p>Click here or drag and drop the template here</p>
                  {document && (
                    <div>
                      <h6>Selected document :</h6> {document.name}
                    </div>
                  )}
                </div>
              )}
            </Dropzone>
          </div>
          <Button className="publish-btn" variant="primary" type="submit"> Publish the Template</Button>
        </Form>
      </React.Fragment>
    </div>
  );
};

export default FileUpload;