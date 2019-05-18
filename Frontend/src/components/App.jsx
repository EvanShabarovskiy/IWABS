import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Menu } from './Menu/Menu';
import Footer from './Footer/Footer';
import { routing } from 'assets/constants/data/routing';
import AdminContainer from './routes/Admin/AdminContainer';

const App = () => (
  <Router>
    <>
      <Menu />
      <Switch>
        {routing.map(({ exact, path, component }, i) => (
          <Route key={i} exact={exact} path={path} component={component} />
        ))}
        <Route path="/admin" component={AdminContainer} />
      </Switch>
      <Footer />
    </>
  </Router>
);

export default App;
