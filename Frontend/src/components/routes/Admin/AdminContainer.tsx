import * as React from 'react';
import Admin from './Admin';
import { withRouter } from 'react-router';
import { StatelessComponent } from 'react';
import SignInContainer from './SignIn/SignInContainer';

const AdminContainer: StatelessComponent<{}> = props => {
  console.log(props);
  return <SignInContainer />;
};

export default withRouter(AdminContainer);
