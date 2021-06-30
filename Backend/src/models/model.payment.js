const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  payeeName: { type: String, required: true, trim: true },
  purpose: { type: String, required: true, trim: true },
  payeeEmail: { type: String, required: true, trim: true },
  cardNumber: { type: Number, required: true, trim: true },
  cvv: { type: Number, required: true, trim: true },
  paymentAmount: { type: Number, required: true, trim: true }
});

const Payment = mongoose.model('payments', PaymentSchema);
module.exports = Payment;