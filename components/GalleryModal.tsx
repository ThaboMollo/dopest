"use client";

import { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { allPortfolioImages } from "@/content/site";

interface GalleryModalProps {
  open: boolean;
  onClose: () => void;
  onImageClick: (index: number) => void;
}

const landscapeImages = allPortfolioImages.slice(0, 3);
const portraitImages = allPortfolioImages.slice(3, 6);
const extraImages = allPortfolioImages.slice(6, 9);

export function GalleryModal({
  open,
  onClose,
  onImageClick,
}: GalleryModalProps) {
  const [mounted, setMounted] = useState(false);
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, handleKeyDown]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex flex-col bg-black"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 lg:px-10">
            <span className="font-caption text-xs tracking-[4px] uppercase text-white/50">
              Gallery
            </span>
            <button
              onClick={onClose}
              aria-label="Close gallery"
              className="text-white/70 transition-colors hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-5 lg:px-10">
            <div className="flex flex-col gap-5">
              <Row
                images={landscapeImages}
                heightClass="h-48 md:h-56 lg:h-52"
                startIndex={0}
                onImageClick={onImageClick}
              />
              <Row
                images={portraitImages}
                heightClass="h-72 sm:h-80 lg:h-80"
                startIndex={3}
                onImageClick={onImageClick}
              />
              <Row
                images={extraImages}
                heightClass="h-48 md:h-56 lg:h-52"
                startIndex={6}
                onImageClick={onImageClick}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

function Row({
  images,
  heightClass,
  startIndex,
  onImageClick,
}: {
  images: readonly { src: string; alt: string; label: string }[];
  heightClass: string;
  startIndex: number;
  onImageClick: (index: number) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {images.map((img, i) => (
        <button
          key={img.label}
          onClick={() => onImageClick(startIndex + i)}
          className="group flex flex-col gap-2 text-left"
        >
          <div className={`relative w-full overflow-hidden ${heightClass}`}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
          <span className="font-caption text-[11px] tracking-[2px] text-white/50">
            {img.label}
          </span>
        </button>
      ))}
    </div>
  );
}
