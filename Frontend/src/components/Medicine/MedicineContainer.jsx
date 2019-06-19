import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getMedicine } from '../../store/medicine/actions';
import Medicine from './Medicine';

const MedicineContainer = () => {
  const signedIn = useSelector(({ general: { signedIn } }) => signedIn);
  const medicine = useSelector(({ medicine }) => medicine);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getMedicine()), []);
  return <Medicine signedIn={signedIn} medicine={medicine}/>;
};

export default MedicineContainer;