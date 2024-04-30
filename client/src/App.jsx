import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

export default function App() {
  const {authUser} = useAuthContext()

  return (
    <div className="p-4 h-screen flex justify-center items-center">
      <Routes>
        <Route path='/signin' element={authUser ? <Navigate to='/' /> : <Signin />} />
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
        <Route path='/' element={authUser ? <Home /> : <Navigate to='/signin' />} />
      </Routes>
      <Toaster />
    </div>
  )
}