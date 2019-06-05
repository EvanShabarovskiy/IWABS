import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { app } from '../assets/constants/routing';

const App = () =>
  <Router>
    <>
      <Header />
      <Switch>
        { app.map(route => <Route key={route.path} {...route} />) }
      </Switch>
      <Footer />
    </>
  </Router>

export default App;
