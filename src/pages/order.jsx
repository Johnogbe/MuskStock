import React from 'react';
import './order.css';

const Order = ({ modal, setModal }) => {
  return (
    <div style={{ backgroundColor: '#bebfc2' }}>
  <div
    className="relative flex size-full min-h-screen flex-col bg-[#162013] dark justify-between group/design-root overflow-x-hidden"
    style={{
      '--select-button-svg': "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(162,195,152)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')",
      fontFamily: 'Manrope, "Noto Sans", sans-serif',
      width: '340px',
      margin: 'auto',
      zIndex: 2,
    }}
  >
    <div className="lg:max-w-screen-md lg:mx-auto w-full">
      {/* Header */}
      <div className="flex items-center bg-[#162013] p-3 pb-2 justify-between lg:px-6 lg:pt-4">
        <div className="text-white flex size-10 shrink-0 items-center" data-icon="X" data-size="24px" data-weight="regular" onClick={() => setModal(false)} style={{ cursor: 'pointer' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
          </svg>
        </div>
        <h2 className="text-white text-base font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10 lg:pr-0 lg:text-lg">Buy</h2>
      </div>

      {/* Form Fields */}
      <div className="flex flex-col px-3 py-2 lg:px-6 lg:gap-4">
        {/* First row */}
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-4">
          <label className="flex flex-col flex-1">
            <p className="text-white text-sm font-medium leading-normal pb-1 lg:text-base">Ticker</p>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#2e4328] focus:border-none h-12 placeholder:text-[#a2c398] p-3 text-sm font-normal leading-normal lg:h-14 lg:text-base"
              placeholder="e.g. AAPL"
            />
          </label>
          <label className="flex flex-col flex-1">
            <p className="text-white text-sm font-medium leading-normal pb-1 lg:text-base">Order Type</p>
            <select
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#2e4328] focus:border-none h-12 placeholder:text-[#a2c398] p-3 text-sm font-normal leading-normal lg:h-14 lg:text-base"
            >
              <option value="" disabled selected>Select order type</option>
              <option value="market">Market</option>
              <option value="limit">Limit</option>
              <option value="stop">Stop</option>
              <option value="stop_limit">Stop Limit</option>
            </select>
          </label>
        </div>

        {/* Second row */}
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-4">
          <label className="flex flex-col flex-1">
            <p className="text-white text-sm font-medium leading-normal pb-1 lg:text-base">Shares</p>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#2e4328] focus:border-none h-12 placeholder:text-[#a2c398] p-3 text-sm font-normal leading-normal lg:h-14 lg:text-base"
              placeholder="0"
              type="number"
            />
          </label>
          <label className="flex flex-col flex-1">
            <p className="text-white text-sm font-medium leading-normal pb-1 lg:text-base">Estimated Price</p>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#2e4328] focus:border-none h-12 placeholder:text-[#a2c398] p-3 text-sm font-normal leading-normal lg:h-14 lg:text-base"
              placeholder="$0.00"
              type="number"
              step="0.01"
            />
          </label>
        </div>
      </div>

      {/* Order Summary */}
      <h3 className="text-white text-base font-bold leading-tight tracking-[-0.015em] px-3 pb-1 pt-3 lg:px-6 lg:text-lg">Order Summary</h3>
      <div className="p-3 lg:px-6">
        <div className="flex justify-between gap-x-4 py-1">
          <p className="text-[#a2c398] text-xs font-normal leading-normal lg:text-sm">Estimated Cost</p>
          <p className="text-white text-xs font-normal leading-normal text-right lg:text-sm">$175.00</p>
        </div>
        <div className="flex justify-between gap-x-4 py-1">
          <p className="text-[#a2c398] text-xs font-normal leading-normal lg:text-sm">Available Funds</p>
          <p className="text-white text-xs font-normal leading-normal text-right lg:text-sm">$10,000.00</p>
        </div>
      </div>
    </div>

    {/* Footer Button */}
    <div>
      <div className="flex px-3 py-2 lg:max-w-screen-md lg:mx-auto lg:px-6">
        <button
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#53d22c] text-[#162013] text-sm font-bold leading-normal tracking-[0.015em] lg:h-12 lg:text-base"
        >
          <span className="truncate">Review Order</span>
        </button>
      </div>
      <div className="h-4 bg-[#162013]"></div>
    </div>
  </div>
</div>

  );
};

export default Order;