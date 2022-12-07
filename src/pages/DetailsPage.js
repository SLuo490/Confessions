import { useAuthState } from 'react-firebase-hooks/auth';
import { ErrorAlert, Confession, Nav } from '../components';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth, db } from '../utils/firebase';

export default function DetailsPage() {
  const [post, setPost] = useState({ title: '', description: '' });
  const [comment, setComment] = useState('');
  const [allComment, setAllComment] = useState([]);
  const [error, setError] = useState('');
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  // get the post id from the url
  const location = useLocation();
  const id = location.pathname.split('/')[1];

  // submit comment
  const handleSubmit = async () => {
    const docRef = doc(db, 'posts', id);
    await updateDoc(docRef, {
      comments: arrayUnion({
        comment,
        createdAt: new Date(),
        user: user.uid,
        username: user.displayName,
      }),
    });
    setComment('');
  };

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
        {error && <ErrorAlert message={error} />}
        <Confession post={post} />
        <div>
          <div className='d-flex'>
            <input
              type='text'
              value={comment}
              placeholder='Write a comment'
              onChange={(e) => setComment(e.target.value)}
              className='form-control py-2'
            />
            <button onClick={handleSubmit} className='btn btn-success'>
              Submit
            </button>
          </div>
          <div className='py-3'>
            <h6>Comments</h6>
            {allComment.map((comment) => (
              <div>
                <div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
