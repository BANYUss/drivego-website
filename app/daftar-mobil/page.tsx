"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";

// Data Daftar Seluruh Mobil
const allCars = [
  {
    name: "Honda Brio",
    slug: "honda-brio",
    image: "/brio.png",
    price1: "Rp 350.000 - Rp 600.000",
    time1: "(12 Jam / Dalam Kota)",
    price2: "Rp 600.000 - Rp 700.000",
    time2: "(Harian + Supir)",
    price3: "Rp 7.000.000",
    time3: "(Monthly)",
  },
  {
    name: "Daihatsu Ayla",
    slug: "daihatsu-ayla",
    image: "/ayla.png",
    price1: "Rp 350.000 - Rp 500.000",
    time1: "(12 Jam / Dalam Kota)",
    price2: "Rp 600.000 - Rp 700.000",
    time2: "(Harian + Supir)",
    price3: "Rp 7.000.000",
    time3: "(Monthly)",
  },
  {
    name: "Toyota Alphard",
    slug: "toyota-alphard",
    image: "/alphard.png",
    price1: "Rp 2.700.000 - Rp 2.800.000",
    time1: "(12 Jam / Dalam Kota)",
    price2: "Rp 2.900.000 - 3.000.000",
    time2: "(Harian + Supir)",
    price3: "Rp 25.000.000",
    time3: "(Monthly)",
  },
  {
    name: "Toyota Avanza",
    slug: "toyota-avanza",
    image: "/avanza.png",
    price1: "Rp 350.000 - Rp 500.000",
    time1: "(12 Jam / Dalam Kota)",
    price2: "Rp 600.000 - Rp 700.000",
    time2: "(Harian + Supir)",
    price3: "Rp 7.000.000",
    time3: "(Monthly)",
  },
];

