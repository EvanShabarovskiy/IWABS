import { IRoute } from '../../interfaces/IRoute';
import { Main } from '../../components/routes/MainRoute/Main';
import { Documents } from '../../components/routes/DocumentsRoute/Documents';
import { ForDonors } from '../../components/routes/ForDonorsRoute/ForDonors';
import { Medicine } from '../../components/routes/MedicineRoute/Medicine';
import { News } from '../../components/routes/NewsRoute/News';
import { Gallery } from '../../components/routes/GalleryRoute/Gallery';
import { AdminContainer } from '../../components/routes/Admin/AdminContainer';

export const routes_data: IRoute[] = [
  {
    exact: true,
    path: '/',
    component: Main
  },
  {
    exact: false,
    path: '/documents',
    component: Documents
  },
  {
    exact: false,
    path: '/for-donors',
    component: ForDonors
  },
  {
    exact: false,
    path: '/medicine',
    component: Medicine
  },
  {
    exact: false,
    path: '/news',
    component: News
  },
  {
    exact: false,
    path: '/photos',
    component: Gallery
  },
  {
    exact: false,
    path: '/admin',
    component: AdminContainer
  }
];
