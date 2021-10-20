import { Switch, Route } from 'react-router-dom'
import Login from './login'

function About() {
  return <h2>About</h2>
}

function Dashboard() {
  return <h2>Dashboard</h2>
}

const Routes = () => {
  return (
    <Switch>
      <Route path='/about' component={About} />
      <Route path='/dashboard' component={Dashboard} />
      <Route exact path='/' component={Login} />
    </Switch>
  )
}

export default Routes
