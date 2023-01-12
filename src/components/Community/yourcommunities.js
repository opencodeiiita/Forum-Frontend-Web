import React from "react";
import Community from "./community";
import { BsArrowRightShort } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";


const YourCommunities = () => {

    return (
        <>
            <div className="flex flex-col w-[87%]  ">
                <div className="flex flex-row justify-start my-[20px] min-[400px]:ml-[12%] md:ml-[5%] lg:ml-[6%] xl:ml-[4%]  h-fit items-center">
                    <h1 className="font-[600] text-[24px] font-['poppins']">Your Communities</h1>
                   
                </div>
                <div className="grid xl:grid-cols-3 sm:grids-cols-1 md:grid-cols-2 min-[2000px]:grid-cols-4 place-items-center">
               
                 <Community />
                 <Community />
                 <Community />
                 <Community />
                 <Community />
                 <Community />

                 
                </div>
                <div className="flex flex-row justify-center mt-[-20px] mb-[25px] min-[400px]:ml-[12%] md:ml-[5%] h-fit items-center">
                    <h1 className="font-[500] text-[20px] text-[#777777] font-['poppins']">View More</h1>
                    <BsChevronDown className="text-[28px] text-[#777777] font-[600] mx-[10px] " />
                </div>
            </div>


        </>
    );
};

export default YourCommunities;
