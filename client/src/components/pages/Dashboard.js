import React, { useEffect, useContext } from 'react';
import { Store } from '../../store';
import { logoutUser } from '../../store/actions/authActions';

import API from '../../utils/apiHelper';

const Dashboard = props => {
  const { state, dispatch } = useContext(Store);
  const user = state.auth.user;

  useEffect(() => {
    if (!state.auth.isAuthenticated)
      props.history.push('/login');

    API.getUser()
    .then(res => console.log({ res }))
    .catch(err => console.log({ err }));
  }, [ state, props ]);

  const onLogoutClick = e => {
    e.preventDefault();

    logoutUser(props.history)(dispatch);
  };

  return (
    <div className="container valign-wrapper" style={{ height: 'auto' }}>
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            <b>Welcome to my Personal Application,</b> {user.name.split(' ')[0]}
            <br></br>
            <br></br>
            <br></br>
            <b>Below you can navigate throughout the site</b>
            <br></br>
            <br></br>
            <br></br>
            <p className="flow-text grey-text text-darken-1">
              Contact Information{' '}
            </p>
            <p className="flow-text grey-text text-darken-1">
              Acheivements{' '}
            </p>
            <p className="flow-text grey-text text-darken-1">
              Resume{' '}
            </p>
            <p className="flow-text grey-text text-darken-1">
              Silverman All Around{' '}
            </p>
            <p className="flow-text grey-text text-darken-1">
              Romote{' '}
            </p>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
