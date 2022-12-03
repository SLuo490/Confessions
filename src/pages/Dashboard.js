import { Confession, Nav } from '../components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth, db } from '../utils/firebase';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
export default function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // if user not logged in, redirect to login page
    const getData = async () => {
      if (loading) return;
      if (!user) return navigate('/login');

      // if user is logged in, get their posts
      const collectionRef = collection(db, 'posts');

      // query firestore to get posts where user id matches current user id
      const q = query(collectionRef, where('user', '==', user.uid));

      // use onSnapshot to listen to changes in the database on real time
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setPosts(data);
      });
      return unsubscribe;
    };
    getData();
  }, [user, loading, navigate]);

  return (
    <div>
      <Nav />
      <h1>Your Confessions</h1>
      <div className='container w-50'>
        <div className='d-flex flex-column'>
          {posts.map((post) => (
            <Confession key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
