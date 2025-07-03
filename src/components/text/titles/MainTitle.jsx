import React from "react";
import MatrixText from "./MatrixText";

function MainTitle() {
  return (
    <div className="p-4 flex flex-col gap-3">
      <h1 className="text-5xl sm:text-5xl md:text-6xl whitespace-nowrap text-neutral-300 font-semibold text-center">
        Carlos de Leon
      </h1>

      {/* <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 
      2xl:text-4xl text-transparent bg-clip-text animate-horizontal bg-gradient-to-r from-[#F76927] to-[#Fdfa29] text-center">
        Software Engineer...In the making!
      </h2> */}
      <MatrixText text="Software Engineer... In the making!" />

      <h3 className="text-sm sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-neutral-400 font-light text-center">
        Currently enrrolled in a Full Stack Software Engineer Journey
      </h3>
    </div>
  );
}

export default MainTitle;
