import Layouts from '../components/Layouts'
import Link from "next/link"
export default function Posts({posts}) {
    return (
        <Layouts title="About">
         {console.log(posts)}

             {posts.map((post) => (
                 <ul key={post.id}>

        <li>  <Link href={`/post/${post.id}`}>{post.title}</Link></li>
        </ul>
      ))}
            </Layouts>
    )
}
Posts.getInitialProps = async (ctx) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    //const json = await res.json()
    const posts = await res.json();
    return {posts: posts}
  }

