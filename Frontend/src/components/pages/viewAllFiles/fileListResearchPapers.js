import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import '../templateManager/template.scss';
import Navbar from '../../Navbar';


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
        axios.get(`http://localhost:8070/file/getAllFilesResearch`)
            .then(response => {
                console.log('files', response.data)
                this.setState({ filesList: response.data });
            })
    }

    viewFile(fileId) {
        try {
            console.log(fileId)
            axios.get(`http://localhost:8070/file/viewPDF/${fileId}`, {
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
            state: this.state.status
        }
        console.log('DATA TO SEND', file);
        axios.put(`http://localhost:8070/file/updatePaper/${fileID}`, file)
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
        this.state.status = "APPROVED";
        this.changeStatus(fileID);
    }

    reject(fileID) {
        this.state.status = "REJECTED";
        this.changeStatus(fileID);
    }

    render() {
        return (

            <><Navbar />
                <div className="file_view">
                    <div className="paper-container">
                        <div className='h11'>Research Papers</div>
                        <h6>(New Reasearch Papers - Pending)</h6>
                        <table className="papers-table">
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
                                        ({ _id, description, name, url, createdAt }) => (
                                            <tr key={_id} id={_id} >
                                                <td className="paper-topic">{name}</td>
                                                <td className="paper-file-date">{createdAt.substr(0, 10)}</td>
                                                <td className="paper-description">{description}</td>
                                                <td className="view-pdf">
                                                    <a
                                                        onClick={() =>
                                                            this.viewFile(_id)
                                                        }
                                                        href="#/"

                                                    >
                                                        View
                                                    </a>
                                                </td>
                                                <td className="approved-paper">
                                                    <Button className="approved-btn" variant="success" type="submit" onClick={e => this.approve(_id)} > Approve </Button><br />

                                                </td>
                                                <td className="reject-paper">
                                                    <a
                                                        href="#/"
                                                        onClick={() =>
                                                            this.reject(_id)
                                                        }
                                                    >
                                                        <Button className="reject-btn" variant="danger" type="submit" to="/" exact="true"> Reject </Button>
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
                </div>
            </>
        )
    }
}

export default FileListResearchPapers;