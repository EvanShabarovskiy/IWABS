import React from 'react';
import { connect } from 'react-redux'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { app, appRedirected } from '../assets/constants/routing';
import Loader from './_General/Loader';
import Modal from './_General/Modal';

const App = ({ signedIn, pageLoading }) =>
  <Router>
    <>
    <Modal open={pageLoading}>
      <Loader />
    </Modal>
      <Header />
      <Switch>
        { appRedirected.map(({ path, redirect, returnCondition }) => <Route key={path} path={path} component={() => redirect(returnCondition(signedIn))} />)}
        { app.map(route => <Route key={route.path} {...route} />) }
      </Switch>
      <Footer />
    </>
  </Router>

export default connect(
  ({ general: { signedIn, pageLoading } }) => ({ signedIn, pageLoading })
)(App);
