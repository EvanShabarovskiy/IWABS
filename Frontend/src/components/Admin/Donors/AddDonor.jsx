import React from 'react';
import Field from '../../_General/Field';
import { disabledDate } from '../../../assets/constants/functions/disabledDate';
import { DatePicker, Select } from 'antd';
import { bloodGroups } from '../../../assets/constants/data/bloodGroups';

const { Option } = Select;

const AddDonor = ({ data: { name, email, bloodGroup, bloodDonated, address }, change, onSubmit, onDateChange, onSelectChange}) => (
  <form className="form add-donor-form" onSubmit={onSubmit}>
    <Field name="name" value={name} placeholder="ім'я та фамілія донора донора" change={change} />
    <Field name="email" value={email} placeholder="електронна адреса" change={change} />
    <Field name="bloodGroup" value={bloodGroup} placeholder="ім'я та фамілія донора донора" change={change}/>
    <Field name="bloodDonated" value={bloodDonated} placeholder="крові здано" change={change}/>
    <Field name="address" value={address} placeholder="адреса" change={change}/>
    <Select
      className="blood-group-select"
      style={{ width: '100%' }}
      size="large"
      placeholder="Виберіть Групу Крові"
      onChange={onSelectChange}
    >
      {
        bloodGroups.map((group, i) => (
          <Option key={i} value={group} >{group}</Option>
        ))
      }
   </Select>
    <DatePicker className="date-picker" showToday={false} disabledDate={disabledDate} size="large" onChange={onDateChange} />
    <button className="btn sub-btn">додати</button>
  </form>
);

export default AddDonor;