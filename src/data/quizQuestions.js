export const allQuestions = [
  {
    question: "Apa nama proyek filter air yang dikembangkan oleh tim Teknologi Lingkungan?",
    options: ["Filter Air Ramah Lingkungan", "Pemurni Air Canggih", "Sistem Penyaringan Air", "Pengolah Air Otomatis"],
    correctAnswer: "Filter Air Ramah Lingkungan",
    explanation: "Tim Teknologi Lingkungan mengembangkan proyek Filter Air Ramah Lingkungan menggunakan bahan-bahan alami."
  },
  {
    question: "Produk pangan apa yang TIDAK dikembangkan oleh tim Teknologi Pangan?",
    options: ["Tempe", "Yoghurt", "Tape", "Keju"],
    correctAnswer: "Keju",
    explanation: "Tim Teknologi Pangan fokus pada pengembangan Tempe, Yoghurt Probiotik, dan Tape."
  },
  {
    question: "Apa nama asisten AI yang dikembangkan oleh tim Teknologi Informasi?",
    options: ["Robot A", "Robot B", "Robot C", "Robot D"],
    correctAnswer: "Robot C",
    explanation: "Robot C adalah asisten AI cerdas yang dikembangkan oleh tim Teknologi Informasi."
  },
  {
    question: "Apa tujuan utama dari Kalkulator Karbon yang dikembangkan?",
    options: ["Menghitung biaya listrik", "Mengukur jejak karbon", "Menghitung kalori makanan", "Mengukur suhu bumi"],
    correctAnswer: "Mengukur jejak karbon",
    explanation: "Kalkulator Karbon bertujuan untuk membantu pengguna mengukur jejak karbon mereka."
  },
  {
    question: "Apa fokus utama dari kampanye edukasi yang dilakukan oleh tim Teknologi Komunikasi?",
    options: ["Mode terbaru", "Teknologi dan lingkungan", "Olahraga populer", "Resep masakan"],
    correctAnswer: "Teknologi dan lingkungan",
    explanation: "Tim Teknologi Komunikasi fokus pada kampanye edukasi tentang teknologi dan isu-isu lingkungan."
  },
  {
    question: "Bahan utama apa yang digunakan dalam pembuatan tempe?",
    options: ["Kacang kedelai", "Kacang tanah", "Jagung", "Singkong"],
    correctAnswer: "Kacang kedelai",
    explanation: "Tempe tradisional dibuat menggunakan kacang kedelai sebagai bahan utama."
  },
  {
    question: "Apa manfaat utama dari mengonsumsi yoghurt probiotik?",
    options: ["Meningkatkan kekuatan otot", "Memperbaiki kesehatan pencernaan", "Mempercepat pertumbuhan rambut", "Meningkatkan penglihatan"],
    correctAnswer: "Memperbaiki kesehatan pencernaan",
    explanation: "Yoghurt probiotik mengandung bakteri baik yang membantu memperbaiki kesehatan sistem pencernaan."
  },
  {
    question: "Apa tujuan utama dari proyek Filter Air Ramah Lingkungan?",
    options: ["Menghasilkan listrik", "Membuat air menjadi manis", "Membersihkan air dari polutan", "Menambah mineral ke air"],
    correctAnswer: "Membersihkan air dari polutan",
    explanation: "Proyek Filter Air Ramah Lingkungan bertujuan untuk membersihkan air dari berbagai polutan menggunakan metode alami."
  },
  {
    question: "Apa yang dimaksud dengan '3R' dalam pengelolaan sampah?",
    options: ["Run, Rest, Repeat", "Read, Write, Remember", "Reduce, Reuse, Recycle", "Repair, Rebuild, Resell"],
    correctAnswer: "Reduce, Reuse, Recycle",
    explanation: "3R dalam pengelolaan sampah adalah Reduce (kurangi), Reuse (gunakan kembali), dan Recycle (daur ulang)."
  },
  {
    question: "Apa manfaat utama dari menggunakan energi terbarukan?",
    options: ["Lebih murah", "Ramah lingkungan", "Lebih cepat", "Lebih mudah didapat"],
    correctAnswer: "Ramah lingkungan",
    explanation: "Energi terbarukan seperti solar dan angin lebih ramah lingkungan karena mengurangi emisi gas rumah kaca."
  }
];

export const getRandomQuestions = (count) => {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};