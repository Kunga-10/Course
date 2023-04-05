
import React from "react";
import Testominals from "./components/Testominals";
import reviews from "./data";

const App = () => {
  return (
  <div className=" h-[100vh] w-[100vw] flex flex-col justify-center items-center bg-gray-200">
  
  <div className="text-center">

    <h2 className="font-bold text-4xl ">Our Testominals</h2>

    <div className="h-[4px] w-[100px] mx-auto bg-violet-400 mt-1 "></div>

    <Testominals reviews={reviews}></Testominals>
  </div>

  </div>);
};

export default App;
