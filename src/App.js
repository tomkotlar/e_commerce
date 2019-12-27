import React from "react"
import "./App.css"
import { Route, Switch } from "react-router-dom"

import HomePage from "./Pages/homepage/HomePage"
import ShopPage from "./Pages/shop/ShopPage"
import Header from "./Components/header/Header"





function App() {
  return (
    <div>
    <Header />
      <Switch> 
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
