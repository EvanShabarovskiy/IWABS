import React from 'react';

import { Banner } from './Banner/Banner';
import Circles from './Circles/Circles';
import { EmployeesContainer } from './Employees/EmployeesContainer';
import HistoryContainer from './History/HistoryContainer';

const MainRoute = () => (
  <>
    <Banner />
    <Circles />
    <HistoryContainer />
    <EmployeesContainer />
  </>
);

export default MainRoute;