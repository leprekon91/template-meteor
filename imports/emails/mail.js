import "./templates/enrollAccount/enrollAccount.js";
import "./templates/resetPassword/resetPassword.js";

Meteor.startup(() => {
  if (Meteor.settings.email.enabled) {
    process.env.MAIL_URL = Meteor.settings.email.smtpUrl;
  }
});


// Email Templates
Accounts.emailTemplates.siteName = "Template";
Accounts.emailTemplates.from = "Template - noreply <team@template>";

