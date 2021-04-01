import React, { useEffect, useContext } from 'react';
import { Store } from '../../store';

import API from '../../utils/apiHelper';

const Search = props => {
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
    <div className="container valign-wrapper" style={{ height: 'auto' }}>
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            <b>Hey,{'  '}</b> {user.name.split(' ')[0]}
            {/* <p>Click to Download resume</p> */}
            <p>Need to Search Something?</p>
          </h4>
          <br></br><br></br><br></br>
        <div class="card-body">
         <input placeholder="search here"></input>
         <button>Search</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

