export default function Confession({ children, ...props }) {
  return (
    <div className='bg-white mt-5 p-3 rounded'>
      <div>
        <h5>Username</h5>
        <p>Title</p>
      </div>
      <div>
        <p>Content</p>
      </div>
      {children}
    </div>
  );
}
