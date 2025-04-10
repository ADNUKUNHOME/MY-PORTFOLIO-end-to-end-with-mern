import React, { useRef, useEffect } from 'react'
import UserHeader from './Header'
import { Outlet, useLocation } from 'react-router-dom'

const UserLayout = () => {
  const location = useLocation();
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <div className='flex flex-col h-screen w-screen bg-white overflow-hidden'>
      <UserHeader />
      <main
        ref={scrollRef}
        className="flex-grow w-full h-full bg-white dark:bg-gray-900 overflow-auto overflow-x-hidden"
      >
        <Outlet />
      </main>
    </div>
  )
}

export default UserLayout
