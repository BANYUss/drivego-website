import Link from "next/link";
import { notFound } from "next/navigation";
import { Link2, ChevronLeft, ChevronRight } from "lucide-react";

// ================= DATA BLOG (DATABASE LENGKAP 12 ARTIKEL) =================
const blogData = [
  {
    id: 1,
    title: "Tips Bepergian Lancar Bersama Bayi atau Balita",
    slug: "tips-bepergian-lancar-bersama-bayi",
    date: "14 Jul, 2023",
    author: "DriveGo Admin",
    image: "/blog-1.jpg",
    content: (
      <>
        <p className="mb-4">Bepergian dengan bayi atau balita terkadang terasa menantang, tetapi dengan persiapan yang tepat, perjalanan ini juga bisa menjadi pengalaman yang sangat berkesan dan menyenangkan. Jika Anda berencana bepergian atau berwisata bersama si kecil, mengatur rencana akan sangat membantu memastikan perjalanan yang bebas stres.</p>
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Pilih Transportasi yang Nyaman</h3>
        <p className="mb-4">Pastikan Anda memilih moda transportasi yang ramah anak. Menyewa mobil pribadi seringkali menjadi pilihan terbaik karena memberikan fleksibilitas waktu, ruang yang cukup untuk barang bawaan, dan kenyamanan privasi bagi si kecil untuk tidur kapan saja.</p>
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Bawa Perlengkapan Esensial</h3>
        <p className="mb-4">Siapkan tas khusus yang mudah dijangkau berisi popok cadangan, tisu basah, pakaian ganti, susu, makanan ringan, serta mainan favorit anak. Jangan lupa membawa kotak P3K kecil berisi obat-obatan dasar.</p>
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Menjaga Keselamatan dan Kesehatan</h3>
        <p className="mb-4">Keselamatan adalah prioritas utama. Jika menyewa mobil, pastikan Anda meminta tambahan <em>Car Seat</em> (kursi khusus bayi) agar anak tetap aman selama perjalanan. Atur jadwal istirahat secara berkala agar anak tidak terlalu lelah berada di dalam kendaraan.</p>
      </>
    )
  },
  {
    id: 2,
    title: "Mengapa Innova Reborn Masih Sangat Digemari? Yuk Cek Keunggulannya",
    slug: "mengapa-innova-reborn-masih-digemari",
    date: "15 Jul, 2023",
    author: "DriveGo Admin",
    image: "/blog-2.jpg",
    content: (
      <>
        <p className="mb-4">Toyota Kijang Innova Reborn tetap menjadi primadona di pasar mobil keluarga dan sewa mobil di Indonesia. Meski sudah banyak mobil baru bermunculan, minat terhadap Innova Reborn seakan tidak pernah surut. Apa rahasianya?</p>
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Kenyamanan Kelas Atas</h3>
        <p className="mb-4">Innova Reborn dibekali suspensi yang sangat empuk dan kabin yang sangat luas, memastikan seluruh penumpang dari baris depan hingga belakang merasa nyaman bahkan untuk perjalanan lintas provinsi.</p>
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Mesin Tangguh dan Irit</h3>
        <p className="mb-4">Khusus untuk varian diesel, mesin legendaris Toyota ini menawarkan torsi yang melimpah untuk melibas berbagai medan tanjakan, sekaligus menawarkan efisiensi bahan bakar yang sangat baik.</p>
      </>
    )
  },
  {
    id: 3,
    title: "Rekomendasi Beberapa Tipe Mobil Sewaan Yang Diminati Keluarga",
    slug: "rekomendasi-tipe-mobil-keluarga",
    date: "16 Jul, 2023",
    author: "DriveGo Admin",
    image: "/blog-3.jpg",
    content: (
      <>
        <p className="mb-4">Memilih mobil sewaan untuk liburan keluarga gampang-gampang susah. Anda harus menyesuaikan jumlah anggota keluarga, rute perjalanan, hingga *budget* yang dimiliki.</p>
        <p className="mb-4">Berikut adalah tipe mobil yang paling laris dipesan oleh keluarga di DriveGo: Honda Brio (untuk keluarga kecil di dalam kota), Toyota Avanza & Mitsubishi Xpander (kendaraan operasional sejuta umat), dan Toyota Alphard (untuk liburan VVIP yang mengutamakan kemewahan absolut).</p>
      </>
    )
  },
  {
    id: 4,
    title: "Sewa Hiace, Solusi Tepat Untuk Bepergian Rombongan Bersama Keluarga",
    slug: "sewa-hiace-solusi-rombongan",
    date: "17 Jul, 2023",
    author: "DriveGo Admin",
    image: "/blog-4.jpg",
    content: (
      <>
        <p className="mb-4">Liburan rombongan lebih dari 10 orang tentu merepotkan jika harus menggunakan dua atau tiga mobil kecil. Konvoi bisa terpisah dan kebersamaan di jalan menjadi berkurang.</p>
        <p className="mb-4">Sewa Toyota Hiace (Commuter atau Premio) adalah solusi terbaik. Dengan kapasitas hingga 15 orang, kabin lega, dan AC yang dingin hingga ke belakang, seluruh anggota keluarga besar bisa bernyanyi, mengobrol, dan bersantai dalam satu kendaraan selama perjalanan.</p>
      </>
    )
  },
  {
    id: 5,
    title: "Solusi Mobil Operasional Karyawan & Tamu VIP Perusahaan",
    slug: "solusi-mobil-operasional-perusahaan",
    date: "18 Jul, 2023",
    author: "DriveGo Admin",
    image: "/blog-5.jpg",
    content: (
      <>
        <p className="mb-4">Banyak perusahaan kini beralih dari membeli mobil aset ke sistem sewa bulanan atau tahunan. Menyewa mobil operasional terbukti menghemat biaya pemeliharaan, asuransi, dan depresiasi aset kendaraan.</p>
        <p className="mb-4">DriveGo siap memfasilitasi kebutuhan korporasi Anda, baik untuk mobilitas karyawan lapangan menggunakan Avanza/Xenia, hingga penjemputan tamu VIP dan ekspatriat menggunakan Toyota Alphard/Vellfire dengan pengemudi profesional yang fasih berbahasa Inggris.</p>
      </>
    )
  },
  {
    id: 6,
    title: "City Tour Semarang: Sewa City Car Jelajah Simpang Lima & Kota Lama",
    slug: "city-tour-semarang",
    date: "19 Jul, 2023",
    author: "DriveGo Admin",
    image: "/blog-6.jpg",
    content: (
      <>
        <p className="mb-4">Semarang menawarkan pesona perpaduan kota modern dan bangunan bersejarah. Dari Simpang Lima yang gemerlap di malam hari, hingga nuansa klasik Eropa di Kota Lama.</p>
        <p className="mb-4">Menggunakan City Car seperti Honda Brio atau Daihatsu Ayla sangat disarankan untuk menjelajahi sudut-sudut kota Semarang, mencari kuliner legendaris di gang sempit, dan mencari tempat parkir dengan mudah. Sewa City Car di DriveGo dan jelajahi pesona kota dengan bebas!</p>
      </>
    )
  },
  {
    id: 7,
    title: "Persiapan Penting Sebelum Road Trip Jarak Jauh",
    slug: "persiapan-road-trip",
    date: "20 Jul, 2023",
    author: "DriveGo Admin",
    image: "/blog-7.jpg",
    content: (
      <>
        <p className="mb-4">Melakukan perjalanan darat (Road Trip) jarak jauh bersama keluarga atau teman memang menyenangkan. Namun, tanpa persiapan yang matang, liburan Anda bisa berubah menjadi bencana.</p>
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Cek Kondisi Kendaraan</h3>
        <p className="mb-4">Hal paling vital adalah memastikan mobil dalam keadaan prima. Cek tekanan angin ban, kondisi rem, air radiator, oli, dan aki. Jika Anda menyewa mobil di DriveGo, Anda tidak perlu repot memikirkan ini karena semua armada kami selalu melalui proses pengecekan ketat sebelum diserahkan kepada pelanggan.</p>
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Rencanakan Rute dan Titik Istirahat</h3>
        <p className="mb-4">Jangan memaksakan diri untuk menyetir terus-menerus. Idealnya, beristirahatlah setiap 3-4 jam sekali. Rencanakan di mana Anda akan berhenti, entah itu di rest area, pom bensin, atau rumah makan, untuk meregangkan otot dan beristirahat sejenak.</p>
      </>
    )
  },
  {
    id: 8,
    title: "Keuntungan Menyewa Mobil Bulanan Untuk Perusahaan",
    slug: "keuntungan-sewa-bulanan",
    date: "21 Jul, 2023",
    author: "DriveGo Admin",
    image: "/blog-8.jpg",
    content: (
      <>
        <p className="mb-4">Dalam mengelola keuangan perusahaan, efisiensi operasional adalah kunci. Salah satu pengeluaran terbesar biasanya datang dari pengadaan aset transportasi. Menyewa mobil bulanan kini menjadi tren di kalangan korporasi.</p>
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Bebas Biaya Perawatan dan Pajak</h3>
        <p className="mb-4">Dengan menyewa mobil bulanan, perusahaan tidak perlu lagi memikirkan biaya servis rutin, perpanjangan pajak STNK, hingga asuransi kendaraan. Semua hal tersebut sudah ditanggung oleh pihak penyedia rental seperti DriveGo.</p>
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Arus Kas Lebih Terjaga</h3>
        <p className="mb-4">Dibandingkan harus mengeluarkan dana ratusan juta rupiah di awal untuk membeli mobil, dana tersebut bisa diputarkan untuk modal bisnis lainnya. Sistem sewa memungkinkan perusahaan mencatat pengeluaran secara pasti setiap bulannya.</p>
      </>
    )
  },
  {
    id: 9,
    title: "Destinasi Wisata Keluarga Terbaik di Jawa Barat",
    slug: "destinasi-wisata-jabar",
    date: "22 Jul, 2023",
    author: "DriveGo Admin",
    image: "/blog-9.jpg",
    content: (
      <>
        <p className="mb-4">Jawa Barat selalu menjadi primadona untuk liburan keluarga di akhir pekan. Udara yang sejuk dan pemandangan alam yang asri menjadi alasan utamanya. Berikut beberapa destinasi yang wajib Anda kunjungi.</p>
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Bandung dan Sekitarnya</h3>
        <p className="mb-4">Mulai dari Kawah Putih di Ciwidey, kebun teh di Pangalengan, hingga wisata keluarga seperti Lembang Park & Zoo, Bandung selalu punya cara untuk membuat keluarga betah berlama-lama.</p>
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Puncak Bogor</h3>
        <p className="mb-4">Kawasan Puncak masih menjadi destinasi favorit warga Jakarta. Anda bisa menyewa mobil SUV atau MPV yang nyaman untuk melibas tanjakan Puncak dan menikmati wisata seperti Taman Safari atau sekadar makan jagung bakar di pinggir jalan.</p>
      </>
    )
  },
  {
    id: 10,
    title: "Cara Memilih Mobil Rental Sesuai Kebutuhan Anda",
    slug: "cara-memilih-mobil-rental",
    date: "23 Jul, 2023",
    author: "DriveGo Admin",
    image: "/blog-10.jpg",
    content: (
      <>
        <p className="mb-4">Memasuki musim liburan, jasa rental mobil pasti akan penuh. Agar tidak salah pilih kendaraan yang malah akan merusak kenyamanan liburan Anda, perhatikan beberapa tips memilih mobil rental berikut ini.</p>
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Sesuaikan Kapasitas Penumpang</h3>
        <p className="mb-4">Hitung dengan cermat jumlah rombongan Anda. Jika hanya 4 orang, City Car atau Hatchback sudah cukup. Namun, jika Anda membawa keluarga besar (6-7 orang), wajib hukumnya menyewa MPV seperti Avanza, Xpander, atau Innova.</p>
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Pertimbangkan Rute Perjalanan</h3>
        <p className="mb-4">Jika destinasi Anda melewati jalanan pegunungan berbatu atau menanjak, hindari menyewa mobil bermesin kecil. Pilihlah mobil dengan performa mesin dan *ground clearance* (jarak terendah ke tanah) yang mumpuni seperti SUV.</p>
      </>
    )
  },
  {
    id: 11,
    title: "Mengenal Fitur Keselamatan Pada Mobil Terbaru",
    slug: "fitur-keselamatan-mobil",
    date: "24 Jul, 2023",
    author: "DriveGo Admin",
    image: "/blog-11.jpg",
    content: (
      <>
        <p className="mb-4">Perkembangan teknologi otomotif saat ini sangat berfokus pada keselamatan penumpang. Saat menyewa mobil keluaran terbaru, Anda mungkin akan menemukan beberapa fitur canggih ini.</p>
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Anti-lock Braking System (ABS) & EBD</h3>
        <p className="mb-4">Fitur ini mencegah ban terkunci saat Anda melakukan pengereman mendadak (panic braking), sehingga Anda masih bisa mengendalikan arah setir untuk menghindari rintangan di depan.</p>
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Hill Start Assist (HSA)</h3>
        <p className="mb-4">Sangat berguna saat mobil berhenti di tanjakan. Fitur ini akan menahan mobil selama beberapa detik agar tidak mundur saat kaki Anda berpindah dari pedal rem ke pedal gas.</p>
      </>
    )
  },
  {
    id: 12,
    title: "Kuliner Malam Kota yang Wajib Dikunjungi",
    slug: "kuliner-malam-kota",
    date: "25 Jul, 2023",
    author: "DriveGo Admin",
    image: "/blog-12.jpg",
    content: (
      <>
        <p className="mb-4">Jalan-jalan malam menggunakan mobil sewaan tidak akan lengkap tanpa menjajal kuliner kaki lima legendaris. Beberapa kota di Indonesia terkenal hidup di malam hari karena kulinernya.</p>
        <p className="mb-4">Di Jakarta, Anda bisa mampir ke kawasan Pecenongan atau Mangga Besar. Jika sedang berada di Bandung, kawasan Cibadak atau Jalan Sudirman menawarkan berbagai jajanan malam yang menggugah selera. Pastikan Anda menyewa mobil dari DriveGo agar perjalanan berburu kuliner malam Anda semakin aman dan nyaman.</p>
      </>
    )
  }
];

