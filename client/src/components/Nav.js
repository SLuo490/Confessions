import { Link } from 'react-router-dom';
import '../pages/style.css';

export default function Nav() {
  return (
    <nav className='nav-bar bg-white py-2'>
      <div className='container-fluid'>
        <div className='d-flex justify-content-between align-items-center'>
          <Link to='/'>
            <button
              type='button'
              className='btn navbar-brand color-celadon-blue'
            >
              Confessions
            </button>
          </Link>
          <div className='auth'>
            <Link to='/login' className='px-2'>
              <button type='button' className='btn btn-outline-success'>
                Login
              </button>
            </Link>
            <Link to='/register'>
              <button type='button' className='btn btn-outline-primary'>
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
