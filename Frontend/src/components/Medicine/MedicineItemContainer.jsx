import React from 'react';
import { connect, useSelector } from 'react-redux'
import MedicineItem from './MedicineItem';
import { removeMedicine } from '../../store/medicine/actions';

const MedicineItemContainer = ({ index, item, removeMedicine }) => {
  const signedIn = useSelector(({ general: { signedIn } }) => signedIn);
  const onRemove = () => confirm('Ви дійсно хочете видалити цей документ?') && removeMedicine(item.id);

  return <MedicineItem {...item} index={index} onRemove={onRemove} showControls={signedIn} /> 
};

export default connect(null, { removeMedicine })(MedicineItemContainer)