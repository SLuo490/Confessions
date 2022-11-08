import './style.css';
import { Link } from 'react-router-dom';
import { Form } from '../components/index';

export default function LoginPage() {
  return (
    <div className='LoginPage'>
      <div className='center'>
        <div className='container bg-white w-50 h-75 radius'>
          <h1 className='d-flex justify-content-center align-items-center mt-5'>
            Sign In
          </h1>
          <div className='create d-flex justify-content-center align-items-center mt-4'>
            <h6 className='pe-3 color-celadon-blue'>New to Confessions?</h6>
            <h6>
              <Link
                className='color-imperial-red text-decoration-none'
                to='/register'
              >
                Create an account here
              </Link>
            </h6>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
}
