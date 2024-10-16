import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shuffle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const questions = [
  {
    question: "Apa gas rumah kaca utama yang berkontribusi pada perubahan iklim?",
    options: ["Karbon Dioksida", "Oksigen", "Nitrogen", "Helium"],
    correctAnswer: "Karbon Dioksida",
    explanation: "Karbon dioksida adalah gas rumah kaca utama yang menyebabkan pemanasan global."
  },
  {
    question: "Apa yang dimaksud dengan 3R dalam pengelolaan sampah?",
    options: ["Reduce, Reuse, Recycle", "Read, Write, Run", "Rest, Relax, Rejuvenate", "Repair, Rebuild, Restore"],
    correctAnswer: "Reduce, Reuse, Recycle",
    explanation: "3R adalah prinsip pengelolaan sampah: Reduce (kurangi), Reuse (gunakan kembali), dan Recycle (daur ulang)."
  },
  {
    question: "Apa nama lapisan atmosfer yang melindungi Bumi dari radiasi UV berbahaya?",
    options: ["Ozon", "Troposfer", "Stratosfer", "Mesosfer"],
    correctAnswer: "Ozon",
    explanation: "Lapisan ozon di stratosfer melindungi Bumi dari radiasi ultraviolet berbahaya dari Matahari."
  },
  {
    question: "Apa istilah untuk hilangnya hutan secara permanen?",
    options: ["Deforestasi", "Reboisasi", "Urbanisasi", "Erosi"],
    correctAnswer: "Deforestasi",
    explanation: "Deforestasi adalah penghancuran hutan secara permanen, yang berdampak besar pada ekosistem dan iklim."
  },
  {
    question: "Apa sumber energi terbarukan yang menggunakan panas bumi?",
    options: ["Geotermal", "Solar", "Angin", "Hidro"],
    correctAnswer: "Geotermal",
    explanation: "Energi geotermal memanfaatkan panas dari dalam Bumi sebagai sumber energi terbarukan."
  },
  {
    question: "Apa nama fenomena pemanasan air laut yang merusak terumbu karang?",
    options: ["Pemutihan karang", "Eutrofikasi", "Sedimentasi", "Asidifikasi"],
    correctAnswer: "Pemutihan karang",
    explanation: "Pemutihan karang terjadi ketika suhu air laut meningkat, menyebabkan karang kehilangan alga simbiotiknya."
  },
  {
    question: "Apa jenis polusi yang disebabkan oleh suara berlebihan?",
    options: ["Polusi suara", "Polusi udara", "Polusi air", "Polusi tanah"],
    correctAnswer: "Polusi suara",
    explanation: "Polusi suara adalah gangguan lingkungan yang disebabkan oleh suara berlebihan atau tidak diinginkan."
  },
  {
    question: "Apa istilah untuk spesies yang berisiko punah dalam waktu dekat?",
    options: ["Terancam", "Langka", "Endemik", "Invasif"],
    correctAnswer: "Terancam",
    explanation: "Spesies terancam adalah yang berisiko punah dalam waktu dekat jika tidak ada tindakan konservasi."
  },
  {
    question: "Apa nama proses alami daur ulang air di Bumi?",
    options: ["Siklus air", "Evaporasi", "Presipitasi", "Kondensasi"],
    correctAnswer: "Siklus air",
    explanation: "Siklus air atau siklus hidrologi adalah proses alami perputaran air di Bumi melalui berbagai tahap."
  },
  {
    question: "Apa istilah untuk penggunaan pestisida dan pupuk kimia berlebihan?",
    options: ["Pertanian intensif", "Pertanian organik", "Agroforestri", "Permakultur"],
    correctAnswer: "Pertanian intensif",
    explanation: "Pertanian intensif sering menggunakan bahan kimia berlebihan, yang dapat merusak tanah dan ekosistem."
  },
  {
    question: "Apa nama lapisan teratas tanah yang kaya nutrisi?",
    options: ["Humus", "Batuan induk", "Subsoil", "Bedrock"],
    correctAnswer: "Humus",
    explanation: "Humus adalah lapisan atas tanah yang kaya nutrisi, penting untuk pertumbuhan tanaman."
  },
  {
    question: "Apa istilah untuk keanekaragaman makhluk hidup di suatu area?",
    options: ["Biodiversitas", "Ekosistem", "Habitat", "Populasi"],
    correctAnswer: "Biodiversitas",
    explanation: "Biodiversitas mengacu pada variasi kehidupan di Bumi, termasuk genetik, spesies, dan ekosistem."
  },
  {
    question: "Apa nama fenomena naiknya permukaan air laut akibat pemanasan global?",
    options: ["Kenaikan permukaan laut", "Banjir", "Tsunami", "Erosi pantai"],
    correctAnswer: "Kenaikan permukaan laut",
    explanation: "Kenaikan permukaan laut disebabkan oleh pencairan es dan ekspansi termal air akibat pemanasan global."
  },
  {
    question: "Apa istilah untuk penggunaan sumber daya alam tanpa merusaknya?",
    options: ["Pembangunan berkelanjutan", "Eksploitasi", "Konservasi", "Preservasi"],
    correctAnswer: "Pembangunan berkelanjutan",
    explanation: "Pembangunan berkelanjutan bertujuan memenuhi kebutuhan saat ini tanpa mengorbankan generasi masa depan."
  },
  {
    question: "Apa nama proses pemisahan sampah berdasarkan jenisnya?",
    options: ["Pemilahan sampah", "Daur ulang", "Komposting", "Insinerasi"],
    correctAnswer: "Pemilahan sampah",
    explanation: "Pemilahan sampah adalah langkah penting dalam pengelolaan sampah untuk memudahkan daur ulang dan pengolahan."
  },
  {
    question: "Apa istilah untuk area yang dilindungi untuk melestarikan flora dan fauna?",
    options: ["Taman nasional", "Kebun raya", "Hutan kota", "Taman bermain"],
    correctAnswer: "Taman nasional",
    explanation: "Taman nasional adalah area yang dilindungi untuk melestarikan ekosistem alami dan keanekaragaman hayati."
  },
  {
    question: "Apa nama fenomena cuaca ekstrem yang terkait dengan El Niño?",
    options: ["La Niña", "Monsun", "Tornado", "Badai tropis"],
    correctAnswer: "La Niña",
    explanation: "La Niña adalah fenomena cuaca yang berlawanan dengan El Niño, keduanya mempengaruhi pola cuaca global."
  },
  {
    question: "Apa istilah untuk tanaman atau hewan yang hanya ditemukan di satu lokasi geografis?",
    options: ["Endemik", "Eksotis", "Invasif", "Migran"],
    correctAnswer: "Endemik",
    explanation: "Spesies endemik hanya ditemukan di satu area geografis tertentu dan tidak ada di tempat lain secara alami."
  },
  {
    question: "Apa nama proses pengubahan sampah organik menjadi pupuk?",
    options: ["Komposting", "Fermentasi", "Daur ulang", "Pembakaran"],
    correctAnswer: "Komposting",
    explanation: "Komposting adalah proses alami mengubah sampah organik menjadi pupuk yang kaya nutrisi untuk tanaman."
  },
  {
    question: "Apa istilah untuk efek pemanasan atmosfer bumi oleh gas-gas tertentu?",
    options: ["Efek rumah kaca", "Penipisan ozon", "Hujan asam", "Smog"],
    correctAnswer: "Efek rumah kaca",
    explanation: "Efek rumah kaca adalah proses pemanasan Bumi oleh gas-gas atmosfer yang menahan panas, seperti CO2."
  },
  {
    question: "Apa nama sumber energi yang menggunakan perbedaan suhu laut?",
    options: ["OTEC", "Solar", "Angin", "Hidro"],
    correctAnswer: "OTEC",
    explanation: "OTEC (Ocean Thermal Energy Conversion) menggunakan perbedaan suhu permukaan dan dasar laut untuk menghasilkan energi."
  },
  {
    question: "Apa istilah untuk hilangnya lapisan tanah atas akibat air atau angin?",
    options: ["Erosi", "Sedimentasi", "Longsor", "Abrasi"],
    correctAnswer: "Erosi",
    explanation: "Erosi adalah proses pengikisan lapisan tanah atas oleh air, angin, atau es, yang dapat merusak lahan pertanian."
  },
  {
    question: "Apa nama fenomena berkurangnya keanekaragaman hayati secara global?",
    options: ["Kepunahan massal", "Evolusi", "Migrasi", "Adaptasi"],
    correctAnswer: "Kepunahan massal",
    explanation: "Kepunahan massal adalah hilangnya sejumlah besar spesies dalam waktu singkat, sering disebabkan oleh perubahan lingkungan drastis."
  },
  {
    question: "Apa istilah untuk penggunaan organisme untuk membersihkan polutan?",
    options: ["Bioremediasi", "Fitoremediasi", "Bioteknologi", "Rekayasa genetika"],
    correctAnswer: "Bioremediasi",
    explanation: "Bioremediasi adalah penggunaan mikroorganisme atau tanaman untuk membersihkan lingkungan dari polutan."
  },
  {
    question: "Apa nama lapisan atmosfer terbawah tempat sebagian besar cuaca terjadi?",
    options: ["Troposfer", "Stratosfer", "Mesosfer", "Termosfer"],
    correctAnswer: "Troposfer",
    explanation: "Troposfer adalah lapisan atmosfer terendah di mana sebagian besar fenomena cuaca dan iklim terjadi."
  },
  {
    question: "Apa istilah untuk area perkotaan dengan suhu lebih tinggi dari sekitarnya?",
    options: ["Pulau panas perkotaan", "Zona industri", "Daerah padat penduduk", "Kawasan bisnis"],
    correctAnswer: "Pulau panas perkotaan",
    explanation: "Pulau panas perkotaan adalah fenomena di mana area perkotaan memiliki suhu lebih tinggi dari daerah sekitarnya."
  },
  {
    question: "Apa nama proses pemurnian air melalui lapisan pasir dan kerikil?",
    options: ["Filtrasi", "Sedimentasi", "Klorinasi", "Aerasi"],
    correctAnswer: "Filtrasi",
    explanation: "Filtrasi adalah proses pemurnian air dengan melewatkannya melalui media seperti pasir dan kerikil untuk menghilangkan partikel."
  },
  {
    question: "Apa istilah untuk bahan yang dapat terurai secara alami oleh mikroorganisme?",
    options: ["Biodegradable", "Recyclable", "Compostable", "Renewable"],
    correctAnswer: "Biodegradable",
    explanation: "Bahan biodegradable dapat terurai secara alami oleh mikroorganisme tanpa meninggalkan residu berbahaya."
  },
  {
    question: "Apa nama fenomena perubahan warna daun di musim gugur?",
    options: ["Senescence", "Fotosintesis", "Transpirasi", "Germinasi"],
    correctAnswer: "Senescence",
    explanation: "Senescence adalah proses penuaan alami pada tumbuhan, termasuk perubahan warna daun di musim gugur."
  },
  {
    question: "Apa istilah untuk hutan yang selalu hijau sepanjang tahun?",
    options: ["Hutan hujan tropis", "Hutan gugur", "Taiga", "Savana"],
    correctAnswer: "Hutan hujan tropis",
    explanation: "Hutan hujan tropis adalah ekosistem yang selalu hijau dan lembab, dengan keanekaragaman hayati tinggi."
  },
  {
    question: "Apa nama proses pembentukan tanah dari batuan?",
    options: ["Pelapukan", "Erosi", "Sedimentasi", "Kristalisasi"],
    correctAnswer: "Pelapukan",
    explanation: "Pelapukan adalah proses alami penguraian batuan menjadi partikel-partikel kecil yang akhirnya membentuk tanah."
  },
  {
    question: "Apa istilah untuk organisme yang memakan produsen dalam rantai makanan?",
    options: ["Konsumen primer", "Dekomposer", "Produsen", "Predator puncak"],
    correctAnswer: "Konsumen primer",
    explanation: "Konsumen primer adalah organisme yang memakan langsung produsen (tumbuhan) dalam rantai makanan."
  },
  {
    question: "Apa nama fenomena naiknya air tanah ke permukaan tanah?",
    options: ["Kapilaritas", "Infiltrasi", "Perkolasi", "Evaporasi"],
    correctAnswer: "Kapilaritas",
    explanation: "Kapilaritas adalah fenomena naiknya air dalam ruang-ruang kecil di tanah, penting untuk pertumbuhan tanaman."
  },
  {
    question: "Apa istilah untuk area transisi antara dua ekosistem berbeda?",
    options: ["Ekoton", "Habitat", "Niche", "Bioma"],
    correctAnswer: "Ekoton",
    explanation: "Ekoton adalah zona transisi antara dua ekosistem yang berbeda, sering memiliki keanekaragaman hayati tinggi."
  },
  {
    question: "Apa nama proses pengubahan nitrogen atmosfer menjadi bentuk yang dapat digunakan tumbuhan?",
    options: ["Fiksasi nitrogen", "Denitrifikasi", "Nitrifikasi", "Amonifikasi"],
    correctAnswer: "Fiksasi nitrogen",
    explanation: "Fiksasi nitrogen adalah proses mengubah nitrogen atmosfer menjadi bentuk yang dapat digunakan oleh tumbuhan."
  },
  {
    question: "Apa istilah untuk kemampuan ekosistem untuk pulih setelah gangguan?",
    options: ["Resiliensi", "Adaptasi", "Evolusi", "Suksesi"],
    correctAnswer: "Resiliensi",
    explanation: "Resiliensi ekosistem adalah kemampuan untuk pulih dan mempertahankan fungsi setelah mengalami gangguan."
  }
];

const CihuyQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  useEffect(() => {
    // Shuffle and select 10 random questions
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setQuizQuestions(shuffled.slice(0, 10));
  }, []);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    const correct = answer === quizQuestions[currentQuestionIndex].correctAnswer;
    if (correct) {
      setScore(score + 1);
      setPopupMessage("CIHUYYYYY");
    } else {
      setPopupMessage("WKWKWKWK");
    }
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1500);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setQuizQuestions(shuffled.slice(0, 10));
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowExplanation(false);
    setQuizCompleted(false);
  };

  if (quizQuestions.length === 0) {
    return <div>Loading quiz...</div>;
  }

  if (quizCompleted) {
    return (
      <div className="bg-green-100 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Quiz Selesai!</h2>
        <p className="text-xl mb-4">Skor Anda: {score} dari {quizQuestions.length}</p>
        <Button onClick={restartQuiz} className="bg-green-500 hover:bg-green-600 text-white">
          Main Lagi
        </Button>
      </div>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="bg-green-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Pertanyaan {currentQuestionIndex + 1} dari {quizQuestions.length}</h2>
      <p className="text-lg mb-4">{currentQuestion.question}</p>
      <div className="space-y-2">
        {currentQuestion.options.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleAnswerClick(option)}
            disabled={selectedAnswer !== null}
            className={`w-full text-left justify-start ${
              selectedAnswer === option
                ? option === currentQuestion.correctAnswer
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white'
                : 'bg-white hover:bg-gray-100'
            }`}
          >
            {option}
          </Button>
        ))}
      </div>
      <AnimatePresence>
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-4 p-4 bg-blue-100 rounded-lg"
          >
            <p className="font-semibold">Penjelasan:</p>
            <p>{currentQuestion.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
      {selectedAnswer && (
        <Button onClick={handleNextQuestion} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">
          {currentQuestionIndex < quizQuestions.length - 1 ? 'Pertanyaan Berikutnya' : 'Selesai'}
        </Button>
      )}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg text-white text-2xl font-bold ${
              popupMessage === "CIHUYYYYY" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {popupMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CihuyQuiz;