import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();
  const [sub, setSub] = useState(false);

  return (
    <div className='col mt-5'>
      <div className='col-md-6 col-xs-12 m-auto'>
        <h5 className='text-center'>Sign Up</h5>
        <form>
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
            <small id='emailHelp' className='form-text text-muted'>
              We'll never share your email with anyone else.
            </small>
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
            <label htmlFor='exampleInputPassword1'>Confirm</label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Confirm'
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
            />
          </div>
          <div className='form-group form-check'>
            <input
              type='checkbox'
              className='form-check-input'
              id='exampleCheck1'
            />
            <label className='form-check-label' htmlFor='exampleCheck1'>
              Subscribed to our newsletter.
            </label>
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
          <br />
          <small>eror</small>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
