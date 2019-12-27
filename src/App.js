import React from "react"
import "./App.css"
import { Route, Switch } from "react-router-dom"

import HomePage from "./Pages/homepage/HomePage"
import ShopPage from "./Pages/shop/ShopPage"



function App() {
  return (
    <div>
      <Switch> 
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
