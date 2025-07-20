import React from "react";

export default function Prueba() {
  return (
    <div className="flex max-w-xl bg-[#1e1e2f] rounded-2xl shadow-md p-4 text-white">
      {/* Vista previa */}
      <a
        href="https://cloudbox-m.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="project-preview"
        className="block rounded-xl overflow-hidden"
      >
        <div className="w-[200px] border">
          <img
            src="/fws/1.webp"
            alt="project-preview"
            loading="lazy"
            className="w-fit object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </a>

      {/* Descripción */}
      <div className="mt-4 space-y-3">
        <span className="block text-xl font-semibold text-yellow-300">Cloud Box</span>
        <p className="text-sm text-gray-300">
          Este es un servicio de almacenamiento en la nube que permite a los usuarios cargar y descargar archivos. Aquí
          también puedes crear carpetas y subcarpetas para organizar tus archivos.
        </p>

        {/* Tecnologías */}
        <div className="flex gap-3 mt-2 flex-wrap">
          <img src="/js.png" alt="Angular" loading="lazy" className="w-8 h-8 object-contain" />
          <img src="/react.png" alt="Node.js" loading="lazy" className="w-8 h-8 object-contain" />
          <img src="/tailwind.png" alt="MongoDB" loading="lazy" className="w-8 h-8 object-contain" />
          <img src="/astro.png" alt="Docker" loading="lazy" className="w-8 h-8 object-contain" />
        </div>

        {/* Enlaces */}
        <div className="flex gap-4 mt-3">
          <a
            href="https://github.com/marcode24/cloudbox-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
          >
            <span>Código</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 3 12c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V22" />
            </svg>
          </a>
          <a
            href="https://cloudbox-m.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition"
          >
            <span>Demo</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
              <path d="M11 13l9-9" />
              <path d="M15 4h5v5" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
