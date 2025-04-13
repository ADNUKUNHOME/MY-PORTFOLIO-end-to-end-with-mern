import { Route, Routes } from 'react-router-dom'
import Layout from './components/auth/Layout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import CheckAuth from './common/checkAuth'
import UserLayout from './components/userView/Layout'
import Home from './pages/user/Home'
import About from './pages/user/About'
import Projects from './pages/user/Projects'
import Skills from './pages/user/Skills'
import BlogUser from './pages/user/BlogUser'
import Contact from './pages/user/Contact'
import AdminLayout from './components/adminView/Layout'
import AdminProjects from './pages/admin/Projects'
import { useDispatch, useSelector } from 'react-redux'
import AdminContacts from './pages/admin/Contacts'
import { useEffect } from 'react'
import { isAuthenticatedUser } from './store/auth-slice'
import ResetPassword from './pages/auth/ResetPassword'
import AdminDashboard from './pages/admin/Dashboard'
import WrongPage from './pages/user/WrongPage'
import EmailVerify from './pages/auth/EmailVerify'


function App() {
  
  const {user, isAuthenticated} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = JSON.parse(
      sessionStorage.getItem('token')
    );
    dispatch(isAuthenticatedUser(token));
  }, [dispatch])  

  return (
    <div className='flex flex-col overflow-hidden'>
      <Routes>
        <Route path='/auth' element={
          <CheckAuth user={user} isAuthenticated={isAuthenticated}>
            <Layout />
          </CheckAuth>
        }>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='reset-password' element={<ResetPassword />} />
          <Route path='verify-email' element={<EmailVerify />} />
        </Route>
        <Route path='/user' element={
          <CheckAuth user={user} isAuthenticated={isAuthenticated}>
            <UserLayout />
          </CheckAuth>

        }>
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='skills' element={<Skills />} />
          <Route path='blogs' element={<BlogUser />} />
          <Route path='contact' element={<Contact />} />
        </Route>
        <Route path='/admin' element={
          <CheckAuth user={user} isAuthenticated={isAuthenticated}>
            <AdminLayout />
          </CheckAuth>
        }>
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='projects' element={<AdminProjects />} />
          <Route path='contacts' element={<AdminContacts />} />
        </Route>
        <Route path='*' element={
          <CheckAuth user={user} isAuthenticated={isAuthenticated}>
            <WrongPage wrong={"You'r In Wrong Way!"} />
          </CheckAuth>
          } />
      </Routes>
    </div>
  )
}

export default App
