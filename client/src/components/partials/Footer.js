// import React from 'react';

// const Footer = props => {
//   const year = new Date().getFullYear();

//   return (
//     <div>
//       <p>&copy; {year} Tyler Silverman</p>
//     </div>
//   );
// };

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => {
  const year = new Date().getFullYear();
  return (
    <div className="navbar-fixed">
      <nav className="z-depth-0">
        <div className="nav-wrapper white">
          <Link to="/" className="col s4 brand-logo center black-text" style={{ fontFamily: 'monospace' }}>
          <p>&copy; {year}</p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
