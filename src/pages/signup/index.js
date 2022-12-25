import React from "react";
import signup from "../../assets/signup.jpg";
const index = () => {
  return (
    <>
      <div className="container px-3 mt-1">
        <div className="w-full bg-grey-lightest">
          <div className="container mx-auto py-8 flex flex-wrap ">
            <div className="w-1/2 lg:w-1/2 mx-auto bg-white flex flex-col justify-center items-center  rounded">
              <div className="py-4 px-8 w-3/4 text-xl bg-blue-200 border-grey-lighter">
                Register For IIIT-A
              </div>
              <div className="py-4 px-8 w-3/4">
                <div className="flex mb-4">
                  <div className="w-full mr-1">
                    <label
                      className="block text-grey-darker text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      id="name"
                      type="text"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="email"
                    type="email"
                    placeholder="Your email address"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="password"
                    type="password"
                    placeholder="Your secure password"
                  />
                  <p className="text-grey text-xs mt-1">
                    At least 6 characters
                  </p>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <button
                    className=" bg-blue-400 hover:bg-blue-dark hover:text-white text-black font-medium py-2 px-4 rounded-lg"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/2 lg:w-1/2 mx-auto bg-white rounded justify-center items-center">
              <img src={signup} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
