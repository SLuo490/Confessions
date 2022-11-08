import { Link } from 'react-router-dom';
import '../pages/style.css';

export default function Form({ username, handleChange, onClick }) {
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
          onClick={onClick}
        />
      </div>

      <div className='w-75 input-center'>
        <label htmlFor='email'></label>
        <input
          type='email'
          className='form-control form-control-lg py-3'
          id='email'
          placeholder='Email Address'
        />
      </div>
      <div className='w-75 input-center'>
        <label htmlFor='password'></label>
        <input
          type='password'
          className='form-control form-control-lg py-3'
          id='password'
          placeholder='Password'
        />
      </div>
      <Link to='/home'>
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
