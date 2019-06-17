import React from 'react';
import cx from 'classnames';
import Donor from './Donor';
import DonorContainer from './DonorContainer';
import columns from '../../assets/data/donorColumns';
import NewDonorContainer from '../_Forms/NewDonorContainer';

const Donors = ({ donors, signedIn }) =>
  <section className="section page">
    <h1 className="section-title">донори</h1>
    { signedIn && <NewDonorContainer /> }
    <div className={cx('donors-container', 'table', signedIn && 'controlled')}>
      <Donor {...columns} />
      { donors.map((donor, i) => <DonorContainer key={donor.id} index={i + 1} donor={donor}/>) }
    </div>
  </section>

export default Donors;