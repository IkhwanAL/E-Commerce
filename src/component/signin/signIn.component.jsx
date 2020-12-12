import React, {Component} from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {auth, SignInWithGoogle} from '../../firebase/firebase.utils'

import './signin.styles.scss';

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            'email': '',
            'password': ''
        }
    }

    handleChange = event => {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);

            alert('Sign In Successfully');

            this.setState(
                {
                    email: '',
                    password: ''
                }
            )
        }catch(error){
            console.error("error", error.message)
        }
    }

    render(){
        return(
            <div className="sign-in">
                <h2 className="title">I Already Have An Account</h2>
                <span>Sign in with your Email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        label="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        label="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit" >Sign In</CustomButton>
                        <CustomButton type="button" onClick={SignInWithGoogle} isSignGoogle>{' '}Sign In With Google{' '}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;