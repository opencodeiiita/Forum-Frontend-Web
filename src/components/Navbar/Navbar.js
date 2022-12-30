import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AiOutlineHome } from "react-icons/ai";
import { FaConnectdevelop } from "react-icons/fa";
export default function Navbar() {
  return (
    <nav className="flex w-1/1 items-center justify-around flex-wrap p-3">
      <h1 className="font-bold text-green-400 text-2xl">FORUM</h1>
      <div className="search flex w-1/2 justify-evenly">
        <button className="px-4 rounded-sm bg-green-400 mx-2 shadow-md">
          <AiOutlineHome />
        </button>
        <button className="px-4 rounded-sm bg-green-400 mx-2 shadow-md">
          <FaConnectdevelop />
        </button>
        <input
          type="search"
          id="search"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Type here to search ..."
        />
        <button className="px-4 rounded-sm bg-green-400 mx-2 shadow-md">
          <FaConnectdevelop />
        </button>
      </div>
      <div className="flex">
        <div className="profile w-10 h-10 border overflow-hidden shadow-md rounded-sm">
          <img src="https://avatars.githubusercontent.com/u/82640789?v=4" alt="developer" />
        </div>
        <h3 className="mx-2 mt-2">Neeraj Coubisa</h3>
      </div>
    </nav>
  );
}
