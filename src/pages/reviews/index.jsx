// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { faFaceGrinHearts } from "@fortawesome/free-solid-svg-icons";
// import { useSpring, animated, config } from 'react-spring';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendarDays, faStar } from "@fortawesome/free-solid-svg-icons";

// const testimonials = [
//   {
//     id: 1,
//     text: "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
//     author: "Adam Moore",
//     role: "Entrepreneur",
//   },
//   {
//     id: 2,
//     text: "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
//     author: "Adam Moore",
//     role: "Entrepreneur",
//   },{
//     id: 3,
//     text: "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
//     author: "Adam Moore",
//     role: "Entrepreneur",
//   },{
//     id: 4,
//     text: "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
//     author: "Adam Moore",
//     role: "Entrepreneur",
//   },
// ];

// const Testimonial = ({ testimonial, style }) => {
//   return (
//     <animated.div className='w-[400px]' style={style}>
//       <div>
//         <div>
//           <img alt='hi' />
//           <h5>“Just love it”</h5>
//         </div>
//         <div className="flex gap-[0.25rem] ">
//           <FontAwesomeIcon icon={faStar} className="text-[#FEC84B]" />
//           <FontAwesomeIcon icon={faStar} className="text-[#FEC84B]" />
//           <FontAwesomeIcon icon={faStar} className="text-[#FEC84B]" />
//           <FontAwesomeIcon icon={faStar} className="text-[#FEC84B]" />
//           <FontAwesomeIcon icon={faStar} className="text-[#FEC84B]" />
//         </div>
//       </div>
//       <div>
//         <p>{testimonial.text}</p>
//       </div>
//       <div>
//         <h4>{testimonial.author}</h4>
//         <h4>{testimonial.role}</h4>
//       </div>
//     </animated.div>
//   );
// };

// const TestimonialCarousel = () => {
//   const [index, setIndex] = useState(0);

//   const props = useSpring({
//     transform: `translateX(${-index * 400}px)`,
//     config: { ...config.default, duration: 6000 }, // Adjust duration for the desired speed
//     onRest: () => setIndex((prevIndex) => (prevIndex + 1) % testimonials.length),
//   });

//   return (
//     <div className="w-[1500px] overflow-hidden">
//       <animated.div className='flex gap-[2rem]' style={props}>
//         {testimonials.map((testimonial, i) => (
//           <Testimonial key={testimonial.id} testimonial={testimonial} style={{ marginRight: i === testimonials.length - 1 ? 0 : '2rem' }} />
//         ))}
//       </animated.div>
//     </div>
//   );
// };

// export default TestimonialCarousel;

import React from 'react';
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faStar } from "@fortawesome/free-solid-svg-icons";

