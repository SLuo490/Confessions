import '../style.css';
import { RegisterForm } from '../../components';

export default function RegisterPage() {
  return (
    <div className='RegisterPage'>
      <div className='center'>
        <div className='container bg-white w-50 h-75 radius'>
          <h1 className='d-flex justify-content-center align-items-center mt-5 pb-3'>
            Sign Up
          </h1>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
