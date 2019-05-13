import * as React from 'react';
import Admin from './Admin';
import { withRouter } from 'react-router';
import { StatelessComponent } from 'react';


const AdminContainer: StatelessComponent<{}> = props => {
  console.log(props);
  return <Admin />;
};

export default withRouter(AdminContainer);

