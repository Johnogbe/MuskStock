import React from 'react';

const Overview = () => {
  return (
    <div className="pb-10">
      {/* Hero Banner */}
      <div className="@container">
        <div className="@[480px]:px-4 @[480px]:py-3">
          <div
            className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-[#131612] @[480px]:rounded-xl min-h-[218px] mobile:min-h-[150px]"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAa9JWmXEAcaUwu2OYcmYV77ARiGmg9kiAeGNPTfE5CefUpXfa6tUyyBTSF9CzpsbAqVc6SFBaNcUCwix8DrsLDn5lNNsV6pOx5lJLhickYddGBU5UR3FRMFH5JFfiJbxMfZQSUHHzUBGSuUCUI3dnNVIu4WcFiie1E5rUl0pdE2wqhJPLxctQuFS8uSnXhvHz_AhTgWg3xbkMy1obxKjYj2O39L2iwa3OZjldT07S4Li140fmABXv2M0V3DoQY8mR4iqJz7aJX0w")'
            }}
            aria-label="Market trends banner"
          />
        </div>
      </div>
      
      {/* Market Overview Section */}
      <section className="px-4">
        <h2 className="text-white text-[28px] font-bold leading-tight pb-3 pt-5 mobile:text-xl">
          Market Overview
        </h2>
        
        {/* S&P 500 Card */}
        <div className="bg-[#1a1e17] rounded-xl p-4 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-white text-base font-medium mobile:text-sm">
                S&P 500
              </h3>
              <p className="text-white text-[32px] font-bold mobile:text-2xl">
                +0.5%
              </p>
            </div>
            <div className="text-right">
              <p className="text-[#a6b3a2] text-base mobile:text-sm">Today</p>
              <p className="text-[#0bda35] text-base font-medium mobile:text-sm">
                +0.5%
              </p>
            </div>
          </div>
          
          {/* Chart */}
          <div className="mt-4">
            <svg
              width="100%"
              height="148"
              viewBox="-3 0 478 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mobile:h-[100px]"
              aria-hidden="true"
            >
              <path
                d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                fill="url(#paint0_linear_1131_5935)"
              />
              <path
                d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                stroke="#a6b3a2"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1131_5935"
                  x1="236"
                  y1="1"
                  x2="236"
                  y2="149"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2e352c" />
                  <stop offset="1" stopColor="#2e352c" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Time Labels */}
            <div className="flex justify-between mt-2 text-[#a6b3a2] text-[13px] font-bold mobile:text-xs">
              {['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM'].map((time) => (
                <span key={time}>{time}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;