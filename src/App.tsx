import { Outlet } from 'react-router'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  // const listItems = ['About', 'Projects', 'Case Studies', 'Services', 'blog'];
  return (
    <>
      <Header />
      {/* <Navbar navList={listItems}/> */}
      <div className='z-0'>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
