import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  title?: string;
  aspectRatio?: '16:9' | '4:3' | '3:2' | '1:1';
  className?: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  title = "Gallery",
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Main Feature Image */}
      <div
        onClick={() => setIsLightboxOpen(true)}
        className="relative group h-[380px] sm:h-[480px] md:h-[560px] w-full overflow-hidden rounded-[2px] cursor-pointer bg-palette-ivory_100 border border-border-subtle"
      >
        <img
          src={images[activeIndex]}
          alt={`${title} - view ${activeIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-6">
          <span className="text-white text-body-s tracking-wide font-medium">
            {activeIndex + 1} / {images.length} views
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/20 backdrop-blur-md text-white text-caption uppercase tracking-uppercase font-medium">
            <Maximize2 size={14} /> Fullscreen Lightbox
          </span>
        </div>

        {/* Carousel controls */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-surface-primary/80 backdrop-blur-md border border-border-subtle flex items-center justify-center text-text-primary opacity-0 group-hover:opacity-100 hover:bg-surface-primary transition-all hover:scale-105"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-surface-primary/80 backdrop-blur-md border border-border-subtle flex items-center justify-center text-text-primary opacity-0 group-hover:opacity-100 hover:bg-surface-primary transition-all hover:scale-105"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative h-20 overflow-hidden rounded-[2px] border-2 transition-all cursor-pointer ${
                activeIndex === idx
                  ? 'border-accent-primary ring-2 ring-accent-primary/20 scale-95'
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-6 animate-in fade-in duration-300">
          <div className="w-full flex items-center justify-between text-white">
            <span className="font-display text-heading-s">{title}</span>
            <span className="text-body-s opacity-70">{activeIndex + 1} of {images.length}</span>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
            >
              <X size={24} />
            </button>
          </div>

          <div className="relative max-w-6xl max-h-[78vh] flex items-center justify-center">
            <img
              src={images[activeIndex]}
              alt=""
              className="max-h-[75vh] max-w-full object-contain rounded-[2px] shadow-2xl"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute -left-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute -right-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}
          </div>

          {/* Bottom Thumbnails in Lightbox */}
          <div className="flex gap-2 overflow-x-auto max-w-xl pb-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-14 h-14 rounded overflow-hidden flex-shrink-0 border-2 transition-all ${
                  activeIndex === idx ? 'border-white scale-105' : 'border-transparent opacity-40 hover:opacity-80'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
