import { Link } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import '../pages/style.css';

export default function Form() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

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

  // create user with email and password
  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateUserName();
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    } catch (error) {
      console.log(error);
    }
  };

  // update user's username
  const updateUserName = async () => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: username,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='form-group'>
      <div className='username d-flex justify-content-center'>
        <label htmlFor='text'></label>
        <input
          type='text'
          className='form-control form-control-lg py-3 w-50'
          id='text'
          placeholder={'Username'}
          value={username}
          onChange={handleChange}
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
          onChange={handleChangeEmail}
        />
      </div>
      <div className='w-75 input-center'>
        <label htmlFor='password'></label>
        <input
          type='password'
          className='form-control form-control-lg py-3'
          id='password'
          placeholder='Password'
          onChange={handleChangePassword}
        />
      </div>
      <Link to='/home'>
        <button
          type='button'
          className='btn btn-primary w-75 input-center mt-4 py-2'
          onClick={handleSignUp}
        >
          Register
        </button>
      </Link>
    </div>
  );
}
