import React, { useEffect } from 'react';
import Docs from './Docs';
import Axios from 'axios';
import { connect } from 'react-redux'
import { setDocs } from '../../store/docs/actions'
import { api } from '../../assets/constants/api';

const DocsContainer = ({ setDocs, docs }) => {
  useEffect(() => {
    getDocs();
  }, []);
  const getDocs = () => 
    Axios.get(api + 'documents')
      .then(({ data }) => setDocs(data.documents))
      .catch(error => !!error.response && console.log(error.response));
  return <Docs docs={docs} />
};

const mapStateToProps = ({ docs }) => ({
  docs
})

const mapDispatchToProps = {
  setDocs
}

export default connect(mapStateToProps, mapDispatchToProps)(DocsContainer);