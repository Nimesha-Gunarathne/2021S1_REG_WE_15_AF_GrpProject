//unit testing for submit

const checkConferences = require('./checkConferenceDetails');

var testObject = {title: "title", description: "description", date: "date", keynoteSpeaker: "keynoteSpeaker", gender: "gender", status: "status"}

test('Conference details Variable successfully', () =>{
    expect(checkConferences(testObject)).toBe("success");
})