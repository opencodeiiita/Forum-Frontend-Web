import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Profile from "../../components/Dashboard/MyQuestions/profile";
import Rewards from "../../components/Dashboard/MyQuestions/rewards";
import { useState, useEffect } from "react";
import LeftSection from "../../components/Dashboard/MyQuestions/leftsection";

export default function Dashboard() {
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      //To make the button appear on reload
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }
  const size = useWindowSize();
  if (size.width < 1024) {
    return (
      <>
        <Navbar />
        <div className="flex flex-col items-center justify-center w-full" >
          <div className="my-[30px]">
          <Profile />
          </div>
          
          <LeftSection />
        </div>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div className="flex flex-row  my-[20px] mx-[20px] justify-center w-full " >
        <LeftSection />
        <div className="flex flex-col ml-[2%] ">
          <div className=" flex flex-col fixed relative ">
            <Profile />
          </div>
          <div className=" flex flex-col fixed relative ">
            <Rewards />
          </div>

        </div>

      </div>
    </>
  );
}

