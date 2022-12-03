import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  CreatePostPage,
  HomePage,
  LoginPage,
  RegisterPage,
  LandingPage,
  Dashboard,
  EditPostPage,
} from './pages/index';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        {/* Nav bar goes here */}
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/Home' element={<HomePage />} />
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/register' element={<RegisterPage />} />
          <Route exact path='/create' element={<CreatePostPage />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/edit/:id' element={<EditPostPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
