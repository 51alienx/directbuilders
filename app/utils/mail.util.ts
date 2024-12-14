import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import Mail from 'nodemailer/lib/mailer';


const transporter = nodemailer.createTransport({
  host: process.env.HOST_MAIL,
  port:process.env.PPORT_PORT,
  secure: process.env.NODE_ENV !=="development", 
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWWORD,
  },
} as SMTPTransport.Options);

type SenemailDto={
    sender:Mail.Address,
    recipients:Mail.Address[],
    subject:string,
    message:string,

}

 const Sendemail= async (dto:SenemailDto)=>{
    const {sender,recipients, subject, message}= dto;
    return await transporter.sendMail({
        from: sender, // sender address
        to:recipients , // list of receivers
        subject: subject, // Subject line
        text:message , // plain text body
    })

}

export default Sendemail;

// async function main() {
//   // send mail with defined transport object
//   const info = await transporter.sendMail({
//     from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
// }

// main().catch(console.error);
