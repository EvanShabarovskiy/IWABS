import * as React from 'react';
import Admin from './Admin';
import { StatelessComponent } from 'react';
import SignInContainer from './SignIn/SignInContainer';

export const AdminContainer: StatelessComponent<{}> = props => {
  console.log(props);
  return <SignInContainer />;
};
