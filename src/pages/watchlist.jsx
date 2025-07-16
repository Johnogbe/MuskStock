import React from 'react';
import { useNavigate } from 'react-router-dom';

const Watchlist = () => {
  const navigate = useNavigate()
  const handleNavigate = (stockname)=>{
    navigate(`/details/${stockname}`)
  }
  const stocks = [
    { symbol: 'TSLA', name: 'tesla', price: '$175.22', change: '+1.2%', changeColor: 'text-[#53d22c]' },
    { symbol: 'SpaceX', name: 'spaceX', price: '$480.50', change: '+2.5%', changeColor: 'text-[#53d22c]' },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: '$130.75', change: '-0.8%', changeColor: 'text-[#fa4f38]' },
    { symbol: 'META', name: 'Meta Platforms Inc.', price: '$295.10', change: '+0.5%', changeColor: 'text-[#53d22c]' },
    { symbol: 'GOOGL', name: 'Alphabet Inc. (class A)', price: '$125.60', change: '-0.2%', changeColor: 'text-[#fa4f38]' },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: '$330.45', change: '+1.8%', changeColor: 'text-[#53d22c]' },
    { symbol: 'BRK.B', name: 'Berkshire Hathaway Inc. (class B)', price: '$340.20', change: '+0.3%', changeColor: 'text-[#53d22c]' },
    { symbol: 'JNJ', name: 'Johnson & Johnson', price: '$165.80', change: '-0.5%', changeColor: 'text-[#fa4f38]' },
    { symbol: 'JPM', name: 'JPMorgan Chase & Co.', price: '$150.90', change: '+1.1%', changeColor: 'text-[#53d22c]' },
    { symbol: 'V', name: 'Visa Inc. (class A)', price: '$240.60', change: '+0.7%', changeColor: 'text-[#53d22c]' }
  ];

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#162013] dark justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="lg:max-w-screen-md lg:mx-auto w-full">
        {/* Header */}
        <div className="flex items-center bg-[#162013] p-4 pb-2 justify-between lg:px-8 lg:py-6">
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12 lg:pl-0 lg:text-xl">Watchlist</h2>
          <div className="flex w-12 items-center justify-end">
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
            >
              <div className="text-white" data-icon="Plus" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-4 py-3 lg:px-8">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
              <div
                className="text-[#a2c398] flex border-none bg-[#2e4328] items-center justify-center pl-4 rounded-l-xl border-r-0"
                data-icon="MagnifyingGlass"
                data-size="24px"
                data-weight="regular"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>
              <input
                placeholder="Search stocks"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#2e4328] focus:border-none h-full placeholder:text-[#a2c398] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                
              />
            </div>
          </label>
        </div>

        {/* Watchlist Items */}
        <div className="grid lg:grid-cols-2 lg:gap-4 lg:px-8">
          {stocks.map((stock, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 bg-[#162013] px-4 min-h-[72px] py-2 justify-between lg:min-h-[100px] lg:rounded-lg"
              onClick={()=>handleNavigate(stock.name)}
            >
              <div className="flex flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal line-clamp-1 lg:text-lg">
                  {stock.symbol}
                </p>
                <p className="text-[#a2c398] text-sm font-normal leading-normal line-clamp-2 lg:text-base">
                  {stock.name}
                </p>
              </div>
              <div className="shrink-0">
                <p className="text-white text-base font-normal leading-normal lg:text-lg">
                  {stock.price} <span className={stock.changeColor}>{stock.change}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div><div className="h-5 bg-[#162013]"></div></div>
    </div>
  );
};

export default Watchlist;