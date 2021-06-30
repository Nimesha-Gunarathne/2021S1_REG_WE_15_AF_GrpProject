//unit testing for submit

const checkNullValues = require('./checkNullValues');

var testObject = {payeeName: "payeeName", purpose: "purpose", payeeEmail: "payeeEmail", cardNumber: "cardNumber", cvv: "cvv", paymentAmount: "paymentAmount"}

test('Payment values validated successfully', () =>{
    expect(checkNullValues(testObject)).toBe("success");
})