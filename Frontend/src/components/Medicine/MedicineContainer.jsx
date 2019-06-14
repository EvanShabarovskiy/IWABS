import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getMedicine } from '../../store/medicine/actions';
import MedicineItem from './MedicineItem';

const MedicineContainer = ({ medicine, getMedicine}) => {
  useEffect(() => getMedicine(), []);
  return <MedicineItem medicine={medicine}/>;
};

export default connect(
  ({ medicine, general: { signedIn } }) => ({ medicine, signedIn }), 
  { getMedicine }
)(MedicineContainer);