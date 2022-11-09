import './style.css';
import Nav from '../components/Nav';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function HomePage() {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  if (loading) return;
  if (!user) navigate('/login');

  return (
    <div className='HomePage'>
      <Nav />
      <div className='container w-50 bg-white'>Home</div>
    </div>
  );
}
