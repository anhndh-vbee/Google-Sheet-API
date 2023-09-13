const nodemailer = require("nodemailer");
const constants = require("../../configs/constants");

const sendMail = async (email, content, sheetName) => {
  if (email && content && sheetName) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: constants.EMAIL,
        pass: constants.PASS_EMAIL,
      },
    });

    await transporter.sendMail({
      from: constants.EMAIL,
      to: email,
      subject: `Something wrong with Sheet ${sheetName}`,
      html: `${content}`,
    });
  } else {
    console.log("Missing required parameter when send email");
  }
};

// sendMail("hoanganh.axe.no.1@gmail.com", "test", "PBI");

module.exports = { sendMail };
