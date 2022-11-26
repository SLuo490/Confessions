import { auth, db } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { ErrorAlert } from './index';
import { useNavigate } from 'react-router-dom';

export default function PostForm() {
  const [post, setPost] = useState({ title: '', description: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // if user clicks cancel button, redirect to home page
  const handleCancel = () => {
    setPost({ title: '', description: '' });
    navigate('/home');
  };

  return (
    <div className='PostForm'>
      {error && <ErrorAlert details={error} />}
      <form>
        <div className='form-group mx-4 mt-4'>
          <input
            type='text'
            className='form-control mb-3'
            id='title'
            placeholder='Enter title'
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
          <textarea
            className='form-control rounded'
            id='post'
            rows='10'
            placeholder='What is on your mind?'
            value={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
          ></textarea>
          {/* update letter count when user is typing */}
          <div className='d-flex justify-content-end'>
            <p className='text-muted'>{post.description.length}/800</p>
          </div>
        </div>
        <button
          type='submit'
          className='btn btn-primary mx-4 w-25 py-2'
          // onSubmit={handleSubmit}
        >
          Post
        </button>
        <button
          type='submit'
          className='btn btn-secondary mx-4 w-25 py-2'
          onClick={handleCancel}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
