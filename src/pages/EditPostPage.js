import { EditForm, Nav } from '../components';

export default function EditPostPage() {
  return (
    <div>
      <Nav />
      <div className='container-fluid background-style'>
        <div className='row form-style'>
          <div className='col'>
            <div className='login-form'>
              <h1 className='text-center mt-3'>Edit post</h1>
              <EditForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
