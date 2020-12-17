import React, { Component } from 'react'

import {auth , createUserProfileRef } from '../../firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './sign-up.styles.scss'

export default class SignUp extends Component{
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        event.preventDefault();

        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert(`Password Don't Matched`)
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
                            .catch(error => alert(error));
            
            await createUserProfileRef(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }catch(error){
            console.error(error);   
        }
    }
    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an Account</h2>
                <span>Sign up with your email and account</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName"
                        type="text"
                        onChange={this.handleChange}
                        value={displayName}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        name="email"
                        type="email"
                        onChange={this.handleChange}
                        value={email}
                        label="Email"
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        onChange={this.handleChange}
                        value={password}
                        label="Password"
                        required
                    />
                    <FormInput
                        name="confirmPassword"
                        type="confirmPassword"
                        onChange={this.handleChange}
                        value={confirmPassword}
                        label="Confirm Password"
                        required
                    />
                    <CustomButton type="submit" >Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}