// =========================================================================
// Mencegah Error Blocking Route
// =========================================================================
export const instant = false; 

export async function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Cari artikel berdasarkan slug di URL
  const articleIndex = blogData.findIndex(blog => blog.slug === slug);
  const article = blogData[articleIndex];

  // Jika slug tidak ditemukan di database, munculkan halaman 404
  if (!article) {
    notFound();
  }

  // Logika untuk tombol Previous & Next Artikel
  const prevArticle = articleIndex > 0 ? blogData[articleIndex - 1] : null;
  const nextArticle = articleIndex < blogData.length - 1 ? blogData[articleIndex + 1] : null;

  return (
    <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen bg-gray-50/30">
      
      {/* ================= HEADER ARTIKEL ================= */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-gray-900 leading-tight mb-6">
          {article.title}
        </h1>
        
        <div className="flex items-center justify-center gap-3 text-sm text-gray-500 font-medium mb-8">
          <span>Oleh <span className="text-gray-800 font-bold">{article.author}</span></span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
          <span>{article.date}</span>
        </div>

        {/* Tombol Share Social Media */}
        <div className="flex justify-center gap-3 mb-10">
          <button className="w-10 h-10 rounded-md bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm" aria-label="Share to Facebook">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
          </button>
          <button className="w-10 h-10 rounded-md bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors shadow-sm" aria-label="Share to Twitter">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
          </button>
          <button className="w-10 h-10 rounded-md bg-gray-800 text-white flex items-center justify-center hover:bg-black transition-colors shadow-sm" aria-label="Copy Link">
            <Link2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ================= GAMBAR UTAMA ================= */}
      <div className="w-full rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] mb-12">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-auto max-h-[500px] object-cover"
        />
      </div>

      {/* ================= KONTEN ARTIKEL ================= */}
      <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        {article.content}
      </article>

      {/* ================= TOMBOL SHARE BAWAH ================= */}
      <div className="flex justify-center gap-3 mt-16 mb-12">
        <button className="w-10 h-10 rounded-md bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm" aria-label="Share to Facebook">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
        </button>
        <button className="w-10 h-10 rounded-md bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors shadow-sm" aria-label="Share to Twitter">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
        </button>
        <button className="w-10 h-10 rounded-md bg-gray-800 text-white flex items-center justify-center hover:bg-black transition-colors shadow-sm" aria-label="Copy Link">
          <Link2 className="w-4 h-4" />
        </button>
      </div>

      {/* ================= NAVIGASI ARTIKEL (PREVIOUS / NEXT) ================= */}
      <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-8 gap-4">
        
        {/* Tombol Artikel Sebelumnya */}
        <div className="w-full md:w-1/2">
          {prevArticle && (
            <Link href={`/blog/${prevArticle.slug}`} className="flex items-center gap-4 group p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-green-100 group-hover:text-green-600 transition-colors shrink-0">
                <ChevronLeft className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-1">PREVIOUS</span>
                <span className="text-[14px] font-extrabold text-gray-800 line-clamp-1 group-hover:text-green-600 transition-colors">{prevArticle.title}</span>
              </div>
            </Link>
          )}
        </div>

        {/* Tombol Artikel Selanjutnya */}
        <div className="w-full md:w-1/2 flex justify-end">
          {nextArticle && (
            <Link href={`/blog/${nextArticle.slug}`} className="flex items-center justify-end gap-4 group p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100 text-right">
              <div className="flex flex-col text-right">
                <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-1">NEXT</span>
                <span className="text-[14px] font-extrabold text-gray-800 line-clamp-1 group-hover:text-green-600 transition-colors">{nextArticle.title}</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-green-100 group-hover:text-green-600 transition-colors shrink-0">
                <ChevronRight className="w-5 h-5" />
              </div>
            </Link>
          )}
        </div>

      </div>

    </main>
  );
}