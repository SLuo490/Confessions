import '../style.css';
import { SignUpForm } from '../../components';
import { useState } from 'react';

export default function RegisterPage() {
  const [username, setUsername] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
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
  return (
    <div className='RegisterPage'>
      <div className='center'>
        <div className='container bg-white w-50 h-75 radius'>
          <h1 className='d-flex justify-content-center align-items-center mt-5 pb-3'>
            Sign Up
          </h1>
          <SignUpForm
            handleChange={handleChange}
            onClick={generateRandomCharacterUsername}
            username={username}
          />
        </div>
      </div>
    </div>
  );
}
