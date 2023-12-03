import React,{useEffect} from "react";
import "./index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faStar } from "@fortawesome/free-solid-svg-icons";
import hoverImg from "../images/svg.png"
import { useState } from "react";
import "./index.css"

const Index = () => {

  const [isHover, setIsHover] = useState(false)

  const hover = () => {
    setIsHover(true)
  }
  const dontHover = () => {
    setIsHover(false)
  }

  return (
    <div data-aos="fade-up" data-aos-duration="300" className="flex flex-col items-center justify-center mt-[10rem] mb-[5rem] w-[703px] 
      xl:w-[600px] 
      sm:w-[550px] font-plus-jakarta-sans">
      <h5 className="text-[16px] bg-[#F1F2F4] rounded-[100px] min-w-fit text-center font-bold py-[3px] px-[16px] 
        xl:text-[12px] 
        sm:text-[12px]">
        An other way to manage time
      </h5>
      <div className="leading-[5.5rem] 
        xl:w-[16rem] xl:leading-[3rem] 
        sm:w-[16rem] sm:leading-[3rem]">
        <h1 className="h1 text-[80px] block min-w-min font-extrabold text-center text-[#2e2e2e] 
          xl:text-[32px] 
          sm:text-[32px]">
          Your new favorite calendar <span className="text-[64px] xl:text-[32px] sm:text-[32px]">🗓️</span> app
        </h1>
      </div>
      <h6 className="text-[#6B6B78] text-[20px] font-thin text-center my-8 mx-[60px] min-w-min 
        xl:text-[16px] xl:w-[20rem] 
        sm:text-[16px] sm:w-[20rem]">
        Here you should explain how cool your app is. Remember, focus on the
        benefits for your users, not on the features.
      </h6>
      <button className="bg-[#2e2e2e] text-white py-[16px] px-[32px] rounded-[12px] font-bold mb-[5px] hover:scale-[110%] duration-500">
        Get started, it's free
      </button>
      <p className="text-center text-[12px] font-medium text-[#6B6B78] mb-[2rem]">Free 14 days trial, no credit card needed</p>
      <div className="icons flex sm:flex-col sm:items-center sm:justify-center sm:gap-[4px]">
        <div className="flex z-0">
          <div className="circle w-[42px] h-[40px] rounded-full border-2 relative border-white" onMouseEnter={hover} onMouseLeave={dontHover}><img src="https://framerusercontent.com/images/2fFFaPF5ZAByC4EYJKR5YVw5yw.png"></img></div>
          <div className="circle w-[42px] h-[40px] rounded-full border-2 relative left-[-12px] border-white" onMouseEnter={hover} onMouseLeave={dontHover}><img src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"></img></div>
          <div className="circle w-[42px] h-[40px] rounded-full border-2 relative left-[-24px] border-white" onMouseEnter={hover} onMouseLeave={dontHover}><img src='https://framerusercontent.com/images/6uYgdEC1jGe6urbMtA9d0dgg.png'></img></div>
          <div className="circle w-[42px] h-[40px] rounded-full border-2 relative left-[-36px] border-white" onMouseEnter={hover} onMouseLeave={dontHover}><img src="https://framerusercontent.com/images/2fFFaPF5ZAByC4EYJKR5YVw5yw.png"></img></div>
          <div className="circle w-[42px] h-[40px] rounded-full border-2 relative left-[-48px] border-white" onMouseEnter={hover} onMouseLeave={dontHover}><img src="https://framerusercontent.com/images/kxNdSiluF7hrK3n2KLRcdCNhTU.png"></img></div>
        </div>
        <div className="flex flex-col justify-end relative left-[-30px]">
          <div className="flex items-center gap-[0.5rem]">
            <div className="flex gap-[0.25rem] ">
              <FontAwesomeIcon icon={faStar} className="text-[#FEC84B]"/>
              <FontAwesomeIcon icon={faStar} className="text-[#FEC84B]"/>
              <FontAwesomeIcon icon={faStar} className="text-[#FEC84B]"/>
              <FontAwesomeIcon icon={faStar} className="text-[#FEC84B]"/>
              <FontAwesomeIcon icon={faStar} className="text-[#FEC84B]"/>
            </div>
            <h5>5.0</h5>
          </div>
          <h5  className="text-[#6B6B78] font-thin xl:text-[14px]">From 200+ happy users</h5>
        </div>
      </div>
    </div>
  );
};

export default Index;