import React from 'react';
import Admin from './Admin';
import SignInContainer from './SignIn/SignInContainer';
import { connect } from 'react-redux';

export const AdminContainer = ({ signedIn }) => {
  if (!signedIn) {
    return <Admin />;
  }
  return <SignInContainer />;
};

const mapStateToProps = ({ general: { signedIn } }) => ({ signedIn });

export default connect(mapStateToProps)(AdminContainer);
