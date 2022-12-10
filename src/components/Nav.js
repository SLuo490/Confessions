import { Link, useLocation, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logOut } from '../utils/firebase';
import '../pages/style.css';

export default function Nav() {
  const [user] = useAuthState(auth);
  const location = useLocation();
  const params = useParams();

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
              {location.pathname === '/login' ? (
                <Link to='/register'>
                  <button type='button' className='btn btn-outline-primary'>
                    Sign Up
                  </button>
                </Link>
              ) : (
                <Link to='/login' className='px-2'>
                  <button type='button' className='btn btn-outline-success'>
                    Login
                  </button>
                </Link>
              )}
            </div>
          ) : (
            <div>
              {location.pathname === '/create' ? (
                <div>
                  <Link to='/home'>
                    <button
                      type='button'
                      className='btn btn-outline-primary me-3'
                    >
                      Back
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
              ) : (
                <div>
                  {location.pathname === '/dashboard' ? (
                    <div>
                      <Link to='/home'>
                        <button
                          type='button'
                          className='btn btn-outline-primary me-3'
                        >
                          Back
                        </button>
                      </Link>
                      <Link to='/create'>
                        <button
                          type='button'
                          className='btn btn-outline-success me-3'
                        >
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
                  ) : (
                    <div>
                      {location.pathname === `/${params.slug}` ? (
                        <div>
                          <Link to='/home'>
                            <button
                              type='button'
                              className='btn btn-outline-primary me-3'
                            >
                              Back
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
                      ) : (
                        <div>
                          <Link to='/dashboard'>
                            <button
                              type='button'
                              className='btn btn-outline-primary me-3'
                            >
                              Dashboard
                            </button>
                          </Link>
                          <Link to='/create'>
                            <button
                              type='button'
                              className='btn btn-outline-success me-3'
                            >
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
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
