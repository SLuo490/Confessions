import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className=''>
      <Link to='/'>
        <button>Confessions</button>
      </Link>
    </nav>
  );
}
