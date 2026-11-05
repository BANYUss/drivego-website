"use client";

import { useState } from "react";
import Link from "next/link";

// ================= DATA BLOG =================
// Kita gunakan 12 data agar bisa dibagi menjadi 2 halaman (6 post per halaman)
const blogData = [
  {
    id: 1,
    title: "Tips Bepergian Lancar Bersama Bayi atau Balita",
    slug: "tips-bepergian-lancar-bersama-bayi",
    date: "14 Jul, 2023",
    category: "Tips",
    image: "/blog-1.jpg"
  },
  {
    id: 2,
    title: "Mengapa Innova Reborn Masih Sangat Digemari? Yuk Cek Keunggulannya",
    slug: "mengapa-innova-reborn-masih-digemari",
    date: "15 Jul, 2023",
    category: "Information",
    image: "/blog-2.jpg"
  },
  {
    id: 3,
    title: "Rekomendasi Beberapa Tipe Mobil Sewaan Yang Diminati Keluarga",
    slug: "rekomendasi-tipe-mobil-keluarga",
    date: "16 Jul, 2023",
    category: "Tips",
    image: "/blog-3.jpg"
  },
  {
    id: 4,
    title: "Sewa Hiace, Solusi Tepat Untuk Bepergian Rombongan Bersama Keluarga",
    slug: "sewa-hiace-solusi-rombongan",
    date: "17 Jul, 2023",
    category: "Wisata",
    image: "/blog-4.jpg"
  },
  {
    id: 5,
    title: "Solusi Mobil Operasional Karyawan & Tamu VIP Perusahaan",
    slug: "solusi-mobil-operasional-perusahaan",
    date: "18 Jul, 2023",
    category: "Information",
    image: "/blog-5.jpg"
  },
  {
    id: 6,
    title: "City Tour Semarang: Sewa City Car Jelajah Simpang Lima & Kota Lama",
    slug: "city-tour-semarang",
    date: "19 Jul, 2023",
    category: "Wisata",
    image: "/blog-6.jpg"
  },
  // --- Data untuk Halaman 2 (Menggunakan foto baru blog-7 sampai blog-12) ---
  {
    id: 7,
    title: "Persiapan Penting Sebelum Road Trip Jarak Jauh",
    slug: "persiapan-road-trip",
    date: "20 Jul, 2023",
    category: "Tips",
    image: "/blog-7.jpg"
  },
  {
    id: 8,
    title: "Keuntungan Menyewa Mobil Bulanan Untuk Perusahaan",
    slug: "keuntungan-sewa-bulanan",
    date: "21 Jul, 2023",
    category: "Information",
    image: "/blog-8.jpg"
  },
  {
    id: 9,
    title: "Destinasi Wisata Keluarga Terbaik di Jawa Barat",
    slug: "destinasi-wisata-jabar",
    date: "22 Jul, 2023",
    category: "Wisata",
    image: "/blog-9.jpg"
  },
  {
    id: 10,
    title: "Cara Memilih Mobil Rental Sesuai Kebutuhan Anda",
    slug: "cara-memilih-mobil-rental",
    date: "23 Jul, 2023",
    category: "Tips",
    image: "/blog-10.jpg"
  },
  {
    id: 11,
    title: "Mengenal Fitur Keselamatan Pada Mobil Terbaru",
    slug: "fitur-keselamatan-mobil",
    date: "24 Jul, 2023",
    category: "Information",
    image: "/blog-11.jpg"
  },
  {
    id: 12,
    title: "Kuliner Malam Kota yang Wajib Dikunjungi",
    slug: "kuliner-malam-kota",
    date: "25 Jul, 2023",
    category: "Lainnya",
    image: "/blog-12.jpg"
  }
];

const categories = ["Semua", "Tips", "Wisata", "Information", "Lainnya"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  
  // State untuk Pagination (2 Halaman)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // 1. Filter berdasarkan Kategori & Pencarian
  const filteredBlogs = blogData.filter((blog) => {
    const matchCategory = activeCategory === "Semua" || blog.category === activeCategory;
    const matchSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  // 2. Pagination Logic
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, startIndex + itemsPerPage);

  // Jika filter diubah, kembalikan ke halaman 1
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto min-h-screen">
      
      {/* ================= JUDUL & DESKRIPSI ================= */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-[2.5rem] font-extrabold text-black mb-4">
          Blog
        </h1>
        <p className="text-[13px] md:text-sm text-gray-500 font-medium max-w-lg mx-auto">
          Kumpulan Artikel berisi Tips dan Informasi untuk travelling Anda
        </p>
      </div>

      {/* ================= SEARCH BAR ================= */}
      <div className="max-w-2xl mx-auto mb-8 relative flex gap-2">
        <div className="relative flex-1">
          <input 
            type="text" 
            placeholder="Cari artikel di sini..." 
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-4 pr-10 py-2.5 rounded-md border border-gray-200 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 text-sm transition-all"
          />
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2.5 rounded-md text-sm transition-colors shadow-sm">
          Cari
        </button>
      </div>

      {/* ================= KATEGORI FILTER ================= */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
              activeCategory === cat
                ? "bg-green-600 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ================= GRID ARTIKEL ================= */}
      {currentBlogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {currentBlogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100/80 flex flex-col group hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              
              <Link href={`/blog/${blog.slug}`} className="relative w-full h-48 sm:h-52 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>

              <div className="p-5 flex flex-col flex-1">
                <Link href={`/blog/${blog.slug}`}>
                  <h3 className="text-[16px] font-extrabold text-gray-900 leading-snug mb-5 group-hover:text-green-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                </Link>
                
                <div className="mt-auto flex items-center justify-between pt-2">
                  <Link 
                    href={`/blog/${blog.slug}`}
                    className="text-[12px] font-extrabold text-green-600 hover:text-green-800 transition-colors flex items-center gap-1"
                  >
                    Selengkapnya <span className="text-lg leading-none">&rsaquo;</span>
                  </Link>
                  <span className="text-[11px] text-gray-400 font-medium">
                    {blog.date}
                  </span>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 font-medium">Artikel tidak ditemukan.</p>
        </div>
      )}

      {/* ================= PAGINATION ================= */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded-md flex items-center justify-center text-sm font-bold transition-all ${
                currentPage === page
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-white text-gray-500 hover:bg-gray-100 hover:text-green-600 border border-gray-200"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}

    </main>
  );
}