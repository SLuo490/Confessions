import { Nav } from '../components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from '../utils/firebase';

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    // if user not logged in, redirect to login page
    const getData = async () => {
      if (loading) return;
      if (!user) return navigate('/login');
    };
    getData();
  }, [user, loading, navigate]);

  return (
    <div>
      <Nav />
      <h1>Dashboard</h1>
    </div>
  );
}
