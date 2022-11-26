export default function ErrorAlert({ details }) {
  return (
    <div className='d-flex justify-content-center mt-2'>
      <div className='alert alert-danger w-50 text-center' role={'alert'}>
        <strong>An error occurred: </strong> {details || ''}
      </div>
    </div>
  );
}
