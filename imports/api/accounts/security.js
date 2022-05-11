import { Meteor } from 'meteor/meteor';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';

// Get a list of all accounts methods by running `Meteor.server.method_handlers` in meteor shell
const AUTH_METHODS = [
  'login',
  'logout',
  'logoutOtherClients',
  'getNewToken',
  'removeOtherTokens',
  'configureLoginService',
  'changePassword',
  'forgotPassword',
  'resetPassword',
  'verifyEmail',
  'createUser',
  'ATRemoveService',
  'ATCreateUserServer',
  'ATResendVerificationEmail',
];

if (Meteor.isServer) {
  // Only allow 2 login attempts per connection per 5 seconds
  DDPRateLimiter.addRule(
    {
      name(name) {
        return AUTH_METHODS.includes(name);
      },

      // Rate limit per connection ID
      connectionId() {
        return true;
      },
    },
    2,
    5000
  );
}

/*
 * New users with an email address will receive an address verification email.
 */
Accounts.config({ sendVerificationEmail: true, ambiguousErrorMessages: true });

Accounts.urls.resetPassword = (token) =>
  Meteor.absoluteUrl(`reset-password/${token}`);

Accounts.urls.verifyEmail = (token) =>
  Meteor.absoluteUrl(`verify-email/${token}`);
