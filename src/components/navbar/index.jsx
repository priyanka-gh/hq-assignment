import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faBars } from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar flex justify-between items-center h-[80px] bg-[#FEF9F6] font-plus-jakarta-sans font-[16px] border-b-2 px-[2.5rem] fixed w-full z-10
      ${isMenuOpen? "sm:border-b-[0px] xl:border-b-[0px]" : ""}`}>
      <div className={`flex gap-[4px] font-bold ml-[8rem]
        sm:ml-0
        xl:ml-0
        ${isMenuOpen? "sm:hidden" : " "}`}>
        <button className="bg-[#F1F2F4] rounded-3">
        <button className="bg-[#F1F2F4] px-2 rounded-3"><FontAwesomeIcon icon={faCaretUp} className="text-[16px]"/></button>
        </button>
        <h5 className='text-[16px]'>Milton</h5>
      </div>
      <div className='flex justify-around items-center sm:hidden xl:hidden w-[80%] ml-[7.5rem]'>
        <div className='tabs flex flex-row lg:flex-row lg:justify-evenly gap-[40px] text-[#6B6B78] font-bold lg:flex'>
          <h5 className='hover:text-black hover:underline hover:underline-offset-4'>Features</h5>
          <h5 className='hover:text-black hover:underline hover:underline-offset-4'>Testimonial</h5>
          <h5 className='hover:text-black hover:underline hover:underline-offset-4'>Pricing</h5>
          <h5 className='hover:text-black hover:underline hover:underline-offset-4'>FAQs</h5>
          <h5  className='hover:text-black hover:underline hover:underline-offset-4'>Blog</h5>
        </div>

        <div className={`flex nav_btns gap-[8px] font-bold ${isMenuOpen ? 'flex-col' : 'lg:flex'}`}>
          <button className='py-[8px] px-[16px] bg-[#F1F2F4] rounded-[12px]'>Log in</button>
          <button className='py-[8px] px-[16px] bg-[#000] text-white rounded-[12px]'>Get started</button>
        </div>
        </div>

      {isMenuOpen && (
        <div className='w-[130vw] bg-[#FEF9F6] relative top-[19vh] p-[3rem] flex flex-col items-center content-center gap-[20px]'>
        <div className='tabs flex flex-col lg:flex-row lg:justify-evenly gap-[40px] text-[#6B6B78] font-bold'>
          <a className='hover:text-black hover:underline hover:underline-offset-4'>Features</a>
          <a className='hover:text-black hover:underline hover:underline-offset-4'>Testimonial</a>
          <a className='hover:text-black hover:underline hover:underline-offset-4'>Pricing</a>
          <a className='hover:text-black hover:underline hover:underline-offset-4'>FAQs</a>
          <a className='hover:text-black hover:underline hover:underline-offset-4'>Blog</a>
        </div>

        <div className={`flex nav_btns gap-[8px] font-bold flex-col`}>
          <button className='py-[8px] px-[16px] bg-[#F1F2F4] rounded-[12px]'>Log in</button>
          <button className='py-[8px] px-[16px] bg-[#000] text-white rounded-[12px]'>Get started</button>
        </div>
        </div>
      )}
      <button className="bg-[#F1F2F4] px-2 rounded-3 xxl:hidden xxxl:hidden" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className="text-[16px]" />
      </button>
    </div>
  );
};

export default Index;
