import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Home from './pages/home.jsx'
import HireMe from './pages/hireMe.jsx'
import MyWork from './pages/myWork.jsx'
import About from './pages/about.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/Portfolio' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='my-work' element={<MyWork />}/>
            <Route path='about' element={<About/>}/>
            <Route path='*' element={<p>Not found</p>}/>
            <Route path='hire-me' element={<HireMe />}/>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
