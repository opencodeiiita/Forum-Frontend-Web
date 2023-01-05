import React, { useState } from "react";
import '../../index.css';
import AlertComp from "../Alert";

function Modal({ setOpenModal, setSuccess }) {
  const [tags, setTags] = useState([]);

  return (
    <div className="modal h-screen w-full scale-x-110 fixed top-0  flex justify-center items-center bg-black bg-opacity-50   ">
      <div className="modal-container bg-gray-100 top-0 scale-x-[90%] mx-auto px-6 py-4 rounded-lg shadow-xl overflow-y-auto sm:px-8 sm:py-6 lg:py-7 lg:px-10 xl:px-12">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-black"Title></div>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="text-red-600 text-xl font-semibold -mr-4 py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue"
          >
            X
          </button>
        </div>
   
          <label className="block text-black text-sm font-bold mb-2">Title</label>
          <textarea className="w-full py-2 px-3 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:shadow-outline-blue" />
          <label className="block text-black text-sm font-bold mt-4 mb-2">Content</label>
          <textarea className="w-full py-2 px-3 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:shadow-outline-blue" />
        
        <div className="my-4">
          <div className="text-gray-100 text-lg leading-relaxed">
            {tags.map(tag => (
              <button className="inline-block bg-gray-600 focus:outline-none focus:shadow-outline-gray hover:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2">
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="my-4">
        <label className="block text-black text-sm font-bold mb-2">Attachments</label>
        <input type="file" multiple className="w-full py-2 px-3 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:shadow-outline-blue" />
      </div>
      <div className="flex justify-between mt-6">
        <form
          onSubmit={event => {
            event.preventDefault();
            setTags([...tags, event.target.elements.tag.value]);
            event.target.reset();
          }}
        >
          <label className="tag text-black text-sm font-bold mb-2">Add tag</label>
          <input type="text" name="tag" className="w-full py-2 px-3 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:shadow-outline-blue" />
          <button type="submit" className="text-white font-bold py-2 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue mt-3 ">Add Tag</button>
          <button
          onClick={() => {
            setOpenModal(false);
            setSuccess(true);
          }}
          className="text-white font-bold py-1 mt-3 ml-4 h-10 px-5 w-20 rounded-xl bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue "
        >
          Post
        </button>
        </form>
       
      </div>
    </div>
  </div>
);
}

export default Modal;


