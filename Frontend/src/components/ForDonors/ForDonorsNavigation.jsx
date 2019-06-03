import React from 'react';
import Menu from '../_General/Menu';
import links from '../../assets/data/forDonorsLinks';
import { Link } from '../_General/Link';

const ForDonorsNavigation = () =>
  <Menu>
    { links.map(link => <Link key={link.to} {...link} />) }
  </Menu>

export default ForDonorsNavigation; 