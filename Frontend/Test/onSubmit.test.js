//unit testing for submit button

const checkNullUserLogin = require('./checkNullUserLogin');

var testObject = {email: "kasuni@gmail.com", password: "1234sdf"}

test('Loging details checked successfully', () =>{

    expect(checkNullUserLogin(testObject)).toBe("success");

})

