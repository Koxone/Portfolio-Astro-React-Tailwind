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
          Hi there! I'm{" "}
          <span className="text-[#FFD700] font-semibold">
            Carlos De Leon
          </span>
          , a{" "}
          <span className="text-[#FFD700] font-semibold">
            Software Engineering student
          </span>{" "}
          currently in a{" "}
          <span className="text-[#FFD700] font-semibold">
            development internship
          </span>{" "}
          at a tourism tech company serving{" "}
          <span className="text-[#FFD700] font-semibold">
            Mexico and the Dominican Republic
          </span>
          . Transitioning from{" "}
          <span className="text-[#FFD700] font-semibold">
            10+ years as a Restaurant COO and General Manager
          </span>
          , where I led{" "}
          <span className="text-[#FFD700] font-semibold">
            teams of 100+ people
          </span>{" "}
          and managed operations with{" "}
          <span className="text-[#FFD700] font-semibold">
            $1.5M USD monthly revenue at 30% profit margins
          </span>
          .
          <br />
          <br />
          Today, I'm building responsive web applications with{" "}
          <span className="text-[#FFD700] font-semibold">
            React, Next.js, Astro, Tailwind CSS, and Firebase
          </span>
          , focusing on{" "}
          <span className="text-[#FFD700] font-semibold">
            clean code and intuitive UI/UX
          </span>
          . My operations background brings proven{" "}
          <span className="text-[#FFD700] font-semibold">
            project management, data-driven decision making, and high-pressure
            performance skills
          </span>{" "}
          to every technical challenge I tackle.
        </p>
      </div>
    </div>
  );
}

export default Card;
