const { MailSlurp } = require("mailslurp-client");

const mailslurp = new MailSlurp({apiKey: Cypress.env('MAILSLURP_API_KEY')});

Cypress.Commands.add('createInbox',() => {
    return mailslurp.createInbox();
});

Cypress.Commands.add('waitForLatestEmail',(inboxId) => {
    return mailslurp.waitForLatestEmail(inboxId, timeoutMillis);
});