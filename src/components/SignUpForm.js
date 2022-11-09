import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { registerWithEmailAndPassword } from '../utils/firebase';
import '../pages/style.css';

export default function Form() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    if (!username) {
      return alert('Please enter a username');
    } else if (!email) {
      return alert('Please enter an email');
    } else if (!password) {
      return alert('Please enter a password');
    }
    registerWithEmailAndPassword(username, email, password);
    navigate('/home');
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
