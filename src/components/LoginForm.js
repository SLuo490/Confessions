import { Link, useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword } from '../utils/firebase';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import '../pages/style.css';

export default function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const loginIn = () => {
    logInWithEmailAndPassword(email, password);
    navigate('/home');
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/home');
  }, [user, loading, navigate]);

  return (
    <form className='form-group validate-form' noValidate>
      <div className='w-75 input-center'>
        <label htmlFor='email'></label>
        <input
          type='email'
          className='form-control form-control-lg py-3'
          id='email'
          placeholder='Email Address'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div class='valid-feedback'>Looks good!</div>
      </div>
      <div className='w-75 input-center'>
        <label htmlFor='password'></label>
        <input
          type='password'
          className='form-control form-control-lg py-3'
          id='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div class='valid-feedback'>Looks good!</div>
      </div>
      <button
        type='button'
        className='btn btn-primary w-75 input-center mt-4 py-2'
        onClick={loginIn}
      >
        Log in
      </button>
      <Link to='/register'>
        <button
          type='button'
          className='btn btn-primary w-75 input-center mt-4 py-2'
        >
          Register
        </button>
      </Link>
    </form>
  );
}
