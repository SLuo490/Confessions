import { Link } from 'react-router-dom';
import '../pages/style.css';

export default function Form() {
  return (
    <div className='form-group'>
      <div className='username d-flex justify-content-center'>
        <div className='w-37 margin-x'>
          <label htmlFor='text'></label>
          <input
            type='text'
            className='form-control form-control-lg py-3'
            id='text'
            placeholder='Username'
          />
        </div>
        <div className='w-37 margin-x'>
          <label htmlFor='button'></label>
          <input
            type='button'
            className='form-control form-control-lg py-3 text-black btn-hover bg-color-celadon-blue text-white transition'
            id='text'
            value='Generate Username'
          />
        </div>
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
