import React, { Component } from "react"
import "./SignIn.styles.scss"
import FormInput from "../form-input/FormInput"
import CustomButton from "../custom-button/CustomButton"
import { signInWithGoogle } from "../../firebase/firebase.utils"

export default class SignIn extends Component {
  state = {
    email: "",
    password: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ email: "", password: "" })
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> 
              Sign in
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}
