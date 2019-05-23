import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainMenu } from './MainMenu/MainMenu';
import Footer from './Footer/Footer';
import { routing } from 'assets/constants/data/routing';

const App = () => (
  <Router>
    <>
      <MainMenu />
      <Switch>
        {routing.map(({ exact, path, component }, i) => (
          <Route key={i} exact={exact} path={path} component={component} />
        ))}
      </Switch>
      <Footer />
    </>
  </Router>
);

export default App;
