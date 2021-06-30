const Payment = require('../models/model.payment');
const Paper = require('../models/Paper.model');

//insert products to the db
const insertPayment = async (req, res) => {
    if (req.body) {
        const payment = new Payment(req.body);
        payment.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const changePaymentStatus = async (req, res) => {

    emailIn = req.body.email;
    paymentStatus = "DONE";

    await Paper.findOneAndUpdate({ email: emailIn }, { $set: { payment: paymentStatus } })
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });

}

module.exports = {
    insertPayment,
    changePaymentStatus
};