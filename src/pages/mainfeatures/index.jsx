import React, {useState, useEffect, useRef} from 'react'
import "./index.css"

const index = () => {

  return (
    <div>
        <div className={`flex flex-col items-center font-plus-jakarta-sans`}>
        <img data-aos="fade-up" data-aos-duration="300" src="https://framerusercontent.com/images/eOkQipcAuByHjPvicAhsR8PzC0.png" className="w-[1200px] border-2 rounded-[20px] shadow-md mb-[16rem] 
            xxl:w-[75%] 
            xl:w-[60%] 
            sm:w-[40%]" alt="" />
        <div data-aos="fade-up" data-aos-duration="300" className='flex text-[16px] bg-[#F1F2F4] rounded-[100px] min-w-fit text-center font-bold py-[12px] px-[24px] gap-[10px]'>
            <h5 className="font-bold 
                xl:text-[12px]
                sm:text-[12px] " >Our main features 🦸🏼</h5>
        </div>
        <h1 data-aos="fade-up" data-aos-duration="300" className='font-extrabold text-[56px] text-[#2e2e2e] 
            xl:text-[32px]
            sm:text-[24px] '>Discover your new superpowers</h1>
        
        <div className='w-[1200px] grid grid-cols-2 gap-[4rem] mt-[6rem]  
            xxl:flex xxl:flex-col xxl:items-center xxl:justify-center 
            xl:flex xl:flex-col xl:items-center xl:justify-center
            sm:flex sm:flex-col sm:items-center sm:justify-center'>
            <div className='w-[550px] sm:w-[300px]'>
                <h5 data-aos="zoom-in-up" data-aos-duration="300" className="font-bold bg-[#fee9cb] text-[16px] text-[#2e2e2e] w-max py-[12px] px-[24px] rounded-[100px] place-self-center
                    xl:text-[12px]
                    sm:text-[12px] ">Seamless Scheduling</h5>
                <div data-aos="zoom-in-up" data-aos-duration="300" className='flex flex-col gap-[65px]'>
                    <h1 className='text-[40px] text-[#2e2e2e] font-extrabold leading-[3rem] mt-[1rem]
                        xl:text-[32px]
                        sm:text-[32px]'>Focus on what matters most for you</h1>
                    <p className='text-[#6b6b78] text-[20px] 
                        xl:text-[16px]
                        sm:text-[16px]'>Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="300" className='flex mt-[3rem]'>
                    <div className='relative bottom-[-90px]'>
                        <img src="https://framerusercontent.com/images/Pm9TTOkN341IYtePLdPGmhG0E.png" className='w-[84px]' alt="" />
                    </div>
                    <div className='bg-[#2e2e2e] flex flex-col gap-[12px] h-min justify-start p-[16px] rounded-t-[12px] rounded-r-[16px] rounded-bl-[6px] w-[65%]'>
                        <h5 className=' text-white
                            xl:text-[16px]
                            sm:text-[16px]'>I tested many calendar apps. This app is the best of all! It saves me hours of time.</h5>
                        <h5 className='text-[#90909e]
                            xl:text-[16px]
                            sm:text-[16px]'>Carla, Head of Finance</h5>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <img  data-aos="rotate-ac"  data-aos-duration="300" src="https://framerusercontent.com/images/KsZ6wO13QZewZKHzx7JNgFn88.png"
                 className="xxl:w-[50%] 
                 xl:w-[40%]
                 sm:w-[30%]"
                 ></img>
            </div>
        </div>
        </div>

        <div className='w-[1200px] grid grid-cols-2 font-plus-jakarta-sans mt-[13rem] 
            xxl:flex xxl:flex-col-reverse xxl:items-center xxl:justify-center 
            xl:flex xl:flex-col-reverse xl:items-center xl:justify-center
            sm:flex sm:flex-col sm:items-center sm:justify-center'>
            <div className='flex items-center justify-center'>
                <img data-aos="rotate-ac" data-aos-duration="300" src="https://framerusercontent.com/images/EgCwW6bpD4t2JQoyjgySRkUXc.png" 
                className=" xxl:w-[50%] 
                xl:w-[40%]
                sm:w-[30%]"></img>
            </div>
            <div className='w-[550px] sm:w-[300px]'>
                <h5 data-aos="zoom-in-up" data-aos-duration="300" className="font-bold bg-[#cceafd] text-[16px] text-[#2e2e2e] w-max py-[12px] px-[24px] rounded-[100px]
                    xl:text-[12px]
                    sm:text-[12px] ">Smart Reminders & Task</h5>
                <div data-aos="zoom-in-up" data-aos-duration="300" className='flex flex-col gap-[65px]'>
                    <h1 className='text-[40px] text-[#2e2e2e] font-extrabold leading-[3rem] mt-[1rem]
                        xl:text-[32px]
                        sm:text-[32px]'>Never miss an important deadline or event again</h1>
                    <p className='text-[#6b6b78] text-[20px] 
                        xl:text-[16px]
                        sm:text-[16px]'>Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="300" className='flex mt-[3rem] justify-end'>
                    <div className='bg-[#2e2e2e] flex flex-col gap-[12px] h-min justify-start p-[16px] rounded-t-[12px] rounded-l-[16px] rounded-br-[6px] w-[65%]'>
                        <h5 className=' text-white
                            xl:text-[16px]
                            sm:text-[16px]'>I love how user-friendly this app is! It's so easy to add events and set reminders!</h5>
                        <h5 className='text-[#90909e]
                            xl:text-[16px]
                            sm:text-[16px]'>Adam, entrepreneur</h5>
                    </div>
                    <div className='relative bottom-[-90px]'>
                        <img src="https://framerusercontent.com/images/CPGgYEBeFy4gDXe5dDzh1qjQG1w.png" className='w-[84px]' alt="" />
                    </div>
                </div>
            </div>
        </div>
            
        <div className='w-[1200px] grid grid-cols-2 gap-[4rem] mt-[13rem] 
            xxl:flex xxl:flex-col xxl:items-center xxl:justify-center 
            xl:flex xl:flex-col xl:items-center xl:justify-center
            sm:flex sm:flex-col sm:items-center sm:justify-center'>
            <div className='w-[550px] sm:w-[300px]'>
                <h5 data-aos="zoom-in-up" data-aos-duration="300" className="font-bold bg-[#ddf4e4] text-[16px] text-[#2e2e2e] w-max py-[12px] px-[24px] rounded-[100px]
                    xl:text-[12px]
                    sm:text-[12px] 
                    ">Seamless Scheduling</h5>
                <div data-aos="zoom-in-up" data-aos-duration="300" className='flex flex-col gap-[65px]'>
                    <h1 className='text-[40px] text-[#2e2e2e] font-extrabold leading-[3rem] mt-[1rem]
                        xl:text-[32px]
                        sm:text-[32px]'>Focus on what matters most for you</h1>
                    <p className='text-[#6b6b78] text-[20px] 
                        xl:text-[16px]
                        sm:text-[16px]'>Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="300" className='flex mt-[3rem]'>
                    <div className='relative bottom-[-90px]'>
                        <img src="https://framerusercontent.com/images/1OwzdZHx9ElDw1ZAavs6WGWBSw.png" className='w-[84px]' alt="" />
                    </div>
                    <div className='bg-[#2e2e2e] flex flex-col gap-[12px] h-min justify-start p-[16px] rounded-t-[12px] rounded-r-[16px] rounded-bl-[6px] w-[65%]'>
                        <h5 className=' text-white
                            xl:text-[16px]
                            sm:text-[16px]'>I've tried a lot of calendar apps, but this one is by far the best! It's so intuitive and customizable, and it has all the features I need.</h5>
                        <h5 className='text-[#90909e]
                            xl:text-[16px]
                            sm:text-[16px]'>Annie, Designer</h5>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <img data-aos="rotate-ac"  data-aos-duration="300" src="https://framerusercontent.com/images/xjG69OjCFt0Z3YQvNa3HNBBP5G0.png" 
                className=" xxl:w-[50%] 
                xl:w-[40%]
                sm:w-[30%]"></img>
            </div>
        </div>

        <div className='w-[1200px] grid grid-cols-2 font-plus-jakarta-sans mt-[13rem] 
            xxl:flex xxl:flex-col-reverse xxl:items-center xxl:justify-center 
            xl:flex xl:flex-col-reverse xl:items-center xl:justify-center
            sm:flex sm:flex-col-reverse sm:items-center sm:justify-center'>
            <div className='flex items-center justify-center'>
                <img data-aos="rotate-ac"  data-aos-duration="300" src="https://framerusercontent.com/images/ow5cq9Ercs5KlWFqhMUsdUkCl8.png" 
                className="xxl:w-[50%] 
                xl:w-[40%]
                sm:w-[30%]"></img>
            </div>
            <div className='w-[550px] sm:w-[300px]'>
                <h5 data-aos="zoom-in-up" data-aos-duration="300" className="font-bold bg-[#fdded6] text-[16px] text-[#2e2e2e] w-max py-[12px] px-[24px] rounded-[100px]
                    xl:text-[12px]
                    sm:text-[12px] ">Smart Reminders & Task</h5>
                <div data-aos="zoom-in-up" data-aos-duration="300" className='flex flex-col gap-[65px]'>
                    <h1 className='text-[40px] text-[#2e2e2e] font-extrabold leading-[3rem] mt-[1rem]
                        xl:text-[32px]
                        sm:text-[32px]'>Never miss an important deadline or event again</h1>
                    <p className='text-[#6b6b78] text-[20px] 
                        xl:text-[16px]
                        sm:text-[16px]'>Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="300" className='flex mt-[3rem] justify-end'>
                    <div className='bg-[#2e2e2e] flex flex-col gap-[12px] h-min justify-start p-[16px] rounded-t-[12px] rounded-l-[16px] rounded-br-[6px] w-[65%]'>
                        <h5 className=' text-white
                            xl:text-[16px]
                            sm:text-[16px]'>I've recommended this app to all my friends and colleagues! </h5>
                        <h5 className='text-[#90909e]
                            xl:text-[16px]
                            sm:text-[16px]'>Karl, CTO of a cool startup</h5>
                    </div>
                    <div className='relative bottom-[-90px]'>
                        <img data-aos="rotate-ac"  data-aos-duration="300" src="https://framerusercontent.com/images/lKaaStgbmdIe8TfrIkFlKzHazV0.png" className='w-[84px]' alt="" />
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default index