import React from 'react';
import Admin from './Admin';
import SignInContainer from '../SignIn/SignInContainer';
import { connect } from 'react-redux';

const AdminContainer = ({ signedIn }) => {
  console.log('signedIn', signedIn);
  if (!signedIn) {
    return <Admin />;
  } else {
    return <SignInContainer />;
  }
};

const mapStateToProps = ({ general: { signedIn } }) => ({ signedIn });

export default connect(mapStateToProps)(AdminContainer);
