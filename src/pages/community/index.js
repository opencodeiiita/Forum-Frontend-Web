import Navbar from "../../components/Navbar/Navbar";
import Communities from "../../components/Community/communities";

import YourCommunities from "../../components/Community/yourcommunities";
function Community() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center"> 
      <div className="min-[400px]:w-[65%] md:w-[75%] lg:w-[80%] h-fit rounded-[15px] font-['Poppins'] overflow-hidden shadow-[0px_4px_5px_rgba(0,0,0,0.25)] mx-[36px] my-[16px]">
        <div className="px-5 py-4 my-[10px] " >
          <div className="font-[700] text-[32px] mx-[22px] mt-[5px] ">Welcome to Communities</div>
          <div className="h-fit text-[20px] text-[#777777] mx-[22px]">
            Follow communities and explore your interests!
          </div>
          <div className=" flex flex-1 items-end justify-between">
            <button className="inline-block bg-[#02C8AC] h-[45px] w-[150px] rounded-[5px] px-3 py-1 text-[20px] font-medium bottom-[0px] text-[#FFFFFF] mt-[10px] ml-[22px] ">
              Create
            </button>
          </div>
        </div>
      </div>
      <Communities />
      <YourCommunities />

      </div>
    </>
  );
}

export default Community;