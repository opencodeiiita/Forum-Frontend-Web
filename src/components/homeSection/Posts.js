import React from "react";
import Post from "./Post";

const Posts = () => {
  return (
    <div className=" h-[80vh] overflow-y-scroll overflow-x-hidden no-scrollbar ">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
