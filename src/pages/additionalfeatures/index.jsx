import React from 'react';
import Suitcase from "../images/suitcase.png";
import P1 from "../images/p1.png";
import P2 from "../images/p2.png";
import P3 from "../images/p3.png";
import P4 from "../images/p4.png";
import P5 from "../images/p5.png";
import P6 from "../images/p6.png"
const Index = () => {
  const data = [
    {
      "id": 1,
      "image": P1,
      "title": "Cross-Device Sync",
      "description": "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go."
    },
    {
      "id": 2,
      "image": P2,
      "title": "Auto Event Import",
      "description": "Automatically import events from emails, social media, and other sources, so you never miss a beat or have to manually input details."
    },
    {
      "id": 3,
      "image": P3,
      "title": "Task Delegation",
      "description": "Easily assign tasks to team members, family, or friends, promoting shared responsibility and seamless collaboration."
    },
    {
      "id": 4,
      "image": P4,
      "title": "Voice Command Integration",
      "description": "Quickly create events, set reminders, or reschedule appointments with voice commands, thanks to compatibility with popular virtual assistants."
    },
    {
      "id": 5,
      "image": P5,
      "title": "Customizable Alerts",
      "description": "Personalize notification types and timings for events, tasks, and goals, ensuring you stay on track and informed without feeling overwhelmed."
    },
    {
      "id": 6,
      "image": P6,
      "title": "Privacy Protection",
      "description": "Safeguard your personal information and event details with our robust security measures, including end-to-end encryption and optional password protection."
    }
  ];

  const colors = [
    '#f1f2f4',
    '#fee9cb',
    '#cceafd',
    '#ddf4e4',
    '#fdded6',
    '#c39cf6',
  ];

  return (
    <div className='flex flex-col items-center w-[1250px] font-plus-jakarta-sans'>
      <div className='flex text-[16px] bg-[#F1F2F4] rounded-[100px] min-w-fit text-center font-bold py-[12px] px-[24px] gap-[10px] mt-[16rem] items-center'>
        <h5 className="font-bold ">And so much more... 💼</h5>
      </div>
      <h1 className=' font-extrabold text-[56px]'>Our features to make your life easier</h1>
      <div className="flex mt-8 grid grid-cols-3 w-[100%]">
        {data.map((item, index) => (
          <div key={item.id} className={`flex flex-col items-center w-[25rem] mb-[4rem]`}>
            <img src={item.image} alt={`Item ${item.id}`} className="mb-4" />
            <h3 className={`font-bold font-[14px] py-[12px] px-[24px] rounded-[24px] text-[#2d2d2d] self-start`} style={{ backgroundColor: colors[index] }}>{item.title}</h3>
            <p className="text-[#6b6b78] font-[16px] mt-[2rem]">{item.description}</p>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
