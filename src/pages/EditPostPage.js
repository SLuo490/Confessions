import './style.css';
import Nav from '../components/Nav';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function EditPostPage() {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  if (loading) return;
  if (!user) navigate('/login');
  return (
    <div className='EditPostPage'>
      <Nav />
      EditPost
    </div>
  );
}
