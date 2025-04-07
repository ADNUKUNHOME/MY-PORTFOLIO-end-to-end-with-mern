import React from 'react'
import UserHeader from './Header'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div className='flex flex-col h-screen w-screen bg-white  overflow-hidden'>
      <UserHeader />
      <main className="flex-grow w-full h-full bg-white dark:bg-gray-900 overflow-auto overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  )
}

export default UserLayout
