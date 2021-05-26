import React from 'react';

const PaymentForm = () => {

    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Payment Gateway</h2>
                </div>

                <form className="form-wrapper">
                    <div className="name">
                        <label className="label">Payee Name</label>
                        <input
                            className="input"
                            type="text"
                            name="fullname"
                        />
                    </div>

                    <div className="purpose">
                        <label className="label">Purpose of payment</label>
                        <select className="select">
                            <option value="ResearchPaper">Research Paper Publication</option>
                            <option value="ConferenceAttendance">Conference Attendance</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="purposeID">
                        <label className="label">Research Paper ID</label>
                        <input
                            className="input"
                            type="text"
                            name="purposeID"
                        />
                    </div>

                    <div className="email">
                        <label className="label">Email</label>
                        <input
                            className="input"
                            type="email"
                            name="email"
                        />
                    </div>

                    <div>
                        <label className="paymentMethod">Payment Method</label>
                        <ul>
                            <div className="radioGrp">
                                <input type="radio" value="masterCard" name="cardPay" checked="true"/> Master Card
                                <br /><input type="radio" value="visaCard" name="cardPay" /> Visa Card
                            </div>
                        </ul>
                    </div>
                </form>

            </div>

            <div className="app-wrapper-two">
                <form className="form-wrapper">
                    <div className="cardHolder">
                        <label className="label">Card Holder's Name</label>
                        <input
                            className="input"
                            type="text"
                            name="cardHoldername"
                        />
                    </div>

                    <div className="cardNumber">
                        <label className="label">Card number</label>
                        <input
                            className="input"
                            type="text"
                            name="cardNumber"
                        />
                    </div>

                    <div className="expDate">
                        <label className="label">Exp Date</label>
                        <input
                            className="input"
                            type="text"
                            name="expDate"
                        />
                    </div>

                    <div className="cvc">
                        <label className="label">CVC</label>
                        <input
                            className="input"
                            type="text"
                            name="cvc"
                        />
                    </div>

                    <div className="amount">
                        <label className="label">Amount</label>
                        <input
                            className="input"
                            type="number"
                            name="amount"
                        />
                    </div>

                    <br />
                    <div>
                        <button className="confirmPayment">
                            Confirm Payment
                        </button>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default PaymentForm;