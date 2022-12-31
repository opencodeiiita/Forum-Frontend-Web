import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AiOutlineHome } from "react-icons/ai";
import { FaConnectdevelop } from "react-icons/fa";
import { BiMessage } from "react-icons/bi";
export default function Navbar() {
  return (
    <nav className="flex w-1/1 items-center justify-around flex-wrap p-3 navbar">
      <h1
        className="font-bold text-2xl navbar_text"
        style={{ color: "#02C8AC" }}
      >
        Forum
      </h1>
      <div className="search flex w-1/2 justify-evenly">
        <button
          className="px-3 rounded-sm  mx-2 shadow-md"
          style={{ backgroundColor: "#02C8AC", borderRadius: "10px" }}
        >
          <AiOutlineHome fontSize="20px" />
        </button>
        <button
          className="px-3 rounded-sm mx-2 shadow-md"
          style={{borderRadius: "10px" }}
        >
          <FaConnectdevelop fontSize="20px" />
        </button>
        <input
          type="search"
          id="search"
          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Type here to search ..."
        />
        <button
          className="px-3 rounded-sm mx-2 bg-gray-200"
          style={{ borderRadius: "10px" }}
        >
          <BiMessage fontSize="20px" />
        </button>
      </div>
      <div className="flex">
        <div className="profile w-8 h-8 border overflow-hidden shadow-md" style={{borderRadius:"10px"}}>
          <img
            src="https://avatars.githubusercontent.com/u/82640789?v=4"
            alt="developer"
          />
        </div>
        <h3 className="mx-2 mt-1 font-semibold">Neeraj Coubisa</h3>
      </div>
    </nav>
  );
}
