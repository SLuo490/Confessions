import { Link } from 'react-router-dom';
import { LoginForm } from '../../components';
import { Nav } from '../../components';
import '../style.css';

export default function LoginPage() {
  return (
    <div className='LoginPage'>
      <Nav />
      <div className='container-fluid background-style'>
        <div className='row form-style'>
          <div className='col'>
            <div className='login-form'>
              <h1 className='text-center mt-5'>Login</h1>
              <p className='text-center mt-3'>
                Don't have an account?{' '}
                <Link to='/register' className='text-decoration-none'>
                  <span className='color-imperial-red'>Sign Up</span>
                </Link>
              </p>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
