import React, { useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";


const Profile = () => {

    return (
        <div className="bg-white rounded-[15px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] overflow-hidden font-['poppins'] w-fit">
            <div className="px-[110px] lg:px-[40px] pt-[35px] pb-[25px] overflow-hidden">
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <div>
                            <img
                                src="https://i.pinimg.com/736x/5a/e5/98/5ae598ff624217b9a5c008beb8c512d0.jpg"
                                alt="profile"
                                className="w-[100px] h-[100px]"
                            />
                            <div className="mt-[-45px] ml-[60px]">
                                <button
                                    className="p-3  rounded-full  mx-2 shadow-md items-center bg-[#02C8AC]  ">
                                    <AiFillCamera color="white" fontSize="22px" />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col ml-[30px] px-2 items-center">
                            <text className=" flex text-[40px] font-bold ">
                                Aditya Rai
                            </text>
                            <div className="flex flex-row justify-between">
                                <text className=" flex text-[20px] font-medium mx-[10px]"> 0 Followers</text>
                                <text className=" flex text-[20px] font-medium mx-[10px]"> 0 Following</text>
                            </div>

                        </div>


                    </div>
                    <div className="flex flex-col w-fit mt-[15px]">
                        <div className="flex flex-row relative items-center mt-[5px] mb-[25px]">
                            <text className="text-[20px] font-[500] ">
                                About :
                            </text>
                            <text className="text-[18px] font-[500] ml-[105px]">
                                Hey There!
                            </text>
                            <AiFillEdit color="black" fontSize="36px" className="absolute sm:right-[-35%] xl:right-[-25%] right-[-45%]" />
                           
                        </div>
                        <div className="flex flex-row relative items-center my-[5px] pr-[20px] ">
                            <text className="text-[20px] font-[500] ">
                                PhoneNumber :
                            </text>
                            <text className="text-[18px] font-[500] ml-[20px]">
                                9999999999
                            </text>
                            <AiFillEdit color="black" fontSize="36px" className="absolute sm:right-[-35%] xl:right-[-25%] right-[-45%]" />
                            
                        </div>
                        <div className="flex flex-row  items-center my-[5px] ">
                            <text className="text-[20px] font-[500]">
                                Email :
                            </text>
                            <text className="text-[18px] font-[500] ml-[110px]">
                                @@@gmail.com
                            </text>
                           
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Profile;
