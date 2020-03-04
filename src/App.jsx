import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Calculator from './pages/Calculator'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Calculator}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
