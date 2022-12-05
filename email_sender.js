let postman = require('nodemailer')

let mailer = postman.createTransport({
    service: 'gmail',
    auth:{
        user: 'senderEmail@gmail.com',
        pass: ''
    }
})


let sendingData = {
    from: 'senderEmail@gmail.com',
    to: 'receiverEmail@gmail.com',
    subject: 'test email',
    text: 'this is a test email sent using node js'
}


mailer.sendMail(sendingData,function(err,data){
    if(err){
        console.log(err)
    }
    else{
        console.log('the email is sent'+ data.response)
    }
})