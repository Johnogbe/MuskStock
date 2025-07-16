import React from 'react';

const News = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#131612] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-6 flex flex-1 justify-center py-5 mobile:px-4 mobile:py-2">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 w-full">
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 mobile:text-lg">
              Latest News
            </h2>

            {/* News Items */}
            {newsItems.map((item, idx) => (
              <div key={idx} className="p-4 mobile:px-2 mobile:py-1 w-full">
                <div className="flex items-stretch justify-between gap-4 rounded-xl mobile:flex-col">
                  <div className="flex flex-col gap-1 flex-[2_2_0px] mobile:flex-auto">
                    <p className="text-white text-base font-bold leading-tight mobile:text-sm">
                      {item.title}
                    </p>
                    <p className="text-[#a6b3a2] text-sm font-normal leading-normal mobile:text-xs">
                      {item.description}
                    </p>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1 mobile:mt-2"
                    style={{ backgroundImage: `url("${item.image}")` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ News Data
const newsItems = [
  {
    title: 'TechCorp Announces Record Profits',
    description:
      'TechCorp shares surge as the company reports its highest quarterly earnings, driven by strong sales in its cloud computing division.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAlRmBBmdvgeNkMcrBSkS2lS-yTCM8QbxnitGwPKN1NtAePZqp9X7t6SOgEPFVp_ZiUy7NK0aWy-7rxXff_NXP6i8h4rs2cfGmA3L74xIveoH-XDeiB4BFl9IebOUOqXND1QsKZLchwv21tJXG8n5mGNPKm3KwJNwLyWnJVUSU5iGW7ADSYOurM6e0iDbm9pAGvkpyqouxIUxzJph-4nIK-YBPYPNuDbtrUuI3jamIcRAObc62e9c_bADm1ayDnDSUpufNZkri4Sg',
  },
  {
    title: 'Market Volatility Continues Amid Economic Uncertainty',
    description:
      'Investors remain cautious as economic indicators send mixed signals, leading to ongoing fluctuations in the stock market.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD_614zOxOS0VHtFjZxzxhHXhxnJg3BUhvapAEV8swuRpZPfU-JYgYkvzsayoR4JEj-cvpOUIA9ouqwq0r5c2J4o7WYQe0iVhMj-ST9PxwJVBIf5zsweibWyhnNGGFv69ZHi-0Wohehie21AquO8uxxr-D30ev4PfrP0k_9tDDsBAzqAmvH56ELnuPjbjo2qR7GNaDJlXcZj02MHA6qtibUj8S8YDSr14wHK9ivTduFS-jdOHznApvDtxCQRuilpaDBzPcjnJW1oA',
  },
  {
    title: 'New Healthcare Innovation Could Revolutionize Treatment',
    description:
      'HealthInc unveils a groundbreaking medical device that promises to significantly improve patient outcomes for a widespread condition.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBkhq-x_XBLI3x9bl4yqKucwFgptKxnvZSOx7uZG1E7e7JKlfv-ipazSEdkxkHeAJFOGsWAxQl-lBvLi4l9aTFWXRfdsrJyxde00KsolH1u38nuuAYIIiVButmS8LqapuyH3YqfB498VCWcnPJihEbX6HMFSHkBWlry8NUNc_v_0WKL0JjdbHq5E20M6GBM9I2oAIAQ3jbm0G2Ktm4d7kyaZtsqHJVHplBeG9aaQBR6xU_OZmwhnMwm8G6APftLKMVPnY8b_L5g3g',
  },
  {
    title: 'FinServ Expands into Emerging Markets',
    description:
      'FinServ announces its strategic expansion into several high-growth markets, aiming to capitalize on the increasing demand for financial services.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCMxEyiRa-GK6c1ImfBdembslpZnV39HBPY70R7HunsQA5kPPxay_jFqcxsZlVuQz3gB5rTK9egf_t2xpFAkZ4hjiEOmgQ6ywzH_ysikTG1odcCM1IOIlBe5NjK17x_CF81Fh08mzsAooJO-okW3d0_cqKMb77btVHwV_IPXyGrIFFd9NQMi--Ocg_3f4AZJkQLiC2KgfMP4B7uSPX-WS87VxDvc-J_Jjb0RMHCocqmiWFiJFCZPDGxcQTVWDVz-McMjz8E0Uokkg',
  },
  {
    title: 'Energetix Invests Heavily in Renewable Energy',
    description:
      'Energetix commits to a major investment in renewable energy sources, aligning with global sustainability goals and shifting market trends.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAKavxO1i_RLHRNHNDi8IJuoWj4rft_vqYAilUBc_fFszcJ3su1MEYs5RZ8ji8lu3Rj86K4rNnILcvoCaCYd-va6UKWzCwXez7DE0XdBE5mOLLH3rTevV741aWUvfD2io1vluIG71BCrOJmfyNsTSbGSVkIUpK3FiWu81hV7iBkPHG_rBbQTWftN8S6TCBB80vx8q-EFkTP2hRDk4ohIALG80RJbgrOyrE-hLl74dlxZbTGCzPq43ZH7XPfJQVJntc-WjDhEjqDSw',
  },
];

export default News;
