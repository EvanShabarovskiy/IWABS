import React, { useEffect } from 'react';
import Docs from './Docs';
import { connect } from 'react-redux'
import { getDocs } from '../../store/docs/actions'

const DocsContainer = ({ getDocs, docs, signedIn }) => {
  useEffect(() => getDocs(), []);
  return <Docs docs={docs} signedIn={signedIn} />
};

export default connect(
  ({ docs, general: { signedIn } }) => ({ docs, signedIn }), 
  { getDocs }
)(DocsContainer);