import React, { useState } from "react";

const Index = () => {
  const [billingFrequency, setBillingFrequency] = useState("monthly");

  const handleSelect = (frequency) => {
    setBillingFrequency(frequency);
  };

  const card1 = [
    {
      type: "Free",
      text: "So you can see how incredible our tool is. ",
      price: "$0/mo.",
      desc: "Free forever",
      desc2: "No credit card needed",
      title: "What's included:",
      data1: "A cool feature",
      data2: "A basic feature",
      data3: "A top feature with limitations",
      data4: "An incredible feature so useful",
      data5: "A top feature",
      data6: "",
    },
    {
      type: "Starter",
      text: "Our most popular plan for professionals",
      price: billingFrequency === "monthly" ? "$15/mo." : "$19/yr.",
      desc: "Billed monthly",
      desc2: "7 days free trial no credit card needed",
      title: "All Free features, plus:",
      data1: "A cool feature",
      data2: "All basic features",
      data3: "A top feature with limitations",
      data4: "An incredible feature so useful",
      data5: "A cool feature",
      data6: "",
    },
    {
      type: "Premium",
      text: "For power users who want it all",
      price: billingFrequency === "monthly" ? "$45/mo." : "$49/yr.",
      desc: "Billed monthly",
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

        // {cardData.type == "Starter" && <h4 className="relative h-min bg-black text-white max-w-fit z-20 py-[8px] px-[12px] rounded-[24px] left-[-15rem] text-[12px]">Best Deal🔥</h4>}

    return (
      <div className={`rounded-[12px]  p-4 shadow-md  p-[32px] bg-white w-[24rem] font-plus-jakarta-sans`}>
        <h2 className={`text-[#333333]  font-bold py-[12px] px-[24px] rounded-[24px] w-min ${backgroundColor}`}>{cardData.type}</h2>
        <p className={`text-[#6b6b78] font-normal mt-[8px]`}>{cardData.text}</p>
        <p className="text-[56px] font-bold mt-2">{cardData.price}</p>
        <p className="text-[#333333]">{cardData.desc}</p>
        <button className="w-full py-[12px] px-[24px] rounded-[12px] mt-[1rem] mb-[4px] bg-[#2e2e2e] text-white">Get started</button>
        <div className="flex justify-center w-[100%]"><p className="text-[12px] self-center">{cardData.desc2}</p></div>
        <div className="mt-4">
          <h3 className="text-lg text-[#333333] text-[16px] mt-[26px]">{cardData.title}</h3>
          <ul className="flex flex-col gap-3 ml-6 text-[#6b6b78] mt-[8px]">
            <li>{cardData.data1}</li>
            <li>{cardData.data2}</li>
            <li>{cardData.data3}</li>
            <li>{cardData.data4}</li>
            <li>{cardData.data5}</li>
            <li>{cardData.data6}</li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center  font-plus-jakarta-sans mt-[12rem]">
      <div className="flex text-[16px] bg-[#F1F2F4] rounded-[100px] min-w-fit text-center font-bold py-[12px] px-[24px] gap-[10px] items-center">
        <h5 className="font-bold ">Pricing and plans 💰</h5>
      </div>
      <h1 className="text-[56px] font-extrabold">Find the best plan for your needs</h1>
      <div className="mb-[4rem] flex items-center gap-[10px]">
        <div className="bg-[#f3f3f3] flex gap-[12px] p-[4px] text-[14px] rounded-[12px]">
          <button
            className={`w-[12rem] py-[8px] px-[24px] font-semibold ${
              billingFrequency === "monthly"
                ? "bg-white rounded-[12px] shadow-custom"
                : "bg-[#f3f3f3]"
            }`}
            onClick={() => handleSelect("monthly")}
          >
            Monthly
          </button>
          <button
            className={`w-[12rem] py-[8px] px-[24px] font-semibold ${
              billingFrequency === "annually"
                ? "bg-white rounded-[12px] shadow-custom"
                : "bg-[#f3f3f3]"
            }`}
            onClick={() => handleSelect("annually")}
          >
            Annually
          </button>
        </div>
        {billingFrequency === "annually" && <h6>✨ save 30%</h6>}
      </div>

      <div className="flex space-x-4  rounded-full">
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
