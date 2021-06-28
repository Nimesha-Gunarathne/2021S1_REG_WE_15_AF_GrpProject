import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import CheckNullValuesTest from '../../../checkNullValues';

const purposes = [
    { value: 'attendace', label: 'Attendance' },
    { value: 'research', label: 'Research Paper Publication' },
    { value: 'other', label: 'Other' }
]

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            payeeName: '',
            purpose: '',
            payeeEmail: '',
            cardNumber: '',
            cvv: '',
            paymentAmount: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onPurposeSelect = this.onPurposeSelect.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onPurposeSelect(e) {
        this.state.purpose = e.label;
    }

    onSubmit(e) {
        e.preventDefault();
        let payment = {
            payeeName: this.state.payeeName,
            purpose: this.state.purpose,
            payeeEmail: this.state.payeeEmail,
            cardNumber: this.state.cardNumber,
            cvv: this.state.cvv,
            paymentAmount: this.state.paymentAmount
        }
        console.log('DATA TO SEND : payment', payment);
        var test = CheckNullValuesTest(payment);
        if (test == "success") {
            axios.post('http://localhost:3050/payment/insertPayment', payment)
                .then(response => {
                    alert('Payment Data successfully inserted')
                })
                .catch(error => {
                    console.log(error.message);
                    alert(error.message)
                })
        }else{
            console.log("Invalid data set to be passed via axios");
        }
    }

    render() {
        return (
            <div className="IT19111384_Payment_container">
                <div className="IT19111384_Payment_app-wrapper">
                    <div>
                        <h1 className="IT19111384_Payment_title">Payment Gateway</h1>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="payeeName" className="form-label">Payee Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="payeeName"
                                name="payeeName"
                                value={this.state.payeeName}
                                onChange={this.onChange}
                            />
                        </div>
                        <label htmlFor="purpose" className="form-label">Purpose</label>
                        <Select
                            options={purposes}
                            className="basic-select"
                            onChange={this.onPurposeSelect}
                        /><br />
                        <div className="mb-3">
                            <label htmlFor="payeeEmail" className="form-label">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                id="payeeEmail"
                                name="payeeEmail"
                                value={this.state.payeeEmail}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cardNumber" className="form-label">Card Number</label>
                            <input
                                type="number"
                                className="form-control"
                                id="cardNumber"
                                name="cardNumber"
                                value={this.state.cardNumber}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cvv" className="form-label">CVV</label>
                            <input
                                type="number"
                                className="form-control"
                                id="cvv"
                                name="cvv"
                                value={this.state.cvv}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="paymentAmount" className="form-label">Payment Amount</label>
                            <input
                                type="number"
                                className="form-control"
                                id="paymentAmount"
                                name="paymentAmount"
                                value={this.state.paymentAmount}
                                onChange={this.onChange}
                            />
                        </div>
                        <button className="IT19111384_Payment_confirmPayment" type="submit">Confirm Payment</button>
                    </form>
                </div>
            </div>
        )
    }

}

export default Payment;