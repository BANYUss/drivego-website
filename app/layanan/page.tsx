"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Eye } from "lucide-react";

// ================= DATA KONTEN LAYANAN =================
const servicesData = [
  {
    id: "family-car",
    tabTitle: "Family Car",
    title: "Family Car",
    image: "/layanan-family.jpg",
    desc1: "Momen perjalanan bersama keluarga besar akan terasa lebih berkesan jika didukung oleh kendaraan yang tangguh, lega, dan dapat diandalkan. Dengan armada MPV keluarga yang luas, seluruh anggota keluarga bisa menikmati perjalanan panjang tanpa merasa sesak atau lelah di jalan.",
    desc2: "DriveGo adalah mitra perjalanan keluarga yang sempurna! Kami menyediakan berbagai pilihan mobil keluarga yang terawat dengan sangat baik, bersih, dan wangi. Didukung oleh pengemudi yang sabar dan berpengalaman, kami menjamin kenyamanan ekstra untuk Anda dan keluarga tercinta.",
    waText: "Halo DriveGo, saya tertarik dengan layanan Family Car."
  },
  {
    id: "city-car",
    tabTitle: "City Car",
    title: "City Car",
    image: "/layanan-city.jpg",
    desc1: "Untuk mobilitas perkotaan yang padat dan dinamis, kendaraan yang lincah dan hemat bahan bakar adalah pilihan paling cerdas. City Car memudahkan Anda menelusuri jalanan kota hingga memarkir kendaraan di ruang yang sempit sekalipun.",
    desc2: "Kami menawarkan deretan City Car terbaru yang selalu dalam kondisi prima. Sangat cocok bagi Anda yang membutuhkan mobilitas cepat, praktis, dan ekonomis untuk urusan bisnis, kuliah, atau sekadar jalan-jalan di dalam kota bersama teman-teman.",
    waText: "Halo DriveGo, saya tertarik dengan layanan sewa City Car."
  },
  {
    id: "wedding-car",
    tabTitle: "Wedding Car",
    title: "Wedding Car",
    image: "/layanan-wedding.jpg",
    desc1: "Momen pernikahan adalah hari yang paling berharga seumur hidup. Maksimalkan kesempurnaan hari bahagia Anda dengan iring-iringan mobil pengantin yang elegan, mewah, dan berkelas untuk menciptakan kesan yang tak terlupakan.",
    desc2: "DriveGo menyediakan layanan Wedding Car premium lengkap dengan dekorasi bunga eksklusif dan supir pribadi yang berpakaian rapi nan profesional. Kami memastikan perjalanan kedua mempelai menuju lokasi acara berjalan lancar, aman, dan penuh gaya.",
    waText: "Halo DriveGo, saya ingin bertanya tentang paket Wedding Car."
  },
  {
    id: "premium-car",
    tabTitle: "Premium Car",
    title: "Premium Car",
    image: "/layanan-premium.jpg",
    desc1: "Tingkatkan standar perjalanan bisnis atau liburan Anda dengan kenyamanan VVIP. Mobil premium tidak hanya menawarkan kemewahan interior dan fitur keselamatan canggih, tetapi juga memberikan prestise dan citra profesional bagi penggunanya.",
    desc2: "Pilihan armada kelas atas kami siap melayani kebutuhan tamu penting, ekspatriat, maupun perjalanan dinas direksi. Layanan ini mengutamakan privasi, kenyamanan absolut, dan standar pelayanan tertinggi dari pengemudi profesional kami.",
    waText: "Halo DriveGo, saya tertarik dengan layanan sewa mobil Premium/VVIP."
  },
  {
    id: "pariwisata",
    tabTitle: "Pariwisata",
    title: "Pariwisata",
    image: "/layanan-pariwisata.jpg",
    desc1: "Merencanakan liburan rombongan bersama rekan kerja, komunitas, atau keluarga besar membutuhkan perencanaan transportasi yang matang. Kendaraan berkapasitas besar sangat krusial agar rombongan tidak terpisah dan suasana kebersamaan tetap terjaga.",
    desc2: "DriveGo menyediakan solusi transportasi pariwisata mulai dari Hiace hingga Elf Long dengan kapasitas yang memadai. Anda cukup duduk santai menikmati pemandangan, sementara tim supir kami yang menguasai rute wisata akan mengantarkan Anda ke berbagai destinasi dengan aman.",
    waText: "Halo DriveGo, saya ingin menyewa mobil untuk kebutuhan Pariwisata rombongan."
  },
  {
    id: "perusahaan",
    tabTitle: "Perusahaan",
    title: "Perusahaan",
    image: "/layanan-perusahaan.jpg",
    desc1: "Efisiensi operasional bisnis sangat bergantung pada kelancaran transportasi karyawan maupun logistik ringan. Memiliki rekanan penyedia transportasi yang terpercaya akan sangat memangkas biaya pemeliharaan aset kendaraan perusahaan.",
    desc2: "Kami hadir dengan paket sewa korporat (perusahaan) berjangka waktu fleksibel, mulai dari harian, bulanan, hingga tahunan. Nikmati kemudahan mobilitas operasional kantor Anda tanpa perlu memusingkan biaya asuransi, pajak, maupun servis rutin kendaraan.",
    waText: "Halo DriveGo, saya ingin berdiskusi mengenai kerjasama sewa mobil untuk operasional Perusahaan."
  },
  {
    id: "event-car",
    tabTitle: "Event Car",
    title: "Event Car",
    image: "/layanan-event.jpg",
    desc1: "Kesuksesan sebuah acara besar seperti konser, konferensi, atau pameran sangat dipengaruhi oleh manajemen logistik dan pergerakan panitia serta artis pendukung. Mobilitas yang terorganisir adalah kunci kelancaran acara.",
    desc2: "DriveGo berpengalaman menjadi mitra transportasi resmi (Official Transport Partner) untuk berbagai acara berskala nasional. Kami menyediakan armada khusus yang siap standby mengatur mobilitas tamu VIP, panitia, hingga kru lapangan selama *event* berlangsung.",
    waText: "Halo DriveGo, saya butuh layanan Event Car untuk acara/kegiatan kami."
  }
];

