import { useAuthState } from 'react-firebase-hooks/auth';
import { ErrorAlert, Confession, Nav } from '../components';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth, db } from '../utils/firebase';
import uuid from 'react-uuid';

export default function DetailsPage() {
  const [post, setPost] = useState({ title: '', description: '' });
  const [comment, setComment] = useState('');
  const [allComment, setAllComment] = useState([]);
  const [error, setError] = useState('');
  const [user, loading] = useAuthState(auth);
  const [refreshData, setRefreshData] = useState(false);
  const [commentCount, setCommentCount] = useState(0);

  const navigate = useNavigate();

  // get the post id from the url
  const location = useLocation();
  const id = location.pathname.split('/')[1];

  // submit comment to firestore
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

  useEffect(() => {
    // get comment from firestore
    const getComments = async () => {
      const docRef = await getDoc(doc(db, 'posts', id));
      const docData = docRef.data();
      setAllComment(docData.comments);
      setRefreshData(!refreshData);
    };

    getComments();
  }, [refreshData, id]);

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
          <div className='mt-3'>
            <h5 className='ps-1'>Comments: </h5>
            {Array.isArray(allComment) && allComment.length > 0 ? (
              allComment.map((comment) => (
                <div
                  className='bg-white px-2 mt-3 border border-2'
                  key={uuid()}
                >
                  <div className='py-2'>
                    <div>{comment.username}</div>
                  </div>
                  <p className='pb-2'>{comment.comment}</p>
                </div>
              ))
            ) : (
              <div className='text-center'>No comments yet</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
