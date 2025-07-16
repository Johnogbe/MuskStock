import React from 'react'
import bgVideo from '../images/neuralinkIntro.BLFlcxWZ.mp4'
import { useState, useEffect } from 'react';
import './animated.css'
import './index.css'
import teslaCar1 from '../images/Homepage-Card-Cybertruck-Mobile-US.avif'
import neuralinks from '../images/neuralink.jpg'
import teslaP from '../images/Homepage-Card-Model-S-Mobile-US.avif'
import teslaV from '../images/Elon Musk Talks Tesla ROBOTAXI For 10 Min Straight.mp4';
import grok from '../images/Grok.png'
import starlinks from '../images/starlinkmini-removebg-preview.png'
import self from '../images/self.avif'
import teslaCar2 from '../images/Homepage-Card-Model-S-Mobile-US.avif'
import teslaCar3 from '../images/Homepage-Card-Model-3-Mobile-US.avif'
import tesla from '../assets/tesla.svg';
import teslaCar5 from '../images/Homepage-Card-Model-Y-Tablet-US.jpeg'
const NeuralinkBlog = () => {
     const stocks = [
        { id: 1, name: 'Bra Amyotrophic lateral sclerosis. Received Neuralink implant inNov. 2024 Game changer', change: '+23%' ,pic:teslaCar2},
        { id: 2, name: ['Spinal cord injury',
'Received Neuralink implant inApr. 2025',
"It gives me the ability to keep working"], change: '+5%' ,pic:teslaCar3},
        { id: 3, name: ['Mike',
'Amyotrophic lateral sclerosis',
'Received Neuralink implant inFeb. 2025',
"It's given me the ability to do things on my own again",], change: '-2%', pic:teslaCar1},
        { id: 4, name: ['Noland',
'Spinal cord injury',
'Received Neuralink implant inJan. 2024',
'It allows me to be creative'], change: '+12%',pic:teslaCar5 },
      
      ];
const words = ['autonomy', 'speech', 'control'];
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
    <div> <div className="relative w-full h-screen overflow-hidden">
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
    
            <div className="relative z-10 flex flex-col items-left justify-center pl-2 h-full text-white text-left bg-black/40">
              <h1 className="text-5xl font-bold mb-4">Neuralinks</h1>
              <p className="text-xl max-w-xl">
                "To make life multiplanetary."
                <br />
                SpaceX’s ultimate goal is to enable human colonization of Mars while lowering the cost of space access and making space travel routine and sustainable.
              </p>
            </div>
          </div>

          <div style={{backgroundColor:'white',width:'100%',height:'400px',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:'0px 80px'}}>
            <div>
                
    <div className="animated-text-container">
      <span className="static-text">Building brain interfaces to restore </span>
      <span className="dynamic-word">{displayText}</span>
      <span className={`cursor ${showCursor ? 'visible' : 'hidden'}`}>_</span>
    </div>
            </div>
            <div style={{flexBasis:'60%'}}>
                <p>
                    Our brain-computer interface translates neural signals into actions. In our clinical trials, people are using Neuralink devices to control computers and robotic arms with their thoughts.

This technology will restore autonomy to those with unmet medical needs and unlock new dimensions of human potential.
                </p>
            </div>
          </div>
          <div style={{width:'100%',backgroundColor:'gray',marginTop:'-30px'}}>    <div className="scroll-container" style={{margin:'auto',position:'relative', marginTop:'10px',}}>
        {stocks.map((stock) => (
            <div  style={{bottom:'0px'}} className="card" key={stock.id}>
            <div style={{ backgroundImage: `url(${stock.pic})`, borderRadius: '10px', backgroundSize: 'cover', height:'370px', backgroundPosition:'54% 42%',paddingLeft:'45px', position:'relative'}} className="card-image">
            <div style={{top:'200px',position:'absolute'}}>




</div>
            </div>
            </div>
        ))}
        </div>
        </div>

      
    </div>
  )
}

export default NeuralinkBlog