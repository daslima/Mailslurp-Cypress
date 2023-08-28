import SignInEL from "../elements/SignInEL";

class LoginPage {

    goToSignUp = () => cy.get(SignInEL.linkCreateAccount()).click();
}   

export default new LoginPage;