import React from 'react'
import SignIn from '../../component/signin/signIn.component'
import SignUp from '../../component/sign-up/sign-up.component'

import './signInAndSignUpPage.styles.scss';

const SignInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up-page">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInAndSignUpPage;