import React, { useRef, useState } from "react";

function Footer() {
  const inputRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy");

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard
        .writeText(inputRef.current.value)
        .then(() => {
          setButtonText("Copied!");
          setTimeout(() => setButtonText("Copy"), 2000);
        })
        .catch((err) => {
          console.error("Error al copiar: ", err);
          setButtonText("Error");
          setTimeout(() => setButtonText("Copy"), 2000);
        });
    }
  };

  return (
    <form id="footer" className="w-full max-w-[300px] sm:max-w-[300px] mx-auto">
      <div className="mb-8">
        <h2 className="text-center text-[#c2c6da] text-4xl font-bold mb-2">
          Contact
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full"></div>
      </div>
      <label
        htmlFor="clipboard"
        className="mb-2 text-sm font-medium sr-only text-white"
      >
        Search
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          readOnly
          value="admin@koxland.net"
          type="text"
          id="clipboard"
          className="block w-full p-4 ps-10 text-sm border rounded-lg focus:ring-orange-400 focus:border-orange-400 bg-gray-700 border-orange-400
           placeholder-orange-400 text-orange-500"
          placeholder="admin@koxland.net"
          required
        />
        <button
          type="button"
          onClick={handleCopy}
          className="text-white cursor-pointer absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2
           bg-orange-400 hover:bg-orange-700 focus:ring-orange-500"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
}

export default Footer;
