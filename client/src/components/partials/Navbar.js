import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <div className="navbar-fixed">
      <nav className="z-depth-2">
        <div className="nav-wrapper white">
          <Link to="/" className="col s4 brand-logo center black-text" style={{ fontFamily: 'monospace' }}>
            {/* <i className="material-icons">code</i> TylerSilverman */}
            TylerSilverman
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
