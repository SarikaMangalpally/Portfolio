import Footer from './components/footer'
import Header from './components/header'
import Home from './pages/home'

function App() {
  return (
    <main className='relative sm:h-full'>
      <Header className=""/>
      <div className="relative sm:ml-16">
        <Home className=""/>
        <Footer className=""/>
      </div>
    </main>
  )
}

export default App
