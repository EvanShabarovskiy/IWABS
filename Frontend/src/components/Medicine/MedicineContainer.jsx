import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux'
import { getMedicine } from '../../store/medicine/actions';
import Medicine from './Medicine';

const MedicineContainer = ({ getMedicine }) => {
  const signedIn = useSelector(({ general: { signedIn } }) => signedIn);
  const medicine = useSelector(({ medicine }) => medicine);
  useEffect(() => getMedicine(), []);
  return <Medicine signedIn={signedIn} medicine={medicine}/>;
};

export default connect(null, { getMedicine })(MedicineContainer);