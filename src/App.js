import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import CrossBoard from './components/CrossBoard';
import CQuestion from './components/CQuestion';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/board" component={CrossBoard} />
        <Route exact path="/c-question" component={CQuestion} />
      </Switch>
    </Router>
  );
}

export default App;
