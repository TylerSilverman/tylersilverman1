import React, { useEffect, useContext } from 'react';
import { Store } from '../../store';

import API from '../../utils/apiHelper';

const Resume = props => {
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
               <span style={{ fontFamily: 'monospace' }}>Resume Below{' '}</span> 
            </p>
            <div class="card-body">
            <a href="https://github.com/TylerSilverman/TylerSilverman.github.io/files/6657776/TylerSilverman-Resume.pdf" target="_blank"><i class="btn btn-small yelloe" onClick={() => {
          console.info("Button Directs to download Resume for PDF");
        }}>Click Here to Download PDF File</i></a>
        </div>
          </h4>

        </div>
      </div>
    </div>
  );
};

export default Resume;