import React from 'react';
import Field from '../_General/Field';
import { DatePicker, Select } from 'antd';
import bloodGroups from '../../assets/data/bloodGroups';
import Form from '../_General/Form';

const { Option } = Select;

const NewDonor = ({ name, email, bloodGroup, bloodDonated, address, change, onSubmit, onDateChange, onSelectChange}) => (
  <Form formClass="add-donor-form" onSubmit={onSubmit} title="новий донор" buttonText="додати донора">
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
      {
        bloodGroups.map((group, i) => (
          <Option key={i} value={group} >{group}</Option>
        ))
      }
   </Select>
    <DatePicker className="date-picker" placeholder="дата народження" showToday={false} size="large" onChange={onDateChange} />
  </Form>
);

export default NewDonor;