import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './Menu/Menu';
import Banner from './Banner/Banner';
import HistoryContainer from './History/HistoryContainer';

const App = () => (
  <Router>
    <>
      <Menu />
      <Banner />
      <HistoryContainer />
      <Switch>
        <Route exact path="/" component={() => <h1></h1>} />
      </Switch>
    </>
  </Router>
);

export default App;
