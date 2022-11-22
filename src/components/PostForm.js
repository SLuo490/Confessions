import { auth, db } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { ErrorAlert } from './index';

export default function PostForm() {
  // state
  const [post, setPost] = useState({ description: '', title: '' });

  return (
    <div className='PostForm'>
      <form>
        {/* {error && <ErrorAlert details={error} />} */}
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
            <p className='text-muted'>{post.description.length}/600</p>
          </div>
        </div>
        <button
          type='submit'
          className='btn btn-primary mt-2 mx-4 float-end w-25 py-2'
          // onSubmit={handleSubmit}
        >
          Post
        </button>
      </form>
    </div>
  );
}
