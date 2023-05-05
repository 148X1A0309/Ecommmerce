const express = require('express');
const Usermodel = require('../../models/userModel')

class UserController {
    constructor() { }
    loginUser(req) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!req.body.email || !req.body.password) {
                    return resolve({
                        success: false,
                        message: "Missing Mandatory Fields"
                    })
                }
                let query = {
                    'username': req.body.email,
                    'password': Buffer.from(req.body.password).toString('base64')
                }
                let response = await Usermodel.loginUser(query);
                if (response.data.length == 0) {
                    return resolve({
                        success: false,
                        message: "User Details Not Found!"
                    })
                } else {
                    return resolve({
                        success: true,
                        message: 'User Successfully Login!'
                    })
                }
            }
            catch (error) {
                reject(error);
            }
        })
    }

}

module.exports = new UserController();