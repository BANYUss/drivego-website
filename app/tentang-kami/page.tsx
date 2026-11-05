"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  // Ikon baru untuk bagian Alasan / Fitur
  Search,
  Rocket,
  Users,
  FileCheck,
  Headset,
  HandCoins
} from "lucide-react";

// Data untuk Grid 3 Kolom di bagian bawah
const alasanDriveGo = [
  {
    title: "Visi",
    description: "Menjadi perusahaan penyedia transportasi terdepan yang menjadi andalan dan dipercaya di Indonesia.",
    icon: Search,
  },
  {
    title: "Misi",
    description: "Menjadikan kepuasan & kenyamanan setiap customer sebagai prioritas utama, dengan menyediakan solusi terbaik dalam bertransportasi.",
    icon: Rocket,
  },
  {
    title: "Profesional",
    description: "Dengan tim yang ramah dan profesional, sehingga memberikan kenyamanan untuk customer.",
    icon: Users,
  },
  {
    title: "Legalitas",
    description: "Kami adalah perusahaan berbadan hukum resmi, siap menjamin keamanan perjalanan Anda.",
    icon: FileCheck,
  },
  {
    title: "Responsif",
    description: "Kami siap memberikan layanan terbaik setiap hari selama 24 jam untuk memenuhi kebutuhan Anda.",
    icon: Headset,
  },
  {
    title: "Terjangkau",
    description: "Harga yang kami tawarkan sangat terjangkau dan kompetitif untuk setiap pemesanannya.",
    icon: HandCoins,
  },
];

export default function TentangKami() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gray-50 text-black">

      {/* ================= KONTEN TENTANG KAMI ================= */}
      <main className="pt-24 pb-16 md:pb-28 px-6 sm:px-8 md:px-16 flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap-20 max-w-7xl mx-auto overflow-hidden">
        
        {/* Kolom Kiri: Teks & Tombol */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <h1 className="text-3xl md:text-4xl font-medium text-black mb-5 md:mb-6 leading-tight break-words w-full">
            Mengapa <br />
            <span className="font-extrabold text-5xl md:text-6xl text-black tracking-tight">Drive<span className="text-green-600">Go?</span></span>
          </h1>
          
          <div className="text-[13.5px] sm:text-sm md:text-base text-gray-700 font-medium space-y-4 mb-8 leading-relaxed max-w-lg text-justify">
            <p>
              <strong className="text-black font-bold">DriveGo Indonesia</strong> menawarkan solusi transportasi rental mobil yang aman, nyaman, dan terpercaya dengan pilihan armada yang selalu prima. Harga kompetitif kami berikan tanpa mengurangi kualitas pelayanan yang Anda dapatkan.
            </p>
            <p>
              Kami sangat mengedepankan keramahan dan kejujuran kepada setiap pelanggan. Didukung oleh driver profesional dan berpengalaman, kami memastikan setiap tahap layanan berjalan lancar, karena setiap perjalanan memiliki makna tersendiri bagi Anda.
            </p>
            <p>
              Nikmati perjalanan darat Anda dengan lebih tenang dan berkesan bersama DriveGo.
            </p>
          </div>

          {/* Tombol Hubungi Kami */}
          <div className="w-full flex justify-center md:justify-start mb-8">
            <a
              href="https://wa.me/6287822110310"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-green-700 hover:text-white font-bold px-7 py-3 md:px-8 md:py-3.5 rounded-full shadow-sm transition-all duration-300 text-sm md:text-base border-[2px] border-green-600"
            >
              Hubungi Kami: 087822110310
            </a>
          </div>

          {/* Ikon Social Media */}
          <div className="flex items-center justify-center md:justify-start w-full gap-3">
            <a href="#" aria-label="Instagram" className="w-10 h-10 bg-transparent border-2 border-black text-black hover:bg-green-600 hover:border-green-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
            <a href="#" aria-label="TikTok" className="w-10 h-10 bg-transparent border-2 border-black text-black hover:bg-green-600 hover:border-green-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 bg-transparent border-2 border-black text-black hover:bg-green-600 hover:border-green-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Foto Profil */}
        <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
          <img 
            src="/tentang-kami.jpg" 
            alt="Tentang DriveGo" 
            className="w-full h-auto max-h-[300px] md:max-h-none object-cover rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
          />
        </div>
      </main>

      {/* ================= TEKS SAMBUTAN & ALASAN BAWAH ================= */}
      <section className="px-6 sm:px-8 md:px-16 pb-16 md:pb-24 max-w-7xl mx-auto -mt-4 md:-mt-12">
        <div className="w-full flex flex-col items-center">
          
          {/* Teks Sambutan rata tengah seperti referensi */}
          <p className="text-[13.5px] sm:text-sm md:text-base text-gray-700 font-medium leading-relaxed text-center mb-12 md:mb-16 max-w-5xl">
            Selamat datang di <strong className="text-black font-bold">DriveGo Indonesia</strong> dan tentukan berbagai pilihan kendaraan untuk mobilitas keseharianmu dengan menyewa mobil per jam, harian, mingguan, atau bahkan bulanan, semuanya menjadi mudah dengan <strong className="text-black font-bold">DriveGo</strong>. Beberapa alasan menggunakan jasa Kami :
          </p>

          {/* Grid 3 Kolom untuk Ikon dan Alasan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16 w-full">
            {alasanDriveGo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="mb-4 md:mb-5 text-green-600 transition-transform duration-300 group-hover:-translate-y-1.5">
                    <IconComponent className="w-12 h-12 md:w-14 md:h-14" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-[13.5px] md:text-[15px] text-gray-600 leading-relaxed max-w-[280px]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION (GAMBAR MOBIL) ================= */}
      {/* Mengubah mt-12 md:mt-16 menjadi mt-0 md:-mt-8 agar ditarik naik mendekati ikon */}
      <section className="px-6 sm:px-8 md:px-16 pb-16 md:pb-32 max-w-6xl mx-auto mt-0 md:-mt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          
          {/* Kolom Kiri: Gambar Mobil */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="/mobil-cta.png" 
              alt="Sewa Mobil DriveGo" 
              className="w-full h-auto max-w-[320px] sm:max-w-[400px] md:max-w-[500px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Kolom Kanan: Teks & Tombol */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-[2.25rem] font-extrabold text-black mb-6 md:mb-8 leading-snug md:leading-tight max-w-lg">
              Bersiaplah untuk pengalaman sewa mobil terbaik di kota Anda!
            </h2>
            <a
              href="https://wa.me/6287822110310"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#333333] hover:bg-green-600 text-white font-bold px-7 py-3 md:px-8 md:py-4 rounded-full shadow-lg transition-all duration-300 text-sm md:text-base"
            >
              {/* Ikon WhatsApp Kecil di dalam tombol */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.126.556 4.122 1.534 5.855l-1.534 5.605 5.736-1.505c1.691.922 3.628 1.445 5.688 1.445 6.627 0 12-5.373 12-12s-5.373-12-11.424-12z" />
              </svg>
              Hubungi Kami: 087822110310
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}