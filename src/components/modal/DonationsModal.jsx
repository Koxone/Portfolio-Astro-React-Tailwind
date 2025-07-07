import React from "react";

function DonationsModal({ paypalRef, setShowPayPal }) {
  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={() => setShowPayPal(false)}
    >
      <div
        className="bg-gray-900 p-6  border  flex flex-col items-center gap-4 w-[300px] group    
     sm:border-neutral-500 border-orange-400 sm:hover:border-orange-400 rounded-2xl
    text-sm text-neutral-200 leading-relaxed text-left  overflow-hidden transition-all duration-500 ease-in-out 
    transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(251,146,60,0.3)]"
        onClick={(e) => e.stopPropagation()}
      >
        <span class="absolute w-2 h-2 bg-orange-400 rounded-full animate-spark opacity-100 z-20 sm:hidden sm:group-hover:block"></span>
        {/* PayPal Button Container */}
        <div ref={paypalRef}></div>

        {/* GitHub Sponsors Button */}
        <iframe
          src="https://github.com/sponsors/Koxone/button"
          title="Sponsor Koxone"
          height="32"
          width="114"
          style={{
            border: 0,
            borderRadius: "6px",
          }}
        ></iframe>

        {/* Close Button */}
        <button
          className="mt-2 text-lg text-center font-semibold text-white px-4 py-2 bg-orange-400 cursor-pointer rounded hover:bg-orange-700 transition"
          onClick={() => setShowPayPal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default DonationsModal;
