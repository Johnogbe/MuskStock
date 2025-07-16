import React, { useState } from 'react';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#131612] p-4 md:px-40 md:py-5">
      <div className="w-full max-w-[512px] rounded-xl bg-[#131612] p-4 md:max-w-[960px] md:py-5">
        <h2 className="mb-6 text-center text-[22px] font-bold leading-tight text-white md:text-[28px]">
          Welcome back
        </h2>
        
        {/* Username/Email Field */}
        <div className="mb-4 w-full">
          <label className="block w-full">
            <p className="mb-2 text-base font-medium leading-normal text-white">
              Username or email
            </p>
            <input
              placeholder="Enter your username or email"
              className="w-full rounded-xl border border-[#434f40] bg-[#1f241e] p-4 text-base font-normal leading-normal text-white placeholder:text-[#a6b3a2] focus:border-[#434f40] focus:outline-none focus:ring-0 h-14"
            />
          </label>
        </div>

        {/* Password Field */}
        <div className="mb-4 w-full">
          <label className="block w-full">
            <p className="mb-2 text-base font-medium leading-normal text-white">
              Password
            </p>
            <div className="relative">
              <input
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                className="w-full rounded-xl border border-[#434f40] bg-[#1f241e] p-4 text-base font-normal leading-normal text-white placeholder:text-[#a6b3a2] focus:border-[#434f40] focus:outline-none focus:ring-0 h-14 pr-12"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a6b3a2] hover:text-white"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M18 8s1-1 4-1 4 1 4 1"></path>
                    <path d="M2 8s1-1 4-1 4 1 4 1"></path>
                  </svg>
                )}
              </button>
            </div>
          </label>
        </div>

        {/* Remember Me Toggle */}
        <div className="mb-6 flex items-center justify-between p-2">
          <p className="flex-1 truncate text-base font-normal leading-normal text-white">
            Remember me
          </p>
          <div className="shrink-0">
            <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full bg-[#2e352c] p-0.5 has-[:checked]:justify-end has-[:checked]:bg-[#8cd279]">
              <div 
                className={`h-full w-[27px] rounded-full bg-white shadow-[rgba(0,0,0,0.15)_0px_3px_8px,rgba(0,0,0,0.06)_0px_3px_1px] transition-transform duration-200 ${rememberMe ? 'translate-x-[20px]' : 'translate-x-0'}`}
              />
              <input 
                type="checkbox" 
                className="absolute invisible" 
                checked={rememberMe}
                onChange={toggleRememberMe}
              />
            </label>
          </div>
        </div>

        {/* Signup Button */}
        <div className="mb-4 w-full">
          <button className="w-full rounded-full bg-[#8cd279] px-4 py-3 text-sm font-bold leading-normal tracking-[0.015em] text-[#131612] hover:bg-[#7cba6a] transition-colors">
            Log in
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-2 text-center">
          <a href="#" className="text-sm font-normal leading-normal text-[#a6b3a2] underline hover:text-white">
            Forgot password?
          </a>
          <a href="#" className="text-sm font-normal leading-normal text-[#a6b3a2] underline hover:text-white">
            Don't have an account? Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;