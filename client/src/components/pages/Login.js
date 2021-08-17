import React, { useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../../store';
import { loginUser, setErrors } from '../../store/actions/authActions';
import classnames from 'classnames';

const Login = props => {
  const { state, dispatch } = useContext(Store);
  const errors = state.error;
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    if (state.auth.isAuthenticated)
      props.history.push('/dashboard');
  }, [ state, props ]);

  const onSubmit = e => {
    e.preventDefault();

    dispatch(setErrors({ response: { data: {} } }));

    const userData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    loginUser(userData, props.history)(dispatch);
  };

  return (
    <div className="container">
      <div className="row" style={{ marginTop: '4rem' }}>
        <div className="col s8 offset-s2">
          <Link to="/" className="btn-flat waves-effect">
            <i className="material-icons left">keyboard_backspace</i> Back to Portfolio
          </Link>
          <p className="grey-text text-darken-1">
              {/* Comment Here  */}
              <Link to="/contact">Click Here to Submit Contact Info</Link>
          </p>
          <div className="col s12" style={{ paddingLeft: '11.250px' }}>
            <h4>
              <b>Login</b>
            </h4>
            {/* //link for the register/comment tab */}
          </div>
          <form noValidate onSubmit={onSubmit}>
            <div className="input-field col s12">
              <input ref={emailRef} error={errors.incorrect} name="email" type="email"
                     className={classnames('', { invalid: errors.incorrect })} />

              <label htmlFor="email">Email</label>

              <span className="red-text">{errors.incorrect}</span>
            </div>

            <div className="input-field col s12">
              <input ref={passwordRef} error={errors.incorrect} name="password" type="password"
                     className={classnames('', { invalid: errors.incorrect })} />
              <label htmlFor="password">Password</label>
            </div>

            <div className="col s12">
              <span className="red-text">{errors.message}</span>
            </div>

            <div className="col s12" style={{ paddingLeft: '11.250px' }}>
              <button
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                style={{
                  width: '150px',
                  borderRadius: '3px',
                  letterSpacing: '1.5px',
                  marginTop: '1rem',
                  alignContent: 'center',
                }}
                type="submit">
                Login
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
