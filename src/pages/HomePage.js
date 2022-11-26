import './style.css';
import Nav from '../components/Nav';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';

export default function HomePage() {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    // if user not logged in, redirect to login page
    const getData = async () => {
      if (loading) return;
      if (!user) return navigate('/login');
    };

    getData();
  }, [user, loading, navigate]);

  return (
    <div className='HomePage'>
      <Nav />
      <div className='container w-50 bg-white'>Hello</div>
    </div>
  );
}
