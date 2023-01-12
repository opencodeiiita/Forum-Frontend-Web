import React, { useState } from "react";
// import { act } from "react-dom/test-utils";

const Community = () => {

  return (
    <div className="w-[75%]  h-fit rounded-[15px] font-['Poppins'] overflow-hidden shadow-[0px_7px_5px_rgba(0,0,0,0.25)] my-[35px]">
    <div className="px-[15px] mx-[15px] pt-[5px] pb-[35px] flex flex-col items-center" >
        <div className=" w-fit h-fit ">
            <img
                src="https://cdn-icons-png.flaticon.com/512/1160/1160358.png"
                alt="profile"
                className="rounded-[15px] max-w-[10vw] max-h-[10vw] mb-[20px]"
            />
        </div>

        <div className="flex flex-col justify-center">
            <div className=" mx-[22px] mt-[5px] flex flex-row justify-center mt-[10px]">
                <text className="font-[600] text-[20px]">
                    Web Developers
                </text>
            </div>
           
            <div className="h-fit font-[500] text-base text-[#777777] text-[14px] text-center my-[5px]">
                Join this awesome community of Web Developers and learn!!
            </div>
            <div className="h-fit font-[500] text-base text-[#02C8AC] text-[16px] text-center ">
                120 Members
            </div>
            <div className=" flex flex-1 items-center justify-center">
                <button className="inline-block bg-[#02C8AC] h-[40px] w-[145px] rounded-[7px] px-3 py-1 text-[20px] font-medium bottom-[0px] text-[#FFFFFF] mt-[35px] ">
                    Join
                </button>             
            </div>
        </div>
    </div>
</div>
  );
};

export default Community;
