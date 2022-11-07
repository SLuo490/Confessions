export default function Form() {
  return (
    <div className='form-group'>
      <div className='w-75 input-center'>
        <label htmlFor='email'></label>
        <input
          type='email'
          className='form-control form-control-lg'
          id='email'
          placeholder='Email Address'
        />
      </div>
      <div className='w-75 input-center'>
        <label htmlFor='password'></label>
        <input
          type='password'
          className='form-control form-control-lg'
          id='password'
          placeholder='Password'
        />
      </div>
    </div>
  );
}
