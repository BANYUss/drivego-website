"use client";

import { useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import { MapPin, Phone, Mail, Clock, ChevronRight, MessageCircle } from "lucide-react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Definisikan daftar menu
const menuItems = [
  { name: "Beranda", path: "/" },
  { name: "Tentang Kami", path: "/tentang-kami" },
  { name: "Layanan", path: "/layanan" },
  { name: "Daftar Mobil & Harga Sewa", path: "/daftar-mobil" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blog", path: "/blog" },
];

// ================= KOMPONEN NAVBAR =================
function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-4 sm:px-8 md:px-16 bg-gradient-to-b from-white/90 via-white/70 to-white/30 backdrop-blur-[2px]">
      <div className="flex items-center h-full">
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="DriveGo Logo" 
            width={240} 
            height={80} 
            className="h-12 md:h-14 w-auto object-contain scale-125 md:scale-150 origin-left pointer-events-none brightness-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]" 
            priority 
          />
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-[15px] font-semibold h-full">
        {menuItems.map((menu) => {
          const isActive = pathname === menu.path;
          return (
            <Link 
              key={menu.path} 
              href={menu.path} 
              className={`h-full flex items-center px-1 transition-all duration-200 border-b-[3px] hover:text-green-700 hover:border-green-600 ${
                isActive ? "text-green-700 border-green-600" : "text-black border-transparent"
              }`}
            >
              {menu.name}
            </Link>
          );
        })}
      </nav>

      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        className="md:hidden p-2 text-black hover:text-green-700 transition-colors focus:outline-none" 
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
        )}
      </button>

      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200/50 md:hidden flex flex-col px-6 py-4">
          {menuItems.map((menu) => {
            const isActive = pathname === menu.path;
            return (
              <Link 
                key={menu.path} 
                href={menu.path} 
                onClick={() => setIsMobileMenuOpen(false)} 
                className={`font-semibold text-base py-2 border-l-4 pl-3 transition-all mb-2 ${
                  isActive ? "text-green-700 border-green-600 bg-green-50/50 rounded-r" : "text-black border-transparent hover:text-green-700"
                }`}
              >
                {menu.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}

// ================= KOMPONEN FOOTER =================
function Footer() {
  return (
    <footer className="bg-green-800 border-t border-green-900 pt-16 pb-8 mt-auto text-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Kolom 1: Brand & Sosial Media */}
          <div className="flex flex-col">
            <Image 
              src="/logo.png" 
              alt="DriveGo Logo" 
              width={180} 
              height={60} 
              className="h-24 w-auto object-contain object-left mb-6 brightness-0 invert" 
            />
            <p className="text-sm text-green-100 font-medium leading-relaxed mb-6">
              Solusi Rental Mobil Cepat, Terpercaya, dan Siap Menemani Setiap Perjalananmu. Kami mengedepankan keamanan dan kenyamanan Anda.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-green-800 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-green-800 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Kolom 2: Tautan Cepat */}
          <div>
            <h3 className="text-white font-extrabold text-lg mb-6 relative inline-block">
              Tautan Cepat
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-green-400 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className="text-sm font-medium text-green-50 hover:text-green-300 transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-4 h-4 text-green-400 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Layanan Kami */}
          <div>
            <h3 className="text-white font-extrabold text-lg mb-6 relative inline-block">
              Layanan Kami
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-green-400 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/layanan" className="text-sm font-medium text-green-50 hover:text-green-300 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 text-green-400 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Sewa Mobil Harian
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-sm font-medium text-green-50 hover:text-green-300 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 text-green-400 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Sewa Mobil Bulanan
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-sm font-medium text-green-50 hover:text-green-300 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 text-green-400 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Rental Lepas Kunci
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-sm font-medium text-green-50 hover:text-green-300 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 text-green-400 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Antar Jemput Bandara
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-sm font-medium text-green-50 hover:text-green-300 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 text-green-400 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Layanan Supir Profesional
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Hubungi Kami */}
          <div>
            <h3 className="text-white font-extrabold text-lg mb-6 relative inline-block">
              Hubungi Kami
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-green-400 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-green-50 leading-relaxed">
                  Jl. Raya Kalimalang No. 88, East Jakarta, Jakarta Raya, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400 shrink-0" />
                <span className="text-sm font-medium text-green-50">
                  0878-2211-0310
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-400 shrink-0" />
                <span className="text-sm font-medium text-green-50">
                  halo@drivego.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-green-400 shrink-0" />
                <span className="text-sm font-medium text-green-50">
                  Layanan 24 Jam
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright (Tahun statis 2026 untuk menghindari error prerender) */}
        <div className="border-t border-green-700/50 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-semibold text-green-200">
          <p>
            &copy; 2026 <span className="text-white">BANYU</span>. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
            <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ================= LAYOUT UTAMA =================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} min-h-screen flex flex-col relative`}>
        
        {/* Navbar Global */}
        <Suspense fallback={null}>
          <NavigationBar />
        </Suspense>
        
        {/* Konten Utama Halaman */}
        <div className="flex-grow">
          {children}
        </div>

        {/* Footer Global */}
        <Footer />

        {/* ================= TOMBOL WHATSAPP MENGAPUNG GLOBAL ================= */}
        <a
          href="https://wa.me/6287822110310"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat WhatsApp"
          className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(34,197,94,0.5)] hover:scale-110 transition-all duration-300"
        >
          <MessageCircle className="w-7 h-7 fill-current" />
        </a>
        
      </body>
    </html>
  );
}