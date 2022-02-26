const nodemailer = require("nodemailer");

export const sendEmail = async ({ email, subject, bodyPart }) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secureConnection: false,
    port: 587,
    requiresAuth: true,
    auth: {
      user: "sajidnabeel428@gmail.com", // generated ethereal user
      pass: "Allahhuakbar1.", // generated ethereal password
    },
    // debug: true,
    // logger: true,
  });

  let info = await transporter.sendMail({
    from: "sajidnabeel428@gmail.com", // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    html: bodyPart, // html body
  });

  // console.log(info);
};
