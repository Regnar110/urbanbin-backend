const nodemailer = require('nodemailer')
const {mailConfig} = require('./mailconfig.js')

const transport = { // transport czyli obiekt w którym znajdują się informacje na temat dostawcy SMTP - w tym wypadku gmail. 
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: mailConfig.USER,
        pass: mailConfig.PASS
    }
}

const transporter = nodemailer.createTransport(transport) // funkcja createTransport biblioteki nodemailer przyjmująca obiekt transport jako argument. Wynik tej funkcji zwracany jest jako zmienna constant transporter

transporter.verify((error, success) => { // sprawdzamy działanie transportera
    if (error) {
      console.log(error);
    } else {
      console.log('SMTP jest gotowy do przyjęcia wiadomości');
    }
  });

  module.exports = {
    transporter
  }