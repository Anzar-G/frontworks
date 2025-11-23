
import { Code2, BrainCircuit, LayoutDashboard, Smartphone } from 'lucide-react';
import { Service, Project, Testimonial, PricingPackage } from './types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'AI-Ready Frontend',
    description: 'Integrasi frontend mulus dengan model AI untuk aliran data real-time yang akurat.',
    icon: BrainCircuit
  },
  {
    id: 's2',
    title: 'Modern Web Apps',
    description: 'Aplikasi React/Next.js super cepat, responsif, dan mudah dikembangkan.',
    icon: Code2
  },
  {
    id: 's3',
    title: 'Dashboard Visualisasi',
    description: 'Ubah data kompleks menjadi insight visual interaktif untuk keputusan bisnis.',
    icon: LayoutDashboard
  },
  {
    id: 's4',
    title: 'Mobile-First Design',
    description: 'Tampilan sempurna di semua perangkat dengan prioritas pengalaman pengguna mobile.',
    icon: Smartphone
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Feyd Store',
    category: 'Aplikasi Web',
    image: '/feyd-store.jpg',
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
    description: 'Platform e-commerce modern yang dirancang untuk pengalaman belanja yang intuitif dan cepat. Menyediakan sistem katalog produk yang efisien, navigasi berbasis kategori yang mulus, dan antarmuka yang responsif di berbagai perangkat.',
    highlight: 'Proyek ini menonjolkan kemampuan pengembangan front-end dengan performa tinggi menggunakan Next.js, memberikan waktu muat yang sangat cepat dan pengalaman pengguna yang mulus (terutama pada page transition), esensial untuk meningkatkan rasio konversi e-commerce.',
    liveDemoUrl: 'https://feyd-store.vercel.app'
  },
  {
    id: 'p2',
    title: 'Program Tilawah 40 Hari',
    category: 'Landing Page',
    image: '/program-tilawah.jpg',
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
    description: 'Halaman landing page promosi yang berfokus pada konversi (penjualan). Desainnya menonjolkan tata letak yang bersih, penawaran yang terstruktur, dan elemen Call-to-Action (CTA) yang strategis, dirancang untuk mengkomunikasikan nilai program secara efektif kepada audiens.',
    highlight: 'Fokus utama adalah pada desain persuasif dan optimasi kecepatan (SEO-friendly), memastikan landing page mencapai ranking mesin pencari yang baik dan mampu memaksimalkan rasio klik-tayang dan konversi pendaftaran dalam waktu singkat.',
    liveDemoUrl: 'https://program-tilawah-40-hari.vercel.app'
  },
  {
    id: 'p3',
    title: 'Habbatussauda PDP',
    category: 'Landing Page',
    image: '/habbatussauda.jpg',
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
    description: 'Halaman Detail Produk (PDP) yang dirancang secara minimalis dan highly optimized untuk produk kesehatan. Tampilan ini mengutamakan keterbacaan informasi produk, detail manfaat, testimoni, dan form pemesanan langsung, menciptakan kepercayaan pengguna.',
    highlight: 'Implementasi pola desain mobile-first memastikan tampilan yang sempurna di perangkat seluler, di mana mayoritas traffic e-commerce berasal. Desainnya juga fokus pada psikologi visual untuk meningkatkan kepercayaan pada produk kesehatan.',
    liveDemoUrl: 'https://habbatussauda-pdp.vercel.app'
  },
  {
    id: 'p4',
    title: 'One Code ID',
    category: 'Aplikasi Web',
    image: '/onecodeid.jpg',
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
    description: 'Situs perusahaan (Corporate Website) yang berfungsi sebagai representasi digital merek dan layanan. Struktur situs ini mencakup halaman Tentang Kami, Layanan, dan Portofolio, disusun untuk menyampaikan kredibilitas dan keahlian di bidang teknologi.',
    highlight: 'Proyek ini menunjukkan keahlian dalam membangun situs dengan struktur informasi yang kompleks namun mudah dinavigasi. Penggunaan desain yang profesional dan konsisten membantu membangun citra merek yang kuat dan terpercaya.',
    liveDemoUrl: 'https://onecodeid.vercel.app'
  },
  {
    id: 'p5',
    title: 'Dapur Kamila',
    category: 'Aplikasi Web',
    image: '/dapurkamila.jpg',
    techStack: ['React', 'Tailwind CSS'],
    description: 'Situs perusahaan yang menampilkan produk-produk kuliner dan catering. Antarmuka dirancang dengan palet warna yang menarik dan tata letak galeri yang menggiurkan, menekankan visual produk sebagai fokus utama untuk memicu minat pelanggan.',
    highlight: 'Penggunaan desain berbasis gambar (Visual-heavy Design) dikelola secara efisien dengan React dan styling modern, memastikan situs tetap cepat dimuat meskipun memiliki banyak foto resolusi tinggi, yang penting untuk industri makanan dan minuman.',
    liveDemoUrl: 'https://dapurkamila.vercel.app'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rina Kartika',
    role: 'Pemilik Toko Online Fashion',
    company: '',
    quote: 'Websitenya bagus banget dan loading-nya cepat! Pelanggan jadi lebih tertarik buat belanja. Prosesnya juga gampang, dijelasin step by step. Recommended deh buat yang mau bikin website toko online!.',
    avatar: 'https://i.pravatar.cc/150?u=andi'
  },
  {
    id: 't2',
    name: 'Budi Prasetyo ',
    role: 'Freelance Photographer',
    company: '',
    quote: 'Awalnya ragu mau bikin portfolio website, tapi ternyata hasilnya melebihi ekspektasi. Foto-foto jadi keliatan lebih profesional dan banyak klien yang kontak lewat website. Worth it banget!',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 't3',
    name: '⁠Sari Melati',
    role: 'Guru Bahasa Inggris',
    company: '',
    quote: 'Website untuk les privat saya sekarang terlihat lebih modern dan kredibel. Orang tua murid jadi lebih percaya dan pendaftaran meningkat. Pelayanannya juga ramah, revisi dikerjain dengan sabar.',
    avatar: 'https://i.pravatar.cc/150?u=budi'
  },
  {
    id: 't2',
    name: 'Sarah Wijaya',
    role: 'Product Manager',
    company: 'AI Corp Global',
    quote: 'Integrasi model machine learning ke frontend sangat mulus. User experience aplikasi kami meningkat drastis berkat sentuhan desainnya.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 't3',
    name: 'Budi Santoso',
    role: 'CEO',
    company: 'SmartRetail Systems',
    quote: 'Profesional, cepat, dan kodenya sangat rapi. Sangat direkomendasikan untuk proyek web yang membutuhkan kompleksitas tinggi namun tampilan sederhana.',
    avatar: 'https://i.pravatar.cc/150?u=budi'
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'pkg1',
    name: 'Landing Page Express',
    price: 'Mulai Rp 200.000',
    description: 'Front-end Only. Ideal untuk profil profesional, portofolio, atau MVP cepat.',
    features: [
      'Single Page App / Website Statis',
      'Desain Responsif Mobile-First',
      'Optimasi Kecepatan & SEO Dasar',
      'Integrasi Link Media Sosial',
      'Animasi Mikro UI Sederhana',
      'Revisi Desain 2x',
      'Waktu: 3-5 Hari'
    ],
    buttonText: 'Pilih Paket Express'
  },
  {
    id: 'pkg2',
    name: 'Professional UI/UX Ecosystem',
    price: 'Mulai Rp 350.000',
    description: 'Solusi Front-end komprehensif untuk website multi-halaman & interaksi kompleks.',
    isPopular: true,
    features: [
      'Multi-page (s.d 10 Halaman)',
      'Integrasi API (Front-end side)',
      'Komponen UI Reusable (Atomic)',
      'Animasi & Interaksi Lanjut',
      'Setup State Management',
      'Style Guide Dasar',
      'Support Bug Frontend 1 Bulan',
      'Waktu: 7-14 Hari'
    ],
    buttonText: 'Pilih Professional'
  },
  {
    id: 'pkg3',
    name: 'Advanced AI-Powered UI/UX',
    price: 'Mulai Rp 450.000',
    description: 'Front-end kustom spesifik untuk performa tinggi & integrasi AI real-time.',
    features: [
      'Arsitektur Front-end Kustom',
      'Integrasi UI API Model AI Kompleks',
      'Visualisasi Data Real-time',
      'PWA Ready (Offline Capability)',
      'Testing Unit & Integrasi',
      'Dokumentasi Kode Lengkap',
      'Maintenance Support Khusus'
    ],
    buttonText: 'Konsultasi Advanced'
  }
];

