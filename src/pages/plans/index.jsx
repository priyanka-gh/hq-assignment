import React, { useState, useEffect } from "react";

const Index = () => {

  const [billingFrequency, setBillingFrequency] = useState("monthly");

  const handleSelect = (frequency) => {
    setBillingFrequency(frequency);
  };

  const tick = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-85cbf52e-027d-48d7-a64f-10ecda9c94e5, rgb(195, 156, 246)) /* {&quot;name&quot;:&quot;tag-5&quot;} */; color: var(--token-85cbf52e-027d-48d7-a64f-10ecda9c94e5, rgb(195, 156, 246)) /* {&quot;name&quot;:&quot;tag-5&quot;} */; flex-shrink: 0;" focusable="false" color="var(--token-85cbf52e-027d-48d7-a64f-10ecda9c94e5, rgb(195, 156, 246)) /* {&quot;name&quot;:&quot;tag-5&quot;} */"><g color="var(--token-85cbf52e-027d-48d7-a64f-10ecda9c94e5, rgb(195, 156, 246)) /* {&quot;name&quot;:&quot;tag-5&quot;} */" weight="bold"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path></g></svg>`

  const card1 = [
    {
      type: "Free",
      text: "So you can see how incredible our tool is. ",
      price: "$0",
      desc:  "Free forever",
      desc2: "No credit card needed",
      title: "What's included:",
      data1: "A cool feature",
      data2: "A basic feature",
      data3: "A top feature with limitations",
      data4: "An incredible feature so useful",
      data5: "A top feature",
    },
    {
      type: "Starter",
      text: "Our most popular plan for professionals",
      price: billingFrequency === "monthly" ? "$15" : "$19",
      desc: billingFrequency === "monthly" ? "Billed monthly" : "Billed $180 yearly",
      desc2: "7 days free trial no credit card needed",
      title: "All Free features, plus:",
      data1: "A cool feature",
      data2: "All basic features",
      data3: "A top feature with limitations",
      data4: "An incredible feature so useful",
      data5: "A cool feature",
    },
    {
      type: "Premium",
      text: "For power users who want it all",
      price: billingFrequency === "monthly" ? "$45" : "$49",
      desc: billingFrequency === "monthly" ? "Billed monthly" : "Billed $540 yearly",
      desc2: "7 days free trial no credit card needed",
      title: "All Starter features, plus:",
      data1: "A cool feature",
      data2: "A basic feature",
      data3: "A top feature with limitations",
      data4: "An incredible feature so useful",
      data5: "A premium feature",
      data6: "You need this feature",
    },
  ];

  const Card = ({ cardData }) => {
    const backgroundColor =
      cardData.type === "Free"
        ? "bg-[#f1f2f4]"
        : cardData.type === "Starter"
        ? "bg-[#fee9cb]"
        : "bg-[#fdded6]";


    return (
      <div  className={`rounded-[12px]  p-4 shadow-md  p-[32px] bg-white w-[24rem] max-h-fit font-plus-jakarta-sans 
        xxl:w-[90vw] xxl:h-fit
        xl:w-[90vw] xl:h-fit
        sm:w-[90vw] sm:h-fit`}>
        <h2 className={`text-[#333333]  font-bold py-[12px] px-[24px] rounded-[24px] w-min ${backgroundColor}`}>{cardData.type}</h2>
        <p className={`text-[#6b6b78] font-normal mt-[8px]`}>{cardData.text}</p>
        <p className="text-[56px] font-bold mt-2">{cardData.price}<span className="text-[#79797a] text-[16px]">/mo.</span></p>
        <p className="text-[#333333]">{cardData.desc}</p>
        <button className="w-full py-[12px] px-[24px] rounded-[12px] mt-[1rem] mb-[4px] bg-[#2e2e2e] text-white  hover:scale-[110%] duration-500">Get started</button>
        <div className="flex justify-center w-[100%]"><p className="text-[12px] self-center">{cardData.desc2}</p></div>
        <div className="mt-4">
          <h3 className="text-lg text-[#333333] text-[16px] mt-[26px]">{cardData.title}</h3>
          <div>
          <ul className="flex flex-col gap-3 text-[#6b6b78] mt-[8px]">
            <div className="flex gap-4" style={{ alignItems: 'flex-start' }}>
              <div dangerouslySetInnerHTML={{ __html: tick }} className="h-[24px]" />
              <li>{cardData.data1}</li>
            </div>
            <div className="flex gap-4" style={{ alignItems: 'flex-start' }}>
              <div dangerouslySetInnerHTML={{ __html: tick }} className="h-[24px]" />
              <li>{cardData.data2}</li>
            </div>
            <div className="flex gap-4" style={{ alignItems: 'flex-start' }}>
              <div dangerouslySetInnerHTML={{ __html: tick }} className="h-[24px]" />
              <li>{cardData.data3}</li>
            </div>
            <div className="flex gap-4" style={{ alignItems: 'flex-start' }}>
              <div dangerouslySetInnerHTML={{ __html: tick }} className="h-[24px]" />
              <li>{cardData.data4}</li>
            </div>
            <div className="flex gap-4" style={{ alignItems: 'flex-start' }}>
              <div dangerouslySetInnerHTML={{ __html: tick }} className="h-[24px]" />
              <li>{cardData.data5}</li>
            </div>
            {cardData.data6 && (
              <div className="flex gap-4" style={{ alignItems: 'flex-start' }}>
                <div dangerouslySetInnerHTML={{ __html: tick }} className="h-[24px]" />
                <li>{cardData.data6}</li>
              </div>
            )}
          </ul>

          </div>
        </div>
        {cardData.type == "Starter" && <h4 className="relative h-min bg-[#2e2e2e] text-white max-w-fit z-20 py-[6px] px-[14px] rounded-[24px] bottom-[35rem] left-[12rem] text-[14px] font-medium">Best Deal 🔥</h4>}
      </div>
    );
  };
  
  return (
    <div className="flex flex-col items-center  font-plus-jakarta-sans mt-[12rem]">
      <div data-aos="fade-up" data-aos-duration="300" className="flex text-[16px] bg-[#F1F2F4] rounded-[100px] min-w-fit text-center font-bold py-[12px] px-[24px] gap-[10px] items-center">
        <h5 className="font-bold 
        xl:text-[12px] 
          sm:text-[12px]  xl:text-[12px] 
          sm:text-[12px]">Pricing and plans 💰</h5>
      </div>
      <h1  data-aos="fade-up" data-aos-duration="300" className="text-[56px] font-extrabold
        xl:text-[32px] 
        sm:text-[24px] sm:mx-[1rem]">Find the best plan for your needs</h1>
      <div  data-aos="fade-up" data-aos-duration="300" className="mb-[4rem] flex items-center gap-[10px] mt-[5rem]
        sm:w-min
        sm:flex
        sm:flex-col">
        <div className="bg-[#f3f3f3] flex gap-[12px] p-[4px] text-[14px] rounded-[12px]
          sm:max-w-[13rem]">
          <button
            className={`w-[12rem] py-[8px] px-[24px] font-semibold ${
              billingFrequency === "monthly"
                ? "bg-white rounded-[12px] shadow-custom text-[#2e2e2e]"
                : "bg-[#f3f3f3] text-[#90909E]"
            }
            xl:max-w-[6rem]
            sm:max-w-[6rem]`}
            onClick={() => handleSelect("monthly")}
          >
            Monthly
          </button>
          <button
            className={`w-[12rem] py-[8px] px-[24px] font-semibold ${
              billingFrequency === "annually"
                ? "bg-white rounded-[12px] shadow-custom text-[#2e2e2e]"
                : "bg-[#f3f3f3] text-[#90909E] "
            }
            xl:max-w-[6rem]
            sm:max-w-[6rem]`}
            onClick={() => handleSelect("annually")}
          >
            Annually
          </button>
        </div>
        <h6>✨ save 30%</h6>
      </div>

      <div  data-aos="fade-up" data-aos-duration="300" className="flex space-x-4 rounded-full 
        xxl:flex xxl:flex-col xxl:gap-[2rem] xxl:space-x-0
        xl:flex xl:flex-col xl:gap-[2rem] xl:space-x-0
        sm:flex sm:flex-col sm:gap-[2rem] sm:space-x-0">
        {card1.map((cardData, index) => (
          <>
          <Card key={index} cardData={cardData} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Index
