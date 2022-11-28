export default function Confession({ children, ...props }) {
  return (
    <div className='bg-white mt-5 p-3 rounded'>
      <div>
        <h5>{props.post.username}</h5>
        <p>{props.post.title}</p>
      </div>
      <div>
        <p>{props.post.description}</p>
      </div>
      {children}
    </div>
  );
}
