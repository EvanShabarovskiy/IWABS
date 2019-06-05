import Main from '../../components/Main';
import NewsContainer from '../../components/News/NewsContainer';
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
    component: Main
  },
  {
    path: '/news',
    component: NewsContainer
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
    exact: true,
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
