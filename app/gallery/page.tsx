"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion"; // <-- Tambahan tipe Variants di sini

// ================= DATA GALERI =================
const galleryData = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  src: `/galeri-${i + 1}.jpg`,
}));

export default function Gallery() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State untuk Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // State untuk Lightbox
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentImages = galleryData.slice(startIndex, startIndex + itemsPerPage);

  // <-- Tambahkan tipe : Variants di sini agar TypeScript tidak merah
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  // <-- Tambahkan tipe : Variants di sini agar TypeScript tidak merah
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden text-black">
      
      {/* ================= BACKGROUND IMAGE BLUR ================= */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/bg-gallery.jpg" 
          alt="Background Gallery" 
          className="w-full h-full object-cover blur-[6px] brightness-[0.85] scale-105" 
        />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
      </div>

      {/* ================= KONTEN GALERI ================= */}
      <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow-md mb-4">
            Galeri
          </h1>
          <p className="text-sm md:text-base text-gray-800 font-semibold max-w-2xl mx-auto drop-shadow-md">
            Berbagai momen pelayanan terbaik dari kami, membuat perjalanan anda semakin nyaman dan berkesan.
          </p>
        </div>

        {/* Box Penampung Foto */}
        <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-xl border border-white/40 p-6 md:p-10">
          
          <div className="flex justify-center items-center gap-4 mb-10">
            <button 
              onClick={() => setCurrentPage(1)}
              className={currentPage === 1 ? "text-lg font-extrabold pb-1 transition-all text-green-700 border-b-[3px] border-green-700" : "text-lg font-extrabold pb-1 transition-all text-gray-500 hover:text-green-600"}
            >
              1
            </button>
            <button 
              onClick={() => setCurrentPage(2)}
              className={currentPage === 2 ? "text-lg font-extrabold pb-1 transition-all text-green-700 border-b-[3px] border-green-700" : "text-lg font-extrabold pb-1 transition-all text-gray-500 hover:text-green-600"}
            >
              2
            </button>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            key={currentPage} 
            className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
          >
            {currentImages.map((img) => (
              <motion.div 
                variants={itemVariants}
                key={img.id} 
                onClick={() => setSelectedImage(img.src)}
                className="break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-white/50 transition-all duration-300 relative group cursor-pointer"
              >
                <img 
                  src={img.src} 
                  alt={`Galeri DriveGo ${img.id}`} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.currentTarget.src = "/banner-mobil.jpg"; }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/80 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100">
                    <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </main>

      {/* ================= LIGHTBOX / MODAL FOTO ================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white bg-black/50 hover:bg-black rounded-full p-2 transition-all z-[101]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8 md:w-10 md:h-10" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
            >
              <img 
                src={selectedImage} 
                alt="Enlarged Gallery" 
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()} 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= TOMBOL WHATSAPP MENGAMBANG ================= */}
      <a
        href="https://wa.me/6287822110310"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(22,163,74,0.5)] hover:scale-110 transition-all duration-300"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}