import React from 'react'
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
import './index.css'
import spaceX from '../images/Axiom_4_outsidehangar_IMG_3412_mobile_1d63de3e7e.jpg'
const Blog = () => {
    const stocks = [
    { id: 1, name: 'spaceX', change: '+23%' ,pic:teslaCar2},
    { id: 2, name: 'tesla', change: '+5%' ,pic:teslaCar3},
    { id: 3, name: 'Google', change: '-2%', pic:teslaCar1},
    { id: 4, name: 'Facebook', change: '+12%',pic:teslaCar5 },
  
  ];
  const TeslaData = {
      id: 3,
      name: 'tesla',
      video: teslaV,
      logo: tesla,
      pic: teslaP,
      data: `To accelerate the world’s transition to sustainable energy.
  Tesla produces electric vehicles, solar products, and energy storage solutions.`,
      coreMission: [
        {
          title: "Electric Vehicles",
          points: [
            "Full lineup from Model 3 to Cybertruck.",
            "Industry-leading battery xperformance."
          ],
          pic:self
        },
        {
          title: "Energy Products",
          points: [
            "Solar panels, Solar Roof, and Powerwall for homes and businesses."
          ],
          pic:starlinks
        },
        {
          title: "Autonomy & AI",
          points: [
            "Full Self-Driving ",
            "Supercomputer for AI training."
          ],
          pic:grok
        }
      ]
    }
  return (
        
    
    <div className="px-40 flex flex-1 justify-center py-5 bg-white" style={{marginTop:'55px'}}>
      <div className="layout-content-container flex flex-col  flex-1">
        <img src={tesla} alt="" srcset="" style={{textAlign:'center',margin:'auto',marginTop:'20px'  }}width='200px'/>
        <div className="scroll-container" style={{margin:'auto',position:'relative', marginTop:'10px',}}>
        {stocks.map((stock) => (
            <div  style={{bottom:'0px'}} className="card" key={stock.id}>
            <div style={{ backgroundImage: `url(${stock.pic})`, borderRadius: '10px', backgroundSize: 'cover', height:'370px', backgroundPosition:'54% 42%',paddingLeft:'45px', position:'relative'}} className="card-image">
            <div style={{top:'200px',position:'absolute'}}>
</div>
            </div>
            </div>
        ))}
        </div>
          <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
      {TeslaData.coreMission.map((item, index) => (
        <div
          key={index}
          className=" rounded-lg full-shadow  flex flex-col md:flex-row items-stretch overflow-hidden"style={{backgroundColor:'#f1f1f1'}}
        >
          {/* Text Section */}
          <div className="p-6 flex flex justify-center items-center flex-1">
            <div>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h2>
            <ul className="list-disc list-inside text-gray-600 list-none space-y-1">
              {item.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            </div>
             <div className={
    index === 0
      ? "md:w-[40%] w-full md:max-w-[130px] h-full"
      : "md:w-[40%] w-full md:max-w-[130px]"
  }style={{padding:'-10px'}}>
            <img
              src={item.pic}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            </div>
          
          </div>

          {/* Image Section */}
              
        </div>
      ))}
    </div>
       </div>
       </div>
        
  )
}

export default Blog