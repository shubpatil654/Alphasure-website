import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Camera, ChevronLeft, ChevronRight, X, ZoomIn, Sparkles } from 'lucide-react';

// Selected 19 curated photos: 2, 3, 4, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 22, 24, 25
const KEPT_PHOTO_IDS = [2, 3, 4, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 22, 24, 25];
const TOTAL_PHOTOS = KEPT_PHOTO_IDS.length;
const photos = KEPT_PHOTO_IDS.map((photoNum, i) => ({
  id: i + 1,
  originalNumber: photoNum,
  src: `/images/about-gallery/photo-${photoNum}.jpg`,
  alt: `Alphasure Team & Culture Moment ${i + 1}`,
  caption: `Team Moment ${i + 1}`,
}));

export default function AboutGalleryCarousel() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  // Auto-scroll loop using requestAnimationFrame for butter-smooth 60fps performance
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId;
    const speed = 0.85; // Pixels per frame

    const step = () => {
      if (!isPaused && !isDraggingRef.current && activePhotoIndex === null) {
        container.scrollLeft += speed;
        // If reached the duplicate second half, seamlessly reset to start
        const halfScroll = container.scrollWidth / 2;
        if (container.scrollLeft >= halfScroll) {
          container.scrollLeft -= halfScroll;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, activePhotoIndex]);

  // Manual arrow navigation
  const scrollManual = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = 360;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Mouse / Touch drag to scroll
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    startXRef.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftRef.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  // Lightbox keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (activePhotoIndex === null) return;
    if (e.key === 'Escape') setActivePhotoIndex(null);
    if (e.key === 'ArrowRight') {
      setActivePhotoIndex((prev) => (prev + 1) % TOTAL_PHOTOS);
    }
    if (e.key === 'ArrowLeft') {
      setActivePhotoIndex((prev) => (prev - 1 + TOTAL_PHOTOS) % TOTAL_PHOTOS);
    }
  }, [activePhotoIndex]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Duplicate items twice to ensure seamless infinite looping
  const duplicatedPhotos = [...photos, ...photos];

  return (
    <section 
      id="team-gallery" 
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] select-none overflow-hidden"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FA5A16] alpha-eyebrow mb-3 shadow-xs">
              <Camera size={14} className="text-[#FA5A16]" />
              <span className="tracking-wider uppercase font-extrabold text-xs">Life At Alphasure</span>
            </div>

            <h2 className="alpha-h2 font-bold text-[#0B192C] tracking-tight">
              Memories &{' '}
              <span className="relative inline-block text-[#FA5A16]">
                Milestones
                <svg 
                  className="absolute left-0 -bottom-1.5 sm:-bottom-2.5 w-full h-2.5 sm:h-3.5 overflow-visible pointer-events-none" 
                  viewBox="0 0 200 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M 4 16 Q 100 3, 196 16" 
                    stroke="#FA5A16" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                    className="animate-draw-curved-underline" 
                  />
                </svg>
              </span>
            </h2>

            <p className="alpha-body text-slate-600 font-normal leading-relaxed mt-3">
              A glimpse into our vibrant team culture, celebrated milestones, and the passionate people building Alphasure every day.
            </p>
          </div>

          {/* Navigation Controls & Photo Counter */}
          <div className="flex items-center gap-3 shrink-0 self-start sm:self-end">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 shadow-xs">
              {TOTAL_PHOTOS} Photos
            </span>

            <button
              onClick={() => scrollManual('left')}
              aria-label="Scroll gallery left"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-[#FA5A16] hover:bg-orange-50 text-slate-700 hover:text-[#FA5A16] flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => scrollManual('right')}
              aria-label="Scroll gallery right"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-[#FA5A16] hover:bg-orange-50 text-slate-700 hover:text-[#FA5A16] flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>

      {/* ================= INFINITE CAROUSEL TRACK ================= */}
      <div 
        className="relative w-full overflow-hidden py-3"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          handleMouseLeaveOrUp();
        }}
      >
        {/* Soft edge blur / gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 lg:w-36 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 lg:w-36 bg-gradient-to-l from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent z-10 pointer-events-none" />

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          className="flex items-center gap-4 sm:gap-6 overflow-x-hidden cursor-grab active:cursor-grabbing px-4 sm:px-8 select-none no-scrollbar"
          style={{ scrollBehavior: 'auto' }}
        >
          {duplicatedPhotos.map((photo, index) => (
            <div
              key={`${photo.id}-${index}`}
              onClick={() => setActivePhotoIndex(photo.id - 1)}
              className="group relative shrink-0 w-[270px] sm:w-[330px] md:w-[380px] aspect-[3/2] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-slate-200/80 hover:border-[#FA5A16]/50 cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[1.02]"
              />

              {/* Subtle hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 sm:p-5">
                <span className="text-white text-xs sm:text-sm font-semibold tracking-wide drop-shadow-md">
                  Photo #{photo.id}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                  <ZoomIn size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= LIGHTBOX MODAL ================= */}
      {activePhotoIndex !== null && (
        <div 
          onClick={() => setActivePhotoIndex(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          {/* Close button */}
          <button
            onClick={() => setActivePhotoIndex(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer z-50"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActivePhotoIndex((prev) => (prev - 1 + TOTAL_PHOTOS) % TOTAL_PHOTOS);
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#FA5A16] text-white flex items-center justify-center transition-all cursor-pointer z-50 backdrop-blur-md"
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActivePhotoIndex((prev) => (prev + 1) % TOTAL_PHOTOS);
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#FA5A16] text-white flex items-center justify-center transition-all cursor-pointer z-50 backdrop-blur-md"
            aria-label="Next photo"
          >
            <ChevronRight size={24} />
          </button>

          {/* Photo Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[85vh] flex flex-col items-center relative z-40"
          >
            <img
              src={photos[activePhotoIndex].src}
              alt={photos[activePhotoIndex].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            <div className="mt-4 flex items-center gap-3 text-white/80 text-sm font-medium">
              <span>{activePhotoIndex + 1} of {TOTAL_PHOTOS}</span>
              <span>•</span>
              <span className="text-white font-semibold">Alphasure Team & Culture</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
