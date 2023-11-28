const nodemailer = require("nodemailer")

exports.mail = async (req,res)=>{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
        user: process.env.ADMIN_MAIL,
        pass: process.env.ADMIN_PASS,
        },
    });
        
    try {
        const info = await transporter.sendMail({
            from: '"Fred Foo 👻"',
            to: req.body.to,
            subject: req.body.subject,
            text: req.body.content,
            // html: "<b>Hello world?</b>",
        });

        console.log("Message sent: %s", info.messageId);
        res.status(200).json({
            message: "sent",
            messageId: info.messageId,
        });
    } catch (error) {
        console.error("Error occurred while sending email:", error);
        res.status(500).json({
            message: "Failed to send email",
            error: error.message,
        });
    }
}
       
