import './style.css';
import Nav from '../components/Nav';

export default function HomePage() {
  return (
    <div className='HomePage'>
      <Nav />
      <div className='container w-50 bg-white'>Home</div>
    </div>
  );
}
