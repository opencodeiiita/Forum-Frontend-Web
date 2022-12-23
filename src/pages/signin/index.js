import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai';
import { useState } from 'react';
// import Image from "react-image";
import login from "../../assets/login_vector.jpg";


export default function SignIn() {
    let [open,setOpen]=useState(false);
    let toggle=()=>{
        setOpen(!open);
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-white">
            <div className="hidden sm:flex overflow-auto " >
                <img src={login} 
                className="object-contain"
                alt="Sorry image couldn't load"
                priority
            />   
            </div>
            <div className=" flex flex-col justify-center">
                <form className="max-w-[500px] w-full mx-auto rounded-lg p-10  " >
                    <h2 className="text-4xl text-center p-4 text-[#00b499] font-bold">
                        Log In
                    </h2>
                    <div className="text-[12px] text-center">
                        Use your LDAP Credentials only
                    </div>
                    <div className="flex flex-col py-2 ">
                        <input
                            placeholder="Username"
                            className="border-[1px] font-normal bg-[#FFFFFF] p-3 focus:outline-none focus:border-green-500 transition-all"
                            type="text"
                            required
                        />
                    </div>
                    <div className="flex flex-col py-2 ">
                        <input
                            placeholder="Email"
                            className="border-[1px] font-normal bg-[#FFFFFF] p-3 focus:valid:border-green-500 focus:invalid:border-red-500 transition-all focus:outline-none"
                            type="email"
                            required
                        />
                    </div>
                    <div className="flex flex-col py-2 relative">
                        <input
                            placeholder="Password"
                            className="border-[1px] font-normal bg-[#FFFFFF] p-3 focus:border-green-500 pass_type transition-all focus:outline-none"
                            type={(open===false)?"password":"text"}
                            required
                        ></input>
                        <div className='text-2xl absolute top-5 right-3 cursor-[pointer] select-none'>
                            {
                                (open===false)?<AiFillEyeInvisible onClick={toggle}/>:<AiFillEye onClick={toggle}/>
                            }
                    
                    </div>
                    </div>
                    
                    <button
                        type="submit"
                        className=" w-full my-2 py-3 bg-[#00b499]  rounded-lg text-[#FFFFFF] shadow-[0_0_0px_0_rgba(100,100,111,0.2)] transition-shadow duration-300   hover:shadow-[0_0px_10px_0px_rgba(100,100,111,0.8)] "
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}
