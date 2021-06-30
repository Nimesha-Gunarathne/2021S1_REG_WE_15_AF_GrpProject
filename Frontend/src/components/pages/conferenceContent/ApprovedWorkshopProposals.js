import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import '../templateManager/template.scss';
import Navbar from '../../Navbar';

class AllWorkshopProposals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filesList: []
        }
        this.viewFile = this.viewFile.bind(this);
    }

    componentDidMount() {
        console.log(this.state.filesList.length)
        axios.get(`http://localhost:8070/file/getApprovedWorkshops`)
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
                setErrorMsg('Error while loading file. Try again later');
            }
        }
    }


    render() {
        return (
            <><Navbar />
                <div className="paperBody">
                    <div className="paper-container" id="approvedPapers">
                        <div className='h11'>Workshop Proposals</div> <br></br>

                        {this.state.filesList.length > 0 && this.state.filesList.map((item, index) => (
                            <div key={index} className="card mb-3" id="cardView">
                                <div className="p-3">
                                    <h4>Topic: {item.name}</h4>
                                    <h5>Description: {item.description}</h5>
                                    <Button className="view-btn" onClick={() => this.viewFile(item._id)} > View Paper </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>

        )
    }

}

export default AllWorkshopProposals;