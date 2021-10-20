import { Component } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import history from './history'

import Routes from './routes'
import './app.styles.scss'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Routes />
      </Router>
    )
  }
}

export default App
