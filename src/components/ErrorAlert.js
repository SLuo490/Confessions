export default function ErrorAlert({ details }) {
  return (
    <div className='d-flex justify-content-center mt-3'>
      <div className='alert alert-danger' role={'alert'}>
        <strong>An error occurred</strong> {details || ''}
      </div>
    </div>
  );
}
