import React from "react";

function Card() {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center p-8 border rounded-2xl text-sm text-neutral-200 leading-relaxed text-left">
        <p>
          Hi there! I'm Carlos De Leon, a software developer
          <span className="text-[#FFD700] font-semibold"> student building user-friendly applications</span>. Throughout
          my journey,
          <span className="text-[#FFD700] font-semibold"> I've collaborated with a Web Development Company</span> on
          their duties across diverse areas like backend, design, and database management,
          <span className="text-[#FFD700] font-semibold"> learning</span> a lot from them. I
          <span className="text-[#FFD700] font-semibold"> constantly explore new technologies</span> and resources to
          build smooth and scalable apps.
        </p>
      </div>
    </div>
  );
}

export default Card;
