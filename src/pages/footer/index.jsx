// App.js
import React from 'react';

const index = () => {
  return (
    <div className='grid grid-cols-4 bg-[#f1f2f4] w-full mt-[13rem] px-[10rem] py-[5rem]'>
      <div>
        <h4>Milton</h4>
        <h5>A short text explaining 
        why my startup is so cool</h5>
        <p>© My super start-up</p>
      </div>
      <div className='col-span-2 flex'>
        <div>
            <h3>Products</h3>
            <h5>Features</h5>
            <h5>Testimonials</h5>
            <h5>Pricing</h5>
            <h5>FAQs</h5>
        </div>
        <div>
            <h3>Resources</h3>
            <h5>Change log</h5>
            <h5>Help center</h5>
            <h5>Blog</h5>
            <h5>Contact</h5>
        </div>
        <div>
            <h3>Privacy</h3>
            <h5>Terms</h5>
            <h5>Testimonials</h5>
            <h5>Affiliation</h5>
            <h5>Press</h5>
        </div>
      </div>
      <div>
      <h3>From the blog</h3>
        <h5>Mastering Your Schedule: Top Time Management Techniques for Balancing Work and Life</h5>
        <h5>Organizing Your Calendar for Enhanced Productivity and Focus</h5>
        <h5>The Power of Prioritization: Effective Strategies for Managing Your Time and Tasks</h5>
        <h5>Maximizing Your Minutes: Essential Tips for Streamlining Your Daily Routine and Calendar</h5>
      </div>
    </div>
  );
};

export default index;
