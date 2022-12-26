import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/hero-section";


function Home() {
    return (
      <>
       <Navbar />
       <Hero/>
        {/* <h1 className='text-3xl font-bold text-center mt-10'>Home Page</h1> */}
      </>
    );
  }
  
  export default Home;