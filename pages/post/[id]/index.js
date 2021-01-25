import Layouts from "../../../components/Layouts";

export default function PostId({ title, body }) {
  return (
    <Layouts>
      <h1> {title}</h1>
      <h5>{body}</h5>
    </Layouts>
  );
}

PostId.getInitialProps = async ({ query }) => {
  const res = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${query.id}`
  );
  const post = await res.json();

  return post;
};
