const mongoose = require("mongoose");
const User = mongoose.model('users');
const Paper = mongoose.model('paper');

exports.register = async (req, res) => {

    let user = {
        full_name: req.body.fullname,
        email: req.body.email,
        phone: req.body.phone,
        role: req.body.role,
        password: req.body.password
    }
    let paper = {};
    if (req.files[0]) {
        paper = {
            email: req.body.email,
            type: req.body.role == 'Researcher' ? 'Research Paper' : (req.body.role == 'Workshop Presenter' ? 'Proposal Document' : ''),
            name: req.body.fileName,
            description: req.body.comment,
            url: req.files[0].path.replace('src\\', ''),
            payment: req.body.payment
        }
    }

    let emailAlreadyUsed = true;
    await User.findOne({ email: req.body.email }, function (err, docs) {
        if (err) {
            console.log(err)
        }
        else {
            if (docs == null) {
                emailAlreadyUsed = false;
            }
        }
    });
    if (emailAlreadyUsed) {
        res.status(200).json({
            code: 409,
            message: "Email already in use"
        });
    } else {
        // save user
        await new User(user).save((err, data) => {
            if (err) {
                res.status(500).json({
                    message: "Something went wrong registering user, please try again later"
                });
            } else {
                if (req.files[0]) {
                    // save paper
                    new Paper(paper).save((err, data2) => {
                        if (err) {
                            res.status(500).json({
                                message: "User registered successfuly, but failed to save paper. Add the paper from user profiel"
                            });
                        } else {
                            res.status(200).json({
                                message: "User registered successfuly",
                                data: { "user": data, "paper": data2 }
                            });
                        }
                    });
                } else {
                    res.status(200).json({
                        message: "User registered successfuly",
                        data: { "user": data }
                    });
                }

            }
        });
    }
}

exports.signin = async (req, res) => {

    var message = "Server Error";
    var status = "failed";
    var data = null;
    await User.findOne({ email: req.body.email }, function (err, user) {
        if (err) {
            console.log(err)
        }
        else {
            if (user == null) {
                message = "Invalid email";
            } else {
                if (user.password == req.body.password) {
                    message = "Login success";
                    data = user;
                    status = "success";
                } else {
                    message = "Invalid password";
                }
            }
        }
        res.status(200).json({
            status: status,
            message: message,
            data: data
        });
    });

}

exports.ckeckStatus = async (req, res) => {
    let emailSent = req.body.email
    //console.log(req.body.email);

    await Paper.find({ email: emailSent }, { state: 1, _id: 0 })
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

exports.getUser = async (req, res) => {
    var status = "failed";
    var data = null;
    await User.findOne({ email: req.body.email }, function (err, user) {

        if (err) {
            console.log(err)
        }
        else if (user != null) {
            data = user;
            status = "success";
        }
        res.status(200).json({
            status: status,
            data: data
        });
    });

}

exports.getPaper = async (req, res) => {
    var status = "failed";
    var data = null;
    await Paper.findOne({ email: req.body.email }, function (err, paper) {

        if (err) {
            console.log(err)
        }
        else if (paper != null) {
            data = paper;
            status = "success";
        }
        res.status(200).json({
            status: status,
            data: data
        });
    });

}

exports.getProfile = async (req, res) => {
    var userStatus = "failed";
    var paperStatus = "failed";
    var userData = null;
    var paperData = null;
    await User.findOne({ email: req.params.email }, function (err, user) {

        if (err) {
            console.log(err)
        }
        else if (user != null) {
            userData = user;
            userStatus = "success";
            if (user.role != "Attendee") {
                Paper.findOne({ email: req.params.email }, function (err, paper) {

                    if (err) {
                        console.log(err)
                    }
                    else if (paper != null) {
                        paperData = paper;
                        paperStatus = "success";
                        res.status(200).json({
                            userStatus: userStatus,
                            paperStatus: paperStatus,
                            data: {
                                user: userData,
                                paper: paperData
                            }
                        });
                    }
                });
            } else {
                res.status(200).json({
                    userStatus: userStatus,
                    paperStatus: paperStatus,
                    data: {
                        user: userData,
                        paper: paperData
                    }
                });
            }
        }
    });
}

exports.updateProfile = async (req, res) => {
    var email = req.params.email

    await User.findOneAndUpdate({ email: email }, req.body)
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}