import React,{useEffect} from 'react';
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
      image : "https://framerusercontent.com/images/2fFFaPF5ZAByC4EYJKR5YVw5yw.png"
    },
    {
      id: 2,
      text: "“The best time manager app”",
      desc: "I love how user-friendly this app is! It's so easy to add events and set reminders, and it's made my life so much more organized.",
      author: "Brad de Costa",
      role: "Head of Marketing",
      image: "https://framerusercontent.com/images/bl39AdGKIqJR3rmOzhkPvTf65vQ.png"
    },
    {
      id: 3,
      text : "“Highly recommend”",
      desc: "This app has saved me so much time and stress! I used to constantly forget important dates, but now I can stay on top of everything. You should test it!",
      author: "Sophie Devilan",
      role: "Entrepreneur",
      image: "https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
    },
    {
      id: 4,
      text: "“Just love it”",
      desc: "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
      author: "Adam Moore",
      role: "Entrepreneur",
      image : "https://framerusercontent.com/images/2fFFaPF5ZAByC4EYJKR5YVw5yw.png"
    },
    {
      id: 5,
      text: "“The best time manager app”",
      desc: "I love how user-friendly this app is! It's so easy to add events and set reminders, and it's made my life so much more organized.",
      author: "Brad de Costa",
      role: "Head of Marketing",
      image: "https://framerusercontent.com/images/bl39AdGKIqJR3rmOzhkPvTf65vQ.png"
    },
    {
      id: 6,
      text : "“Highly recommend”",
      desc: "This app has saved me so much time and stress! I used to constantly forget important dates, but now I can stay on top of everything. You should test it!",
      author: "Sophie Devilan",
      role: "Entrepreneur",
      image: "https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
    },
    {
      id: 7,
      text: "“Just love it”",
      desc: "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
      author: "Adam Moore",
      role: "Entrepreneur",
      image : "https://framerusercontent.com/images/2fFFaPF5ZAByC4EYJKR5YVw5yw.png"
    },
    {
      id: 8,
      text: "“The best time manager app”",
      desc: "I love how user-friendly this app is! It's so easy to add events and set reminders, and it's made my life so much more organized.",
      author: "Brad de Costa",
      role: "Head of Marketing",
      image: "https://framerusercontent.com/images/bl39AdGKIqJR3rmOzhkPvTf65vQ.png"
    },
    {
      id: 9,
      text : "“Highly recommend”",
      desc: "This app has saved me so much time and stress! I used to constantly forget important dates, but now I can stay on top of everything. You should test it!",
      author: "Sophie Devilan",
      role: "Entrepreneur",
      image: "https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
    },
  ];

  const testimonial2 = [
    {
      "text": "“No more forgotten appointments”",
      "desc": "I'm not the most organized person, but this app has made it so easy for me to stay on top of things! I love how I can set reminders and get notifications, and it's really helped me.",
      "author": "Michel O Neil",
      "role": "Head of sales",
      "image":"https://framerusercontent.com/images/6uYgdEC1jGe6urbMtA9d0dgg.png"
    },
    {
      "text": "“Better than the rest”",
      "desc": "I've tried a lot of calendar apps, but this one is by far the best! It's so intuitive and customizable, and it has all the features I need. Game changer!",
      "author": "Annie Devy",
      "role": "Designer",
      "image":"https://framerusercontent.com/images/kxNdSiluF7hrK3n2KLRcdCNhTU.png"
    },
    {
      "text": "“Saves me time”",
      "desc": "Since I started using this app, I've saved so much time. I no longer have to manually add appointments or set reminders - it's all done for me!",
      "author": "Kyle Conord",
      "role": "CEO of RoastingOS",
      "image": "https://framerusercontent.com/images/SK28bkE1orcey0vf79oQZPz0yA.png"
    },
    {
      "text": "“No more forgotten appointments”",
      "desc": "I'm not the most organized person, but this app has made it so easy for me to stay on top of things! I love how I can set reminders and get notifications, and it's really helped me.",
      "author": "Michel O Neil",
      "role": "Head of sales",
      "image":"https://framerusercontent.com/images/6uYgdEC1jGe6urbMtA9d0dgg.png"
    },
    {
      "text": "“Better than the rest”",
      "desc": "I've tried a lot of calendar apps, but this one is by far the best! It's so intuitive and customizable, and it has all the features I need. Game changer!",
      "author": "Annie Devy",
      "role": "Designer",
      "image":"https://framerusercontent.com/images/kxNdSiluF7hrK3n2KLRcdCNhTU.png"
    },
    {
      "text": "“Saves me time”",
      "desc": "Since I started using this app, I've saved so much time. I no longer have to manually add appointments or set reminders - it's all done for me!",
      "author": "Kyle Conord",
      "role": "CEO of RoastingOS",
      "image": "https://framerusercontent.com/images/SK28bkE1orcey0vf79oQZPz0yA.png"
    },
    {
      "text": "“No more forgotten appointments”",
      "desc": "I'm not the most organized person, but this app has made it so easy for me to stay on top of things! I love how I can set reminders and get notifications, and it's really helped me.",
      "author": "Michel O Neil",
      "role": "Head of sales",
      "image":"https://framerusercontent.com/images/6uYgdEC1jGe6urbMtA9d0dgg.png"
    },
    {
      "text": "“Better than the rest”",
      "desc": "I've tried a lot of calendar apps, but this one is by far the best! It's so intuitive and customizable, and it has all the features I need. Game changer!",
      "author": "Annie Devy",
      "role": "Designer",
      "image":"https://framerusercontent.com/images/kxNdSiluF7hrK3n2KLRcdCNhTU.png"
    },
    {
      "text": "“Saves me time”",
      "desc": "Since I started using this app, I've saved so much time. I no longer have to manually add appointments or set reminders - it's all done for me!",
      "author": "Kyle Conord",
      "role": "CEO of RoastingOS",
      "image": "https://framerusercontent.com/images/SK28bkE1orcey0vf79oQZPz0yA.png"
    },
  ]

  const testimonial3 = [
    {
      "text": "“Incredible UI”",
      "desc": "The UI of this app is just awesome, so fluid and well designed. The app has also all the features I need for my daily work. Just try it, you will fall in love!",
      "author": "Jordan Brian",
      "role": "Marketing Freelance",
      "image": "https://framerusercontent.com/images/Kg5LB2O8KkYlQ1azwquQKxtHnrM.png"
    },
    {
      "text": "“Great for teamwork”",
      "desc": "If you're looking for a reliable and easy-to-use calendar app, look no further! This app has everything you need, and it's made my life so much easier",
      "author": "Hanna Becker",
      "role": "Head of Marketing",
      "image": "https://framerusercontent.com/images/zZvfJYc3fJqnLKF0fdBBk1r0Q.png"
    },
    {
      "text": "“Life-changing”",
      "desc": "This app is so simple yet so powerful! I love how I can easily add events and see my entire schedule at a glance.",
      "author": "Kevin Douglas",
      "role": "Product design at Lambda",
      "image": "https://framerusercontent.com/images/cTol5VG6I9GfjzD7F78NMNG5kWo.png"
    },
    {
      "text": "“Incredible UI”",
      "desc": "The UI of this app is just awesome, so fluid and well designed. The app has also all the features I need for my daily work. Just try it, you will fall in love!",
      "author": "Jordan Brian",
      "role": "Marketing Freelance",
      "image": "https://framerusercontent.com/images/Kg5LB2O8KkYlQ1azwquQKxtHnrM.png"
    },
    {
      "text": "“Great for teamwork”",
      "desc": "If you're looking for a reliable and easy-to-use calendar app, look no further! This app has everything you need, and it's made my life so much easier",
      "author": "Hanna Becker",
      "role": "Head of Marketing",
      "image": "https://framerusercontent.com/images/zZvfJYc3fJqnLKF0fdBBk1r0Q.png"
    },
    {
      "text": "“Life-changing”",
      "desc": "This app is so simple yet so powerful! I love how I can easily add events and see my entire schedule at a glance.",
      "author": "Kevin Douglas",
      "role": "Product design at Lambda",
      "image": "https://framerusercontent.com/images/cTol5VG6I9GfjzD7F78NMNG5kWo.png"
    },
    {
      "text": "“Incredible UI”",
      "desc": "The UI of this app is just awesome, so fluid and well designed. The app has also all the features I need for my daily work. Just try it, you will fall in love!",
      "author": "Jordan Brian",
      "role": "Marketing Freelance",
      "image": "https://framerusercontent.com/images/Kg5LB2O8KkYlQ1azwquQKxtHnrM.png"
    },
    {
      "text": "“Great for teamwork”",
      "desc": "If you're looking for a reliable and easy-to-use calendar app, look no further! This app has everything you need, and it's made my life so much easier",
      "author": "Hanna Becker",
      "role": "Head of Marketing",
      "image": "https://framerusercontent.com/images/zZvfJYc3fJqnLKF0fdBBk1r0Q.png"
    },
    {
      "text": "“Life-changing”",
      "desc": "This app is so simple yet so powerful! I love how I can easily add events and see my entire schedule at a glance.",
      "author": "Kevin Douglas",
      "role": "Product design at Lambda",
      "image": "https://framerusercontent.com/images/cTol5VG6I9GfjzD7F78NMNG5kWo.png"
    },
  ]
  
  

  return (
      <div className='w-[98vw] font-plus-jakarta-sans mt-[8rem] flex flex-col items-center'>
      <div data-aos="fade-up" data-aos-duration="300" className='flex flex-col text-[16px] bg-[#F1F2F4] rounded-[100px] min-w-fit text-center font-bold py-[12px] px-[24px] gap-[10px]'>
            <h5 className="font-bold
              xl:text-[12px] 
              sm:text-[12px]">They already love our products 😍</h5>
      </div>
      <h1 data-aos="fade-up" data-aos-duration="300" className='text-[56px] font-extrabold  mb-[4rem]
        xl:text-[32px] 
        sm:text-[24px]'>See what our users say about us</h1>
      <Marquee gradientWidth={300} gradientHeight={200} marqueeOnHover={true} pauseOnHover={true} speed={40}  direction={'right'}>
      <div className='flex mb-[2rem]'>
      {testimonial1.map((testimonial) => (
        <div key={testimonial.id} style={{ marginRight: 20 }} className="bg-[#fefefe] w-[30rem] h-[11rem] rounded-[12px] p-[16px]">
          <div className='flex justify-between'>
            <div className='flex gap-[4px] items-center'>
              <div className='w-[32px] h-[32px] rounded-full'><img src={testimonial.image}></img></div>
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
              <div className='bg-[#ADD8E6] w-[32px] h-[32px] rounded-full'><img src={testimonial.image}></img></div>
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
              <div className='bg-[#C8A2C8] w-[32px] h-[32px] rounded-full'><img src={testimonial.image}></img></div>
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
