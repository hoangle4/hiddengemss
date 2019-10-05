import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import authContext from '../../context/auth/AuthContext';
const LogIn = () => {
  const AuthContext = useContext(authContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handleOnSubmit = e => {
    e.preventDefault();
    AuthContext.loginUser({ email, password });
  };

  if (AuthContext.isAuthenticated) return <Redirect to='/' />;
  return (
    // eslint-disable-next-line
    <div className='col mt-5'>
      <div className='col-md-6 col-xs-12 m-auto'>
        <h5 className='text-center'>Sign In</h5>
        <form onSubmit={handleOnSubmit}>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Enter email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Password</label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <input type='submit' className='btn btn-primary' value='Submit' />
          </div>

          <div className='form-group'>
            <input
              type={`${AuthContext.error ? 'text' : 'hidden'}`}
              disabled
              className='alert alert-danger'
              value={AuthContext.error}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
