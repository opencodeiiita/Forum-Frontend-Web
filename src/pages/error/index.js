import React from 'react'
import { Route, Switch } from 'react-router-dom';
import errorSvg from "../../assets/error.png";
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';



export default function Error() {
 return (
 <>
  <Navbar/>
 <div className="container mx-auto flex flex-wrap items-center justify-center md:flex-col lg:flex-row mt-20 md:mt-0">
   <div className="w-full md:w-1/2 md:pr-10 md:pl-20 md:mb-20">
     <h1 className="text-4xl font-bold leading-none mb-2 pl-4 text-center md:text-left md:text-[5rem] ">
      404 
     </h1>
     <p className="text-2xl font-medium mt-7 mb-8 pl-4 text-center md:text-3xl md:text-left md:mt-9">
     Sorry, the page you are looking for  <br />
     could not be found.
     </p>
     <div className="text-center md:text-left md:mt-9 md:ml-9">
       <Link to='/'>
         <button className="bg-[#2dd4bf] hover:bg-gray-700 scale-125 text-white font-bold py-2 px-4 rounded-xl pl-4  ">
         Back to Homepage
         </button>
       </Link>
     </div>
   </div>
     <div className="w-1/2 flex items-center justify-center mt-14 md:mt-0">
       <img src={errorSvg} alt="Error" className="  md:h-[89vh] md:scale-100 scale-150 object-cover" />
     </div>
    
   </div>
   </>
 )
}
