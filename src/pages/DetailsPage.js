import { useAuthState } from 'react-firebase-hooks/auth';
import { ErrorAlert, Confession, Nav } from '../components';
import { doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth, db } from '../utils/firebase';

export default function DetailsPage() {
  const [post, setPost] = useState({ title: '', description: '' });
  const [allPost, setAllPost] = useState([]);
  const [error, setError] = useState('');
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  // get the post id from the url
  const location = useLocation();
  const id = location.pathname.split('/')[1];

  // pull post data from firestore
  useEffect(() => {
    const getData = async () => {
      if (loading) return;
      if (!user) return navigate('/login');

      const docRef = await getDoc(doc(db, 'posts', id));
      const docData = docRef.data();
      setPost(docData);
    };
    getData();
  }, [user, loading, navigate, id]);

  return (
    <div>
      <Nav />
      <div className='container w-50'>
        <Confession post={post} />
      </div>
    </div>
  );
}
