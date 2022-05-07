import { SSR } from "meteor/meteorhacks:ssr";

SSR.compileTemplate(
  "enrollAccount",
  Assets.getText("emails/enrollAccount.html")
);

Accounts.emailTemplates.enrollAccount = {
  subject: (user) => `Welcome to Template, ${user.username}`,
  text: (user, url) => SSR.render("emailText", { user, url }),
};
