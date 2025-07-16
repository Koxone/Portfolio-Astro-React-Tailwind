import React from "react";

function SocialLinks() {
  return (
    <div className="flex justify-center items-center gap-4">
      <a href="https://github.com/Koxone" className="hover:flash">
        <img src="/assets/icons/github.png" alt="GitHub" className="w-9 h-full" />
      </a>
      <a href="https://www.linkedin.com/in/carlos-d-leon/" className="hover:flash">
        <img src="/assets/icons/linkedin.png" alt="LinkedIn" className="w-9 h-full" />
      </a>
      <a href="https://www.instagram.com/carlos.d.leon/" className="hover:flash">
        <img src="/assets/icons/instagram.png" alt="Instagram" className="w-9 h-full" />
      </a>
    </div>
  );
}

export default SocialLinks;
