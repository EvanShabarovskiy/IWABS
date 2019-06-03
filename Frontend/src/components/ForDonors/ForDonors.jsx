import React from 'react';
import { routes } from '../../assets/constants/forDonorsRoutes';
import { Switch, Route } from 'react-router-dom'

const ForDonors = () => 
  <section className="section page for-donors">
    <Switch>
      { routes.map(route => <Route key={route.path} {...route} />) }
    </Switch>
  </section>

export default ForDonors;