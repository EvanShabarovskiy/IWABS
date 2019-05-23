import React from 'react';
import AdminMenu from './AdminMenu';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import NewsContainer from './News/NewsContainer'

const Admin = ({ match: { path } }) => (
  <section className="section admin">
    <AdminMenu />
    <Switch>
      <Route exact path={path} component={() => <Redirect to={path + '/news'} />}  />
      <Route path={path + '/news'} component={() => <NewsContainer />}  />
      <Route path={path + '/donors'} component={() => <h1>donors</h1>}  />
    </Switch>
  </section>
);

export default withRouter(Admin);