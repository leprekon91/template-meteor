Meteor.startup(() => {
  if (Meteor.settings.email.enabled) {
    process.env.MAIL_URL = Meteor.settings.email.smtpUrl;
  }
});

/*
 * New users with an email address will receive an address verification email.
 */
Accounts.config({ sendVerificationEmail: true, ambiguousErrorMessages: true });

Accounts.urls.resetPassword = (token) =>
  Meteor.absoluteUrl(`reset-password/${token}`);

Accounts.urls.verifyEmail = (token) =>
  Meteor.absoluteUrl(`verify-email/${token}`);

// Email Templates

Accounts.emailTemplates.siteName = "Template";
Accounts.emailTemplates.from = "Template - noreply <team@template>";

Accounts.emailTemplates.enrollAccount.subject = (user) =>
  `Welcome to Template, ${user.username}`;

Accounts.emailTemplates.enrollAccount.text = (user, url) =>
  `Hello ${user.username}!<br/> You have been selected to participate in building a better future in gymnastics competitions! To activate your account, simply click the link below:<br/><a href="${url}">Link</a>`;

Accounts.emailTemplates.resetPassword.from = () =>
  // Overrides the value set in `Accounts.emailTemplates.from` when resetting
  // passwords.
  "Tourna.link Password Reset <no-reply@dct.com>";

Accounts.emailTemplates.verifyEmail = {
  subject() {
    return "Activate your account now!";
  },
  text(user, url) {
    return `Hey ${user.username}! Thank you for joining us, and welcome to Tourna.link Tool, Verify your e-mail by following this link: ${url}`;
  },
};

console.log(Accounts.emailTemplates);
