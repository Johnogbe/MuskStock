import React from 'react';
import './portfolio.css';

const Portfolio = () => {
  return (
    <div className="layout-container flex h-full grow flex-col">
      {/* PC Content */}
      <div className="pc-content gap-1 px-6 flex flex-1 justify-center py-5">
        {/* Left Sidebar */}
        <div className="layout-content-container flex flex-col w-80">
          {/* Profile Section */}
          <div className="flex p-4 @container">
            <div className="flex w-full flex-col gap-4 items-center">
              <div className="flex gap-4 flex-col items-center">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqFB0IFn72BoXJhiOrwmrczhjMzcUOBKVasDmTMtjq6rZ44nNs4ce0hfGcQsXcQwRKGb6dCoB-nxHRH7QuPlY4Qw23gVhU6SHs0r5eKsQykc53EnFTWNkvkLOnsrv9QAyQMXUD3LRVlGTBf4Rnte4I6R8rfCiUWppKhKX9LzsfIhZkFpMEm7UYGeIp1mcBjj77KRUc9ZiD9V2-OUIEv81HE2BMoYQ_Sw3_UVcbAr3JsPCccafUudlL3YB6lBjdxBXXhbBQnrdkOQ")' }}
                  aria-label="User profile"
                />
                <div className="flex flex-col items-center justify-center">
                  <p className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">Sophia Carter</p>
                  <p className="text-[#a5b6a0] text-base font-normal leading-normal text-center">Account Value</p>
                  <p className="text-[#a5b6a0] text-base font-normal leading-normal text-center">$12,345.67</p>
                </div>
              </div>
            </div>
          </div>

          {/* Account Summary Cards */}
          {[
            { 
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M216,72H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,64V192a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72Zm0,128H56a8,8,0,0,1-8-8V86.63A23.84,23.84,0,0,0,56,88H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,140Z" />
                </svg>
              ),
              title: "$2,345.67",
              subtitle: "Available to trade"
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z" />
                </svg>
              ),
              title: "$2,345.67",
              subtitle: "Buying Power"
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z" />
                </svg>
              ),
              title: "$0.00",
              subtitle: "Margin Balance"
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z" />
                </svg>
              ),
              title: "$2,345.67",
              subtitle: "Cash Balance"
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z" />
                </svg>
              ),
              title: "$2,345.67",
              subtitle: "Settled Funds"
            }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4 bg-[#131712] px-4 min-h-[72px] py-2">
              <div className="text-white flex items-center justify-center rounded-lg bg-[#2d372a] shrink-0 size-12">
                {item.icon}
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal line-clamp-1">{item.title}</p>
                <p className="text-[#a5b6a0] text-sm font-normal leading-normal line-clamp-2">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Portfolio</p>
          </div>
          
          {/* Performance Section */}
          <section>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Performance</h3>
            <div className="flex flex-wrap gap-4 px-4 py-6">
              <div className="flex min-w-72 flex-1 flex-col gap-2">
                <p className="text-white text-base font-medium leading-normal">Portfolio Value</p>
                <p className="text-white tracking-light text-[32px] font-bold leading-tight truncate">$12,345.67</p>
                <div className="flex gap-1">
                  <p className="text-[#a5b6a0] text-base font-normal leading-normal">1Y</p>
                  <p className="text-[#0bda35] text-base font-medium leading-normal">+12.34%</p>
                </div>
                <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                  <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                      fill="url(#paint0_linear_1131_5935)"
                    />
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                      stroke="#a5b6a0"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2d372a" />
                        <stop offset="1" stopColor="#2d372a" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex justify-around">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
                      <p key={month} className="text-[#a5b6a0] text-[13px] font-bold leading-normal tracking-[0.015em]">
                        {month}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Holdings Section */}
          <section>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Holdings</h3>
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-xl border border-[#42513e] bg-[#131712]">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-[#1f251d]">
                      {['Symbol', 'Name', 'Quantity', 'Avg. Cost', 'Last Price', 'Change', 'Value', 'Allocation'].map((header) => (
                        <th key={header} className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        symbol: 'ABC',
                        name: 'Alpha Beta Corp',
                        quantity: '10',
                        avgCost: '$100.00',
                        lastPrice: '$110.00',
                        change: '+10.00%',
                        value: '$1,100.00',
                        allocation: '20'
                      },
                      {
                        symbol: 'XYZ',
                        name: 'Xylon Industries',
                        quantity: '5',
                        avgCost: '$200.00',
                        lastPrice: '$220.00',
                        change: '+10.00%',
                        value: '$1,100.00',
                        allocation: '20'
                      },
                      {
                        symbol: 'DEF',
                        name: 'Delta Echo Financial',
                        quantity: '15',
                        avgCost: '$50.00',
                        lastPrice: '$55.00',
                        change: '+10.00%',
                        value: '$825.00',
                        allocation: '15'
                      },
                      {
                        symbol: 'GHI',
                        name: 'Gamma Holdings Inc',
                        quantity: '8',
                        avgCost: '$150.00',
                        lastPrice: '$165.00',
                        change: '+10.00%',
                        value: '$1,320.00',
                        allocation: '25'
                      },
                      {
                        symbol: 'JKL',
                        name: 'Juliett Kilo Ltd',
                        quantity: '12',
                        avgCost: '$75.00',
                        lastPrice: '$82.50',
                        change: '+10.00%',
                        value: '$990.00',
                        allocation: '20'
                      }
                    ].map((stock, index) => (
                      <tr key={index} className="border-t border-t-[#42513e]">
                        <td className="h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">
                          {stock.symbol}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#a5b6a0] text-sm font-normal leading-normal">
                          {stock.name}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#a5b6a0] text-sm font-normal leading-normal">
                          {stock.quantity}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#a5b6a0] text-sm font-normal leading-normal">
                          {stock.avgCost}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#a5b6a0] text-sm font-normal leading-normal">
                          {stock.lastPrice}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#a5b6a0] text-sm font-normal leading-normal">
                          {stock.change}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#a5b6a0] text-sm font-normal leading-normal">
                          {stock.value}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                          <div className="flex items-center gap-3">
                            <div className="w-[88px] overflow-hidden rounded-sm bg-[#42513e]">
                              <div 
                                className="h-1 rounded-full bg-white" 
                                style={{ width: `${parseInt(stock.allocation) * 1.1364}%` }}
                              />
                            </div>
                            <p className="text-white text-sm font-medium leading-normal">{stock.allocation}</p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Mobile Content */}
      <div className="mobile-content">
        <h2>Portfolio</h2>
        {[
          {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkyp9HU2QaFGXU3RG24n0B-xzTFgsj_1vxzgA8hnwHl3Qw-bSIN5GcQLXVBcBa6iQKlJTFl_R-MX54fXwfrMncHMvOnOxJqT29fji6K0W90YEpJskyduNNO6C9UFc2AbtjxnP7XXXX84GBP2ZTaj_aYa12lTx4CLUScF6fvCq7JjCBvZsle-PZpHilujHJ69wgcA4v6pByIncZ0ht3craHd61O961nA39nbz5fPZTaR_CHn4-1zWeSZ-2YDyOObODHr52iYTNEZw',
            name: 'Tech Innovators Inc.',
            shares: '10 shares',
            value: '$1,234.56'
          },
          {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcgatt_XLnEhmJ-VZwBkyu8-qGTYu3AM2Yj8OkwXcvNqPtWK6BS44GYDlo5mk4Ue_T76S15KutDrwRcxqNlnrVzDQJ-JXux5f9lB7csKMgEWfYMUTzeJwFySletMTq-pkKh_2Yh66hh5dv5aRNkltrinZFSP7SZ0h6WTsRp01DbiDW6bmCv7ZfzAeecWKQJIPkVvSpU-uSL76OAcQs7mnaI3rYruWFKf5PnNYXejG1GG9nlzO5QMUCvEG7ClZMneD7DqqgQa3eMg',
            name: 'Global Energy Corp.',
            shares: '5 shares',
            value: '$567.89'
          },
          {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBafUni87sNB-Or6Xl_j1pfbWiwEfhh9n_BhTpkGxDxDdX74q6VAZleTnBkJKCNNKc7NY6vIAcXBuFQimJSxLIShdBTSe0EXinvZqBGiXY7KC0Dzq5TuYOQ6BQzpZssc73HzRdFGO6reCeigd1cgpJRaD_bVs58djh-gPK-v_ZAiM2YwrPwq_LHtHZ3LnvCQ2zGW9gLFx7JQyTY_0TFo7S9E0zCrXlKAZ9pOAwlwc7FIlk6M1Fa1zINGuaGbd0AVRBKFTzSFCD7mQ',
            name: 'Consumer Goods Ltd.',
            shares: '20 shares',
            value: '$3,456.78'
          },
          {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnZW1NqHV6FVc-dBGNDCsdmjkbnv3kizcEB0HQ7-92sOkgTHtyzwQgAF9EGrdDsMLmKSqN5kWgcQxT3Yu8_eaIsXUEpr6hdFDL-OgZJW1BmYyUIGisZK2SQoXHlsMFttZ9fI3n0a_9xia6V5YrvKzzk9srX1TwNXO4sDrKic5tv_ds2gMFSzI1Jmf4pUlSfBjuMilor2ZbK20PO8x5g7_YH473LHnT28nTanTbEbSV58d2BtSUeU4b0i_QRqokCrJk-WHjGc-sgw',
            name: 'Financial Services Group',
            shares: '15 shares',
            value: '$2,345.67'
          },
          {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEvFOT24Hi8JDigO_ZgtY7t4Xw733OW6yAg-jzrDluWvq1cIb0otysiTCiOCii1DH0ga2hsLnXipFbVhew6-jcDdWfWYKjq_t8fhjQHyErBZU5_7W78f-WApI8U09VHPaA3JqdbKlkIW4waVZc-IOdbvnyTQIKXsHPfGFRkT3JouBYxOBjd0YQs7cmrknjCswhlKBOir_0sWYdqOmBtYrTl_bp0baMwC-P2cAilaxhBj7LI5a1iF2MSMzlPbZh6iVIywW-MYbJhA',
            name: 'Healthcare Solutions Inc.',
            shares: '8 shares',
            value: '$890.12'
          }
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-4 bg-[#162013] px-4 min-h-[90px] py-2 justify-between">
            <div className="flex items-center gap-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                style={{ backgroundImage: `url("${item.image}")` }}
                aria-label={`${item.name} logo`}
              />
              <div className="flex flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal line-clamp-1">{item.name}</p>
                <p className="text-[#a2c398] text-sm font-normal leading-normal line-clamp-2">{item.shares}</p>
              </div>
            </div>
            <div className="shrink-0">
              <p className="text-white text-base font-normal leading-normal">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Footer Navigation */}
     
    </div>
  );
};

export default Portfolio;