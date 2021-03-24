import React, { useContext } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';

const Landing = props => {
  const { state } = useContext(Store);

  console.log({ state, props });

  return (
    <div className="container valign-wrapper" style={{ height: '80vh' }}>
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            <b>Welcome</b>{' '}
          </h4>
          <br />
          <div className="col s4">
            <Link to="/register" className="btn btn-small waves-effect waves-light hoverable  accent-3" style={{
              width: '140px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
            }}>
              Register
            </Link>
          </div>
          <div className="col s4">
            <Link to="/login" className="btn btn-small waves-effect waves-light hoverable  accent-4" style={{
              width: '140px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
            }}>
              Login
            </Link>
          </div>
          <div className="col s4">
            <Link to="/portfolio" className="btn btn-small waves-effect waves-light hoverable  accent-3" style={{
              width: '140px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
            }}>
              Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
