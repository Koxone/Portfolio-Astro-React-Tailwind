import React from "react";

function ExperienceCard() {
  return (
    <div className="mt-16">
      <h2 class="text-center text-[#c2c6da] text-3xl font-semibold">Experience</h2>
      <div
        className="group relative flex flex-col items-center justify-center max-w-xl w-full p-8 
    border border-neutral-500 hover:border-orange-400 rounded-2xl text-sm mt-12 text-neutral-200 leading-relaxed text-left bg-white/10 overflow-hidden"
      >
        <span className="absolute w-2 h-2 bg-orange-400 rounded-full animate-spark opacity-100 z-20 hidden group-hover:block" />

        <ul className="list-disc pl-5 space-y-3 marker:text-orange-400 z-10 relative">
          <li>
            Develop <span className="text-yellow-400 font-semibold">high-quality</span>, responsive, and{" "}
            <span className="text-yellow-400 font-semibold">user-friendly</span> web applications.
          </li>
          cuando
          <li>
            Write <span className="text-yellow-400 font-semibold">reusable</span> libraries and components for future
            use.
          </li>
          <li>
            <span className="text-yellow-400 font-semibold">Optimize</span> applications performance, size and
            scalability.
          </li>
          <li>
            Development and <span className="text-yellow-400 font-semibold">maintenance</span> of web stores in Shopify
            and <span className="text-yellow-400 font-semibold">Hydrogen</span>.
          </li>
          <li>Develop administration web apps (CMS, dashboards, etc.) tailored to business needs.</li>
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
