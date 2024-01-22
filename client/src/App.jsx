
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SingIn from './pages/SingIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/sign-in' element={<SingIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/project' element={<Project/>}/>
    </Routes>
    </BrowserRouter>
  )
}
