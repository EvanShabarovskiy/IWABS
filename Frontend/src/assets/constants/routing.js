import { loadmang } from '../utils/loadmang';
import { redirectCheck } from '../utils/redirectCheck';
import { donorsParams, signInParams } from './routingParams';

const Main = loadmang(() => import('../../components/Main'));
const NewsContainer = loadmang(() => import('../../components/News/NewsContainer'));
const DocsContainer = loadmang(() => import('../../components/Docs/DocsContainer'));
const ForDonors = loadmang(() => import('../../components/ForDonors/ForDonors'));
const GalleryContainer = loadmang(() => import('../../components/Gallery/GalleryContainer'));
const DonorsContainer = loadmang(() => import('../../components/Donors/DonorsContainer'));
const MedicineContainer = loadmang(() => import('../../components/Medicine/MedicineContainer'));

import InformationForADonor from '../../components/ForDonors/InformationForADonor';
import HowToBecomeADonor from '../../components/ForDonors/HowToBecomeADonor';
import PrivilegesForDonors from '../../components/ForDonors/PrivilegesForDonors';
import Contraindications from '../../components/ForDonors/Contraindications';

export const appRedirected = [
  {
    path: '/sign-in',
    returnCondition: signedIn => !signedIn,
    redirect: condition => redirectCheck(condition, signInParams)
  },
  {
    path: '/donors',
    returnCondition: signedIn => signedIn,
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
  },
  {
    path: '/donors',
    component: DonorsContainer,
  },
  {
    path: '/medicine',
    component: MedicineContainer,
  },
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
