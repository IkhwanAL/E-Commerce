import React, {Component} from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

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
        console.log(event)
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({'email': '', 'password': ''});
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I Already Have An Account</h2>
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
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;