import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import MedicineItem from './MedicineItem';
import { removeMedicine } from '../../store/medicine/actions';

const MedicineItemContainer = ({ index, item }) => {
  const signedIn = useSelector(({ general: { signedIn } }) => signedIn);
  const dispatch = useDispatch();
  const onRemove = () => confirm('Ви дійсно хочете видалити цей документ?') && dispatch(removeMedicine(item.id));

  return <MedicineItem {...item} index={index} onRemove={onRemove} showControls={signedIn} /> 
};

export default MedicineItemContainer;