import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='navbar bg-light'>
      <div className='container-fluid'>
        <Link to='/'>
          <button>Confessions</button>
        </Link>
      </div>
    </nav>
  );
}
