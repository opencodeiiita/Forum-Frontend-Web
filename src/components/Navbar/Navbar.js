import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { FaConnectdevelop } from "react-icons/fa";
import { BiMessage } from "react-icons/bi";
export default function Navbar() {
  const btn = document.querySelector("button.mobile-menu-button");
  const menu = document.querySelector(".mobile-menu");

  return (
    <nav className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex w-1/2 space-x-4 ">
            <NavLink
              to="/"
              className=" items-center flex text-gray-700 hover:text-gray-900 mt-2"
            >
              <h1
                className="font-bold text-2xl navbar_text"
                style={{ color: "#02C8AC" }}
              >
                Forum
              </h1>
            </NavLink>

            <div className="hidden md:flex items-center w-4/5 p-2">
              <NavLink to="/">
                <button
                  className="p-3 rounded-sm  mx-2 shadow-md focus:bg-green-400 "
                  style={{ borderRadius: "10px" }}
                >
                  {" "}
                  <AiOutlineHome fontSize="20px" />
                </button>
              </NavLink>
              <NavLink to="/community">
                <button
                  className="p-3 rounded-sm mx-2 shadow-md focus:bg-green-400 "
                  style={{ borderRadius: "10px" }}
                >
                  {" "}
                  <FaConnectdevelop fontSize="20px" />
                </button>
              </NavLink>
              <div className="flex relative ">
                <input
                  type="search"
                  id="search"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Type here to search ..."
                />
                <AiOutlineSearch
                  fontSize="25px"
                  className="mt-3 absolute mx-1"
                  style={{ right: "0%" }}
                />
              </div>
              <NavLink to="/message">
                <button
                  className="p-3 rounded-sm mx-2 bg-gray-200 focus:bg-green-400 "
                  style={{ borderRadius: "10px" }}
                >
                  {" "}
                  <BiMessage fontSize="20px" />
                </button>
              </NavLink>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <div
              className="profile w-8 h-8 rounded-full border overflow-hidden shadow-md"
              style={{ borderRadius: "10px" }}
            >
              <img
                src="https://avatars.githubusercontent.com/u/82640789?v=4"
                alt="developer"
              />
            </div>
            <h3 className="mx-4 mt-0 font-semibold ">Neeraj Coubisa</h3>
          </div>

          <div className="md:hidden flex items-center">
            <button>
              <AiOutlineSearch fontSize="25px" className=" mx-2" />
            </button>
            <button
              className="mobile-menu-button"
              onClick={() => {
                menu.classList.toggle("hidden");
              }}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mobile-menu hidden md:hidden sm:flex flex-col p-2">
        <div className="flex flex-col">
          <button
            className="p-3 rounded-sm  mt-2 shadow-md focus:bg-green-400 "
            style={{ borderRadius: "10px" }}
          >
            <NavLink to="/">Home</NavLink>
          </button>
          <button
            className="p-3 rounded-sm mt-2 shadow-md focus:bg-green-400 "
            style={{ borderRadius: "10px" }}
          >
            <NavLink to="/community">Community</NavLink>
          </button>

          <button
            className="p-3 rounded-sm mt-2 bg-gray-200 shadow-md focus:bg-green-400 "
            style={{ borderRadius: "10px" }}
          >
            <NavLink to="/message">Message</NavLink>
          </button>
        </div>

        <div className="flex mt-4">
          <div
            className="profile w-8 h-8 rounded-full border overflow-hidden shadow-md"
            style={{ borderRadius: "10px" }}
          >
            <img
              src="https://avatars.githubusercontent.com/u/82640789?v=4"
              alt="developer"
            />
          </div>
          <h3 className="mx-4 mt-0 font-semibold ">Neeraj Coubisa</h3>
        </div>
      </div>
    </nav>
  );
}
