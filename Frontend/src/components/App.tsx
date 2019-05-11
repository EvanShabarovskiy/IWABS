import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Menu } from './Menu/Menu';
import { Banner } from './Banner/Banner';
import { HistoryContainer } from './History/HistoryContainer';
import Footer from './Footer/Footer';
import { routes_data } from '../assets/constants/routes_data';

const App = () => (
  <Router>
    <>
      <Menu />
      <Switch>
        {routes_data.map(({ exact, path, component }, i) => (
          <Route key={i} exact={exact} path={path} component={component} />
        ))}
      </Switch>
      <Footer />
    </>
  </Router>
);

export default App;
