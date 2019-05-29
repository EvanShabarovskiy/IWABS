import React from 'react';
import Admin from './Admin';
import { connect } from 'react-redux';
import SignInContainer from '../_Forms/SignInContainer';

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
