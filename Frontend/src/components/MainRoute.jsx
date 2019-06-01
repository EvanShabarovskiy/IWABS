import React from 'react';

import { Banner } from './Banner/Banner';
import { EmployeesContainer } from './Employees/EmployeesContainer';
import Achievements from './Achievements/Achievements';
import HistoryContainer from './History/HistoryContainer';
import Contacts from './Contacts/Contacts';

const MainRoute = () => (
  <>
    <Banner />
    <Achievements />
    <HistoryContainer />
    <EmployeesContainer />
    <Contacts />
  </>
);

export default MainRoute;