import React from 'react';
import Field from '../_General/Field';
import { DatePicker, Select } from 'antd';
import bloodGroups from '../../assets/data/bloodGroups';
import Form from '../_General/Form';
import Modal from '../_General/Modal';

const { Option } = Select;

const NewDonor = ({ name, email, bloodDonated, address, change, onSubmit, onDateChange, onSelectChange, toggled, handleToggled }) =>
  <>
    <Modal open={toggled} onClose={handleToggled}>
      <Form formClass="new-donor-form" onSubmit={onSubmit} title="новий донор" buttonText="додати донора">
        <Field name="name" value={name} placeholder="ім'я та фамілія донора" change={change} />
        <Field name="email" value={email} placeholder="електронна адреса" change={change} />
        <Field name="bloodDonated" value={bloodDonated} placeholder="крові здано" change={change}/>
        <Field name="address" value={address} placeholder="адреса" change={change}/>
        <Select
          className="blood-group-select"
          style={{ width: '100%' }}
          size="large"
          placeholder="Виберіть Групу Крові"
          onChange={onSelectChange}
        >
          { bloodGroups.map(group => <Option key={group} value={group}>{group}</Option>) }
        </Select>
        <DatePicker className="date-picker" placeholder="дата народження" showToday={false} size="large" onChange={onDateChange} />
      </Form>
    </Modal>
    <button className="btn toggle-btn" onClick={handleToggled}>новий донор</button>
  </>

export default NewDonor;