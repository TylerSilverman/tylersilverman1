import React, { useEffect, useContext } from 'react';
import { Store } from '../../store';
// import { logoutUser } from '../../store/actions/authActions';

import API from '../../utils/apiHelper';

const Achievements = props => {
  const { state } = useContext(Store);
  const user = state.auth.user;

  useEffect(() => {
    if (!state.auth.isAuthenticated)
      props.history.push('/login');

    API.getUser()
    .then(res => console.log({ res }))
    .catch(err => console.log({ err }));
  }, [ state, props ]);

  // const onLogoutClick = e => {
  //   e.preventDefault();

  //   logoutUser(props.history)(dispatch);
  // };

  return (
    <div className="container valign-wrapper" style={{ height: '75vh' }}>
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            <b>Hey there,</b> {user.name.split(' ')[0]}
            <p className="flow-text grey-text text-darken-1">
               <span style={{ fontFamily: 'monospace' }}>Acheivements Below{' '}</span> 
            </p>
            <div class="card-body">
          <a href="https://github.com/TylerSilverman/TylerSilverman.github.io/files/6212765/Resume-Tyler.Silverman.pdf"
            class="btn btn-link">RoboArm Control</a>
            <p>Remote Access to DIY</p>
        </div>
          </h4>

        </div>
      </div>
    </div>
  );
};


export default Achievements;
