import React, { useState } from "react";
import Post from "./post";
import Posts from "./posts";



export default function LeftSection() {
    const [toggleClicked, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <>
            <div className=" bg-white h-fit w-max lg:w-fit flex flex-col shadow-[0px_4px_10px_rgba(0,0,0,0.25)] rounded-[15px]  pb-[36px]">
                <section className="flex-row flex-wrap max-w-xl my-[30px] mx-[36px] ">
                    <div className=" flex flex-3 justify-between items-center flex-row  font-['Poppins']  ">
                        <h2
                            className={toggleClicked === 1 ? "text-[20px] cursor-pointer font-medium  text-[#02C8AC] underline decoration-4 underline-offset-[6px] "
                                : "text-[20px] cursor-pointer font-medium opacity-50  decoration-4 underline-offset-[6px] "}
                            onClick={() => toggleTab(1)}>

                            My Questions
                        </h2>
                        <h2
                            className={toggleClicked === 2 ? "text-[20px] cursor-pointer font-medium text-[#02C8AC] underline decoration-4 underline-offset-[6px] "
                                : "text-[20px] cursor-pointer font-medium opacity-50  decoration-4 underline-offset-[6px] "}
                            onClick={() => toggleTab(2)}>
                            My Answers
                        </h2>
                        <h2
                            className={toggleClicked === 3 ? "text-[20px] cursor-pointer font-medium text-[#02C8AC] underline decoration-4 underline-offset-[6px] "
                                : "text-[20px] cursor-pointer font-medium opacity-50  decoration-4 underline-offset-[6px] "}
                            onClick={() => toggleTab(3)}>
                            My Communities
                        </h2>
                    </div>
                </section>

                {(toggleClicked === 1 ? <Posts /> : null)}
                {(toggleClicked === 2 ? <Post /> : null)}
                {(toggleClicked === 3 ? <Posts /> : null)}

            </div>
        </>

    );

}

