//api class to make routes

const express = require('express');
const router = express.Router();
const Payment_controller = require('../controllers/controller.payment');

module.exports = function () {
  router.post('/insertPayment', Payment_controller.insertPayment);
  return router;
}