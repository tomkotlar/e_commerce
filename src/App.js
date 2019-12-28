import React, { Component } from "react"
import "./App.css"
import { Route, Switch } from "react-router-dom"

import HomePage from "./Pages/homepage/HomePage"
import ShopPage from "./Pages/shop/ShopPage"
import Header from "./Components/header/Header"
import SignInPage from "./Pages/sign_in/SignInPage"
import { auth } from "./firebase/firebase.utils"

export default class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser: user})
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInPage} />
        </Switch>
      </div>
    )
  }
}

