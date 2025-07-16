import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import MobileNav from '../components/mobile-nav';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#131612] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {isMobile ? <MobileNav /> : <Navbar />}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;