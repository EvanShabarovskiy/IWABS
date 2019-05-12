import * as React from 'react';
import { Banner } from '../../Banner/Banner';
import Circles from '../../Circles/Circles';
import { History } from '../../History/History';
import { EmployeesContainer } from '../../Employees/EmployeesContainer';

export const Main = () => (
  <>
    <Banner />
    <Circles />
    <History />
    <EmployeesContainer />
  </>
);
