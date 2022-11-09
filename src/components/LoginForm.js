import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../pages/style.css';

export default function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // const handleSignIn = async () => {
  //   try {
  //     await signInWithEmailAndPassword(auth, email, password)
  //       .then((userCredential) => {
  //         const user = userCredential.user;
  //         console.log(user);
  //         navigate('/home');
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         alert(errorCode, errorMessage);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className='form-group'>
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
      <button
        type='button'
        className='btn btn-primary w-75 input-center mt-4 py-2'
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
    </div>
  );
}
