import { Link } from 'react-router-dom';
import '../pages/style.css';

export default function Nav() {
  return (
    <nav className='nav-bar bg-white'>
      <Link to='/'>
        <button type='button' className='btn color-celadon-blue'>
          Confessions
        </button>
      </Link>
    </nav>
  );
}
