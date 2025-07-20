import React, { useState, useRef, useEffect } from 'react';

function NewProjectCard({ project, folder, visibleCount }) {
  const {
    projectName,
    description,
    images,
    techIcons,
    allImages,
    links: { github, demo },
  } = project;

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const modalRef = useRef(null);

  const openModal = (index) => {
    if (index >= 0 && index < allImages.length) {
      setCurrentIndex(index);
      setIsOpen(true);
    }
  };

  const closeModal = () => setIsOpen(false);

  const showNext = () =>
    setCurrentIndex((prev) => (prev + 1) % allImages.length);

  const showPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        showNext();
      } else if (e.key === 'ArrowLeft') {
        showPrev();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const visibleImages = images.slice(0, visibleCount); // solo para el grid

  return (
    <>
      <div className="group relative flex max-h-[320px] w-full transform flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl border border-orange-400 bg-white/10 px-4 py-3 text-left text-sm leading-relaxed text-neutral-200 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(251,146,60,0.3)] sm:flex-row sm:items-center sm:gap-10 sm:border-neutral-500 sm:hover:border-orange-400">
        <span className="animate-spark absolute z-20 h-2 w-2 max-w-[50px] rounded-full bg-orange-400 opacity-100 sm:hidden sm:group-hover:block"></span>

        {/* Imágenes del grid */}
        <div className="flex h-full w-full items-center justify-between rounded-2xl bg-gradient-to-b from-[#0a0a1f] via-[#1c1c40] to-[#2a1446] px-2 py-2">
          {visibleImages.map((img, i) => (
            <img
              key={img}
              src={`/${folder}/${img}.webp`}
              alt={`Screenshot ${img}`}
              onClick={() => openModal(i)}
              className="max-h-[240px] w-fit cursor-pointer rounded-xl border border-neutral-500/50 object-contain transition hover:scale-105"
            />
          ))}
        </div>

        {/* Texto y tecnologías */}
        <div className="max-h-[300px] w-[40%] space-y-3 overflow-y-auto">
          <div className="flex flex-col gap-2">
            <span className="font-inter bg-gradient-to-r from-[#F76927] to-[#Fdfa29] bg-clip-text text-left text-xl leading-6 font-semibold whitespace-pre-wrap text-transparent md:text-2xl">
              {projectName}
            </span>
            <p className="text-sm text-gray-300">{description}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {techIcons.map((icon) => (
              <img
                key={icon.alt}
                src={icon.src}
                alt={icon.alt}
                className="h-8 w-8 object-contain"
              />
            ))}
          </div>

          <div className="mt-2 flex gap-4">
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-lg bg-gray-800 px-3 py-1.5 text-sm transition hover:bg-gray-700"
            >
              <span>{github.label}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 3 12c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V22" />
              </svg>
            </a>
            <a
              href={demo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-lg bg-indigo-600 px-3 py-1.5 text-sm transition hover:bg-indigo-500"
            >
              <span>{demo.label}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative max-h-[90vh] max-w-[90vw]" ref={modalRef}>
            <img
              src={allImages[currentIndex]}
              alt={`Screenshot ${currentIndex + 1}`}
              className="max-h-[90vh] max-w-full rounded-lg object-contain"
            />
            {/* Left Chevron */}
            <button
              onClick={showPrev}
              className="absolute top-1/2 left-2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/60 text-2xl text-white hover:bg-black/80"
            >
              <img src="/chevron-left.png" alt="chevron icon" className="w-3" />
            </button>

            {/* Right Chevron */}
            <button
              onClick={showNext}
              className="absolute top-1/2 right-2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/60 text-2xl text-white hover:bg-black/80"
            >
              <img
                src="/chevron-right.png"
                alt="chevron icon"
                className="w-3"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default NewProjectCard;
