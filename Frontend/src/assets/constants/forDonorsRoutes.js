import InformationForADonor from "../../components/ForDonors/InformationForADonor";
import HowToBecomeADonor from "../../components/ForDonors/HowToBecomeADonor";
import PrivilegesForDonors from "../../components/ForDonors/PrivilegesForDonors";
import Contraindications from "../../components/ForDonors/Contraindications";

export const routes = [
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