import React from "react";

function MainHeader() {
  return (
    <header className="border-b border-gray-800 p-8 w-full h-16 flex items-center bg-gray-900">
      <img
        className="w-full h-fit min-w-6 max-w-8 min-h-6 max-h-8 object-contain mr-auto cursor-pointer"
        src="/logo.png"
        alt="logo icon"
      />
      <div className="flex items-center gap-3 sm:gap-8 sm:text-base text-[14px] font-[Inter]">
        <a
          className="hover:text-[#FFD700] hover:scale-125"
          href="https://resume.koxland.dev/"
        >
          Resume
        </a>
        <a
          className="hover:text-[#FFD700] hover:scale-125"
          href="https://github.com/Koxone"
        >
          Github
        </a>
        <a
          className="hover:text-[#FFD700] hover:scale-125"
          href="https://www.youtube.com/@KoxDeveloper"
        >
          Youtube
        </a>
        <a className="hover:text-[#FFD700] hover:scale-125" href="#footer">
          Contact
        </a>
      </div>
    </header>
  );
}

export default MainHeader;
