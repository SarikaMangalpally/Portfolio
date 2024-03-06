import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'

export default function Layout () {
    return (
        <main className='relative sm:h-full'>
        <div>
            <Header/>
                <Outlet/>
            <Footer />
        </div>
        </main>
    )
}