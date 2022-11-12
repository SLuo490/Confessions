import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../utils/firebase';
import { ErrorAlert } from './index';
import { collection, addDoc } from 'firebase/firestore';
import '../pages/style.css';

export default function Form() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const generateRandomCharacterUsername = () => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.';
    let randomUsername = '';
    let randomNum = Math.floor(Math.random() * 10) + 6;
    for (let i = 0; i < randomNum; i++) {
      randomUsername += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setUsername(randomUsername);
  };

  const register = () => {
    // if there is no username or password display error
    if (!username) {
      setError('Please enter a username');
    } else if (!password) {
      setError('Please enter a password');
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          const user = res.user;
          addDoc(collection(db, 'users'), {
            uid: user.uid,
            name: username,
            email,
          });
          navigate('/home');
        })
        .catch((err) => {
          switch (err.code) {
            case 'auth/email-already-in-use':
              setError('This email is already in use');
              break;
            case 'auth/invalid-email':
              setError('Please enter a valid email');
              break;
            case 'auth/weak-password':
              setError('Password must be at least 6 characters');
              break;
            default:
              setError('An error occurred');
          }
        });
    }
  };

  return (
    <div className='form-group'>
      {error && <ErrorAlert details={error} />}
      <div className='username d-flex justify-content-center'>
        <label htmlFor='text'></label>
        <input
          type='text'
          className='form-control form-control-lg py-3 w-50'
          id='text'
          placeholder={'Username'}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor='button'></label>
        <input
          type='button'
          className='button py-3 text-black btn-hover bg-color-celadon-blue text-white transition w-25 border-0'
          id='button'
          value='Generate Username'
          onClick={generateRandomCharacterUsername}
        />
      </div>

      <div className='w-75 input-center'>
        <label htmlFor='email'></label>
        <input
          type='email'
          className='form-control form-control-lg py-3'
          id='email'
          placeholder='Email Address'
          onChange={(e) => setEmail(e.target.value)}
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
        />
      </div>
      <button
        type='button'
        className='btn btn-primary w-75 input-center mt-4 py-2'
        onClick={register}
      >
        Register
      </button>
    </div>
  );
}
