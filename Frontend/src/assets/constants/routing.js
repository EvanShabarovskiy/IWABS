import AdminRoute from '../../components/AdminRoute';
import NewsRoute from '../../components/NewsRoute';
import MainRoute from '../../components/MainRoute';
import DocsContainer from '../../components/Docs/DocsContainer';
import ForDonors from '../../components/ForDonors/ForDonors';

export const routing = [
  {
    exact: true,
    path: '/',
    component: MainRoute
  },
  {
    path: '/news',
    component: NewsRoute
  },
  {
    path: '/admin',
    component: AdminRoute
  },
  {
    path: '/docs',
    component: DocsContainer
  },
  {
    path: '/for-donors',
    component: ForDonors,
    
  }
];