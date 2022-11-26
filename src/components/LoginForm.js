import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ErrorAlert } from './index';
import { signInWithEmailAndPassword } from 'firebase/auth';
import '../pages/style.css';

export default function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading] = useAuthState(auth);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password).catch((err) => {
      switch (err.code) {
        case !email:
          setError('Please enter an email');
          break;
        case !password:
          setError('Please enter a password');
          break;
        case 'auth/invalid-email':
          setError('Please enter a valid email');
          break;
        case 'auth/user-disabled':
          setError('This account has been disabled');
          break;
        case 'auth/user-not-found':
          setError('This account does not exist');
          break;
        case 'auth/wrong-password':
          setError('Incorrect password');
          break;
        default:
          setError('An error occurred');
      }
    });
  };

  const handleCancel = () => {
    setEmail('');
    setPassword('');
    navigate('/');
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/home');
  }, [user, loading, navigate]);

  return (
    <form className='form-group mt-2'>
      <div className='mt-4'>{error && <ErrorAlert details={error} />}</div>
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
      </div>
      <button
        type='button'
        className='btn btn-primary w-75 input-center mt-4 py-3'
        onClick={handleLogin}
      >
        <span className='h5'>Login</span>
      </button>
      <p className='text-center mt-4'>
        <Link to='/register' className='decoration-thickness text-black'>
          <span className='h5'>Cancel</span>
        </Link>
      </p>
    </form>
  );
}
