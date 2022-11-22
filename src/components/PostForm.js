import { auth, db } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { ErrorAlert } from './index';

export default function PostForm() {
  const [user] = useAuthState(auth);
  const [post, setPost] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    if (post.length < 1) {
      setError('Post cannot be empty');
      return;
    }
    if (post.length > 280) {
      setError('Post cannot be more than 280 characters');
      return;
    }
    try {
      await addDoc(collection(db, 'posts'), {
        text: post,
        createdAt: new Date(),
        uid: user.uid,
        name: user.displayName,
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='PostForm'>
      <form>
        {error && <ErrorAlert details={error} />}
        <div className='form-group'>
          <textarea
            className='form-control'
            id='post'
            rows='3'
            placeholder='What is on your mind?'
            value={post}
            onChange={(e) => setPost(e.target.value)}
          ></textarea>
        </div>
        <button
          type='submit'
          className='btn btn-primary'
          onSubmit={handleSubmit}
        >
          Post
        </button>
      </form>
    </div>
  );
}
