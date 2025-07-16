import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
   const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
   const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // scrolling down
      setShowNavbar(false);
    } else {
      // scrolling up
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);


  return (
    <header className={` 
      fixed top-0 left-0 w-full z-50 transition-transform duration-400 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'} bg-[#131612] flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2e352c] px-10 py-3 mobile:px-4 mobile:py-2`}>
      <div className="flex items-center gap-8 mobile:gap-4">
        <Link to="/" className="flex items-center gap-4 text-white">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor" />
            </svg>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] mobile:text-base">
            TradeWise
          </h2>
        </Link>
        
        <nav className="flex items-center gap-9 mobile:hidden hidenav">
          <Link className="text-white text-sm font-medium leading-normal hover:opacity-80" to="/">
            Home
          </Link>
          <Link className="text-white text-sm font-medium leading-normal hover:opacity-80" to="/watchlist">
            Markets
          </Link>
          <Link className="text-white text-sm font-medium leading-normal hover:opacity-80" to="/portfolio">
            Portfolio
          </Link>
          <Link className="text-white text-sm font-medium leading-normal hover:opacity-80" to="/news">
            News
          </Link>
        </nav>
      </div>

      <div className="flex flex-1 justify-end gap-2 mobile:gap-4 navleft items-center">
       <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#8cd279] text-[#131612] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <Link to='login' className="truncate">Login</Link>
              </button>
        <label htmlFor="search" className="flex flex-col min-w-40 !h-10 max-w-64 mobile:min-w-0 mobile:max-w-none mobile:w-full mobile:hidden">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div className="text-[#a6b3a2] flex border-none bg-[#2e352c] items-center justify-center pl-4 rounded-l-xl border-r-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
              </svg>
            </div>
            <input
              id="search"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#2e352c] focus:border-none h-full placeholder:text-[#a6b3a2] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
            />
          </div>
        </label>
        <button
          className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#2e352c] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 mobile:h-8"
          aria-label="Notifications"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
          </svg>
        </button>

        {/* <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 mobile:size-8"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBK9wx3hcyHdGV8Vrw9sVlqLGSyk9vZDGK37dBlUKjJAQl_VKLvtJDrsNZ6EbcueqbKyPDHDD_JKysoCxUv1YNoaZcADcpuwez2mIY9UqqECjOkw719A3tZv0d4JM5vxy0Rt3XYc_kO-YCp3m-rqGchf8auXkanqoteQ_x2hQXQJyMEf0YPM_PdkePv62cUE8xqcYIe_lY5A8uH0hnESvQv6FpaCPfeP6zJsQ_Ijci2hsehL36Anr0znEV00d12fpDUgWuEpCIV0g")' }}
          aria-label="User profile"
        /> */}
      </div>
      {/* <div className="text-white text-sm font-medium leading-normal ">
        <ul className='mobile-li'>
          <li className=''>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div> */}
      
    </header>
  );
};

export default Navbar;