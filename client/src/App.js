import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  AboutUsPage,
  CreatePostPage,
  EditPostPage,
  HomePage,
  LoginPage,
  RegisterPage,
  LandingPage,
} from './pages/index';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        {/* Nav bar goes here */}
        <Routes>
          <Route exact path='/Landing' element={<LandingPage />} />
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/register' element={<RegisterPage />} />
          <Route exact path='/create' element={<CreatePostPage />} />
          <Route exact path='/edit/:id' element={<EditPostPage />} />
          <Route exact path='/about' element={<AboutUsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
