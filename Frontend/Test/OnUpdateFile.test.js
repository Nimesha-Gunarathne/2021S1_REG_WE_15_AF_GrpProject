//unit testing for submit

const checkNullStatus = require('./CheckNullFileStatus');
var testObject = {state: "SampleStatus"}

test('Update file status Validation Pass', () =>{
    expect(checkNullStatus(testObject)).toBe("success");
})