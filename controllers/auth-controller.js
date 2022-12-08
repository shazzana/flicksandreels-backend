const {addUser} = require("../services/user-service");
const httpStatus = require('http-status')

const signUp = async (req, res) => {
    const {email, password} = req.body;

    // If either email or password is undefined|null, respond with bad request error
    if(!email || !password) return res.sendStatus(httpStatus.BAD_REQUEST);

    const result = await addUser(email, password);

    res.json(result);
}

module.exports = {
    signUp
}