import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import spaceX from '../assets/spaceX.svg';
import tesla from '../assets/tesla.svg';
import spacexV from '../images/videoplayback.mp4';
import teslaV from '../images/Elon Musk Talks Tesla ROBOTAXI For 10 Min Straight.mp4';
import neuralinkV from '../images/neuralinkIntro.BLFlcxWZ.mp4'
import SpaceXP from '../images/blogSpaceX.jpg';
import teslaP from '../images/Homepage-Card-Model-S-Mobile-US.avif'
import neuralinkP from '../images/neuralink.jpg'

const StockBlog = () => {
    const { stockname } = useParams();
    console.log(stockname);
    const navigate = useNavigate()
    const handleNavigate = (stockname)=>{
        navigate(`/details/${stockname}`)
    }
const data = [
  {
    id: 1,
    name: 'spacex',
    video: spacexV,
    logo: spaceX,
    pic: SpaceXP,
    data: `To make life multiplanetary.
SpaceX's ultimate goal is to enable human colonization of Mars while lowering the cost of space access and making space travel routine and sustainable.`,
    coreMission: [
      {
        title: "Falcon 9 & Falcon Heavy",
        points: [
          "Reusable rockets for launching satellites, cargo, and astronauts.",
          "Falcon 9: Most frequently flown rocket in history.",
          "Falcon Heavy: Most powerful operational rocket until Starship."
        ]
      },
      {
        title: "Starship",
        points: [
          "Fully reusable spacecraft designed for Mars and deep space missions.",
          "Will replace Falcon rockets for all future missions."
        ]
      },
      {
        title: "Starlink",
        points: [
          "Satellite internet constellation providing global broadband coverage."
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'neuralink',
    video: neuralinkV,
    pic: neuralinkP,
    data: `To create a direct brain–computer interface.
Neuralink aims to merge the human brain with AI to treat neurological disorders and eventually enhance cognitive abilities.`,
    coreMission: [
      {
        title: "Brain Implants",
        points: [
          "Neural lace technology implanted in the skull.",
          "Interfaces with brain activity using ultra-thin threads."
        ]
      },
      {
        title: "Medical Use Cases",
        points: [
          "Initially targets conditions like paralysis, blindness, and memory loss."
        ]
      },
      {
        title: "Long-Term Vision",
        points: [
          "Enable symbiosis with AI and high-bandwidth brain communication."
        ]
      }
    ]
  },
  {
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
          "Industry-leading battery range and performance."
        ]
      },
      {
        title: "Energy Products",
        points: [
          "Solar panels, Solar Roof, and Powerwall for homes and businesses."
        ]
      },
      {
        title: "Autonomy & AI",
        points: [
          "Full Self-Driving (FSD) software under development.",
          "Dojo supercomputer for AI training."
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'starlink',
    video: 'https://www.youtube.com/watch?v=YQ6b1k2g0a4',
    pic: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANKBXySVC2YIrbE4MxUH5Ysgn41spK0ZAkbAXNz86w-k-G81RTlHUZclQ7PjVhHlDpm0n2CPsr9q0I0l2cjTlI9OSrXLQKRV3ubYZ5lz1XRHoLdpDWm48Y0_IUIJh6FoXpORD4op40SOz_Wkzcgmd0hxkDEsrU2IM8WVcty05Gkpv1kggLOorpmHERtbcKiZo6ljOAsKDDCMFc9TfCtho1h8wwTasJXXDaTeVY48UweAVOQWEtDfn6urwHNll-b9roDOZNynjvLw',
    data: `To provide fast, affordable internet access globally.
Starlink is a satellite-based internet service powered by SpaceX.`,
    coreMission: [
      {
        title: "Global Connectivity",
        points: [
          "Especially beneficial for rural and underserved regions."
        ]
      },
      {
        title: "Satellite Network",
        points: [
          "Thousands of low-Earth orbit satellites form a mesh network."
        ]
      },
      {
        title: "Expansion Plans",
        points: [
          "Scaling up to tens of thousands of satellites.",
          "Provides critical internet during disasters and in remote areas."
        ]
      }
    ]
  }
];

 const stockData = data.find(item=> item.name.toLowerCase() === stockname.toLowerCase())
 console.log(stockData);
 

  return (
    
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        {/* Breadcrumb */}
        <div className="flex flex-wrap gap-2 p-4" style={{ marginTop: '30px' }}>
            
          <a className="text-[#a6b3a2] text-base font-medium leading-normal" href="#">Stocks</a>
         

          <span className="text-[#a6b3a2] text-base font-medium leading-normal">/</span>
          <span className="text-white text-base font-medium leading-normal">{stockData.name}</span>
          
        </div>

        {/* Title & Description */}
        
            <img src={stockData.logo} alt="" width='300px' style={{marginLeft:'16px', color:'white',marginBottom:'10px'}}/>
        
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
            {stockData.data}
        </p>

        {/* Videos */}
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Elon speaking on {stockData.name}</h2>

<div className="p-4">
  <div className="rounded-xl overflow-hidden bg-black aspect-video w-full max-w-full" style={{height:'440px'}}>
    <video 
      src={stockData.video} 
      controls 
      className="w-full h-full object-cover object-top"
    />
  </div>
</div>
{stockData.coreMission.map((mission, idx) => (
  <div key={idx} className="mb-4 ml-4" >
    <h3 className="font-bold" style={{ color: '#8cd279' ,fontSize:'21px'}}>{mission.title}</h3>
    <ul className="list-disc list-inside  text-sm pl-4">
      {mission.points.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  </div>
))}



        {/* Image Section */}
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Image</h2>
        <div className="flex grow bg-[#131612] p-4" style={{height:'450px'}}>
          <div className="w-full  gap-1 overflow-hidden bg-[#131612] aspect-[3/2] rounded-xl flex ">
            <div
              className=" w-full bg-no-repeat bg-cover aspect-auto rounded-none flex-1 rounded-xl"
              style={{
                backgroundImage: `url(${stockData.pic})`,
                backgroundPosition:'50% 20%',
                backgroundSize:'cover',
                
                height:'100%'
              }}
            ></div>
          </div>
        </div>

        {/* Buy Button */}
        <div className="flex px-4 py-3 justify-end">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#8cd279] text-[#131612] text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate" onClick={()=>handleNavigate(stockname)}>Buy</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StockBlog;
