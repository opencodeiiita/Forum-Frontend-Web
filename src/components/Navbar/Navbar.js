import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AiOutlineHome } from "react-icons/ai";
import { FaConnectdevelop } from "react-icons/fa";
import { BiMessage } from "react-icons/bi";
import { Input, Button, Drawer } from "antd";
import { AiOutlineMenu } from "react-icons/ai";
export default function Navbar() {
  const location = useLocation();
  console.log(location.pathname);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <nav className=" md:hidden flex w-1/1 items-center justify-start flex-wrap py-3 navbar">
        <Button
          className="px-2 rounded-sm  mx-2 shadow-md hover:border-0 border-0 transition-none"
          style={{ borderRadius: "10px" }}
          // type="primary"
          onClick={showDrawer}
        >
          <AiOutlineMenu fill="#02C8AC" />
        </Button>
        <h1
          className=" font-bold text-2xl navbar_text"
          style={{ color: "#02C8AC" }}
        >
          Forum
        </h1>
        <Input.Search
          placeholder="Type here to search ..."
          id="search"
          className="pt-[-8px] ml-[2.5vw] h-fit w-[60vw] text-sm bg-gray-100 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <Drawer
          // title="Basic Drawer"
          placement={"left"}
          closable={false}
          onClose={onClose}
          open={open}
          key={"left"}
        >
          <Link to="/Home">
            <h5 className=" py-4 relative left-[-20px] pl-10 hover:bg-[#02C8AC] hover:text-[#FFFFFF] font-['Poppins'] w-full text-4xl mt-4 hover:translate-x-5 transition-all text-[#02C8AC]">
              Home
            </h5>
          </Link>

          <Link to="/Community">
            <h5 className=" py-4 relative left-[-20px] pl-10 hover:bg-[#02C8AC] hover:text-[#FFFFFF] font-['Poppins'] w-full text-4xl mt-4 hover:translate-x-5 transition-all text-[#02C8AC]">
              Communitites
            </h5>
          </Link>
          <Link to="/Chat">
            <h5 className=" py-4 relative left-[-20px] pl-10 hover:bg-[#02C8AC] hover:text-[#FFFFFF] font-['Poppins'] w-full text-4xl mt-4 hover:translate-x-5 transition-all text-[#02C8AC]">
              Chat
            </h5>
          </Link>
          <Link to="/Dashboard">
            <h5 className=" py-4 relative left-[-20px] pl-10 hover:bg-[#02C8AC] hover:text-[#FFFFFF] font-['Poppins'] w-full text-4xl mt-4 hover:translate-x-5 transition-all text-[#02C8AC]">
              Dashboard
            </h5>
          </Link>
          <h5 className=" py-4 relative left-[-20px] pl-10 hover:bg-[#02C8AC] hover:text-[#FFFFFF] font-['Poppins'] w-full text-4xl mt-4 hover:translate-x-5 transition-all text-[#02C8AC]">
            Sign Out
          </h5>
        </Drawer>
      </nav>
      <nav className="max-md:hidden flex w-1/1 items-center justify-around flex-wrap p-3 navbar">
        <Link to="/">
          <h1
            className=" font-bold text-2xl navbar_text"
            style={{ color: "#02C8AC" }}
          >
            Forum
          </h1>
        </Link>
        <div className="search flex w-1/2 justify-evenly">
          <Link
            to="/home"
            className={`${
              location.pathname === "/home" ? "bg-[#02C8AC]" : ""
            } px-3 py-2 rounded-sm  mx-2 shadow-md`}
            style={{ borderRadius: "10px" }}
          >
            <AiOutlineHome fontSize="20px" />
          </Link>
          <Link
            to="/Community"
            className={`${
              location.pathname === "/Community" ? "bg-[#02C8AC]" : ""
            } px-3 py-2 rounded-sm mx-2 shadow-md`}
            style={{ borderRadius: "10px" }}
          >
            <FaConnectdevelop fontSize="20px" />
          </Link>
          <Input.Search
            placeholder="Type here to search ..."
            id="search"
            className="pt-[-8px] h-fit text-sm bg-gray-100 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />

          <Link
            to="/Chat"
            className={`${
              location.pathname === "/Chat" ? "bg-[#02C8AC]" : ""
            } py-2 px-3 rounded-sm mx-2 bg-gray-200`}
            style={{ borderRadius: "10px" }}
          >
            <BiMessage fontSize="20px" />
          </Link>
        </div>
        <Link to="/Dashboard" className="flex">
          <div
            className="profile w-8 h-8 border overflow-hidden shadow-md"
            style={{ borderRadius: "10px" }}
          >
            <img
              src="https://avatars.githubusercontent.com/u/82640789?v=4"
              alt="developer"
            />
          </div>
          <h3 className="mx-2 mt-1 font-semibold">Neeraj Coubisa</h3>
        </Link>
      </nav>
    </>
  );
}
