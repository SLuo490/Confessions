import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth, db } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ErrorAlert } from '../components';
import { doc, updateDoc, getDoc } from 'firebase/firestore';

export default function EditForm() {
  const [post, setPost] = useState({ title: '', description: '' });
  const [error, setError] = useState('');
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  // Get the post id from url
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  // if user clicks cancel button, redirect to home page
  const handleCancel = () => {
    setPost({ title: '', description: '' });
    navigate('/home');
  };

  // if user clicks submit button, add post to firestore
  const handleSubmit = async (e) => {
    e.preventDefault();

    // checks for empty fields
    if (!post.title || !post.description) {
      setError('Please fill out all fields');
      return;
    }

    // check if description is too long
    if (post.description.length > 600) {
      setError('Description must be less than 600 characters');
      return;
    }

    // edit the post in firestore
    const docRef = doc(db, 'posts', id);
    await updateDoc(docRef, {
      ...post,
      createdAt: new Date(),
      user: user.uid,
      username: user.displayName,
    });
    setPost({ title: '', description: '' });
    return navigate('/home');
  };

  // pull post data from firestore
  useEffect(() => {
    const getData = async () => {
      if (loading) return;
      if (!user) return navigate('/login');
      // get post data from firestore
      const docRef = await getDoc(doc(db, 'posts', id));
      const docData = docRef.data();
      setPost(docData);
    };
    getData();
  }, [user, loading, navigate, id]);

  return (
    <div className='EditForm'>
      {error && <ErrorAlert details={error} />}
      <form>
        <div className='form-group mx-4 mt-4'>
          <input
            type='text'
            className='form-control mb-3'
            id='title'
            placeholder='Enter title'
            defaultValue={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
          <textarea
            className='form-control rounded'
            id='post'
            rows='10'
            placeholder='What is on your mind?'
            defaultValue={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
          ></textarea>
          {/* update letter count when user is typing */}
          <div className='d-flex justify-content-end'>
            <p
              className={`${
                post.description.length > 600 ? 'text-danger' : 'text-muted'
              }`}
            >
              {post.description.length}/600
            </p>
          </div>
        </div>
        <button
          type='submit'
          className='btn btn-primary mx-4 w-25 py-2'
          onClick={handleSubmit}
        >
          Edit
        </button>
        <button
          type='submit'
          className='btn btn-secondary w-25 py-2'
          onClick={handleCancel}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
