
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './component/Signup'
import Login from './component/Login'
import Home from './component/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path='/login' element={<Login />} />
          {/*  check the main container to handle the main container to maintain the state */}
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
