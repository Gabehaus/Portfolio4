const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// @route GET api/items
//@desc Get ALL Items
// @access Public
router.get("/", (req, res) => {});

// @route POST api/items
//@desc Create An Item
// @access Private

app.post("/", (req, res) => {
  let data = req.body;
  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "Gabehaus@gmail.com",
      pass: "45654513a"
    }
  });

  let mailOptions = {
    from: data.email,
    to: "Gabehaus@gmail.com",
    subject: `Message from ${data.name}`,
    html: `
        
        <h3>Information</h3>
        <ul>
        <li>Name: ${data.name}</li>
        <li>Email: ${data.email}</li>
        </ul>

        <h3>Message</h3>
        <p>${data.message}</p>

        `
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send("Success");
    }
  });

  smtpTransport.close();
});

// @route DELETC api/items/:id
//@desc DELETE An Item
// @access Private

module.exports = router;
