const {transporter}= require('./transporter.js')
const {mailConfig}= require('./mailconfig.js')

const sendMail = (req, res) => { //funkcja wysyłająca dane przysłane ze strony klienta.
    const name = req.body.sender;
    const email = req.body.email;
    const message = req.body.message
    const content = `name:${name} \n email: ${email} \n message: ${message}`

    const mail = {  // tworzymy mail który potem zostanie wysłany
        from: name,
        to: mailConfig.USER,
        subject: `Wiadmość klienta ze strony urbanbin.eu`,
        text: content
    }

    transporter.sendMail(mail, (err, data) => { // metoda sendtMail obiektu transporter przyjmująca 2 argumenty - mail czyli nasza wiadomość oraz funkcję, która wysyła odpowiedź w zależności od statusu zleconego zadania
        if(err) {
            res.json({status:'fail'})
        } else {
            res.json({status:'success'})
        }
    })
}

module.exports = {
    sendMail
}