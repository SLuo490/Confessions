import './style.css';
import { Nav, Confession } from '../components';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
import {
  collection,
  orderBy,
  getDocs,
  onSnapshot,
  query,
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
        <div className='d-flex flex-column'>
          <Confession />
          <Confession />
        </div>
      </div>
    </div>
  );
}
