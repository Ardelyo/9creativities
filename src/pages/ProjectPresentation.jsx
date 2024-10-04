import React from 'react';

const slides = [
  {
    title: "Pendahuluan Nine Creativities",
    content: "Tim kami menciptakan Nine Creativities melalui kolaborasi kreatif yang didorong oleh ide-ide orisinal dan dukungan teknologi. AI berperan sebagai alat bantu, bukan pencipta utama.",
    image: "/placeholder.svg" // Replace with actual image path
  },
  {
    title: "Tim Pengembang",
    content: "Kami adalah tim yang terdiri dari desainer, pengembang, dan kreator konten yang bersemangat untuk menciptakan pengalaman digital yang inovatif.",
    image: "/placeholder.svg" // Replace with actual image path
  },
  {
    title: "Perencanaan Desain dengan Canva",
    content: "Kami menggunakan Canva untuk merencanakan desain secara visual, merancang konsep dan ide utama dalam bentuk wireframe, moodboard, dan visual dasar untuk menentukan nuansa desain.",
    image: "/placeholder.svg" // Replace with actual image path
  },
  {
    title: "Implementasi UI/UX dengan Figma",
    content: "Dengan Figma, kami mengimplementasikan elemen-elemen UI/UX secara detail dan interaktif, membangun layout dan memastikan navigasi antarhalaman berjalan lancar.",
    image: "/placeholder.svg" // Replace with actual image path
  },
  {
    title: "Pengembangan Fungsionalitas dengan GPTengineer",
    content: "GPTengineer membantu dalam proses pengkodean dan pemrograman, memberikan solusi efisien dan saran dalam menulis skrip. Keputusan final dan logika pemrograman tetap ditentukan oleh tim.",
    image: "/placeholder.svg" // Replace with actual image path
  },
  {
    title: "Publikasi dengan Google Site",
    content: "Kami memanfaatkan Google Site sebagai media publikasi, mengembed link dari GPTengineer ke dalamnya untuk memudahkan akses pengunjung ke seluruh fitur yang telah kami buat.",
    image: "/placeholder.svg" // Replace with actual image path
  },
  {
    title: "Fitur Utama",
    content: "Nine Creativities menawarkan berbagai fitur inovatif yang menggabungkan kreativitas dan teknologi untuk memberikan pengalaman unik kepada pengguna.",
    image: "/placeholder.svg" // Replace with actual image path
  },
  {
    title: "Proses Pengujian",
    content: "Kami melakukan pengujian menyeluruh untuk memastikan kualitas dan performa optimal dari setiap aspek Nine Creativities.",
    image: "/placeholder.svg" // Replace with actual image path
  },
  {
    title: "Peluncuran",
    content: "Setelah melalui berbagai tahapan pengembangan dan pengujian, Nine Creativities siap diluncurkan kepada publik.",
    image: "/placeholder.svg" // Replace with actual image path
  },
  {
    title: "Kesimpulan dan Pembelajaran",
    content: "Proses pembuatan Nine Creativities memberikan banyak pembelajaran berharga bagi tim kami, menggabungkan kreativitas manusia dengan bantuan teknologi AI.",
    image: "/placeholder.svg" // Replace with actual image path
  }
];

const ProjectPresentation = () => {
  return (
    <div className="w-full bg-gradient-to-br from-purple-600 to-pink-500">
      {slides.map((slide, index) => (
        <div key={index} className="min-h-screen flex items-center justify-center p-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 max-w-4xl w-full">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {slide.title}
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-xl md:text-2xl text-white mb-4 md:mb-0 md:mr-4 flex-1">
                {slide.content}
              </p>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full md:w-1/2 h-64 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectPresentation;