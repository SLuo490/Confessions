export default function Confession({ children, ...props }) {
  return (
    <div className='bg-white mt-4 p-3 rounded'>
      <div>
        <h6>{props.post.username}</h6>
        <p>Title: {props.post.title}</p>
      </div>
      <div>
        <p>{props.post.description}</p>
      </div>
      {children}
    </div>
  );
}
