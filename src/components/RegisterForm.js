import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db, collection, addDoc } from '../utils/firebase';
import { ErrorAlert } from './index';
import { useAuthState } from 'react-firebase-hooks/auth';
import '../pages/style.css';

export default function Form() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const generateRandomCharacterUsername = () => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.';
    let randomUsername = '';
    for (let i = 0; i < 6; i++) {
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
    } else if (!email) {
      setError('Please enter an email');
    } else if (!password) {
      setError('Please enter a password');
    } else {
      // if there is a username and password, create user
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // update the username
          const user = userCredential.user;
          updateProfile(user, {
            displayName: username,
          });
          // add user to firestore
          addDoc(collection(db, 'users'), {
            username: username,
            email: email,
            uid: user.uid,
          });
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

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/home');
  }, [user, loading, navigate]);

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
