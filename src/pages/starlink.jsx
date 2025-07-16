import React from 'react'
import bgVideo from '../images/neuralinkIntro.BLFlcxWZ.mp4'

import './animated.css'
import './index.css'
import teslaCar1 from '../images/Homepage-Card-Cybertruck-Mobile-US.avif'

import teslaP from '../images/Homepage-Card-Model-S-Mobile-US.avif'
import teslaV from '../images/Elon Musk Talks Tesla ROBOTAXI For 10 Min Straight.mp4';
import grok from '../images/Grok.png'
import starline1 from '../images/starline1.webp'
import starlinks from '../images/starlinkmini-removebg-preview.png'
import starline2 from '../images/starlinkP.webp'
import starline3 from '../images/starline3.webp'
import starline4 from '../images/starline4.webp'
import self from '../images/self.avif'
import teslaCar2 from '../images/Homepage-Card-Model-S-Mobile-US.avif'
import teslaCar3 from '../images/Homepage-Card-Model-3-Mobile-US.avif'
import tesla from '../assets/tesla.svg';
import teslaCar5 from '../images/Homepage-Card-Model-Y-Tablet-US.jpeg'
import spaceD from '../images/SpaceD.jpg'

import neuralinks from '../images/neuralink.jpg'

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
const Starlink = () => {
     const stocks = [
        { id: 1, name: 'Bra Amyotrophic lateral sclerosis. Received Neuralink implant inNov. 2024 Game changer', change: '+23%' ,pic:teslaCar2},
        { id: 2, name: ['Spinal cord injury',
'Received Neuralink implant inApr. 2025',
"It gives me the ability to keep working"], change: '+5%' ,pic:starlinks},
        { id: 3, name: ['Mike',
'Amyotrophic lateral sclerosis',
'Received Neuralink implant inFeb. 2025',
"It's given me the ability to do things on my own again",], change: '-2%', pic:starline1},
        { id: 4, name: ['Noland',
'Spinal cord injury',
'Received Neuralink implant inJan. 2024',
'It allows me to be creative'], change: '+12%',pic:teslaCar5 },
      
      ];
const words = ['infrastructure', 'communication', 'connectivity'];
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Timing controls (in milliseconds)
  const typingSpeed = 150;
  const deleteSpeed = 75;
  const pauseBeforeDelete = 1000; // Pause after typing a word
  const pauseBeforeType = 500;    // Pause after deleting a word
  const stockRefs = useRef([]);
  
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
  
  
  useEffect(() => {
    // Cursor blink effect (runs continuously)
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    // Skip if no word is selected (edge case)
    if (currentWordIndex >= words.length) return;

    const currentWord = words[currentWordIndex];
    let timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      // Typing phase: add next character
      timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      // Deleting phase: remove last character
      timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deleteSpeed);
    } else if (charIndex === currentWord.length) {
      // Finished typing: pause, then start deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBeforeDelete);
    } else if (charIndex === 0 && isDeleting) {
      // Finished deleting: move to next word
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, pauseBeforeType);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, currentWordIndex, isDeleting]);
  return (
    <div> <div
            className="hero-container flex justify-center items-center"
            style={{
              backgroundImage: `url(${starline4})`,
              backgroundSize: 'cover',
              backgroundPosition: '50% 50%',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className=" text-center text-white">
              <div className="text-content">
                <h1 className='subheading text-white'style={{color:'white'}}>High Speed internet connection</h1>
                <p className="subheading">
                  Build your strategy and track market trends, seamlessly
                </p>
                <p className=" subheading description">
                  Connect any where around the globe.
                </p>
                <Link className="cta-button"style={{marginLeft:'10px'}} to='watchlist'>see details</Link>
              </div>
            </div>
          </div>

          <div style={{backgroundColor:'white',width:'100%',height:'400px',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:'0px 80px'}}>
            <div>
                
    <div className="animated-text-container">
      <span className="static-text" style={{fontSize:'27px'}}>Starlink is transforming the way the world connects through global satellite-based </span>
      <span className="dynamic-word">{displayText}</span>
      <span className={`cursor ${showCursor ? 'visible' : 'hidden'}`}>_</span>
    </div>
            </div>
            <div style={{flexBasis:'60%'}}>
                <p style={{fontSize:'18px'}}>
Starlink is a satellite internet constellation developed by SpaceX to provide high-speed, low-latency broadband internet across the globe, especially in remote and underserved areas.  By deploying thousands of small satellites in low Earth orbit (LEO), Starlink aims to bridge the digital divide and revolutionize global connectivity. 
                </p>
            </div>
          </div>
          
      {
             [{
               id: 1,
               description: 'Satelite Internet brought to you',
               name: 'Tesla',
               title: 'Upcoming Return',
               image: starline2,
               
             },
             {
               id: 2,
               description: 'CONNECTIVITY WHERE YOU LEAST EXPECT IT',
               name: 'SpaceX',
               title: 'Upcoming Return',
               image: starline1,
               
             },
             {
               id: 3,
               description: 'Flexible Service Plans',
               name: 'Starlink',
               title: 'Upcoming Return',
               image: starline4,
               
             },
             {
               id: 4,
               description: 'Easy deployment in home or office',
               name: 'Neuralink',
               title: 'Upcoming Return',
               image: starline3,
               
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
                       transform: 'translateY(20px)',
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
     

      
    </div>
  )
}

export default Starlink