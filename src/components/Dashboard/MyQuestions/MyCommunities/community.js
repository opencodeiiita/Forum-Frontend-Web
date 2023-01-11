import React, { useState } from "react";



const Community = () => {

    return (
        <div className="max-w-xl h-fit rounded-[15px] font-['Poppins'] overflow-hidden shadow-[0px_4px_5px_rgba(0,0,0,0.25)] mx-[36px] my-[16px]">
            <div className="px-5 py-4 flex flex-row items-center" >
                <div className="p-[40px] w-fit h-fit ">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/60/W-200x200-300dpi.png"
                        alt="profile"
                        className="rounded-[15px]"
                    />
                </div>

                <div className="flex flex-col justify-start">
                    <div className=" mx-[22px] mt-[5px] flex flex-row justify-between">
                        <text className="font-[600] text-[#777777] text-[20px]">
                            Web Dev
                        </text>
                        <div className="font-[500] text-[#02C8AC] text-[10px] ">
                            1 New Post
                        </div>
                    </div>
                    <button className="inline-block max-w-[45%] bg-[#F6F6F6] h-[20px] rounded-[5px] px-3 py-[0.5px] text-[9px] font-semibold text-[#C7D1E3] mt-[7px] ml-[22px] text-center ">
                        400K joined
                    </button>
                    <div className="h-fit text-base text-[#777777] text-[12px] px-3 py-[8px] ml-[12px]">
                        The world's oldest and first cryptocurrency was founded in 2008 by
                        an anonymous group of people or developers who were widely referred
                        to.........
                    </div>
                    <div className=" flex flex-1 items-end justify-between">
                        <button className="inline-block bg-[#02C8AC] h-[30px] w-[60px] rounded-[5px] px-3 py-1 text-[14px] font-medium bottom-[0px] text-[#FFFFFF] mt-[10px] ml-[22px] ">
                            View
                        </button>   
                        <div className="inline-block">
                            <div className=" inline-block  text-[#777777] mx-[20px] text-[12px] ">
                                Joined 2 days ago.
                            </div>
                           
                        </div>

                    </div>
                </div>













            </div>

        </div>

    );
};

export default Community;
