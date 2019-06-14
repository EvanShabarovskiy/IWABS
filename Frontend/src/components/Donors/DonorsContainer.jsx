import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getDonors } from '../../store/donors/actions';
import Donors from './Donors';

const DonorsContainer = ({ donors, getDonors}) => {
  useEffect(() => getDonors(), []);
  return <Donors donors={donors}/>;
};

export default connect(
  ({ donors, general: { signedIn } }) => ({ donors, signedIn }), 
  { getDonors }
)(DonorsContainer);