// ================= DATA 4 MOBIL (DIAMBIL DARI BERANDA) =================
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

export default function Layanan() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State untuk menyimpan ID layanan mana yang sedang diklik/aktif
  const [activeTab, setActiveTab] = useState(servicesData[0].id);

  // Mencari data layanan yang sesuai dengan tab yang sedang aktif
  const activeService = servicesData.find(service => service.id === activeTab) || servicesData[0];

  // Fungsi untuk scroll slider mobil
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
    <div className="min-h-screen w-full bg-gray-50 text-black overflow-x-hidden">

      {/* ================= KONTEN HALAMAN LAYANAN UTAMA ================= */}
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        {/* Judul Halaman */}
        <div className="text-center md:text-left mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            Layanan Terbaik dari Kami Bersama DriveGo
          </h1>
        </div>

        {/* Tab Menu Navigasi Layanan */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3 mb-12">
          {servicesData.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === service.id
                  ? "bg-green-700 text-white shadow-md scale-105"
                  : "bg-gray-200/70 text-gray-600 hover:bg-green-100 hover:text-green-700"
              }`}
            >
              {service.tabTitle}
            </button>
          ))}
        </div>

        {/* Konten Detail Layanan (Gambar & Teks) */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start bg-white rounded-3xl p-6 sm:p-8 lg:p-0 shadow-sm border border-gray-100/50">
          
          {/* Sisi Kiri: Gambar Layanan */}
          <div className="w-full lg:w-1/2 flex justify-center lg:p-6">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100">
              <img 
                src={activeService.image} 
                alt={activeService.title} 
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
          </div>

          {/* Sisi Kanan: Teks & Tombol Pesan */}
          <div className="w-full lg:w-1/2 flex flex-col text-left pt-2 lg:py-6 lg:pr-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
              {activeService.title}
            </h2>
            
            <p className="text-[15px] text-gray-700 leading-relaxed font-medium mb-4">
              {activeService.desc1}
            </p>
            
            <p className="text-[15px] text-gray-700 leading-relaxed font-medium mb-10">
              {activeService.desc2}
            </p>

            <div>
              <a
                href={`https://wa.me/6287822110310?text=${encodeURIComponent(activeService.waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white border-[2px] border-green-600 text-green-700 hover:bg-green-600 hover:text-white font-extrabold px-8 py-3 rounded-full shadow-sm transition-all duration-300 group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform"/>
                Pesan Sekarang
              </a>
            </div>
          </div>
          
        </div>
      </main>

      {/* ================= DAFTAR MOBIL & HARGA SEWA (4 MOBIL) ================= */}
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

        <div className="relative pb-10">
          <button 
            onClick={() => scrollSlider('left', 'car-slider')}
            aria-label="Scroll Left"
            className="hidden lg:flex absolute -left-6 top-[45%] -translate-y-1/2 z-20 w-12 h-12 bg-black text-white hover:bg-green-600 rounded-lg items-center justify-center shadow-lg transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          </button>

          <button 
            onClick={() => scrollSlider('right', 'car-slider')}
            aria-label="Scroll Right"
            className="hidden lg:flex absolute -right-6 top-[45%] -translate-y-1/2 z-20 w-12 h-12 bg-black text-white hover:bg-green-600 rounded-lg items-center justify-center shadow-lg transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </button>

          <div 
            id="car-slider"
            className="flex items-stretch gap-6 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth pt-4 px-2 pb-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-x-visible md:pb-0"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {featuredCars.map((car) => (
              <div key={car.slug} className="min-w-[280px] bg-white rounded-[1.25rem] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100/80 p-5 flex flex-col items-center hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300">
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
        </div>

        <div className="mt-8">
          <Link 
            href="/daftar-mobil" 
            className="inline-flex items-center justify-center bg-green-600 text-white px-10 py-3.5 font-bold text-sm md:text-base rounded-md hover:bg-green-700 transition-all duration-300"
          >
            Lihat Semua Mobil
          </Link>
        </div>
      </section>

      {/* ================= CALL TO ACTION (GAMBAR MOBIL CTA) ================= */}
      <section className="px-6 sm:px-8 md:px-16 pb-16 md:pb-24 max-w-6xl mx-auto mt-8 md:mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end md:-mt-8">
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
              className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-7 py-3 md:px-8 md:py-4 rounded-md shadow-md transition-all duration-300 text-sm md:text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Hubungi Kami : 087822110310
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
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}