import Navbar from "../../components/Navbar/Navbar";
import React, { useState } from "react";
import Posts from "../../components/homeSection/Posts";
import RightSideBar from "../../components/homeSection/RightSideBar";
import Modal from "../../components/Modal/Modal";
import AlertComp from "../../components/Alert";



function Home() {
  const [modalOpen, setModalOpen] = useState(false);
   const[success,setSuccess]=useState(false);

  return (
    <>
      <Navbar />
      {success && <AlertComp setSuccess={setSuccess}/> }
      <div className="h-[80vh] w-[90vw] max-xl:w-[100vw] relative left-[50%] -translate-x-[50%]">
        <div className=" max-md:w-[90vw] max-md:left-[5vw] leftside w-[60vw] max-xl:w-[70vw] h-[80vh] absolute left-0 ">
          <div className=" h-[100px] m-4 p-4 shadow-[0px_4px_10px_rgba(0,0,0,0.25)] rounded-lg">
            <div className="inline-block w-[68px] bg-green-300 h-[68px] rounded-xl"></div>
            <div className="inline-block w-[calc(90%-100px)] h-[68px] p-6 relative -top-7">
              <input
                className="w-[110%] h-[100%]  rounded-lg p-4 border-2 border-gray-300 focus:border-2 focus:border-gray-400 focus:outline-none"
                type="text"
                placeholder="Post something" onClick={() => {
                  setModalOpen(true);
                }}
              ></input>
            </div>
            <div className="inline-block w-[calc(10%+32px)] h-[100%] relative">
              {/* <button className="bg-[#02C8AC] hover:bg-[#05CFB3] absolute w-[70%] rounded-lg text-[#FFFFFF] h-[70%] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] ">
                Post
              </button> */}
            </div>
          </div>
          <Posts />
        </div>
        <RightSideBar />
        {modalOpen && <Modal setOpenModal={setModalOpen} setSuccess={setSuccess} mask="false" /> }
      </div>
    </>
  );
}

export default Home;
