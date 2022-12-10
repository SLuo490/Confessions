import './style.css';
import { Nav, Confession } from '../components';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db, getDoc, doc } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState, useEffect } from 'react';
import {
  collection,
  orderBy,
  onSnapshot,
  query,
  Firestore,
} from 'firebase/firestore';

export default function HomePage() {
  const [user, loading] = useAuthState(auth);
  const [allPost, setAllPost] = useState([]);
  const navigate = useNavigate();

  const getPost = async () => {
    const collectionRef = collection(db, 'posts');
    const q = query(collectionRef, orderBy('createdAt', 'desc'));

    // use onSnapshot to listen to changes in the database on real time
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setAllPost(data);
    });
    return unsubscribe;
  };

  useEffect(() => {
    getPost();
  }, []);

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
      <div className='container w-50'>
        <h2 className='text-center pt-4'>Confessions</h2>
        <p className='text-center pt-2'>See what people are saying!</p>
        <div className='d-flex flex-column'>
          {allPost.map((post) => (
            <Confession key={post.id} post={post}>
              <Link to={{ pathname: `/${post.id}` }}>
                <button className='btn btn-secondary'>
                  {post.comments.length} Comments
                </button>
              </Link>
            </Confession>
          ))}
        </div>
      </div>
    </div>
  );
}
