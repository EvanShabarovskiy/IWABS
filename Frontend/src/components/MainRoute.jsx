import React from 'react';

import { EmployeesContainer } from './Employees/EmployeesContainer';
import Achievements from './Achievements/Achievements';
import HistoryContainer from './History/HistoryContainer';
import Contacts from './Contacts/Contacts';
import BannerContainer from './Banner/BannerContainer';

const MainRoute = () => (
  <>
    <BannerContainer />
    <Achievements />
    <HistoryContainer />
    <EmployeesContainer />
    <Contacts />
  </>
);

export default MainRoute;