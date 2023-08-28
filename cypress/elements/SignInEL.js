class SignInEL {
    
    //Inputs
    inputUserName = () => 'input[name="username"]';
    inputPassword = () => 'input[name="password"]';

    //Links
    linkCreateAccount = () => 'a[data-test*="create-account"]';

    //Buttons
    btnSignIn = () => 'button[data-test*="sign-in"]';
}

export default new SignInEL;