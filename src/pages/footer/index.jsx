import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const index = () => {
  return (
    <div className='grid grid-cols-4 bg-[#f1f2f4] w-full mt-[13rem] px-[10rem] py-[2rem] font-plus-jakarta-sans 
      xxl:px-[2rem]
      xl:flex xl:flex-col xl:px-[40px] xl:gap-[24px] 
      sm:flex sm:flex-col sm:px-[40px] sm:gap-[24px]'>
      <div className=''>
        <div className='flex gap-[8px] mb-[1rem]'>
          <button className="bg-[#fff] px-1 py-0 rounded-3"><FontAwesomeIcon icon={faCaretUp} className="text-[24px] font-bold"/></button>
          <h4 className='text-[24px] font-bold text-[#2d2d2d]'>Milton</h4>
        </div>
        <h5 className='text-[#6b6b78] text-[16px]'>A short text explaining <br></br>why my startup is so cool</h5>
        <p className='text-[#6b6b78] my-[1rem]'>© My super start-up</p>
        <div className='flex gap-4'>
          <img src="https://framerusercontent.com/images/vbouc63110hrN4mpMDBbBqxbgY.svg" alt="" />
          <img src="https://framerusercontent.com/images/A9DrwvI3tDOPLUSsJGHlIqt9SkI.svg" alt="" />
          <img src="https://framerusercontent.com/images/YSSiRnfV1Ebaxm94FWkCKCkc.svg" alt="" />
        </div>
      </div>
      <div className='col-span-2 flex
        xl:flex xl:flex-col xl:gap-[10px]
        sm:flex sm:flex-col sm:gap-[10px]'>
        <div className='mx-[40px] flex flex-col gap-[8px] xxl:mx-[20px]'>
            <h3 className='text-[20px] font-bold text-[#2d2d2d] mb-[1rem]'>Products</h3>
            <h5 className='text-[#6b6b78] text-[16px]'>Features</h5>
            <h5 className='text-[#6b6b78] text-[16px]'>Testimonials</h5>
            <h5 className='text-[#6b6b78] text-[16px]'>Pricing</h5>
            <h5 className='text-[#6b6b78] text-[16px]'>FAQs</h5>
        </div>
        <div className='mx-[40px] flex flex-col gap-[8px] xxl:mx-[20px]'>
            <h3 className='text-[20px] font-bold text-[#2d2d2d] mb-[1rem]'>Resources</h3>
            <h5 className='text-[#6b6b78] text-[16px]'>Change log</h5>
            <h5 className='text-[#6b6b78] text-[16px]'>Help center</h5>
            <h5 className='text-[#6b6b78] text-[16px]'>Blog</h5>
            <h5 className='text-[#6b6b78] text-[16px]'>Contact</h5>
        </div>
        <div className='mx-[40px] flex flex-col gap-[8px] xxl:mx-[20px]'>
            <h3 className='text-[20px] font-bold text-[#2d2d2d] mb-[1rem]'>Others</h3>
            <h5 className='text-[#6b6b78] text-[16px]'>Privacy</h5>
            <h5 className='text-[#6b6b78] text-[16px]'>Terms</h5>
            <h5 className='text-[#6b6b78] text-[16px]'>Affiliations</h5>
            <h5 className='text-[#6b6b78] text-[16px]'>Press</h5>
        </div>
      </div>
      <div className='
        xl:flex xl:flex-col xl:gap-[10px]
        sm:flex sm:flex-col sm:gap-[10px]'>
        <h3 className='text-[20px] font-bold text-[#2d2d2d] mb-[1rem]'>From the blog</h3>
        <div className='flex flex-col'>
          <h5 className='text-[#6b6b78] text-[16px] hover:text-black hover:underline hover:underline-offset-4 leading-5'>Mastering Your Schedule: Top Time Management Techniques for Balancing Work and Life</h5><br/>
          <h5 className='text-[#6b6b78] text-[16px] hover:text-black hover:underline hover:underline-offset-4 leading-5'>Organizing Your Calendar for Enhanced Productivity and Focus</h5><br/>
          <h5 className='text-[#6b6b78] text-[16px] hover:text-black hover:underline hover:underline-offset-4 leading-5'>The Power of Prioritization: Effective Strategies for Managing Your Time and Tasks</h5><br/>
          <h5 className='text-[#6b6b78] text-[16px] hover:text-black hover:underline hover:underline-offset-4 leading-5'>Maximizing Your Minutes: Essential Tips for Streamlining Your Daily Routine and Calendar</h5><br/>
        </div>
      </div>
    </div>
  );
};

export default index;
