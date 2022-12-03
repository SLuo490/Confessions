import { Confession, Nav } from '../components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth, db } from '../utils/firebase';
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { BsTrash2Fill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';
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

  // Delete Post
  const deletePost = async (id) => {
    const postRef = doc(db, 'posts', id);
    await deleteDoc(postRef);
  };

  return (
    <div>
      <Nav />
      <h2 className='text-center pt-4'>Your Confessions</h2>
      <div className='container w-50'>
        <div className='d-flex flex-column'>
          {posts.map((post) => (
            <Confession key={post.id} post={post}>
              <div className='d-flex'>
                <button type='button' className='btn ps-2 btn-success me-3'>
                  <AiFillEdit /> Edit
                </button>
                <button
                  type='button'
                  className='btn ps-2 btn-danger'
                  onClick={() => deletePost(post.id)}
                >
                  <BsTrash2Fill /> Delete
                </button>
              </div>
            </Confession>
          ))}
        </div>
      </div>
    </div>
  );
}
