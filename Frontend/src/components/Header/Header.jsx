import React from 'react';
import { connect } from 'react-redux';

import Flag from './Flag';
import Menu from '../_General/Menu';
import links from '../../assets/data/links';
import { onSignOut } from '../../store/actions';

const Header = ({ signedIn, onSignOut }) => 
  <header id="main-header">
    <Flag />
    <Menu menuId="main-menu" links={signedIn ? links : links.filter(link => !link.private)} />
    { signedIn && <button className="btn sign-out-btn" onClick={onSignOut}>вийти</button> }
  </header>

export default connect(
  ({ general: { signedIn } }) => ({ signedIn }),
  { onSignOut }
)(Header);