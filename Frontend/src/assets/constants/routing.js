import AdminRoute from '../../components/AdminRoute';
import NewsRoute from '../../components/NewsRoute';
import MainRoute from '../../components/MainRoute';
import DocsContainer from '../../components/Docs/DocsContainer';
import ForDonors from '../../components/ForDonors/ForDonors';

import InformationForADonor from "../../components/ForDonors/InformationForADonor";
import HowToBecomeADonor from "../../components/ForDonors/HowToBecomeADonor";
import PrivilegesForDonors from "../../components/ForDonors/PrivilegesForDonors";
import Contraindications from "../../components/ForDonors/Contraindications";

export const app = [
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

export const donors = [
  {
    path: '/for-donors',
    component: InformationForADonor
  },
  {
    path: '/for-donors/become-a-donor',
    component: HowToBecomeADonor
  },
  {
    path: '/for-donors/privileges',
    component: PrivilegesForDonors
  },
  {
    path: '/for-donors/contraindications',
    component: Contraindications
  },
]
