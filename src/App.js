import React from "react"
import "./App.css"
import { Route, Switch } from "react-router-dom"

import HomePage from "./Pages/HomePage"

const HatsPage = () => {
  return (
    <div>
      <h1>hats</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch> 
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  )
}

export default App
