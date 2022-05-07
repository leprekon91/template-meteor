import "./templates/enrollAccount/enrollAccount.js";
import "./templates/resetPassword/resetPassword.js";

Meteor.startup(() => {
  if (Meteor.settings.email.enabled) {
    process.env.MAIL_URL = Meteor.settings.email.smtpUrl;
  }
});

Accounts.urls.resetPassword = (token) =>
  Meteor.absoluteUrl(`reset-password/${token}`);

Accounts.urls.verifyEmail = (token) =>
  Meteor.absoluteUrl(`verify-email/${token}`);

// Email Templates
Accounts.emailTemplates.siteName = "Template";
Accounts.emailTemplates.from = "Template - noreply <team@template>";

Accounts.emailTemplates.verifyEmail = {
  subject() {
    return "Activate your account now!";
  },
  text(user, url) {
    return `Hey ${user.username}! Thank you for joining us, and welcome to Template, Verify your e-mail by following this link: ${url}`;
  },
};
