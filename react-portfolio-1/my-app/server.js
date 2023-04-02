// ********** Config for nodemailer package ********** //
const USER = "chihiroanihr@gmail.com";
const PASS = ""; // password depends on your email carrier used (Gmail does not allow personal password. You can create application password in Google settings and use it in here.)
const PORT = 4000;

// Declaration
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// Server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
// logging
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

// Your contact email
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    clientId: process.env.REACT_APP_GMAIL_CLIENT_ID,
    clientSecret :process.env.REACT_APP_GMAIL_CLIENT_SECRET,
    user: USER,
    pass: PASS,
  },
});

// Verify if contact email is running
contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

// Post request
router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  // make body
  const mail = {
    from: name,
    to: USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  // send mail
  contactEmail.sendMail(mail, (error) => {
    // if error then send back error message
    if (error) {
      res.json(error);
    }
    // if success then send back success message
    else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
