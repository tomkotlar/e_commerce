import React, { Component } from "react"
import "./App.css"
import { Route, Switch, Redirect } from "react-router-dom"
import HomePage from "./Pages/homepage/HomePage"
import ShopPage from "./Pages/shop/ShopPage"
import Header from "./Components/header/Header"
import SignInPage from "./Pages/sign_in/SignInPage"

import { auth, createUserProfileDocument } from "./firebase/firebase.utils"
import { connect } from "react-redux"
import { setCurrentUser } from "./redux/user/user.action"
import {createStructuredSelector} from 'reselect'
import { selectCurrentUser } from "./redux/user/user.selector"

class App extends Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)
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
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInPage />
            }
          />
        </Switch>
      </div>
    )
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
