import React from 'react';
import Flag from './Flag';
import Menu from '../_General/Menu';
import links from '../../assets/data/links';
import { connect } from 'react-redux'

const Header = ({ signedIn }) => 
  <header id="main-header">
    <Flag />
    <Menu menuId="main-menu" links={signedIn ? links : links.filter(link => !link.private)} />
  </header>

export default connect(
  ({ general: { signedIn } }) => ({ signedIn })
)(Header);