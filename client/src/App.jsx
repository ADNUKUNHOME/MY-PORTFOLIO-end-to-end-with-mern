
import { Route, Routes } from 'react-router-dom'
import Layout from './components/auth/Layout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ResetPassword from './pages/auth/resetPassword'
// import CheckAuth from './common/checkAuth'
import UserLayout from './components/userView/Layout'
import Home from './pages/user/Home'
import About from './pages/user/About'
import Projects from './pages/user/Projects'
import Skills from './pages/user/Skills'
import BlogUser from './pages/user/BlogUser'
import Contact from './pages/user/Contact'
import EmailVerify from './pages/auth/emailVerify'
import AdminDashboard from './pages/admin/dashboard'
import AdminLayout from './components/adminView/Layout'
import AdminProjects from './pages/admin/Projects'
import AdminSkills from './pages/admin/Skills'

function App() {

  return (
    <div className='flex flex-col overflow-hidden'>
      <Routes>
        <Route path='/auth' element={
          // <CheckAuth>
          <Layout />
          // </CheckAuth>
        }>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='reset-password' element={<ResetPassword />} />
          <Route path='verify-email' element={<EmailVerify />} />
        </Route>
        <Route path='/user' element={
          <UserLayout />
        }>
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='skills' element={<Skills />} />
          <Route path='blogs' element={<BlogUser />} />
          <Route path='contact' element={<Contact />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='projects' element={<AdminProjects />} />
          <Route path='Skills' element={<AdminSkills />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
