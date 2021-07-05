const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports.showContactForm = function (req, res) {
  res.render("contact.ejs");
};

module.exports.sendContactForm = async function (req, res) {
  var firstName = req.sanitize(req.body.firstName);
  var lastName = req.sanitize(req.body.lastName);
  var message = req.sanitize(req.body.message);
  var email = req.sanitize(req.body.email);
  const msg = {
    to: `${process.env.TO_EMAIL}`,
    from: `${process.env.FROM_EMAIL}`,
    subject: `Smita's Eats Website Contact Form: ${firstName} ${lastName}`,
    text: message,
    html:
      `<h2>Contact name: </h2><p>${firstName} ${lastName}</p>` +
      `<h2>Email: </h2><p>${email}</p>` +
      `<h2>Message: </h2><p>${message}</p>`,
  };

  try {
    await sgMail.send(msg);
    req.flash(
      "success",
      "Your email was sent. Thank you for reaching out to us!"
    );
    res.redirect("/contact");
  } catch (error) {
    req.flash("error", "Sorry. Your email was unable to be sent.");
    res.redirect("/contact");
  }
};
