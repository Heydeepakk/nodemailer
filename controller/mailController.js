const nodemailer = require("nodemailer")

exports.mail = (req,res)=>{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
        user: process.env.ADMIN_MAIL,
        pass: process.env.ADMIN_PASS,
        },
    });
        

    async function main() {
        const info = await transporter.sendMail({
            from: '"Fred Foo 👻" <deepak@evramedia.com>',
            to: req.body.to, 
            subject: "Hello ✔",
            text: "Hello world?",
            html: "<b>Hello world?</b>",
        });
        
        console.log("Message sent: %s", info.messageId);
    }
        
    main().catch(console.error);
    res.status(200).json({
        message:"sent"
    })
}
       
