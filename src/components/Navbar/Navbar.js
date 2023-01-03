import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AiOutlineHome } from "react-icons/ai";
import { FaConnectdevelop } from "react-icons/fa";
import { BiMessage } from "react-icons/bi";
export default function Navbar() {
  const btn = document.querySelector("button.mobile-menu-button");
  const menu = document.querySelector(".mobile-menu");

  const [focusNav, setFocusNav] = useState(1);
  return (
    <nav class="bg-gray-100">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex w-1/2 space-x-4 ">
            <div className="">
              <a
                href="#"
                class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
              >
                <h1
                  className="font-bold text-2xl navbar_text"
                  style={{ color: "#02C8AC" }}
                >
                  Forum
                </h1>
              </a>
            </div>

            <div class="hidden md:flex items-center w-4/5">
              <button
                className="p-3 rounded-sm  mx-2 shadow-md focus:bg-green-400 "
                style={{ borderRadius: "10px" }}
              >
                <AiOutlineHome fontSize="20px" />
              </button>
              <button
                className="p-3 rounded-sm mx-2 shadow-md focus:bg-green-400 "
                style={{ borderRadius: "10px" }}
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
                className="p-3 rounded-sm mx-2 bg-gray-200 focus:bg-green-400 "
                style={{ borderRadius: "10px" }}
              >
                <BiMessage fontSize="20px" />
              </button>
            </div>
          </div>

          <div class="hidden md:flex items-center space-x-1">
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

          <div class="md:hidden flex items-center">
            <button
              class="mobile-menu-button"
              onClick={() => {
                menu.classList.toggle("hidden");
              }}
            >
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="mobile-menu hidden md:hidden sm:flex flex-col p-2">
        <button
          className="p-3 rounded-sm  mx-2 mt-2 shadow-md focus:bg-green-400 "
          style={{ borderRadius: "10px" }}
        >
          <AiOutlineHome fontSize="20px" />
        </button>
        <button
          className="p-3 rounded-sm mx-2 mt-2 shadow-md focus:bg-green-400 "
          style={{ borderRadius: "10px" }}
        >
          <FaConnectdevelop fontSize="20px" />
        </button>

        <button
          className="p-3 rounded-sm mx-2 mt-2 bg-gray-200 focus:bg-green-400 "
          style={{ borderRadius: "10px" }}
        >
          <BiMessage fontSize="20px" />
        </button>
        <input
          type="search"
          id="search"
          class="bg-gray-100 mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Type here to search ..."
        />
        <div className="flex">
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
