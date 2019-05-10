import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <>
      <Switch>
        <Route exact path="/" component={() => <h1>Welcome</h1>} />
      </Switch>
    </>
  </Router>
);

export default App;
