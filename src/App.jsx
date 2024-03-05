import Footer from './components/footer'
import Header from './components/header'
import Home from './pages/home'
import HireMe from './pages/hireMe'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <main className='relative sm:h-full'>
        <Header className=""/>
        <div className="relative sm:ml-16">
          <Routes>
            <Route path='/Portfolio/' element={<Home/>}></Route>
            <Route path='/hire-me' element={<HireMe title='hire-me'/>}></Route>
              {/* <Home className=""/> */}
            
          </Routes>
          <Footer className=""/>
        </div>
      </main>
    </Router>
  )
}

export default App
