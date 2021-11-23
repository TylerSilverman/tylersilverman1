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
            </h4>
            <br></br><br></br><br></br><br></br><br></br><br></br>
          <div class="card">
            <a href="https://google.com" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Redirecting to Google"),
              console.info("google");
            }}>Google</a>
          </div>
          <div class="card">
            <a href="https://yahoo.com" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Redirecting to yahoo"),
              console.info("yahoo");
            }}>Yahoo</a>
          </div>
          <div class="card">
            <a href="https://cnn.com" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Redirecting to CNN Stocks"),
              console.info("cnn");
            }}>CNN Stocks</a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SearchBar;