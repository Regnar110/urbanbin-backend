require('dotenv').config();

const mailConfig = {
    USER: process.env.MAIL_USER, 
    PASS: process.env.MAIL_PASS
}

module.exports = {
    mailConfig
}