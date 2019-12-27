import React, { Component } from "react"
import "./SignIn.styles.scss"
import FormInput from "../form-input/FormInput"

export default class SignIn extends Component {
  state = {
    email: "",
    password: ""
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({ email: "", password: "" })
  }

  handleChange = (event ) => {
    const {name, value} = event.target
  this.setState({ [name]: value })
}


  render() {
    return (
      <div className="sign-in">
        <h2> I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form action="submit" onSubmit={this.handleSubmit}>
        
     
          <FormInput
            type="email"
            name="email"
            label='emial'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
         
          <FormInput
            type="password"
            name="password"
            label='password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
        
        </form>

        <input type="submit" value="Submit Form" />
      </div>
    )
  }
}
