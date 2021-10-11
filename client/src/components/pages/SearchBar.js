import React, { useEffect, useContext } from 'react';
import { Store } from '../../store';

import API from '../../utils/apiHelper';

const SearchBar = props => {
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

            <div class="card">
            <a href="https://github.com/TylerSilverman/TylerSilverman.github.io/files/6657776/TylerSilverman-Resume.pdf" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Successfully downloaded my resume"),
              console.info("resume");
            }}>Tech - Resume</a>
          </div>
          <div class="card">
            <a href="https://github.com/TylerSilverman/TylerSilverman.github.io/files/7325176/TylerSilverman-Resume2021.pdf" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Successfully downloaded my resume"),
              console.info("resume");
            }}>Resume</a>
          </div>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;