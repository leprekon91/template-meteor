import SSR from "meteor/meteorhacks:ssr";

SSR.compileTemplate("enrollAccount", Assets.getText("./enrollAccount.html"));

Accounts.emailTemplates.verifyEmail = {
  subject: () => "Activate your account now!",
  text: (user, url) => SSR.render("enrollAccount", { user, url }),
};
