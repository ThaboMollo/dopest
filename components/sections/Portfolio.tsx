"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioLandscape, portfolioPortrait } from "@/content/site";
import { GalleryModal } from "@/components/GalleryModal";
import { ImageViewer } from "@/components/ImageViewer";

export function Portfolio() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setGalleryOpen(false);
    setViewerIndex(index);
  };

  return (
    <>
      <section id="portfolio" className="overflow-hidden bg-surface pb-15 pt-20">
        <h2 className="text-center font-heading text-[clamp(5rem,18vw,16.25rem)] font-bold leading-none text-fg-primary">
          PORTFOLIO
        </h2>

        <div className="mt-10 flex flex-col gap-5 px-6 sm:px-10 lg:px-15">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {portfolioLandscape.map((img) => (
              <div key={img.label} className="flex flex-col gap-3">
                <div className="group relative h-52 overflow-hidden sm:h-48 md:h-56 lg:h-72">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <span className="font-caption text-[11px] tracking-[2px] text-fg-secondary">
                  {img.label}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {portfolioPortrait.map((img) => (
              <div key={img.label} className="flex flex-col gap-3">
                <div className="group relative h-80 overflow-hidden sm:h-96 lg:h-[34rem]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <span className="font-caption text-[11px] tracking-[2px] text-fg-secondary">
                  {img.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => setGalleryOpen(true)}
            className="font-caption text-[13px] tracking-[2px] text-fg-secondary transition-colors hover:text-fg-primary"
          >
            View All Work &nbsp;&rarr;
          </button>
        </div>
      </section>

      <GalleryModal
        open={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        onImageClick={handleImageClick}
      />

      <ImageViewer
        open={viewerIndex !== null}
        initialIndex={viewerIndex ?? 0}
        onClose={() => setViewerIndex(null)}
      />
    </>
  );
}
