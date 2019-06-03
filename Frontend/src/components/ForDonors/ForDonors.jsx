import React from 'react';
import { donors } from '../../assets/constants/routing';
import { Switch, Route } from 'react-router-dom'
import ForDonorsNavigation from './ForDonorsNavigation';

const ForDonors = () => 
  <>
    <ForDonorsNavigation />
    <section className="section page for-donors">
      <Switch>
        { donors.map(route => <Route key={route.path} {...route} />) }
      </Switch>
    </section>
  </>

export default ForDonors;