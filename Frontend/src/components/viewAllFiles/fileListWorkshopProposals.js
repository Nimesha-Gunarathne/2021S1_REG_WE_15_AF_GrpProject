import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class FileListResearchPapers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filesList: [],
            status: ""
        }
        this.viewFile = this.viewFile.bind(this);
        this.approve = this.approve.bind(this);
        this.reject = this.reject.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
    }

    componentDidMount() {
        console.log(this.state.filesList.length)
        axios.get(`http://localhost:8088/file/getAllFilesWorkshop`)
            .then(response => {
                console.log('files', response.data)
                this.setState({ filesList: response.data });
            })
    }

    viewFile(fileId) {
        try {
            console.log(fileId)
            axios.get(`http://localhost:8088/file/viewPDF/${fileId}`, {
                responseType: 'arraybuffer'
            })
                .then(response => {
                    console.log(response)
                    var file = new Blob([response.data], { type: 'application/pdf' });
                    var fileURL = URL.createObjectURL(file);
                    window.open(fileURL);
                })
                .catch(error => {
                    console.log(error.message);
                    alert(error.message)
                })

        } catch (error) {
            if (error.response && error.response.status === 400) {
                setErrorMsg('Error while downloading file. Try again later');
            }
        }
    }

    changeStatus(fileID) {

        let file = {
            status: this.state.status
        }
        console.log('DATA TO SEND', file);
        axios.put(`http://localhost:8088/file/updatePaper/${fileID}`, file)
            .then(response => {
                alert('Paper successfully updated')
                document.getElementById(fileID).style.display = "none";
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }

    approve(fileID) {
        this.state.status = "approved";
        this.changeStatus(fileID);
    }

    reject(fileID) {
        this.state.status = "rejected";
        this.changeStatus(fileID);
    }

    render() {
        return (
            <div className="files-container">
                <h1>Workshop Proposals</h1>
                <h6>(New Workshop Proposals - Pending)</h6>

                <table className="files-table">
                    <thead>
                        <tr>

                            <th>Topic</th>
                            <th>Published Date</th>
                            <th>Description</th>
                            <th>View</th>
                            <th>Approve</th>
                            <th>Reject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.filesList.length > 0 ? (
                            this.state.filesList.map(
                                ({ _id, templateID, name, f_url, f_type, createdAt }) => (
                                    <tr key={_id} id={_id} >
                                        <td className="topic">{name}</td>
                                        <td className="file-date">{createdAt.substr(0, 10)}</td>
                                        <td className="author">{templateID}</td>
                                        <td>
                                            <a
                                                onClick={() =>
                                                    this.viewFile(_id)
                                                }
                                                href="#/"

                                            >
                                                View
                                            </a>
                                        </td>
                                        <td>
                                            <Button className="download-btn" variant="success" type="submit" onClick={e => this.approve(_id)} > Approve </Button><br />

                                        </td>
                                        <td>
                                            <a
                                                href="#/"
                                                onClick={() =>
                                                    this.reject(_id)
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
        )
    }
}

export default FileListResearchPapers;