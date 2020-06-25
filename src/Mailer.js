var nodeMailer = require("NodeMailer");
var transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: "iamitravikumar@gmail.com",
    pass: "xxxxxxxxxx"
  }
});

var mailOptions = {
  from: "iamitravikumar@gmail.com",
  to: "besttechamit@gmail.com",
  subject: "Sending Email using Node.js",
  text: "This mail is sent using the node Js to check functions!"
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
