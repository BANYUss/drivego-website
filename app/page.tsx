"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Repeat, 
  MapPinCheck, 
  PlaneLanding, 
  Palmtree, 
  KeyRound,
  Eye,
  UserCheck,
  Star,
  User
} from "lucide-react";

// ================= DATA WILAYAH / LOKASI =================
const locations = [
  { name: "Jabodetabek", image: "/loc-jabodetabek.jpg" },
  { name: "Bali", image: "/loc-bali.jpg" },
  { name: "Sumatra", image: "/loc-sumatra.jpg" },
  { name: "Jawa Barat", image: "/loc-jabar.jpg" },
  { name: "Jawa Tengah & Timur", image: "/loc-jateng.jpg" },
];

// ================= DATA 4 MOBIL UNTUK BERANDA =================
const featuredCars = [
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

const heroImages = [
  "/slide1.jpg",
  "/slide2.jpg",
  "/slide3.jpg",
];

const services = [
  { title: "Round Trip", icon: Repeat },
  { title: "Drop Off", icon: MapPinCheck },
  { title: "Antar-Jemput Bandara", icon: PlaneLanding },
  { title: "Vacation", icon: Palmtree },
  { title: "Lepas Kunci", icon: KeyRound },
];

// ================= DATA MENGAPA DRIVEGO =================
const whyDriveGoFeatures = [
  {
    title: "Visi",
    desc: "Menjadi perusahaan penyedia transportasi terdepan yang menjadi andalan dan dipercaya di Indonesia.",
    icon: Eye,
  },
  {
    title: "Misi",
    desc: "Menjadikan kepuasan & kenyamanan setiap customer sebagai prioritas utama, dengan menyediakan solusi terbaik dalam bertransportasi.",
    icon: MapPinCheck,
  },
  {
    title: "Profesional",
    desc: "Dengan tim yang ramah dan profesional, sehingga memberikan kenyamanan untuk customer.",
    icon: UserCheck,
  },
  {
    title: "Terjangkau",
    desc: "Harga yang kami tawarkan sangat terjangkau untuk setiap penyewaannya.",
    icon: Repeat,
  },
  {
    title: "Responsif",
    desc: "Kami siap memberikan layanan terbaik setiap hari selama 24 jam.",
    icon: PlaneLanding,
  },
];

// ================= DATA KATEGORI LAYANAN =================
const serviceCategories = [
  {
    title: "Wisata",
    desc: "Menemani perjalanan wisata keluarga besar dengan berbagai jenis armada kami.",
    image: "/kat-wisata.jpg",
  },
  {
    title: "Event Car",
    desc: "Kami menyediakan mobil untuk kebutuhan acara event dan road show.",
    image: "/kat-event.jpg",
  },
  {
    title: "Family Car",
    desc: "Nikmati kebersamaan perjalanan wisata dengan keluarga besar anda menggunakan berbagai jenis mobil.",
    image: "/kat-family.jpg",
  },
  {
    title: "City Car",
    desc: "Kami menyediakan kendaraan sesuai dengan kondisi lalu lintas kota sehingga perjalanan semakin nyaman namun tetap hemat.",
    image: "/kat-city.jpg",
  },
  {
    title: "Premium Car",
    desc: "Nikmati pengalaman eksklusif dalam dan luar kota dengan mobil premium kami, dijamin nyaman.",
    image: "/kat-premium.jpg",
  },
];

// ================= DATA KATA PENGGUNA (TESTIMONI) =================
const testimonials = [
  {
    name: "Bapak Anif",
    review: "Terima Kasih mbak Event PMWS Toyota berjalan lancar, udah ada Bookingan buat next Event, mintanya dengan DriveGo lagi.",
  },
  {
    name: "Ibu Kayla",
    review: "Terima Kasih DriveGo sudah mengantarkan kami ibu-ibu Pinky ke Puncak, Drivernya betul-betul Sabar, Sukses terus ya DriveGo Indonesia.",
  },
  {
    name: "Kak Naida",
    review: "Suka banget dengan DriveGo Indonesia, Next kalau ke Jakarta lagi kita pasti pakai DriveGo.",
  },
  {
    name: "Bapak Budi",
    review: "Mobilnya bersih dan wangi, supirnya juga sangat tepat waktu. Sangat merekomendasikan DriveGo untuk liburan keluarga.",
  },
  {
    name: "Kak Siti",
    review: "Proses sewa lepas kunci sangat mudah dan tidak ribet. Kondisi armada sangat prima. Terima kasih DriveGo!",
  }
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollSlider = (direction: 'left' | 'right', sliderId: string) => {
    const container = document.getElementById(sliderId);
    if (container) {
      const scrollAmount = 320;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-black">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[105vh] md:min-h-[112vh] w-full bg-black text-white flex flex-col justify-end md:justify-start pb-24 md:pb-24">
        <div className="absolute top-0 right-0 w-full h-[55vh] md:h-full md:w-[75%] z-0">
          {heroImages.map((src, index) => (
            <img key={index} src={src} alt={`DriveGo Slide ${index + 1}`} className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`} />
          ))}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent md:hidden z-10" />
          <div className="hidden md:block absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
        </div>

        <div className="relative z-20 flex flex-col items-center md:items-start text-center md:text-left px-6 sm:px-8 md:px-16 pt-[48vh] md:pt-36 max-w-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-snug mb-3 md:mb-4">
            Mau Jalan-Jalan atau Urusan Bisnis? <br />
            <span className="text-white"><span className="text-lime-400">DriveGo</span>in Aja!</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-lg text-gray-200 font-normal mb-6 md:mb-8 leading-relaxed max-w-md">
            Solusi Rental Mobil Cepat, Terpercaya, dan Siap Menemani Setiap Perjalananmu.
          </p>
          <div className="w-full sm:w-auto mb-8 md:mb-0">
            <a href="https://wa.me/6287822110310" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-white text-black hover:bg-green-700 hover:text-white font-bold px-7 py-3 rounded-full shadow-lg transition-all duration-300 text-sm md:text-base border-[3px] border-green-600 text-center">
              Hubungi Kami: 087822110310
            </a>
          </div>
        </div>

        {/* Ikon Social Media */}
        <div className="relative md:absolute md:bottom-4 md:left-16 z-30 flex items-center justify-center md:justify-start gap-3">
          <a href="#" aria-label="Instagram" className="w-11 h-11 bg-white text-black hover:bg-green-600 hover:text-white rounded-lg flex items-center justify-center shadow-md transition-all duration-200 hover:-translate-y-0.5"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a>
          <a href="#" aria-label="TikTok" className="w-11 h-11 bg-white text-black hover:bg-green-600 hover:text-white rounded-lg flex items-center justify-center shadow-md transition-all duration-200 hover:-translate-y-0.5"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg></a>
          <a href="#" aria-label="Facebook" className="w-11 h-11 bg-white text-black hover:bg-green-600 hover:text-white rounded-lg flex items-center justify-center shadow-md transition-all duration-200 hover:-translate-y-0.5"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg></a>
        </div>
      </section>

      {/* ================= FLOATING SERVICE BAR ================= */}
      <section className="relative z-30 -mt-14 md:-mt-16 px-4 sm:px-8 max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-gray-100 p-6 md:py-7 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-3 items-start justify-items-center text-center">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className={`flex flex-col items-center group cursor-pointer ${index === 4 ? "col-span-2 sm:col-span-1" : ""}`}>
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-green-50 group-hover:bg-green-600 flex items-center justify-center transition-all duration-300 mb-2.5 shadow-sm">
                    <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-green-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-bold text-gray-900 group-hover:text-green-700 transition-colors leading-snug max-w-[110px]">
                    {service.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= DAFTAR MOBIL (4 TERLARIS) ================= */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <div className="w-16 md:w-20 h-[3px] bg-green-600 mx-auto mb-5 rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Harga Sewa Rental Mobil
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium mb-4">
            Dalam & Luar Kota
          </p>
          <p className="text-[13px] md:text-sm text-gray-500 max-w-2xl mx-auto px-4">
            Kami menyediakan beberapa pilihan mobil untuk kebutuhan para customer DriveGo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {featuredCars.map((car) => (
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

        <Link 
          href="/daftar-mobil" 
          className="inline-flex items-center justify-center px-10 py-3.5 border-2 border-black text-black font-extrabold text-sm md:text-base rounded-full hover:bg-black hover:text-white transition-all duration-300"
        >
          Lihat Semua Mobil
        </Link>
      </section>

      {/* ================= SECTION CAKUPAN WILAYAH (TANPA KOTAK) ================= */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-4">
        <div className="mb-10 md:mb-14">
          <div className="w-16 md:w-20 h-[3px] bg-green-600 mx-auto mb-5 rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Butuh Sewa Rental Mobil di Kota mu?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium">
            Kami Ada Di Beberapa Tempat
          </p>
        </div>

        <div className="relative w-full overflow-x-auto pb-6 pt-2 no-scrollbar scroll-smooth">
          <div className="flex items-center gap-6 md:gap-8 px-2 min-w-max md:min-w-0 md:grid md:grid-cols-3 lg:grid-cols-5 justify-center">
            {locations.map((loc, index) => (
              <div 
                key={index} 
                className="group relative w-[280px] sm:w-[320px] md:w-full h-[200px] sm:h-[220px] rounded-2xl overflow-hidden flex-shrink-0 transition-transform duration-300 hover:-translate-y-1.5 cursor-pointer"
              >
                <img 
                  src={loc.image} 
                  alt={loc.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 p-5 flex flex-col justify-between text-left pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-sm self-start px-3 py-1 rounded-lg shadow-sm">
                    <span className="text-[11px] font-extrabold text-black tracking-wider uppercase">
                      Drive<span className="text-green-600">Go</span>
                    </span>
                  </div>
                  <div className="text-white">
                    <p className="text-xs text-gray-300 font-medium">DriveGo Rental</p>
                    <h3 className="text-lg font-extrabold tracking-wide">{loc.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION MENGAPA DRIVEGO & SLIDER ================= */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Teks & Foto */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16 mb-20 px-2 md:px-8">
          <div className="w-full md:w-[55%] text-left">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              Mengapa <br className="hidden md:block"/> DriveGo?
            </h2>
            <div className="space-y-4 max-w-[480px]">
              <p className="text-[15px] text-gray-600 leading-relaxed">
                <span className="font-extrabold text-black">DriveGo Indonesia</span> menawarkan solusi transportasi rental mobil yang aman, nyaman, dan terpercaya dengan pilihan armada yang selalu prima. Harga kompetitif kami berikan tanpa mengurangi kualitas pelayanan yang Anda dapatkan.
              </p>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                Kami sangat mengedepankan keramahan dan kejujuran kepada setiap pelanggan. Didukung oleh driver profesional dan berpengalaman, kami memastikan setiap tahap layanan berjalan lancar, karena setiap perjalanan memiliki makna tersendiri bagi Anda.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-[45%] flex justify-end">
            <div className="w-full max-w-[480px] rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
              <img src="/tentang-kami.jpg" alt="Mengapa DriveGo" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>

        {/* Slider Visi, Misi & Keunggulan */}
        <div className="relative pb-10">
          <button 
            onClick={() => scrollSlider('left', 'why-slider')}
            aria-label="Scroll Left"
            className="hidden md:flex absolute -left-6 top-[35%] -translate-y-1/2 z-20 w-12 h-12 bg-white text-gray-400 hover:text-green-600 rounded-full items-center justify-center shadow-lg border border-gray-100 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={() => scrollSlider('right', 'why-slider')}
            aria-label="Scroll Right"
            className="hidden md:flex absolute -right-6 top-[35%] -translate-y-1/2 z-20 w-12 h-12 bg-white text-gray-400 hover:text-green-600 rounded-full items-center justify-center shadow-lg border border-gray-100 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </button>

          <div 
            id="why-slider"
            className="flex items-start gap-4 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth pt-4 px-2"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {whyDriveGoFeatures.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={index}
                  className="min-w-[240px] max-w-[260px] flex flex-col items-center text-center flex-shrink-0"
                >
                  <div className="text-green-600 mb-5 transition-transform hover:scale-110 duration-300">
                    <IconComp className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium px-2">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center gap-2 mt-8">
            <span className="w-2 h-2 rounded-full bg-green-600"></span>
            <span className="w-2 h-2 rounded-full bg-gray-200"></span>
            <span className="w-2 h-2 rounded-full bg-gray-200"></span>
            <span className="w-2 h-2 rounded-full bg-gray-200"></span>
            <span className="w-2 h-2 rounded-full bg-gray-200"></span>
          </div>
        </div>
      </section>

      {/* ================= SECTION KATEGORI LAYANAN LAINNYA ================= */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="mb-12 md:mb-16">
          <div className="w-16 md:w-20 h-[3px] bg-green-600 mx-auto mb-5 rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Kategori Layanan Lainnya
          </h2>
          <p className="text-[13px] md:text-sm text-gray-500 max-w-2xl mx-auto px-4">
            Kami menyediakan beberapa pilihan mobil untuk kebutuhan para customer DriveGo.
          </p>
        </div>

        <div className="relative pb-10">
          <button 
            onClick={() => scrollSlider('left', 'category-slider')}
            aria-label="Scroll Left"
            className="hidden md:flex absolute -left-6 top-[40%] -translate-y-1/2 z-20 w-12 h-12 bg-white text-gray-400 hover:text-green-600 rounded-full items-center justify-center shadow-lg border border-gray-100 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          </button>

          <button 
            onClick={() => scrollSlider('right', 'category-slider')}
            aria-label="Scroll Right"
            className="hidden md:flex absolute -right-6 top-[40%] -translate-y-1/2 z-20 w-12 h-12 bg-white text-gray-400 hover:text-green-600 rounded-full items-center justify-center shadow-lg border border-gray-100 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </button>

          <div 
            id="category-slider"
            className="flex items-stretch gap-6 overflow-x-auto scrollbar-hide scroll-smooth pt-4 px-2"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {serviceCategories.map((cat, index) => (
              <Link 
                href="/daftar-mobil" 
                key={index}
                className="min-w-[260px] max-w-[280px] bg-white rounded-2xl border-[2.5px] border-green-600 p-4 md:p-5 flex flex-col items-center text-center flex-shrink-0 hover:bg-green-50 transition-colors duration-300"
              >
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-32 md:h-36 object-cover rounded-xl mb-5 shadow-sm" 
                />
                <h3 className="text-[17px] font-extrabold text-gray-900 mb-2">{cat.title}</h3>
                <p className="text-[13px] text-gray-600 leading-relaxed font-medium">
                  {cat.desc}
                </p>
              </Link>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center gap-2 mt-8">
            <span className="w-2 h-2 rounded-full bg-green-600"></span>
            <span className="w-2 h-2 rounded-full bg-gray-200"></span>
            <span className="w-2 h-2 rounded-full bg-gray-200"></span>
            <span className="w-2 h-2 rounded-full bg-gray-200"></span>
            <span className="w-2 h-2 rounded-full bg-gray-200"></span>
          </div>
        </div>
      </section>

      {/* ================= SECTION KATA PENGGUNA (TESTIMONI) ================= */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center bg-[#f8f9fa] rounded-3xl mb-12 border border-gray-100">
        <div className="mb-12 md:mb-16">
          <div className="w-16 md:w-20 h-[3px] bg-green-600 mx-auto mb-5 rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Kata Pengguna DriveGo
          </h2>
          <p className="text-[13px] md:text-sm text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed font-medium">
            Kami selalu memberikan pelayanan terbaik, sehingga Customer selalu nyaman menggunakan jasa Kami. 
            Beberapa contoh feedback yang sangat positif dari Customer kita :
          </p>
        </div>

        <div className="relative pb-10">
          <button 
            onClick={() => scrollSlider('left', 'testi-slider')}
            aria-label="Scroll Left"
            className="hidden md:flex absolute -left-5 top-[40%] -translate-y-1/2 z-20 w-12 h-12 bg-white text-gray-500 hover:text-green-600 rounded-full items-center justify-center shadow-md border border-gray-200 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          </button>

          <button 
            onClick={() => scrollSlider('right', 'testi-slider')}
            aria-label="Scroll Right"
            className="hidden md:flex absolute -right-5 top-[40%] -translate-y-1/2 z-20 w-12 h-12 bg-white text-gray-500 hover:text-green-600 rounded-full items-center justify-center shadow-md border border-gray-200 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </button>

          <div 
            id="testi-slider"
            className="flex items-stretch gap-6 overflow-x-auto scrollbar-hide scroll-smooth pt-4 px-2"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {testimonials.map((item, index) => (
              <div 
                key={index}
                className="min-w-[300px] max-w-[320px] bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col text-left flex-shrink-0"
              >
                <p className="text-[14px] text-gray-700 leading-relaxed mb-8 flex-1 font-medium">
                  "{item.review}"
                </p>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-50">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 shrink-0">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex gap-1 mb-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-[14px] h-[14px] fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="font-extrabold text-gray-900 text-[15px]">{item.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION (GAMBAR MOBIL) ================= */}
      <section className="px-6 sm:px-8 md:px-16 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="/mobil-cta.png" 
              alt="Sewa Mobil DriveGo" 
              className="w-full h-auto max-w-[320px] sm:max-w-[400px] md:max-w-[500px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
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