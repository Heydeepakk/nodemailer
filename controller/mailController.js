const nodemailer = require("nodemailer")

exports.mail = async (req,res)=>{
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Set to false
    auth: {
        user: process.env.ADMIN_MAIL,
        pass: process.env.ADMIN_PASS,
    },
});
        
    try {
        const { name, email, phoneNumber, message } = req.body;

        const mailBody = `
            Name: ${name}
            Email: ${email}
            Phone Number: ${phoneNumber}
            Message: ${message}
        `;

        const info = await transporter.sendMail({
            from: '"Motowheel" <deepaksharma121003@gmail.com>',
            to: 'deepaksharma121003@gmail.com',
            subject: req.body.subject,
            text: mailBody,
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
       
