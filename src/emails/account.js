const sendgridAPIKey = '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'

const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'jxi9@wisc.edu',
    from: 'jxi9@wisc.edu',
    subject: 'Hello World',
    text: "Hey, that's pretty good!"
})