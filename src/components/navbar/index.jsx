import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
const index = () => {
  return (
    <div className='navbar flex justify-around items-center h-[80px] bg-[#FEF9F6] font-plus-jakarta-sans font-[16px] border-b-2 px-[2.5rem] fixed w-full z-10'>
        <div className='flex gap-[4px] font-bold'>
          <button className="bg-[#F1F2F4] px-2 rounded-3"><FontAwesomeIcon icon={faCaretUp} className="text-[16px]"/></button>
          <h5 className='text-[16px]'>Milton</h5>
        </div>
        <div className='tabs flex justify-evenly gap-[40px] text-[#6B6B78] font-bold'>
            <h5>Features</h5>
            <h5>Testimonial</h5>
            <h5>Pricing</h5>
            <h5>FAQs</h5>
            <h5>Blog</h5>
        </div>
        <div className='flex nav_btns gap-[8px] font-bold'>
            <button className='py-[8px] px-[16px] bg-[#F1F2F4] rounded-[12px]'>Log in</button>
            <button className='py-[8px] px-[16px] bg-[#000] text-white rounded-[12px]'>Get started</button>
        </div>
    </div>
  )
}

export default index