const { sendEmailWithNodemailer } = require("../helpers/email");
 
exports.contactForm = (req, res) => {
  console.log(req.body);
  const { name, email, message } = req.body;
 
  const emailData = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: `Contact form - ${process.env.APP_NAME}`,
    text: `Email received from contact from \n Sender name: ${name} \n Sender email: ${email} \n Sender message: ${message}`,
    html: `
        <h4>Email received from contact form:</h4>
        <p>Sender name: ${name}</p>
        <p>Sender email: ${email}</p>
        <p>Sender message: ${message}</p>
        <hr />
    `,
  };
 
  sendEmailWithNodemailer(req, res, emailData);
};

exports.contactBlogAuthorForm = (req, res) => {
  const { authorEmail, email, name, message } = req.body;

  let maillist = [authorEmail, process.env.EMAIL_TO];

  const emailData = {
      to: maillist,
      from: email,
      subject: `Someone messaged you from ${process.env.APP_NAME}`,
      text: `Email received from contact from \n Sender name: ${name} \n Sender email: ${email} \n Sender message: ${message}`,
      html: `
          <h4>Message received from:</h4>
          <p>name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Message: ${message}</p>
          <hr />
      `
  };
  sendEmailWithNodemailer(req, res, emailData);
};
