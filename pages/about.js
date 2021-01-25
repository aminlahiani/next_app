import React from 'react'
import Link from "next/link"
function about() {
    return (
        <div>
            <h1>About</h1>
            <Link href="/">
                <h3>home</h3>
            </Link>
        </div>
    )
}

export default about
