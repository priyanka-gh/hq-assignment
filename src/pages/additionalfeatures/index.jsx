import React from 'react';

const Index = () => {
  const data = [
    {
      "id": 1,
      "image": "https://framerusercontent.com/images/psdpn17XuwZ0NdeAgqZ1B9jIs.svg",
      "title": "Cross-Device Sync",
      "description": "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go."
    },
    {
      "id": 2,
      "image": "https://framerusercontent.com/images/9zLLT2PHM1pdm0cmjDvqVV6u4.svg",
      "title": "Auto Event Import",
      "description": "Automatically import events from emails, social media, and other sources, so you never miss a beat or have to manually input details."
    },
    {
      "id": 3,
      "image": "https://framerusercontent.com/images/MnBPtp8lNOwne9QGiLZLBCkZK9k.svg",
      "title": "Task Delegation",
      "description": "Easily assign tasks to team members, family, or friends, promoting shared responsibility and seamless collaboration."
    },
    {
      "id": 4,
      "image": 'https://framerusercontent.com/images/VFrv8s9Ou5YYTsx7jkOfyXmAm2Y.png',
      "title": "Voice Command Integration",
      "description": "Quickly create events, set reminders, or reschedule appointments with voice commands, thanks to compatibility with popular virtual assistants."
    },
    {
      "id": 5,
      "image": "https://framerusercontent.com/images/l2ZsBz5u7WqpiyCOQ4jeJmYCYIc.png",
      "title": "Customizable Alerts",
      "description": "Personalize notification types and timings for events, tasks, and goals, ensuring you stay on track and informed without feeling overwhelmed."
    },
    {
      "id": 6,
      "image": "https://framerusercontent.com/images/RGak3EPkyg9scIKkezsY8Rn7E.png",
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
      <div data-aos="fade-up" data-aos-duration="300" className='flex text-[16px] bg-[#F1F2F4] rounded-[100px] min-w-fit text-center font-bold py-[12px] px-[24px] gap-[10px] mt-[16rem] items-center'>
        <h5 className="font-bold ">And so much more... 💼</h5>
      </div>
      <h1 data-aos="fade-up" data-aos-duration="300" className=' font-extrabold text-[56px]'>Our features to make your life easier</h1>
      <div className="flex mt-8 grid grid-cols-3 w-[100%]">
        {data.map((item, index) => (
          <div data-aos="fade-up" data-aos-duration="300" key={item.id} className={`flex flex-col items-center w-[25rem] mb-[4rem]`}>
            <div className='bg-[#f1f2f4] h-[17rem] w-[25rem] flex items-center justify-center  rounded-[24px]'>
              <img src={item.image} alt={`Item ${item.id}`} className="mb-4 max-w-[70%] max-h-[70%]" />
            </div>
            <h3 className={`font-bold font-[14px] py-[12px] px-[24px] rounded-[24px] text-[#2d2d2d] self-start mt-[1.5rem]`} style={{ backgroundColor: colors[index] }}>{item.title}</h3>
            <p className="text-[#6b6b78] font-[16px] mt-[2rem]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
