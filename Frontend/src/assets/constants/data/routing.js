import AdminRoute from '../../../components/AdminRoute';
import NewsRoute from '../../../components/NewsRoute';
import MainRoute from '../../../components/MainRoute';

export const routing = [
  {
    exact: true,
    path: '/',
    component: MainRoute
  },
  {
    exact: false,
    path: '/news',
    component: NewsRoute
  },
  {
    exact: false,
    path: '/admin',
    component: AdminRoute
  }
];