const TestimonialMarquee = () => {
  const testimonial1 = [
    {
      id: 1,
      text: "“Just love it”",
      desc: "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
      author: "Adam Moore",
      role: "Entrepreneur",
    },
    {
      id: 2,
      text: "“The best time manager app”",
      desc: "I love how user-friendly this app is! It's so easy to add events and set reminders, and it's made my life so much more organized.",
      author: "Brad de Costa",
      role: "Head of Marketing",
    },
    {
      id: 3,
      text : "“Highly recommend”",
      desc: "This app has saved me so much time and stress! I used to constantly forget important dates, but now I can stay on top of everything. You should test it!",
      author: "Sophie Devilan",
      role: "Entrepreneur"
    }
  ];

  const testimonial2 = [
    {
      "text": "“No more forgotten appointments”",
      "desc": "I'm not the most organized person, but this app has made it so easy for me to stay on top of things! I love how I can set reminders and get notifications, and it's really helped me.",
      "author": "Michel O Neil",
      "role": "Head of sales"
    },
    {
      "text": "“Better than the rest”",
      "desc": "I've tried a lot of calendar apps, but this one is by far the best! It's so intuitive and customizable, and it has all the features I need. Game changer!",
      "author": "Annie Devy",
      "role": "Designer"
    },
    {
      "text": "“Saves me time”",
      "desc": "Since I started using this app, I've saved so much time. I no longer have to manually add appointments or set reminders - it's all done for me!",
      "author": "Kyle Conord",
      "role": "CEO of RoastingOS"
    }
  ]

  const testimonial3 = [
    {
      "text": "“Incredible UI”",
      "desc": "The UI of this app is just awesome, so fluid and well designed. The app has also all the features I need for my daily work. Just try it, you will fall in love!",
      "author": "Jordan Brian",
      "role": "Marketing Freelance"
    },
    {
      "text": "“Great for teamwork”",
      "desc": "If you're looking for a reliable and easy-to-use calendar app, look no further! This app has everything you need, and it's made my life so much easier",
      "author": "Hanna Becker",
      "role": "Head of Marketing"
    },
    {
      "text": "“Life-changing”",
      "desc": "This app is so simple yet so powerful! I love how I can easily add events and see my entire schedule at a glance.",
      "author": "Kevin Douglas",
      "role": "Product design at Lambda"
    }
  ]
  
  

  return (
      <div className='w-[98vw] font-plus-jakarta-sans mt-[8rem] flex flex-col items-center'>
      <div className='flex flex-col text-[16px] bg-[#F1F2F4] rounded-[100px] min-w-fit text-center font-bold py-[12px] px-[24px] gap-[10px]'>
            <h5 className="font-bold">They already love our products 😍</h5>
      </div>
      <h1 className='text-[56px] font-extrabold  mb-[4rem]'>Our features to make your life easier</h1>
      <Marquee gradientWidth={300} gradientHeight={200} marqueeOnHover={true} pauseOnHover={true} speed={40}  direction={'right'}>
      <div className='flex mb-[2rem]'>
      {testimonial1.map((testimonial) => (
        <div key={testimonial.id} style={{ marginRight: 20 }} className="bg-[#fefefe] w-[30rem] h-[11rem] rounded-[12px] p-[16px]">
          <div className='flex justify-between'>
            <div className='flex gap-[4px] items-center'>
              <div className='bg-[#FFC0CB] w-[32px] h-[32px] rounded-full'></div>
              <p className='text-[16px] font-bold'>{testimonial.text}</p>
            </div>
            <div className="flex gap-[0.25rem] ">
              <FontAwesomeIcon icon={faStar} className="text-[#FEC84B]"/>
              <FontAwesomeIcon icon={faStar} className="text-[#FEC84B]"/>
              <FontAwesomeIcon icon={faStar} className="text-[#FEC84B]"/>
              <FontAwesomeIcon icon={faStar} className="text-[#FEC84B]"/>
              <FontAwesomeIcon icon={faStar} className="text-[#FEC84B]"/>
            </div>
          </div>
          <div className='mt-[8px]'>
            <p className='text-[#6b6b78]  font-normal'>{testimonial.desc}</p>
          </div>
          <div className='flex justify-between mt-[8px] text-[14px]'>
            <p>
              <strong className=' font-normal'>{testimonial.author}</strong>
            </p>
            <p  className='font-normal'>{testimonial.role}</p>
          </div>
        </div>
      ))}
      </div>
      </Marquee>
      
      <Marquee gradientWidth={300} gradientHeight={200} marqueeOnHover={true} pauseOnHover={true} speed={30}  direction={'right'}>
      <div className='flex mb-[2rem]'>
      {testimonial2.map((testimonial) => (
        <div key={testimonial.id} style={{ marginRight: 20 }} className="bg-[#fefefe] w-[30rem] h-[11rem] rounded-[12px] p-[16px]">
          <div className='flex justify-between'>
            <div className='flex gap-[4px] items-center'>
              <div className='bg-[#ADD8E6] w-[32px] h-[32px] rounded-full'></div>
              <p className='text-[16px] font-bold'>{testimonial.text}</p>
            </div>
            <div className="flex gap-[0.25rem] ">
              <FontAwesomeIcon icon={faStar} className="text-[#FEC84B]"/>
              <FontAwesomeIcon icon={faStar} className="text-[#FEC84B]"/>
              <FontAwesomeIcon icon={faStar} className="text-[#FEC84B]"/>
              <FontAwesomeIcon icon={faStar} className="text-[#FEC84B]"/>
              <FontAwesomeIcon icon={faStar} className="text-[#FEC84B]"/>
            </div>
          </div>
          <div className='mt-[8px]'>
            <p className='text-[#6b6b78]  font-normal'>{testimonial.desc}</p>
          </div>
          <div className='flex justify-between mt-[8px] text-[14px]'>
            <p>
              <strong className=' font-normal'>{testimonial.author}</strong>
            </p>
            <p  className='font-normal'>{testimonial.role}</p>
          </div>
        </div>
      ))}
      </div>
      </Marquee>

      <Marquee gradientWidth={300} gradientHeight={200} marqueeOnHover={true} pauseOnHover={true} speed={20}  direction={'right'}>
      <div className='flex'>
      {testimonial3.map((testimonial) => (
        <div key={testimonial.id} style={{ marginRight: 20 }} className="bg-[#fefefe] w-[30rem] h-[11rem] rounded-[12px] p-[16px]">
          <div className='flex justify-between'>
            <div className='flex gap-[4px] items-center'>
              <div className='bg-[#C8A2C8] w-[32px] h-[32px] rounded-full'></div>
              <p className='text-[16px] font-bold'>{testimonial.text}</p>
            </div>
            <div className="flex gap-[0.25rem] ">
              <FontAwesomeIcon icon={faStar} className="text-[#FEC84B]"/>
              <FontAwesomeIcon icon={faStar} className="text-[#FEC84B]"/>
              <FontAwesomeIcon icon={faStar} className="text-[#FEC84B]"/>
              <FontAwesomeIcon icon={faStar} className="text-[#FEC84B]"/>
              <FontAwesomeIcon icon={faStar} className="text-[#FEC84B]"/>
            </div>
          </div>
          <div className='mt-[8px]'>
            <p className='text-[#6b6b78]  font-normal'>{testimonial.desc}</p>
          </div>
          <div className='flex justify-between mt-[8px] text-[14px]'>
            <p>
              <strong className=' font-normal'>{testimonial.author}</strong>
            </p>
            <p  className='font-normal'>{testimonial.role}</p>
          </div>
        </div>
      ))}
      </div>
      </Marquee>
      </div>
  );
};

export default TestimonialMarquee;
