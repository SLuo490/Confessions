export default function Confession({ children, ...props }) {
  return (
    <div className='bg-white mt-4 p-3 rounded'>
      <div>
        <h2>Title: {props.post.title}</h2>
        <h6>{props.post.username}</h6>
      </div>
      <div>
        <p>{props.post.description}</p>
      </div>
      {children}
    </div>
  );
}
