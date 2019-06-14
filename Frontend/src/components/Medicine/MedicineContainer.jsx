import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getMedicine } from '../../store/medicine/actions';
import Medicine from './Medicine';

const MedicineContainer = ({ medicine, getMedicine}) => {
  useEffect(() => getMedicine(), []);
  return <Medicine medicine={medicine}/>;
};

export default connect(
  ({ medicine, general: { signedIn } }) => ({ medicine, signedIn }), 
  { getMedicine }
)(MedicineContainer);