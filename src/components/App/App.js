import React, { Component } from "react"
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom"
import LandingPage from "../../page/LandingPage"
import MusicianPage from "../../page/MusicianPage"
import DeveloperPage from "../../page/DeveloperPage"
import "./App.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons"

library.add(faUser, faLock, faEnvelope)

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" components={LandingPage} />
          <Route exact path="/musician" components={MusicianPage} />
          <Route exact path="/developer" components={DeveloperPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    )
  }
}

export default App
