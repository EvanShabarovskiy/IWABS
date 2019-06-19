import { loadmang } from "../utils/loadmang";

const DonorsContainer = loadmang(() => import('../../components/Donors/DonorsContainer'));
const SignInContainer = loadmang(() => import('../../components/_Forms/SignInContainer'));

export const signInParams = {
  Component: SignInContainer,
  from : '/sign-in', 
  to:'/'
}

export const donorsParams = {
  Component: DonorsContainer,
  from : '/donors', 
  to:'/'
}