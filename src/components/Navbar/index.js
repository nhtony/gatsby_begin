import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/blog'>Blog</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
                <li>
                    <Link to='/example'>Example</Link>
                </li>
                <li>
                    <Link to='/images'>Images</Link>
                </li>
            </ul>
        </nav>
    )
}
