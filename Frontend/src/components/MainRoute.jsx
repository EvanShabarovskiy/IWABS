import React from 'react';

import { Banner } from './Banner/Banner';
import Circles from './Circles/Circles';
import { History } from './History/History';
import { EmployeesContainer } from './Employees/EmployeesContainer';

const MainRoute = () => (
  <>
    <Banner />
    <Circles />
    <History />
    <EmployeesContainer />
  </>
);

export default MainRoute;