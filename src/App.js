import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Greeting from './Greeting';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/greeting">
          <Greeting />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
