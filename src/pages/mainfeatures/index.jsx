import React from 'react'
import image1 from "../images/image.png"
import Superman from "../images/Superman.png"
import Calendar from "../images/calendar.png"
import Chef from "../images/chef.png"
import Reminder from "../images/reminder.png"
import Chart from "../images/chart.png"
import Notification from "../images/notifications.png"

const index = () => {
  return (
    <div>
        <div className='flex flex-col items-center font-plus-jakarta-sans'>
        <img src={image1} className="w-[1200px] border-2 rounded-[20px] shadow-md mb-[16rem]" alt="" />
        <div className='flex text-[16px] bg-[#F1F2F4] rounded-[100px] min-w-fit text-center font-bold py-[12px] px-[24px] gap-[10px]'>
            <h5 className="font-bold">Our main features 🦸🏼</h5>
        </div>
        <h1 className='font-extrabold text-[56px] text-[#2e2e2e]'>Discover your new superpowers</h1>
        <div className='w-[1200px] grid grid-cols-2 gap-[4rem] mt-[6rem]'>
            <div className='w-[550px]'>
                <h5 className="font-bold bg-[#fee9cb] text-[16px] text-[#2e2e2e] w-max py-[12px] px-[24px] rounded-[100px]">Seamless Scheduling</h5>
                <div className='flex flex-col gap-[65px]'>
                    <h1 className='text-[40px] text-[#2e2e2e] font-extrabold leading-[3rem] mt-[1rem]'>Focus on what matters most for you</h1>
                    <p className='text-[#6b6b78] text-[20px] '>Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.</p>
                </div>
                <div className='flex mt-[3rem]'>
                    <div className='relative bottom-[-90px]'>
                        <img src={Chef} alt="" />
                    </div>
                    <div className='bg-[#2e2e2e] flex flex-col gap-[12px] h-min justify-start p-[16px] rounded-t-[12px] rounded-r-[16px] rounded-bl-[6px] w-[65%]'>
                        <h5 className=' text-white'>I tested many calendar apps. This app is the best of all! It saves me hours of time.</h5>
                        <h5 className='text-[#90909e]'>Carla, Head of Finance</h5>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <img src={Calendar} className="w-[400px]"></img>
            </div>
        </div>
        </div>

        <div className='w-[1200px] grid grid-cols-2 font-plus-jakarta-sans mt-[18rem]'>
            <div className='flex items-center justify-center'>
                <img src={Reminder} className="w-[400px]"></img>
            </div>
            <div className='w-[550px]'>
                <h5 className="font-bold bg-[#cceafd] text-[16px] text-[#2e2e2e] w-max py-[12px] px-[24px] rounded-[100px]">Smart Reminders & Task</h5>
                <div className='flex flex-col gap-[65px]'>
                    <h1 className='text-[40px] text-[#2e2e2e] font-extrabold leading-[3rem] mt-[1rem]'>Never miss an important deadline or event again</h1>
                    <p className='text-[#6b6b78] text-[20px] '>Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.</p>
                </div>
                <div className='flex mt-[3rem] justify-end'>
                    <div className='bg-[#2e2e2e] flex flex-col gap-[12px] h-min justify-start p-[16px] rounded-t-[12px] rounded-l-[16px] rounded-br-[6px] w-[65%]'>
                        <h5 className=' text-white'>I love how user-friendly this app is! It's so easy to add events and set reminders!</h5>
                        <h5 className='text-[#90909e]'>Adam, entrepreneur</h5>
                    </div>
                    <div className='relative bottom-[-90px]'>
                        <img src={Chef} alt="" />
                    </div>
                </div>
            </div>
        </div>
            
        <div className='w-[1200px] grid grid-cols-2 gap-[4rem] mt-[18rem]'>
            <div className='w-[550px]'>
                <h5 className="font-bold bg-[#ddf4e4] text-[16px] text-[#2e2e2e] w-max py-[12px] px-[24px] rounded-[100px]">Seamless Scheduling</h5>
                <div className='flex flex-col gap-[65px]'>
                    <h1 className='text-[40px] text-[#2e2e2e] font-extrabold leading-[3rem] mt-[1rem]'>Focus on what matters most for you</h1>
                    <p className='text-[#6b6b78] text-[20px] '>Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.</p>
                </div>
                <div className='flex mt-[3rem]'>
                    <div className='relative bottom-[-90px]'>
                        <img src={Chef} alt="" />
                    </div>
                    <div className='bg-[#2e2e2e] flex flex-col gap-[12px] h-min justify-start p-[16px] rounded-t-[12px] rounded-r-[16px] rounded-bl-[6px] w-[65%]'>
                        <h5 className=' text-white'>I've tried a lot of calendar apps, but this one is by far the best! It's so intuitive and customizable, and it has all the features I need.</h5>
                        <h5 className='text-[#90909e]'>Annie, Designer</h5>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <img src={Chart} className="w-[500px]"></img>
            </div>
        </div>

        <div className='w-[1200px] grid grid-cols-2 font-plus-jakarta-sans mt-[18rem]'>
            <div className='flex items-center justify-center'>
                <img src={Notification} className="w-[400px]"></img>
            </div>
            <div className='w-[550px]'>
                <h5 className="font-bold bg-[#fdded6] text-[16px] text-[#2e2e2e] w-max py-[12px] px-[24px] rounded-[100px]">Smart Reminders & Task</h5>
                <div className='flex flex-col gap-[65px]'>
                    <h1 className='text-[40px] text-[#2e2e2e] font-extrabold leading-[3rem] mt-[1rem]'>Never miss an important deadline or event again</h1>
                    <p className='text-[#6b6b78] text-[20px] '>Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.</p>
                </div>
                <div className='flex mt-[3rem] justify-end'>
                    <div className='bg-[#2e2e2e] flex flex-col gap-[12px] h-min justify-start p-[16px] rounded-t-[12px] rounded-l-[16px] rounded-br-[6px] w-[65%]'>
                        <h5 className=' text-white'>I've recommended this app to all my friends and colleagues! </h5>
                        <h5 className='text-[#90909e]'>Karl, CTO of a cool startup</h5>
                    </div>
                    <div className='relative bottom-[-90px]'>
                        <img src={Chef} alt="" />
                    </div>
                </div>
            </div>
        </div>
        
        </div>
  )
}

export default index