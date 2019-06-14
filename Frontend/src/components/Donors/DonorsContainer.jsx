import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getDonors } from '../../store/donors/actions';
import Donors from './Donors';
import { useSelector } from 'react-redux'

const DonorsContainer = ({ getDonors }) => {
  const donors = useSelector(({ donors }) => donors);
  // const signedIn = useSelector(({ general }) => general.signedIn);

  useEffect(() => getDonors(), []);
  return <Donors donors={donors}/>;
};

export default connect(null, { getDonors })(DonorsContainer);