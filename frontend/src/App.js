import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/screens/HomePage'
import Header from './components/ui/Header'
import CharacterScreen from './components/screens/CharacterScreen'
import EpisodesScreen from './components/screens/EpisodesScreen'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/characters' component={CharacterScreen} exact />
        <Route path='/episodes' component={EpisodesScreen} exact />
      </Switch>
    </Router>
  )
}

export default App
