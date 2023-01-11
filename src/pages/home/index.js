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
      <div className="h-[80vh] w-full max-xl:w-[100vw] flex flex-row justify-around mr-[30%] ">
        <div className=" max-md:w-[90vw] max-md:left-[5vw]  w-[57vw] max-xl:w-[70vw] mr-[20%]  h-[80vh] absolute">
          <div className=" h-[100px] w-[93.35%] mx-4 mt-4 p-4 shadow-[0px_4px_10px_rgba(0,0,0,0.25)]  rounded-[15px]">
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
