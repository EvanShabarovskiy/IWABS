import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Menu } from './Menu/Menu';
import { Banner } from './Banner/Banner';
import { HistoryContainer } from './History/HistoryContainer';
import { routes_data } from '../assets/constants/routes_data';

const App = () => (
  <Router>
    <>
      <Menu />
      <Banner />
      <HistoryContainer />
      <Switch>
        {routes_data.map(({ exact, path, component }) => (
          <Route exact={exact} path={path} component={component} />
        ))}
      </Switch>
    </>
  </Router>
);

export default App;
