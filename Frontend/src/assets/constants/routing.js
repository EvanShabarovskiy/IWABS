import Main from '../../components/Main';
import NewsContainer from '../../components/News/NewsContainer';
import DocsContainer from '../../components/Docs/DocsContainer';
import ForDonors from '../../components/ForDonors/ForDonors';

import { redirectCheck } from '../functions/redirectCheck';
import { donorsParams, signInParams } from './routingParams';

import InformationForADonor from "../../components/ForDonors/InformationForADonor";
import HowToBecomeADonor from "../../components/ForDonors/HowToBecomeADonor";
import PrivilegesForDonors from "../../components/ForDonors/PrivilegesForDonors";
import Contraindications from "../../components/ForDonors/Contraindications";
import GalleryContainer from '../../components/Gallery/GalleryContainer';

export const appRedirected = [
  {
    path: '/sign-in',
    redirect: condition => redirectCheck(condition, signInParams)
  },
  {
    path: '/donors',
    redirect: condition => redirectCheck(condition, donorsParams)
  },
]

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
  },
  {
    path: '/gallery',
    component: GalleryContainer,
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
