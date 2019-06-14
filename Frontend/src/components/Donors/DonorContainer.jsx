import React from 'react';
import { connect, useSelector } from 'react-redux';
import Donor from './Donor';
import { deleteDonor } from '../../store/donors/actions';

const DonorContainer = ({ index, donor, deleteDonor }) => {
  const signedIn = useSelector(({ general: { signedIn } }) => signedIn);
  const onRemove = () => confirm('Ви дійсно хочете видалити цей документ?') && deleteDonor(donor.id);
  return <Donor {...donor} index={index} showControls={signedIn} onRemove={onRemove} />
};

export default connect(
  null,
  { deleteDonor }
)(DonorContainer);