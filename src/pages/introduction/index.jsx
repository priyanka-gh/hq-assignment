import React from "react";
import "./index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faStar } from "@fortawesome/free-solid-svg-icons";
import hoverImg from "../images/svg.png"
import { useState } from "react";

const Index = () => {

  const [isHover, setIsHover] = useState(false)

  const hover = () => {
    setIsHover(true)
  }
  const dontHover = () => {
    setIsHover(false)
  }

  return (
    <div className="flex flex-col items-center justify-center mt-[10rem] mb-[5rem] w-[703px]  font-plus-jakarta-sans">
      <h5 className="text-[16px] bg-[#F1F2F4] rounded-[100px] min-w-fit text-center font-bold py-[3px] px-[16px]">
        An other way to manage time
      </h5>
      <h1 className="h1 text-[80px] block min-w-min font-extrabold text-center text-[#2e2e2e]">
        Your new favorite calendar <span className="text-[64px]">🗓️</span> app
      </h1>
      <h6 className="text-[#6B6B78] text-[20px] font-thin text-center my-8 mx-[60px] min-w-min">
        Here you should explain how cool your app is. Remember, focus on the
        benefits for your users, not on the features.
      </h6>
      <button className="bg-[#2e2e2e] text-white py-[16px] px-[32px] rounded-[12px] font-bold mb-[5px]">
        Get started, it's free
      </button>
      <p className="text-center text-[12px] font-medium text-[#6B6B78] mb-[2rem]">Free 14 days trial, no credit card needed</p>
      <div className="icons flex">
        <div className="flex z-0">
          <div className="circle w-[42px] h-[40px] bg-black rounded-full border-2 relative bg-[#C8A2C8]" onMouseEnter={hover} onMouseLeave={dontHover}>{isHover && <img src={hoverImg}></img>}</div>
          <div className="circle w-[42px] h-[40px] bg-black rounded-full border-2 relative left-[-12px] bg-[#ADD8E6]"onMouseEnter={hover} onMouseLeave={dontHover}>{isHover && <img src={hoverImg}></img>}</div>
          <div className="circle w-[42px] h-[40px] bg-black rounded-full border-2 relative left-[-24px] bg-[#FFC0CB]"onMouseEnter={hover} onMouseLeave={dontHover}>{isHover && <img src={hoverImg}></img>}</div>
          <div className="circle w-[42px] h-[40px] bg-black rounded-full border-2 relative left-[-36px] bg-[#FFDAB9]"onMouseEnter={hover} onMouseLeave={dontHover}>{isHover && <img src={hoverImg}></img>}</div>
          <div className="circle w-[42px] h-[40px] bg-black rounded-full border-2 relative left-[-48px] bg-[#00FFFF]"onMouseEnter={hover} onMouseLeave={dontHover}>{isHover && <img src={hoverImg}></img>}</div>
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
          <h5  className="text-[#6B6B78]">From 200+ happy users</h5>
        </div>
      </div>
    </div>
  );
};

export default Index;