import React, { useEffect } from 'react';
import Docs from './Docs';
import { connect } from 'react-redux'
import { getDocs } from '../../store/docs/actions'

const DocsContainer = ({ getDocs, docs }) => {
  useEffect(() => getDocs(), []);
  return <Docs docs={docs} />
};

export default connect(
  ({ docs }) => ({ docs }), 
  { getDocs }
)(DocsContainer);