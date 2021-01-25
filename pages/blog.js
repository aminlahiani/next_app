
import { withRouter } from "next/router";
import Layouts from "../components/Layouts";

const Post = ({ router }) => (
  <Layouts title={router.query.title}>
    <p style={{ width: "80vw" }}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
      eaque! Ad explicabo eum cumque, voluptate quaerat perferendis eligendi
      eveniet sint dolorem in odit sed mollitia, eos rerum, quod saepe atque!
    </p>
  </Layouts>
);

export default withRouter(Post);
