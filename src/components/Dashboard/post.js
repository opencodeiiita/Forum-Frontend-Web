import React, { useState } from "react";
// import { act } from "react-dom/test-utils";

const Post = () => {

  return (
    <div className="max-w-xl h-fit rounded-[15px] font-['Poppins'] overflow-hidden shadow-[0px_4px_5px_rgba(0,0,0,0.25)] mx-[36px] my-[16px]">
    <div className="px-5 py-4 " >
     <div className="font-[600] text-[#777777] text-xl mx-[22px] mt-[5px] ">Bitcoin price at risk of decline after Death Cross?</div>
     <div className=" justify-start items-center py-1 ">
     <button className="inline-block bg-[#F6F6F6] h-[20px] w-[60px] rounded-[5px] px-3 py-[0.5px] text-[9px] font-semibold text-[#C7D1E3] ml-[22px] text-center ">
      Bitcoin
     </button>
     <button className=" inline-block bg-[#F6F6F6] h-[20px] w-[60px] rounded-[5px] px-3 py-[0.5px] text-[9px] font-semibold text-[#C7D1E3] ml-[12px] ">
      Bitcoin
     </button>
     <div className="flex text-[#777777] text-[12px] ml-[22px] my-[10px]">
      2 Days ago
     </div>
     </div>
     
     
     <div className=" flex flex-1 items-end justify-between"> 
     <button className="inline-block bg-[#02C8AC] h-[30px] w-[100px] rounded-[5px] px-3 py-1 text-[14px] font-semibold bottom-[0px] text-[#FFFFFF] mt-[10px] ml-[22px] ">
      View
     </button>
     <div className="inline-block">
     <div className=" inline-block mx-[20px] text-[10px] ">
         12 Upvotes
     </div>
     <div className=" inline-block mx-[20px] text-[10px] ">
         2 downvotes
     </div>
     <div className=" inline-block mx-[20px] text-[10px] ">
         30 replies
     </div>
     </div>
    
     </div>

     
    
     
    
     
</div>

</div>


     
  );
};

export default Post;
