import React from "react";

function MainHeader() {
  return (
    <header className="border-b border-gray-800 p-3 w-full h-16 flex items-center bg-gray-900">
      <img
        className="w-full h-fit min-w-6 max-w-8 min-h-6 max-h-8 object-contain mr-auto cursor-pointer"
        src="/logo.png"
        alt=""
      />
      <div className="flex items-center gap-4 font-[Inter]">
        <a className="hover:text-[#FFD700]" href="/">
          Portfolio
        </a>
        <a className="hover:text-[#FFD700]" href="https://github.com/Koxone">
          Github
        </a>
        <a className="hover:text-[#FFD700]" href="https://www.youtube.com/@KoxDeveloper">
          Youtube
        </a>
      </div>
    </header>
  );
}

export default MainHeader;
