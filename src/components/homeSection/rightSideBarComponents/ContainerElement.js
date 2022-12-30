import React from "react";

const ContainerElement = () => {
  return (
    <div className="relative h-[60px]  p-2 pr-0 my-4">
      <div className=" bg-blue-400 inline-block h-full w-[44px]  mr-2 rounded-lg"></div>
      <div className="inline-block h-full align-top ml-4 pt-1">
        <div className="h-[50%] text-sm font-normal font-sans">JavaScript</div>
        <div className="h-[50%] text-xs font-normal font-sans text-[#777777]">
          1 new post
        </div>
      </div>
      <div className="text-[#02C8AC] inline-block h-[calc(100%-16px)] w-[48px] absolute pt-2 right-2  text-center  ">
        View
      </div>
    </div>
  );
};

export default ContainerElement;
