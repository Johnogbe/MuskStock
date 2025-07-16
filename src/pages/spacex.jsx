import React, { useRef, useEffect } from 'react';
import bgVideo from '../images/Chinese rocket blasts off for Tiangong space station ｜ AFP.mp4';

import starlinks from '../images/starlinkP.webp';
import neuralinks from '../images/neuralink.jpg';
import teslaCar1 from '../images/Homepage-Card-Cybertruck-Mobile-US.avif'

import teslaCar2 from '../images/Homepage-Card-Model-S-Mobile-US.avif'
import teslaCar3 from '../images/Homepage-Card-Model-3-Mobile-US.avif'
import spaceX from '../images/Axiom_4_outsidehangar_IMG_3412_mobile_1d63de3e7e.jpg'
import spaceD from '../images/SpaceD.jpg'
import elonmusk from '../images/AP24294060722467.webp'
import './index.css'
const SpaceX = ({ handleStockDetails }) => {
  const stockRefs = useRef([]);

  const stockData = [
    {
      id: 1,
      description: 'Commercial GTO-1 Mission',
      name: 'Tesla',
      title: 'Upcoming Return',
      image: spaceD,
    },
    {
      id: 2,
      description: 'Commercial GTO-1 Mission',
      name: 'SpaceX',
      title: 'Upcoming Return',
      image: teslaCar3,
    },
    {
      id: 3,
      description: 'Commercial GTO-1 Mission',
      name: 'Starlink',
      title: 'Upcoming Return',
      image: starlinks,
    },
    {
      id: 4,
      description: 'Commercial GTO-1 Mission',
      name: 'Neuralink',
      title: 'Upcoming Return',
      image: neuralinks,
    }
  ];
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const stockCard = entry.target.querySelector('.stock-card');
              if (stockCard) {
                stockCard.style.opacity = '1';
                stockCard.style.transform = 'translateY(0)';
              }
            }
          });
        },
        {
          threshold: 0.8,
          rootMargin: '0px 0px -50px 0px'
        }
      );
  
      stockRefs.current.forEach(ref => {
        if (ref) observer.observe(ref);
      });
  
      return () => {
        stockRefs.current.forEach(ref => {
          if (ref) observer.unobserve(ref);
        });
      };
    }, []);
  

  return (
    <>
      {/* Background Video Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center bg-black/40">
          <h1 className="text-5xl font-bold mb-4">SpaceX Mission</h1>
          <p className="text-xl max-w-xl">
            "To make life multiplanetary."
            <br />
            SpaceX’s ultimate goal is to enable human colonization of Mars while lowering the cost of space access and making space travel routine and sustainable.
          </p>
        </div>
      </div>

      {/* Stock Cards Section */}
      {
              [{
                id: 1,
                description: 'Commercial GTO-1 Mission',
                name: 'Tesla',
                title: 'Upcoming Return',
                image: spaceD,
                
              },
              {
                id: 2,
                description: 'Commercial GTO-1 Mission',
                name: 'SpaceX',
                title: 'Upcoming Return',
                image: teslaCar3,
                
              },
              {
                id: 3,
                description: 'Commercial GTO-1 Mission',
                name: 'Starlink',
                title: 'Upcoming Return',
                image: starlinks,
                
              },
              {
                id: 4,
                description: 'Commercial GTO-1 Mission',
                name: 'Neuralink',
                title: 'Upcoming Return',
                image: neuralinks,
                
              }
              ].map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className='all-stock'
                    ref={el => stockRefs.current[index] = el}
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div
                      className='stock-card'
                      style={{
                        opacity: 0,
                        transform: 'translateY(50px)',
                        transition: 'opacity 0.5s ease, transform 0.5s ease'
                      }}
                    >
                      <p className="stock-p">{item.name}</p>
                      <p className="head">{item.description}</p>
                      <button onClick={()=>handleStockDetails(item.name)}className='hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1' >Watch</button>
                    </div>
                  </div>)
              })
            }
    </>
  );
};

export default SpaceX;
