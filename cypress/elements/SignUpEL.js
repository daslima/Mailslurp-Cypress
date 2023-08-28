class SignUpEL {

    //Inputs
    inputEmail = () => 'input[name="email"]';
    inputPassword = () => 'input[name="password"]';
    inputCode = () => 'input[name="code"]';

    //Buttons
    btnCreateAccount = () => 'button[data-test*="create"]';
    btnConfirm = () => 'button[data-test*="sign-up"]';
}

export default new SignUpEL;