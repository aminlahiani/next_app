
import Link from "next/link"
import Layouts from "../components/Layouts"

function index() {
    return (
        <Layouts title="Home">
            simple_app
            <Link href="/about">
                <h3>about</h3>
            </Link>
            </Layouts>
    )
}

export default index
