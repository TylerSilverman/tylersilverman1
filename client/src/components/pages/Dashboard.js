import React, { useEffect, useContext } from 'react';
import { Store } from '../../store';

import API from '../../utils/apiHelper';

const Dashboard = props => {
  const { state } = useContext(Store);
  const user = state.auth.user;

  useEffect(() => {
    if (!state.auth.isAuthenticated)
      props.history.push('/login');

    API.getUser()
    .then(res => console.log({ res }))
    .catch(err => console.log({ err }));
  }, [ state, props ]);

 
  return (
    <div className="container valign-wrapper" style={{ height: '75vh' }}>
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            <b>Hey there,</b> {user.name.split(' ')[0]}
            <p className="flow-text grey-text text-darken-1">
               <span style={{ fontFamily: 'monospace' }}>{' '}</span> 
            </p>
            <p className="flow-text grey-text text-darken-1">
               <span style={{ fontFamily: 'monospace' }}> My name is Tyler Silverman. Please feel free to click around the site and see some of the work I have done. {' '}</span> 
            </p>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
