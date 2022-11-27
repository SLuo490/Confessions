import '../style.css';
import { RegisterForm, Nav } from '../../components';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <div className='RegisterPage'>
      <Nav />
      <div className='container-md background-style'>
        <div className='row form-style'>
          <div className='col'>
            <div className='login-form'>
              <h1 className='text-center mt-5'>Sign Up</h1>
              <p className='text-center mt-3'>
                Have an account?
                <Link to='/login' className='text-decoration-none'>
                  <span className='color-imperial-red'> Log In</span>
                </Link>
              </p>
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
