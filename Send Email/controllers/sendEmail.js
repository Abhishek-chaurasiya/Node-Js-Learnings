const nodemailer =require('nodemailer')

const sendEmail = async (req,res)=>{
    let testAccount = await nodemailer.createTestAccount()
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'arnoldo5@ethereal.email',
            pass: 'hq96Ph5g1vYJM8NFWb'
        }
     });
     let info = await transporter.sendMail({
        from:'"johnwick" <johnwick@gmail.com',
        to:'boyka@example.com',
        subject:'Greeting',
        html:'<h2>sending email with nodejs</h2>'
     })
    res.send(info)
}

module.exports = sendEmail