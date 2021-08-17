import React, { useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../../store';
import { registerUser, setErrors } from '../../store/actions/authActions';
import classnames from 'classnames';

const Contact = props => {
  const { state, dispatch } = useContext(Store);
  const errors = state.error;
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();

  useEffect(() => {
    if (state.auth.isAuthenticated)
      props.history.push('/dashboard');
  }, [ state, props ]);

  const onSubmit = e => {
    e.preventDefault();

    dispatch(setErrors({ response: { data: {} } }));

    const contactData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
    };

    registerUser(contactData, props.history)(dispatch);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s8 offset-s2">
          <div className="col s12" style={{ paddingLeft: '15.250px' }}>
          <b>Comment Here</b>         
          </div>
          <br></br>
          <br></br>
          <div class="card">
          <form noValidate onSubmit={onSubmit}>
            <div className="input-field col s12">
              <input ref={nameRef} error={errors.name} name="name" type="text"
                     className={classnames('', { invalid: errors.name })} />
              <label htmlFor="name">Name</label>
              <span className="red-text">{errors.name}</span>
            </div>
            <div className="input-field col s12">
              <input ref={emailRef} error={errors.email} name="email" type="email"
                     className={classnames('', { invalid: errors.email })} />
              <label htmlFor="email">Email</label>
              <span className="red-text">{errors.email}</span>
            </div>
            <div className="input-field col s12">
              <input ref={subjectRef} error={errors.subject} name="subject" type="text"
                     className={classnames('', { invalid: errors.subject })} />
              <label htmlFor="subject">Subject</label>
              <span className="red-text">{errors.subject}</span>
            </div>
            <div className="col s12" style={{ paddingLeft: '11.250px' }}>
              <button className="btn btn-large waves-effect waves-light hoverable blue accent-3" alert="Information Sent Successfully" style={{
                width: '150px',
                borderRadius: '3px',
                letterSpacing: '1.5px',
                marginTop: '1rem',
              }} type="submit">
                Submit
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
