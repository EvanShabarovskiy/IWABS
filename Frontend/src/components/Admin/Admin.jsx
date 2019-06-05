import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import NewsContainer from './News/NewsContainer'
import DonorsContainer from './Donors/DonorsContainer';
import DocsContainer from './Docs/DocsContainer';
import MedicineContainer from './Medicine/MedicineContainer';
import PhotoGalleryContainer from './PhotoGallery/PhotoGalleryContainer';
import Menu from '../_General/Menu';
import links from '../../assets/data/adminLinks';

const Admin = ({ match: { path } }) => (
  <section className="section admin page">
    <Menu menuId="admin-menu" links={links} />
    <Switch>
      <Route exact path={path} component={() => <Redirect to={path + '/news'} />} />
      <Route path={path + '/news'} component={() => <NewsContainer />} />
      <Route path={path + '/donors'} component={() => <DonorsContainer />} />
      <Route path={path + '/docs'} component={() => <DocsContainer />} />
      <Route path={path + '/medicine'} component={() => <MedicineContainer />} />
      <Route path={path + '/gallery'} component={() => <PhotoGalleryContainer />} />
    </Switch>
  </section>
);

export default withRouter(Admin);