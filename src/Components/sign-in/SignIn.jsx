import React, { Component } from "react"
import "./SignIn.styles.scss"
import FormInput from "../form-input/FormInput"
import CustomButton from "../custom-button/CustomButton"

import { sigInWithGoogle } from "../../firebase/firebase.utils";

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
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2> I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="emial"
            value={this.state.email}
            handleChange={this.handleChange}
            autoComplete="email"
            required
          />

          <FormInput
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
        </form>

        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton onClick={sigInWithGoogle} >Sign in with Google</CustomButton>
      </div>
    )
  }
}
