import image from "./forumimage.png";
export default function Hero() {
  return (
    <>
      <div className="bg-gray-200 py-20">
  <div className="container mx-auto flex flex-wrap items-center justify-center md:flex-col lg:flex-row ">
    <div className="w-full md:w-1/2 md:pr-10 md:pl-20">
      <h1 className="text-4xl font-bold leading-none mb-2 pl-4 text-center md:text-left md:text-[3.5rem]">
        Now communicate <br /> with others easily
      </h1>
      <p className="text-2xl mt-7 mb-8 pl-4 text-center md:text-2xl md:text-left md:mt-9">
        Simplified and easy way of communication <br />
        now just one click away
      </p>
      <div className="text-center md:text-left md:mt-9 md:ml-6">
        <button className="bg-black hover:bg-gray-700 scale-125 text-white font-bold py-2 px-4 rounded-xl pl-4">
          Click here
        </button>
      </div>
    </div>

    <div className="w-full md:w-2/5 md:pl-10">
      <img
        src={image}
        alt="Hero image"
        className="mt-7 mx-auto h-80 md:h-auto md:mx-auto"
      />
    </div>
  </div>
  <div className="container mx-auto mt-20 flex flex-wrap items-start justify-between md:flex-no-wrap md:justify-center">

    <div className="w-full md:w-1/3 px-4 border-r text-center md:text-left md:pl-20">
      <h2 className="text-3xl mt-0 font-bold md:text-center mb-4">Share Doubts</h2>
      <p className="text-[1rem] md:px-[4rem] md:text-center mb-4">
       Discuss your doubts now easily and and quickly. Doubt discussion made easy.
      </p>
    </div>
    <div className="w-full md:w-1/3 px-4 border-r text-center md:text-left md:pl-20">
      <h2 className="text-3xl mt-0 font-bold md:text-center mb-4">Share Experience</h2>
      <p className="text-[1rem] md:px-[4rem] md:text-center mb-4">
       Discuss your doubts now easily and and quickly. Doubt discussion made easy.
      </p>
    </div>
    <div className="w-full md:w-1/3 px-4 border-r text-center md:text-left md:pl-20">
      <h2 className="text-3xl mt-0 font-bold md:text-center mb-4">Join communities</h2>
      <p className="text-[1rem] md:px-[4rem] md:text-center mb-4">
       Discuss your doubts now easily and and quickly. Doubt discussion made easy.
      </p>
    </div>
        </div>
      </div>
    </>
  );
}
