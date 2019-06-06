import DonorsContainer from "../../components/Donors/DonorsContainer";
import SignInContainer from "../../components/_Forms/SignInContainer";

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