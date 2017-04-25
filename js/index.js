import React from "react"
import {render} from "react-dom"
import {Router, Route, hashHistory} from "react-router"
import App from "./App"
import Home from "./Home"
import Services from "./Services"
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'

render(
  (
    <Router history={ hashHistory }>
      <Route component={ App }>
        <Route path="/" component={ Home }/>
        <Route path="/Services" component={Services}/>
        <Route path="/AboutMe" component={AboutMe}/>
        <Route path="/ContactMe" component={ContactMe}/>
      </Route>
    </Router>
  ),
  document.getElementById("app")
)
