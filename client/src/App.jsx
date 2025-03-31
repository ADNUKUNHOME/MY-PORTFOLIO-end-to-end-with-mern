
import { Route, Routes } from 'react-router-dom'
import Layout from './components/auth/Layout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ResetPassword from './pages/auth/resetPassword'

function App() {

  return (
    <div className='flex flex-col overflow-hidden'>
      <Routes>
        <Route path='/auth' element={<Layout />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='reset-password' element={<ResetPassword />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
