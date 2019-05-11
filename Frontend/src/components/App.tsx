import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Menu } from './Menu/Menu';
import { Banner } from './Banner/Banner';
import { HistoryContainer } from './History/HistoryContainer';
import Footer from './Footer/Footer';

const App = () => (
  <Router>
    <>
      <Menu />
      <Banner />
      <HistoryContainer />
      <Switch>
        <Route exact path="/" component={() => <h1 />} />
      </Switch>
      <Footer />
    </>
  </Router>
);

export default App;
