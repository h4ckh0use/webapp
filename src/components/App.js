import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import SignupPage from './SignupPage'
import Callroom from './Callroom'
import initWebsocket from '../websocket'

const MainContent = styled.div`
  margin: 10vh 0;
`
const App = () => {
  initWebsocket()
  return (
    <MainContent className="lt-content-column" class="stars">
      <main>
        {/*
            The Router tag allows us to conditionally render components
            depending on the URL Path. In this case, we'll render the `Hello`
            component at the root directory and the `Joke` component on `/joke`
          */}
        <Router>
          <Switch>
            <Route path="/room">
              <Callroom />
            </Route>
            <Route path="/">
              <SignupPage />
            </Route>
          </Switch>
        </Router>
      </main>
      <Footer />
    </MainContent>
  )
}

export default App
