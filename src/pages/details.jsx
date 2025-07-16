import React, { useState } from 'react';
import Order from './order';
import spaceX from '../images/videoplayback.mp4';
import tesla from '../images/Elon Musk Talks Tesla ROBOTAXI For 10 Min Straight.mp4';
import { useParams } from 'react-router-dom';
import teslaCar1 from '../images/Homepage-Card-Cybertruck-Mobile-US.avif';
import './details.css'

const Details = () => {
  const [modal, setModal] = useState(false);
  const { stockname } = useParams();

  const videoStyles = {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
    outline: 'none',
    
  };
 

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#171f14] dark justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      {modal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <Order modal={modal} setModal={setModal} />
        </div>
      )}
      
      <div className="lg:max-w-screen-lg lg:mx-auto w-full">
        {/* Header */}
        <div className="flex items-center bg-[#171f14] p-4 pb-2 justify-between lg:px-8 lg:pt-8">
          <div className="text-white flex size-12 shrink-0 items-center" onClick={() => window.history.back()}> 
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12 lg:pr-0 lg:text-2xl">
            {stockname} Stock Details
          </h2>
        </div>

        {/* Mobile Video Section (shown only on mobile) */}
        <div className="lg:hidden ">
          <video 
            src={stockname === 'spaceX' ? spaceX : tesla} 
            controls 
            style={videoStyles}
            className="mx-auto"
          ></video>
          <div className="mt-3 mb-3">
            <h3 className="text-white text-base font-bold leading-tight tracking-[-0.015em]">
              Elon Musk's Latest Venture
            </h3>
            <p className="text-[#a4be9d] text-sm font-normal leading-normal">
              Elon Musk has announced a new venture that aims to revolutionize the tech industry...
            </p>
            <p className="text-[#a4be9d] text-xs font-normal leading-normal mt-2">
              Read more
            </p>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="lg:flex lg:flex-row lg:gap-8 lg:p-8 lg:items-start">
          {/* Left Column (Stock Image & Price) */}
          <div className="lg:w-1/2">
            <div className="@container">
              <div className="@[480px]:px-4 @[480px]:py-3 lg:px-0">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-[#171f14] @[480px]:rounded-xl min-h-80 lg:min-h-[400px]"
                  style={{
                    backgroundImage:
                      stockname === 'spaceX'
                        ? `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnzHFmZWgJWEzoHvcq57b8j4_TkIUmxaKWeOUqykM3ieR9FmEPS9liGsyRb9UVvZixCvW2fEbMQSJQf74sqvbVfzgH5rzIIcZIfb91mPikbGpO1pfVhJ4EeCF73Gmf8qTfgA_SLPnmDX3cy3OTC9ypek0tTwV8xzAjmSspw2IJ6Cfvlul7yO6vgMcZk8zIboawk8sfELYeDObruOn2qz3GMB9N37t8fDbD1DBwEL-pPImlyUo60_G1FOIGPgoLEHA0_GQOwQKf5g")`
                        : `url("${teslaCar1}")`,
                    backgroundPosition: stockname === 'tesla' ? '50% 10%' : 'center'
                  }}
                ></div>
              </div>
            </div>
            
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 lg:px-0 lg:text-2xl">
              Stock Price
            </h2>
            <div className="flex flex-wrap gap-4 px-4 py-6 lg:px-0">
              <div className="flex min-w-72 flex-1 flex-col gap-2">
                <p className="text-white text-base font-medium leading-normal lg:text-lg">Stock Price</p>
                <p className="text-white tracking-light text-[32px] font-bold leading-tight truncate lg:text-4xl">$150.25</p>
                <div className="flex gap-1">
                  <p className="text-[#a4be9d] text-base font-normal leading-normal lg:text-lg">1Y</p>
                  <p className="text-[#0bda35] text-base font-medium leading-normal lg:text-lg">+15%</p>
                </div>
                <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                  <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                      fill="url(#paint0_linear_1131_5935)"
                    ></path>
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                      stroke="#a4be9d"
                      strokeWidth="3"
                      strokeLinecap="round"
                    ></path>
                    <defs>
                      <linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2f402b"></stop>
                        <stop offset="1" stopColor="#2f402b" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex justify-around">
                    <p className="text-[#a4be9d] text-[13px] font-bold leading-normal tracking-[0.015em] lg:text-base">Jan</p>
                    <p className="text-[#a4be9d] text-[13px] font-bold leading-normal tracking-[0.015em] lg:text-base">Feb</p>
                    <p className="text-[#a4be9d] text-[13px] font-bold leading-normal tracking-[0.015em] lg:text-base">Mar</p>
                    <p className="text-[#a4be9d] text-[13px] font-bold leading-normal tracking-[0.015em] lg:text-base">Apr</p>
                    <p className="text-[#a4be9d] text-[13px] font-bold leading-normal tracking-[0.015em] lg:text-base">May</p>
                    <p className="text-[#a4be9d] text-[13px] font-bold leading-normal tracking-[0.015em] lg:text-base">Jun</p>
                    <p className="text-[#a4be9d] text-[13px] font-bold leading-normal tracking-[0.015em] lg:text-base">Jul</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex px-4 py-3 lg:px-0">
              <div className="flex h-10 flex-1 items-center justify-center rounded-full bg-[#2f402b] p-1 lg:max-w-[400px] lg:mx-auto">
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#171f14] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-white text-[#a4be9d] text-sm font-medium leading-normal lg:text-base">
                  <span className="truncate">1D</span>
                  <input type="radio" name="time-period" className="invisible w-0" value="1D" defaultChecked />
                </label>
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#171f14] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-white text-[#a4be9d] text-sm font-medium leading-normal lg:text-base">
                  <span className="truncate">1W</span>
                  <input type="radio" name="time-period" className="invisible w-0" value="1W" />
                </label>
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#171f14] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-white text-[#a4be9d] text-sm font-medium leading-normal lg:text-base">
                  <span className="truncate">1M</span>
                  <input type="radio" name="time-period" className="invisible w-0" value="1M" />
                </label>
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#171f14] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-white text-[#a4be9d] text-sm font-medium leading-normal lg:text-base">
                  <span className="truncate">1Y</span>
                  <input type="radio" name="time-period" className="invisible w-0" value="1Y" />
                </label>
              </div>
            </div>
          </div>

          {/* Right Column (Stats, News, Ratings) */}
          <div className="lg:w-1/2 ">
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 lg:px-0 lg:text-2xl">
              Key Statistics
            </h2>
            <div className="p-4 grid grid-cols-2 lg:grid-cols-3 lg:px-0">
              <div className="flex flex-col gap-1 border-t border-solid border-t-[#445c3d] py-4 pr-2">
                <p className="text-[#a4be9d] text-sm font-normal leading-normal lg:text-base">Open</p>
                <p className="text-white text-sm font-normal leading-normal lg:text-base">$148.50</p>
              </div>
              <div className="flex flex-col gap-1 border-t border-solid border-t-[#445c3d] py-4 pl-2">
                <p className="text-[#a4be9d] text-sm font-normal leading-normal lg:text-base">High</p>
                <p className="text-white text-sm font-normal leading-normal lg:text-base">$152.00</p>
              </div>
              <div className="flex flex-col gap-1 border-t border-solid border-t-[#445c3d] py-4 pr-2">
                <p className="text-[#a4be9d] text-sm font-normal leading-normal lg:text-base">Low</p>
                <p className="text-white text-sm font-normal leading-normal lg:text-base">$147.00</p>
              </div>
              <div className="flex flex-col gap-1 border-t border-solid border-t-[#445c3d] py-4 pl-2">
                <p className="text-[#a4be9d] text-sm font-normal leading-normal lg:text-base">Volume</p>
                <p className="text-white text-sm font-normal leading-normal lg:text-base">1.2M</p>
              </div>
              <div className="flex flex-col gap-1 border-t border-solid border-t-[#445c3d] py-4 pr-2">
                <p className="text-[#a4be9d] text-sm font-normal leading-normal lg:text-base">Market Cap</p>
                <p className="text-white text-sm font-normal leading-normal lg:text-base">$50B</p>
              </div>
              <div className="flex flex-col gap-1 border-t border-solid border-t-[#445c3d] py-4 pl-2">
                <p className="text-[#a4be9d] text-sm font-normal leading-normal lg:text-base">P/E Ratio</p>
                <p className="text-white text-sm font-normal leading-normal lg:text-base">25.5</p>
              </div>
            </div>
            
            {/* Desktop Video Section (hidden on mobile) */}
            <div className="video-section" >
              <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 lg:px-0 lg:text-2xl">
                News
              </h2>
            <div className="p-4 lg:px-0 ">
                <div className="flex items-stretch justify-between gap-4 rounded-xl">
                  <video src={stockname === 'spaceX' ? spaceX : tesla} className=''controls autoPlay style={videoStyles}></video>
                  <div>
                    <h3 className="text-white text-base font-bold leading-tight tracking-[-0.015em]">
                      Elon Musk's Latest Venture
                    </h3>
                    <p className="text-[#a4be9d] text-sm font-normal leading-normal">
                      Elon Musk has announced a new venture that aims to revolutionize the tech industry...
                    </p>
                    <p className="text-[#a4be9d] text-xs font-normal leading-normal mt-2">
                      Read more
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 lg:px-0 lg:text-2xl">
              Analyst Ratings
            </h2>
            <div className="flex flex-wrap gap-x-8 gap-y-6 p-4 lg:px-0 lg:justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em] lg:text-5xl">4.2</p>
                <div className="flex gap-0.5">
                  {[...Array(4)].map((_, i) => (
                    <svg key={`filled-${i}`} xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="#8cd279" viewBox="0 0 256 256">
                      <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                    </svg>
                  ))}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="#8cd279" viewBox="0 0 256 256">
                    <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"></path>
                  </svg>
                </div>
                <p className="text-white text-base font-normal leading-normal lg:text-lg">250 reviews</p>
              </div>
              <div className="grid min-w-[200px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-3 lg:min-w-[250px]">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <React.Fragment key={rating}>
                    <p className="text-white text-sm font-normal leading-normal lg:text-base">{rating}</p>
                    <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#445c3d]">
                      <div 
                        className="rounded-full bg-[#8cd279]" 
                        style={{ 
                          width: `${[30, 40, 15, 10, 5][5 - rating]}%` 
                        }}
                      ></div>
                    </div>
                    <p className="text-[#a4be9d] text-sm font-normal leading-normal text-right lg:text-base">
                      {[30, 40, 15, 10, 5][5 - rating]}%
                    </p>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Button */}
      <div>
        <div className="flex px-4 py-3 lg:max-w-screen-lg lg:mx-auto">
          <button 
            onClick={() => setModal(true)}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-[#8cd279] text-[#171f14] text-base font-bold leading-normal tracking-[0.015em] lg:max-w-[400px] lg:mx-auto"
          >
            <span className="truncate">Trade</span>
          </button>
        </div>
        <div className="h-5 bg-[#171f14]"></div>
      </div>
    </div>
  );
};

export default Details;