export default function DaftarMobil() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gray-50 text-black overflow-x-hidden">

      {/* ================= HERO BANNER ================= */}
      <section className="relative min-h-[100vh] w-full bg-black text-white flex flex-col justify-end md:justify-center pb-36 md:pb-24 pt-40 px-6 sm:px-8 md:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/banner-mobil.jpg" alt="Sewa Rental Mobil DriveGo" className="w-full h-full object-cover object-center md:object-right opacity-85" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent md:bg-gradient-to-r md:from-black md:via-black/80 md:to-transparent" />
        </div>

        {/* Teks & Tombol Center di HP */}
        <div className="relative z-10 max-w-xl text-center md:text-left mt-auto md:mt-0 mx-auto md:mx-0 flex flex-col items-center md:items-start">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-snug mb-4">
            Sewa Rental Mobil? <br />
            <span className="text-white">Ya Di <span className="text-lime-400">DriveGo</span> Aja!</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 font-normal mb-8 leading-relaxed max-w-md">
            Berbagai Pilihan Mobil Untuk Kebutuhanmu
          </p>
          <div>
            <a href="https://wa.me/6287822110310" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-green-700 hover:text-white font-bold px-7 py-3.5 md:px-8 md:py-4 rounded-full shadow-lg transition-all duration-300 text-[13px] md:text-base border-[3px] border-green-600">
              Hubungi Kami: 087822110310
            </a>
          </div>

          {/* Ikon Social Media Center di HP */}
          <div className="flex items-center justify-center md:justify-start gap-3 mt-8 md:mt-12 w-full">
            <a href="#" aria-label="Instagram" className="w-10 h-10 bg-white text-black hover:bg-green-600 hover:text-white rounded-lg flex items-center justify-center shadow-md transition-all duration-200"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a>
            <a href="#" aria-label="TikTok" className="w-10 h-10 bg-white text-black hover:bg-green-600 hover:text-white rounded-lg flex items-center justify-center shadow-md transition-all duration-200"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg></a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 bg-white text-black hover:bg-green-600 hover:text-white rounded-lg flex items-center justify-center shadow-md transition-all duration-200"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg></a>
          </div>
        </div>
      </section>

      {/* ================= KONTEN KATALOG MOBIL ================= */}
      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          {/* Garis Aksen Tengah (Hijau DriveGo) */}
          <div className="w-16 md:w-20 h-[3px] bg-green-600 mx-auto mb-5 rounded-full"></div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Harga Sewa Rental Mobil
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium mb-4">
            Dalam & Luar Kota
          </p>
          <p className="text-[13px] md:text-sm text-gray-500 max-w-2xl mx-auto px-4">
            Temukan kendaraan yang paling nyaman dan sesuai dengan kebutuhan mobilitas harian maupun bisnis Anda bersama DriveGo.
          </p>
        </div>

        {/* Grid Katalog Mobil */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {allCars.map((car) => (
            <div key={car.slug} className="bg-white rounded-[1.25rem] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100/80 p-5 flex flex-col items-center hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300">
              
              <Link href={`/car-details/${car.slug}`} className="w-full h-32 md:h-36 relative mb-4 group cursor-pointer block">
                <img src={car.image} alt={car.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
              </Link>
              
              <div className="w-full bg-green-700 text-white font-extrabold py-2 rounded-full text-sm mb-5 shadow-sm">
                {car.name}
              </div>

              <div className="w-full text-center space-y-3.5 mb-6 flex-1">
                <div className="border-b border-gray-100 pb-2.5">
                  <p className="text-[13.5px] font-extrabold text-gray-900 leading-tight mb-0.5">{car.price1}</p>
                  <p className="text-[11px] text-gray-500 font-medium">{car.time1}</p>
                </div>
                <div className="border-b border-gray-100 pb-2.5">
                  <p className="text-[13.5px] font-extrabold text-gray-900 leading-tight mb-0.5">{car.price2}</p>
                  <p className="text-[11px] text-gray-500 font-medium">{car.time2}</p>
                </div>
                <div className="border-b border-gray-100 pb-2.5">
                  <p className="text-[13.5px] font-extrabold text-gray-900 leading-tight mb-0.5">{car.price3}</p>
                  <p className="text-[11px] text-gray-500 font-medium">{car.time3}</p>
                </div>
              </div>

              <div className="flex items-center justify-between w-full gap-2">
                <a 
                  href={`https://wa.me/6287822110310?text=Halo,%20saya%20tertarik%20menyewa%20${car.name}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-between px-3 py-2 border-[1.5px] border-green-600 rounded-xl hover:bg-green-50 transition-colors group"
                >
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-bold text-gray-800 leading-none mb-1">Pesan</span>
                    <span className="text-[10px] font-bold text-gray-800 leading-none">sekarang</span>
                  </div>
                  <svg className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.126.556 4.122 1.534 5.855l-1.534 5.605 5.736-1.505c1.691.922 3.628 1.445 5.688 1.445 6.627 0 12-5.373 12-12s-5.373-12-11.424-12z" /></svg>
                </a>

                <Link 
                  href={`/car-details/${car.slug}`}
                  className="flex-1 flex items-center justify-between px-3 py-2 border-[1.5px] border-black rounded-xl hover:bg-gray-100 transition-colors group"
                >
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-bold text-gray-800 leading-none mb-1">Car</span>
                    <span className="text-[10px] font-bold text-gray-800 leading-none">Details</span>
                  </div>
                  <Eye className="w-5 h-5 text-black group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </main>

      {/* ================= CALL TO ACTION (GAMBAR MOBIL) ================= */}
      <section className="px-6 sm:px-8 md:px-16 pb-24 md:pb-32 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/mobil-cta.png" alt="Sewa Mobil DriveGo" className="w-full h-auto max-w-[320px] sm:max-w-[400px] md:max-w-[500px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-[2.25rem] font-extrabold text-black mb-6 md:mb-8 leading-snug md:leading-tight max-w-lg">
              Bersiaplah untuk pengalaman sewa mobil terbaik di kota Anda!
            </h2>
            <a href="https://wa.me/6287822110310" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#333333] hover:bg-green-600 text-white font-bold px-7 py-3 md:px-8 md:py-4 rounded-full shadow-lg transition-all duration-300 text-sm md:text-base">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.126.556 4.122 1.534 5.855l-1.534 5.605 5.736-1.505c1.691.922 3.628 1.445 5.688 1.445 6.627 0 12-5.373 12-12s-5.373-12-11.424-12z" /></svg>
              Hubungi Kami: 087822110310
            </a>
          </div>
        </div>
      </section>

      {/* ================= TOMBOL WHATSAPP MENGAMBANG ================= */}
      <a
        href="https://wa.me/6287822110310"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(22,163,74,0.5)] hover:scale-110 transition-all duration-300"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.126.556 4.122 1.534 5.855l-1.534 5.605 5.736-1.505c1.691.922 3.628 1.445 5.688 1.445 6.627 0 12-5.373 12-12s-5.373-12-11.424-12z" /></svg>
      </a>
    </div>
  );
}