import React from "react";

function Card() {
  return (
    <div className="relative">
      <div
        className="flex flex-col items-center justify-center p-8 rounded-2xl text-sm border text-neutral-200 leading-relaxed text-left group relative gap-4 max-w-xl w-full
     sm:border-neutral-500 border-orange-400 sm:hover:border-orange-400
    bg-white/10 overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(251,146,60,0.3)]"
      >
        <p>
          Hi there! I'm Carlos De Leon, a{" "}
          <span className="text-[#FFD700] font-semibold">
            software development student
          </span>{" "}
          with a strong background in{" "}
          <span className="text-[#FFD700] font-semibold">
            high-level operations management
          </span>
          . Before diving into tech, I worked as a{" "}
          <span className="text-[#FFD700] font-semibold">
            Chief of Operations and General Manager
          </span>{" "}
          in the fine dining industry, leading{" "}
          <span className="text-[#FFD700] font-semibold">
            teams of over 100 people
          </span>{" "}
          and managing{" "}
          <span className="text-[#FFD700] font-semibold">
            monthly sales averaging $1.5M USD
          </span>{" "}
          with an average{" "}
          <span className="text-[#FFD700] font-semibold">
            32% profit margins{" "}
          </span>
          .
          <br />
          <br />
          Today, I’m focused on building{" "}
          <span className="text-[#FFD700] font-semibold">
            user-friendly, scalable applications
          </span>
          . I've collaborated with a{" "}
          <span className="text-[#FFD700] font-semibold">
            Web Development Company
          </span>
          , gaining hands-on experience across{" "}
          <span className="text-[#FFD700] font-semibold">
            backend development and UI design
          </span>
          . I’m always{" "}
          <span className="text-[#FFD700] font-semibold">
            exploring new technologies
          </span>{" "}
          and bringing a results-driven mindset from my leadership background
          into every project I build.
        </p>
      </div>
    </div>
  );
}

export default Card;
