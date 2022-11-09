import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import { logOut } from '../utils/firebase';
import '../pages/style.css';

export default function Nav() {
  const [user, loading] = useAuthState(auth);

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
          {!user ? (
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
          ) : (
            <div>
              <Link to='/create'>
                <button type='button' className='btn btn-outline-primary me-3'>
                  Create
                </button>
              </Link>
              <button
                type='button'
                className='btn btn-outline-danger'
                onClick={logOut}
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
