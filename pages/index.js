
import Link from "next/link"
import Layouts from "../components/Layouts"
import Image from 'next/image'
function index() {
    return (
        <Layouts title="Home">
            simple_app
            <Link href="/about">
                <h3>about</h3>
            </Link>
            <Image src="/static/next.png" 
            alt="Picture of the author"
            width={500}
            height={200}/>
            </Layouts>
    )
}

export default index
