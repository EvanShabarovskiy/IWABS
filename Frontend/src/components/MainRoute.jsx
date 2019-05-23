import React from 'react';

import { Banner } from './Banner/Banner';
import Circles from './Circles/Circles';
import { EmployeesContainer } from './Employees/EmployeesContainer';
import HistoryContainer from './History/HistoryContainer';
import ContactUs from './ContactUs/ContactUs';

const MainRoute = () => (
  <>
    <Banner />
    <Circles />
    <HistoryContainer />
    <EmployeesContainer />
    <ContactUs />
  </>
);

export default MainRoute;