export const HOSTING_INFO = [
  {
    title: 'Pembelian & Kepemilikan Domain',
    desc: 'Biaya dan kepemilikan nama domain adalah tanggung jawab penuh klien via registrar pilihan Anda.'
  },
  {
    title: 'Hosting Front-end',
    desc: 'Deploy gratis ke Vercel (*.vercel.app). Hosting performa tinggi tanpa biaya tambahan.'
  },
  {
    title: 'Integrasi Domain Kustom',
    desc: 'Bantuan konfigurasi pengarahan domain Anda ke deployment Vercel.'
  }
];

export const SERVICE_TYPES = [
  'Landing Page Express',
  'Professional UI/UX Ecosystem',
  'Advanced AI-Powered UI/UX',
  'Konsultasi Custom'
];

export const TERMS_CONDITIONS = [
  {
    title: "1. Pembayaran",
    content: [
      "Uang muka (DP) sebesar 50% harus dibayar dulu sebelum pengerjaan dimulai.",
      "Sisa pembayaran 50% dilunasi maksimal 3 hari setelah website selesai dan Anda setujui secara tertulis (melalui WhatsApp/Email).",
      "Uang muka tidak bisa dikembalikan jika Anda membatalkan pesanan."
    ]
  },
  {
    title: "2. Bahan-Bahan Website",
    content: [
      "Anda wajib memberikan semua bahan yang diperlukan (logo, foto, tulisan/teks, dll) maksimal 3 hari setelah DP dibayar.",
      "Jika bahan tidak lengkap dalam 3 hari, waktu pengerjaan akan tertunda dan estimasi penyelesaian proyek akan disesuaikan.",
      "Jika kami butuh akses ke platform tertentu, akan kami bicarakan dan sepakati bersama dulu.",
      "Semua password atau akses akan dikembalikan ke Anda setelah website selesai."
    ]
  },
  {
    title: "2a. Akun Google untuk Keperluan Teknis",
    content: [
      "Untuk keperluan teknis pengembangan website yang mengintegrasikan alat AI dan platform modern, Anda wajib menyediakan 1 akun Google.",
      "Akun ini sebaiknya akun baru atau akun yang tidak dipakai untuk keperluan pribadi/penting.",
      "Akun akan digunakan selama masa pengerjaan dan akan dikembalikan setelah proyek selesai.",
      "Kami menjamin keamanan dan tidak akan menggunakan akun untuk hal di luar keperluan proyek Anda."
    ]
  },
  {
    title: "3. Waktu Pengerjaan",
    content: [
      "Waktu pengerjaan mulai dihitung setelah DP diterima dan semua bahan sudah lengkap.",
      "Jika sedang ada proyek lain yang dikerjakan, Anda akan masuk daftar tunggu dan kami akan beritahu kapan bisa mulai.",
      "Estimasi waktu pengerjaan akan diberitahu saat konsultasi awal.",
      "Jika ada keterlambatan dari Anda (bahan terlambat, respon revisi lama), waktu pengerjaan akan bertambah."
    ]
  },
  {
    title: "4. Revisi & Perbaikan",
    content: [
      "Landing Page Express - Front-end: 2x revisi.",
      "Professional UI/UX Ecosystem - Front-end: 5x revisi.",
      "Advanced AI-Powered UI/UX - Front-end: revisi sepuasnya.",
      "Masukan untuk revisi harus diberikan maksimal 2 hari kerja (48 jam) setelah kami kirim hasil.",
      "Jika tidak ada respon dalam 7 hari, kami anggap Anda sudah setuju dan lanjut ke tahap berikutnya."
    ]
  },
  {
    title: "5. Pelunasan & Penyerahan",
    content: [
      "Pelunasan harus dilakukan maksimal 3 hari setelah Anda setujui hasil akhir secara tertulis.",
      "Jika tidak ada pelunasan dalam 14 hari setelah website selesai, website akan kami hentikan sementara dan uang muka hangus.",
      "Setelah lunas, Anda mendapat: semua file website, panduan penggunaan, dan akses penuh."
    ]
  },
  {
    title: "6. Domain & Hosting",
    content: [
      "Jika Anda ingin alamat website sendiri (seperti namausaha.com), Anda yang sewa sendiri.",
      "Jika tidak, website akan kami pasang di platform gratis dengan alamat seperti: namausaha.vercel.app.",
      "Kami bisa bantu setup domain/hosting dengan biaya tambahan (opsional)."
    ]
  },
  {
    title: "7. Garansi & Bantuan Setelah Selesai",
    content: [
      "Gratis perbaikan bug/error selama 30 hari setelah website diserahkan (terbatas pada kesalahan kode kami).",
      "Perubahan isi atau desain setelah website selesai akan dikenakan biaya baru."
    ]
  },
  {
    title: "8. Kepemilikan Website",
    content: [
      "Setelah lunas, website dan semua file-nya 100% milik Anda.",
      "Kami boleh pakai website Anda sebagai contoh portfolio (dengan izin Anda dulu).",
      "File website tidak boleh dijual kembali sebagai produk template kepada pihak ketiga."
    ]
  },
  {
    title: "9. Jika Ada Pembatalan",
    content: [
      "Jika Anda membatalkan setelah DP dibayar, uang muka tidak bisa kembali.",
      "Jika kami yang membatalkan, uang muka dikembalikan 100%."
    ]
  },
  {
    title: "10. Komunikasi",
    content: [
      "Komunikasi utama lewat WhatsApp/Email yang sudah disepakati.",
      "Kami akan balas maksimal 24 jam di hari kerja."
    ]
  },
  {
    title: "11. Batasan Pekerjaan",
    content: [
      "Pekerjaan yang dikerjakan sesuai kesepakatan di awal saja.",
      "Jika ada penambahan fitur atau perubahan besar, akan ada biaya tambahan."
    ]
  },
  {
    title: "12. Kerahasiaan Data",
    content: [
      "Kami akan jaga kerahasiaan data dan informasi bisnis Anda.",
      "Anda juga diharapkan menjaga kerahasiaan harga dan detail teknis yang kita sepakati."
    ]
  },
  {
    title: "13. Testing & Persetujuan",
    content: [
      "Anda wajib cek dan test website di perangkat Anda sendiri (HP, laptop, tablet).",
      "Setelah Anda setujui final, bug yang ditemukan di luar masa garansi 30 hari akan dikenakan biaya."
    ]
  },
  {
    title: "14. Kondisi Darurat",
    content: [
      "Jika terjadi hal di luar kendali (bencana alam, wabah, dll), waktu pengerjaan akan disesuaikan."
    ]
  },
  {
    title: "15. Hak Ubah S&K",
    content: [
      "Syarat dan ketentuan ini bisa berubah sewaktu-waktu untuk proyek baru."
    ]
  }
];
