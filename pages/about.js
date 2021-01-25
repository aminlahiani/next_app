import Layouts from "../components/Layouts";
import Error from "./_error";
export default function About({ user, statusCode }) {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }
  return (
    <Layouts title="About">
      <h1>{console.log(user)}</h1>
      <h3>{user.login}</h3>
      <img src={user.avatar_url} alt="Reed" height="200px" />
    </Layouts>
  );
}
About.getInitialProps = async (ctx) => {
  const res = await fetch("https://api.github.com/users/aminlahiani");
  const statusCode = res.status > 200 ? res.status : false;
  const data = await res.json();

  return { user: data, statusCode };
};
