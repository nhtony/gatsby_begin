import React from 'react'
import { Navbar, Footer } from '../'

export default function BaseLayout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
