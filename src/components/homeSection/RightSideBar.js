import React from "react";
import RightSideBarContainer from "./rightSideBarComponents/RightSideBarContainer";

const RightSideBar = () => {
  return (
    <div className="max-md:hidden rightside w-[30vw] h-[calc(80vh+120px)] absolute right-0 p-4 mt-4 no-scrollbar overflow-y-scroll">
      <RightSideBarContainer title={"Your Communitites"} />
      <RightSideBarContainer title={"Your Tags"} />
      <RightSideBarContainer title={"Container 3"} />
      <RightSideBarContainer title={"Container 4"} />
    </div>
  );
};

export default RightSideBar;
