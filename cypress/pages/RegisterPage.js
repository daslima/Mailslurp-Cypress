import SignUpEL from "../elements/SignUpEL";
import Common from '../generic/CommonMethods';

let inboxId = null;

class RegisterPage {

    fillFields(){
        let emailAddress = null;
        cy.mailslurp()
            .then(mailslurp => mailslurp.createInbox())
            .then(inbox =>{
            inboxId = inbox.id
            emailAddress = inbox.emailAddress
            cy.get(SignUpEL.inputEmail()).clear().type(emailAddress);
        });

        cy.get(SignUpEL.inputPassword()).clear().type('teste132');
    };

    insertCode(){
        cy.mailslurp()
            .then(mailslurp => mailslurp.waitForLatestEmail(inboxId, 30000, true))
            .then(email =>{
                const emailBody = email.body;
                const parser = new DOMParser();
                const doc = parser.parseFromString(emailBody, 'text/html');
                const code = Common.GetCodeFromHTML(doc,'body','code');
                
                cy.get(SignUpEL.inputCode()).clear().type(code);
             });
    };

    clickCreateAccount = () => cy.get(SignUpEL.btnCreateAccount()).click();

    clickConfirm = () => cy.get(SignUpEL.btnConfirm()).click();

}   

export default new RegisterPage;