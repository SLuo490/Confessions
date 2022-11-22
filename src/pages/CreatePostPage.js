import './style.css';
import Nav from '../components/Nav';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import { PostForm } from '../components';


export default function CreatePostPage() {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  // if user not logged in, redirect to login page
  useEffect(() => {
    const getData = async () => {
      if (loading) return;
      if (!user) return navigate('/login');
    };
    getData();
  }, [user, loading, navigate]);

  return (
    <div className='CreatePostPage'>
      <Nav />
      <div className='center'>
        <div className='container bg-white w-50 h-75 radius'>
          <h1 className='d-flex justify-content-center align-items-center mt-5 pb-3'>
            Create Post
          </h1>
          <PostForm />
        </div>
      </div>
    </div>
  );
}
