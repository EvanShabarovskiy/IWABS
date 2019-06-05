import React from 'react';

import BannerContainer from './Banner/BannerContainer';
import Achievements from './Achievements/Achievements';
import HistoryContainer from './History/HistoryContainer';
import Employees from './Employees/Employees';
import Contacts from './Contacts/Contacts';

const Main = () =>
  <>
    <BannerContainer />
    <Achievements />
    <HistoryContainer />
    <Employees />
    <Contacts />
  </>

export default Main;