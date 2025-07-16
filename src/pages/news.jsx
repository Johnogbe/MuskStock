import React from 'react'

const News = () => {
  return (
    <>
      <div
        className="relative flex size-full min-h-screen flex-col bg-[#162013] dark justify-between group/design-root overflow-x-hidden"
        style={{fontFamily:'Manrope, Noto Sans, sans-serif'}}
      >
        <div className="md:max-w-screen-md md:mx-auto w-full">
          {/* <!-- Header --> */}
          <div className="flex flex-col gap-2 bg-[#162013] p-4 pb-2 md:px-8 md:py-6">
            <div className="flex items-center h-12 justify-end">
              <div className="flex w-12 items-center justify-end">
                <button
                  className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
                >
                  <div className="text-white" data-icon="Notification" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M216,128v80a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V56A16,16,0,0,1,48,40h80a8,8,0,0,1,0,16H48V208H200V128a8,8,0,0,1,16,0Zm16-68a36,36,0,1,1-36-36A36,36,0,0,1,232,60Zm-16,0a20,20,0,1,0-20,20A20,20,0,0,0,216,60Z"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <p className="text-white tracking-light text-[28px] font-bold leading-tight md:text-3xl">News</p>
          </div>

          {/* <!-- Category Filters --> */}
          <div className="flex gap-3 p-3 overflow-x-auto md:px-8 md:flex-nowrap md:justify-center">
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#2e4328] pl-4 pr-4 md:px-6">
              <p className="text-white text-sm font-medium leading-normal md:text-base">All</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#2e4328] pl-4 pr-4 md:px-6">
              <p className="text-white text-sm font-medium leading-normal md:text-base">My Stocks</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#2e4328] pl-4 pr-4 md:px-6">
              <p className="text-white text-sm font-medium leading-normal md:text-base">Crypto</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#2e4328] pl-4 pr-4 md:px-6">
              <p className="text-white text-sm font-medium leading-normal md:text-base">Economy</p>
            </div>
          </div>

          {/* <!-- News Articles --> */}
          <div className="md:px-8">
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl md:flex-row md:gap-6">
                <div className="flex flex-col gap-1 flex-[2_2_0px] md:w-1/2">
                  <p className="text-[#a2c398] text-sm font-normal leading-normal md:text-base">TechCrunch · 2h</p>
                  <p className="text-white text-base font-bold leading-tight md:text-lg">Tech giants report record earnings, but outlook remains cautious</p>
                  <p className="text-[#a2c398] text-sm font-normal leading-normal md:text-base">
                    Tech stocks surge as major companies announce strong quarterly results, but analysts warn of potential headwinds.
                  </p>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1 md:w-1/2 md:h-auto"
                  style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDTzPwbNPRGT95yO_RdcUd7yxidj3s99bNChM0hRiroHOsaY8J8XBla_jWt4C-L3iXSLu0PUD5eIM5sjhQ-GNEEj0NijUlH6njQ16X1KvzL9G9PDd2Sw19rzVtha0JJKvfanwp6Ldzm3FQKHbC7FUN7I_rRkhiIC8D0ikMFoFq0ey7Q9_DXf5MVNlTJAWtcPwRuCfVaURvx1DSXv8_dZAdANGM84Atxgje77mHrADn2mB2hueRkL8oCFkk-FzLfj30pJ4Up19f5zw')"}}
                ></div>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl md:flex-row md:gap-6">
                <div className="flex flex-col gap-1 flex-[2_2_0px] md:w-1/2">
                  <p className="text-[#a2c398] text-sm font-normal leading-normal md:text-base">Reuters · 4h</p>
                  <p className="text-white text-base font-bold leading-tight md:text-lg">Energy sector faces scrutiny over environmental impact</p>
                  <p className="text-[#a2c398] text-sm font-normal leading-normal md:text-base">
                    Environmental groups criticize energy companies for their carbon emissions, raising concerns about sustainability.
                  </p>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1 md:w-1/2 md:h-auto"
                  style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuANKBXySVC2YIrbE4MxUH5Ysgn41spK0ZAkbAXNz86w-k-G81RTlHUZclQ7PjVhHlDpm0n2CPsr9q0I0l2cjTlI9OSrXLQKRV3ubYZ5lz1XRHoLdpDWm48Y0_IUIJh6FoXpORD4op40SOz_Wkzcgmd0hxkDEsrU2IM8WVcty05Gkpv1kggLOorpmHERtbcKiZo6ljOAsKDDCMFc9TfCtho1h8wwTasJXXDaTeVY48UweAVOQWEtDfn6urwHNll-b9roDOZNynjvLw')"}}
                ></div>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl md:flex-row md:gap-6">
                <div className="flex flex-col gap-1 flex-[2_2_0px] md:w-1/2">
                  <p className="text-[#a2c398] text-sm font-normal leading-normal md:text-base">Bloomberg · 6h</p>
                  <p className="text-white text-base font-bold leading-tight md:text-lg">Retail sales rebound as consumer confidence improves</p>
                  <p className="text-[#a2c398] text-sm font-normal leading-normal md:text-base">Retail sales increase, driven by rising consumer optimism and spending on discretionary items.</p>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1 md:w-1/2 md:h-auto"
                  style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBNXx89b5QqqagHspSGsN--ZBEt-DTfN70ZR1TceeycVLEhsRhY98pgXr5dKRK7R1kHZW8zhaZpqPVRqPqRBDqCRmzwNdPFeHO4iUTw-1xqAJ1FiwQ-KI7aXhdMvI297Qx9C3lmJj4_bLJGhXhRR5gRsvwFQrKcdQZmeyqAfXnADuRZi4otlw1gCUwtZxaz78ueWv20GQG-4S3hHJR0j5jDT4DgYGBxpIS0yD2_iEivSrz8RJXVjeImnKItbEbjt2TctrTxRgacvA')"}}
                ></div>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl md:flex-row md:gap-6">
                <div className="flex flex-col gap-1 flex-[2_2_0px] md:w-1/2">
                  <p className="text-[#a2c398] text-sm font-normal leading-normal md:text-base">CoinDesk · 8h</p>
                  <p className="text-white text-base font-bold leading-tight md:text-lg">Cryptocurrency market experiences volatility amid regulatory uncertainty</p>
                  <p className="text-[#a2c398] text-sm font-normal leading-normal md:text-base">
                    Cryptocurrencies fluctuate as investors react to evolving regulatory landscape and potential policy changes.
                  </p>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1 md:w-1/2 md:h-auto"
                  style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuByDjg7OF1ScGQgBYOGi8jkY4-VxbKcmvXHlG-4w2Q2r4ag4pvcmGiJmUXfrSCCpRnaV7igV3zEEL3aE9T6W4hXOs9e2gx3Q8cJc6Bby6rYR2UPjaXqebf3nN0REMGUF3K_eScUGRAR1uj1vPEGOECZjUTUyEOYiiNWHKZUQkzO-NUophoakfMfzRNys1FSbrG83SJJ5-dS7MJzm9UPJr5nd25H9c7TWNxsdBJy1a18hPxoMtQIo9gfS3SrSc9wbQLim8jpS6DCfA')"}}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Bottom Navigation --> */}
        
      </div>
    </>
  )
}

export default News