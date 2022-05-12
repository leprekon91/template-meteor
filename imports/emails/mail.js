import { Email } from 'meteor/email'
import './templates/enrollAccount/enrollAccount.js';
import './templates/resetPassword/resetPassword.js';

Meteor.startup(() => {
  if (Meteor.settings.email.enabled) {
    process.env.MAIL_URL = Meteor.settings.email.smtpUrl;
  } else {
    // eslint-disable-next-line no-console
    Email.send = console.log;
  }
});

// Email Templates
Accounts.emailTemplates.siteName = 'Template';
Accounts.emailTemplates.from = 'Template - noreply <team@template>';
