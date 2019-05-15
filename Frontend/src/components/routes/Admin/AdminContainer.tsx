import * as React from 'react';
import Admin from './Admin';
import { StatelessComponent } from 'react';
import SignInContainer from './SignIn/SignInContainer';
import { connect } from 'react-redux';

interface props {
  signedIn: boolean;
}

export const AdminContainer: StatelessComponent<props> = ({ signedIn }) => {
  if (signedIn) {
    return <Admin />;
  }
  return <SignInContainer />;
};

const mapStateToProps = (store: { general: { signedIn: boolean } }) => ({
  signedIn: store.general.signedIn
});

export default connect(mapStateToProps)(AdminContainer);
