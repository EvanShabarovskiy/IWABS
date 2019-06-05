import React from 'react';
import { donors } from '../../assets/constants/routing';
import { Switch, Route } from 'react-router-dom'
import Menu from '../_General/Menu';
import links from '../../assets/data/forDonorsLinks';

const ForDonors = () => 
  <>
    <Menu menuId="for-donors-menu" links={links} />
    <section className="section page for-donors">
      <Switch>
        { donors.map(route => <Route key={route.path} {...route} />) }
      </Switch>
    </section>
  </>

export default ForDonors;