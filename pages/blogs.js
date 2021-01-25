
import Link from "next/link";
import Layouts from "../components/Layouts";

const PostLink = ({ slug, title }) => (
  <li>
    <Link as={`/${slug}`} href={`/blog?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

export default () => (
  <Layouts title="My Blog">
    <ul>
      <PostLink slug="react-post" title="React Post" />
      <PostLink slug="angular-post" title="Angular Post" />
      <PostLink slug="vue-post" title="Vue Post" />
    </ul>
  </Layouts>
);
