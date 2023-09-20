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

    const emailContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Email from Big Company</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #fff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
          background-color: #007bff;
          color: #fff;
          text-align: center;
          padding: 10px 0;
        }
        .content {
          padding: 20px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
        }
        th, td {
          padding: 10px;
          text-align: center;
          border-bottom: 1px solid #ccc;
        }
        a {
          text-decoration: none;
          background-color: black;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Some thing wrong with your sheet</h1>
        </div>
        <div class="content">
          <p>Hello,</p>
          <p>Here's some important information:</p>
          <table>
            <tr>
              <th>Name</th>
              <th>Error</th>
            </tr>
            ${content}
          </table>
          <a href="https://docs.google.com/spreadsheets/d/1-cYPOdl1XXs5RgF0rbCJaHwAicuBffGMf-kmxMJT-S4/edit?usp=sharing" target="_blank">Check your sheet</a>
        </div>
      </div>
    </body>
    </html>
    `;

    await transporter.sendMail({
      from: constants.EMAIL,
      to: email,
      subject: `Something wrong with Sheet ${sheetName}`,
      html: `${emailContent}`,
    });
  } else {
    console.log("Missing required parameter when sending email");
  }
};

module.exports = { sendMail };
