import React, { useState } from "react";



const Rewards = () => {
  const [toggleClicked, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <div className="flex flex-row my-[20px] " >
      <div className=" bg-white h-fit w-fit flex flex-col shadow-[0px_4px_10px_rgba(0,0,0,0.25)] rounded-[15px] pb-[36px]">

        <section className="flex-row flex-wrap max-w-xl my-[25px] mx-[36px] ">
          <div className=" flex flex-1 justify-between items-center flex-row  font-['Poppins'] p-[10px] ">
            <h2 className={toggleClicked === 1 ? "text-[20px] cursor-pointer font-medium text-[#02C8AC]  underline decoration-4 underline-offset-[6px] mx-[70px] my-[20px] "
              : "text-[20px] font-medium opacity-[50%] cursor-pointer npm decoration-4 underline-offset-[6px] mx-[70px] my-[20px] "}
              onClick={() => toggleTab(1)}>
              Rewards
            </h2>
            <h2 className={toggleClicked === 2 ? "text-[20px] cursor-pointer font-medium text-[#02C8AC]  underline decoration-4 underline-offset-[6px] mx-[70px] my-[20px] "
              : "text-[20px] cursor-pointer font-medium opacity-[50%]  decoration-4 underline-offset-[6px] mx-[70px] my-[20px] "}
              onClick={() => toggleTab(2)}>
              Skills
            </h2>
          </div>
          {(toggleClicked === 1 ? <div className="h-[150px] flex flex-1 items-center justify-around">
            <text >you have no rewards to show</text>
          </div> : null)}
          {(toggleClicked === 2 ? <div className="h-[150px] flex flex-1 items-center justify-around">
            <text >you have no skills to show</text>
          </div> : null)}


        </section>
      </div>
    </div>
  );
};

export default Rewards;
