import { Button } from "antd";
import React, { useState } from "react";



const Rewards = () => {
  const [toggleClicked, setToggleState] = useState(1);
  const [skills,setSkills] = useState([]);
  const [skill,setSkill] = useState('');

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <div className="flex flex-row my-[20px] " >
      <div className=" bg-white h-fit w-fit flex flex-col shadow-[0px_4px_10px_rgba(0,0,0,0.25)] rounded-[15px] pb-0">

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
          {(toggleClicked === 2 ? <div className="h-fit min-h-[150px] flex flex-1 items-start justify-start">
            <div className=" w-[440px]">
              <div className="w-[355px] relative ml-8">
              <input
                    className="p-2 text-[18px] font-[500] h-fit overflow-hidden"
                    onChange={(e)=> setSkill(e.target.value)}
                    placeholder={"Enter Skill."}
                    value={skill}
                  />
                <Button type="primary" className="relative left-4 bottom-1 bg-[#02C8AC] text-[#FFFFFF]  pb-[34px] pt-[10px] font-semibold"
                  onClick={(e)=>{
                    if(skill !== ''){
                      let tempSkills = skills;
                      tempSkills.push(skill);
                      setSkills(tempSkills)
                      setSkill(''); 
                    }
                  }}
                >Add Skills
                </Button>
              </div>
              <ul className=" py-2 px-8 text-lg list-disc text-[#777777]">
              {
                skills.map((el)=>{
                  return (
                    <li>
                      {el}
                    </li>
                  )
                })
              }
              </ul>
            </div>
            
          </div> : null)}


        </section>
      </div>
    </div>
  );
};

export default Rewards;
