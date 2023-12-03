import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";


const index = () => {
  
  const faqData = [
    {
      id: 1,
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel your subscription at any time. There are no cancellation fees."
    },
    {
      id: 2,
      question: "What happens when my trial ends?",
      answer: "When your trial ends, you will be prompted to choose a subscription plan. If you don't choose a plan, your account will be deactivated."
    },
    {
      id: 3,
      question: "What payment methods do you offer?",
      answer: "We accept various payment methods, including credit cards, debit cards, and PayPal. You can check the available payment options in your account settings."
    },
    {
      id: 4,
      question: "What is your refund policy?",
      answer: "Our refund policy allows you to request a refund within 30 days of your purchase. Please contact our support team for assistance."
    },
    {
      id: 5,
      question: "Do you offer discounts to educational institutions?",
      answer: "Yes, we offer special discounts to educational institutions. Contact our sales team to inquire about our educational pricing."
    }
  ];

  const FaqCard = ({ id, question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
      setShowAnswer(!showAnswer);
    };

    return (
      <div className="bg-[#f1f2f4] rounded-[12px] p-[24px] my-4 w-[60vw] font-plus-jakarta-sans 
        xxl:w-[85vw]
        xl:w-[80vw]
        sm:w-[80vw]">
        <div className="flex justify-between items-center cursor-pointer" onClick={toggleAnswer}>
          <h2 className="text-[20px] font-bold mb-2 
            xl:text-[20px] 
            sm:text-[14px]">{question}</h2>
          <FontAwesomeIcon color={showAnswer ? "#90909e66" : "#90909e66"} icon={showAnswer ? faMinusCircle : faPlusCircle} className="text-[24px]"/>
        </div>
        {showAnswer && <p className="text-gray-600
          xl:text-[20px] 
          sm:text-[14px]">{answer}</p>}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center font-plus-jakarta-sans">
      <div data-aos="fade-up" data-aos-duration="300" className='flex text-[16px] bg-[#F1F2F4] rounded-[100px] min-w-fit text-center font-bold py-[12px] px-[24px] gap-[10px] mt-[13rem] items-center'>
        <h5 className="font-bold 
          xl:text-[12px] 
          sm:text-[12px]">Relevant stuff, bla bla 📣</h5>
      </div>
      <h1  data-aos="fade-up" data-aos-duration="300" className='text-[56px] font-bold mb-[3rem] self-center
        xl:text-[32px] xl:self-center
        sm:text-[24px] sm:self-center'>Frequently asked questions</h1>
      <div>
      {faqData.map((item) => (
        <FaqCard key={item.id} id={item.id} question={item.question} answer={item.answer} />
      ))}
      </div>
      <div data-aos="fade-up" data-aos-duration="300" className='flex text-[16px] bg-[#F1F2F4] rounded-[100px] min-w-fit text-center font-bold py-[12px] px-[24px] gap-[10px] mt-[12rem] items-center'>
        <h5 className="font-bold 
          xl:text-[12px] 
          sm:text-[12px]">Last call Baby! 🚀</h5>
      </div>
      <h1 data-aos="fade-up" data-aos-duration="300" className='text-[56px] font-bold mb-[2rem] text-[#2d2d2d]
        xl:text-[32px] 
        sm:text-[24px]'>Ready to start?</h1>
      <p data-aos="fade-up" data-aos-duration="300" className="text-[#6b6b78] w-[40vw] text-[20px] text-center self-center
        xl:text-[16px] 
        sm:text-[16px]">Here is your last chance to explain how cool your app is. Focus on the benefits for your users, not on the features. </p>
      <button data-aos="fade-up" data-aos-duration="300" className="py-[16px] px-[32px] rounded-[12px] mt-[1rem] mb-[4px] bg-[#2e2e2e] text-white hover:scale-[110%] duration-500">
        Get started, it's free
      </button>

      <div className='flex mt-[2rem] justify-start xxl:justify-center'>
          <div className='relative bottom-[-90px]'>
              <img src="https://framerusercontent.com/images/BRu6MhHhp9NjldqU9TTCEAEoGKg.png" className="w-[84px]" alt="" />
          </div>
          <div className='bg-[#fee9cb] flex flex-col gap-[12px] h-min w-[50%] justify-start p-[16px] rounded-t-[12px] rounded-r-[16px] rounded-bl-[6px]'>
              <h5 className='text-[#2e2e2e] font-semibold'>I never missed a call again, the AI-drivenfeature is a game changer for me! </h5>
              <h5 className='text-[#6b6b78] font-semibold'>Adam, Solo founder</h5>
          </div>
      </div>
    </div>
    
  );
};

export default index;
