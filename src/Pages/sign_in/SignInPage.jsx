import React from 'react'
import  "./SignInPage.styles.scss" 
import SignIn from '../../Components/sign-in/SignIn'
import SignUp from '../../Components/sign-up/SignUp'

const SignInPage = () => {
    return (
        <div className='sign-page'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInPage
