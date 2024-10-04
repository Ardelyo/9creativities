import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Presentation } from 'lucide-react';
import { Button } from "@/components/ui/button";
import BackgroundArt from '../components/BackgroundArt';

const PresentationGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [presentationUrl, setPresentationUrl] = useState(null);

  const slides = [
    { title: "Pendahuluan Nine Creativities", content: "Latar belakang dan tujuan proyek" },
    { title: "Tim Pengembang", content: "Anggota tim dan peran masing-masing" },
    { title: "Perencanaan Proyek", content: "Timeline dan milestone utama" },
    { title: "Desain Website", content: "Proses pembuatan desain di Canva" },
    { title: "Implementasi dengan Google Sites", content: "Langkah-langkah pembuatan situs" },
    { title: "Konten Website", content: "Pengembangan dan kurasi konten" },
    { title: "Fitur Interaktif", content: "Penambahan elemen interaktif" },
    { title: "Optimisasi dan Pengujian", content: "Proses QA dan penyempurnaan" },
    { title: "Peluncuran Website", content: "Proses publikasi dan promosi" },
    { title: "Kesimpulan dan Pembelajaran", content: "Refleksi tim dan rencana ke depan" }
  ];

  const generatePresentation = async () => {
    setIsGenerating(true);
    // Simulasi proses pembuatan presentasi
    await new Promise(resolve => setTimeout(resolve, 3000));
    // Dalam implementasi nyata, di sini Anda akan memanggil API untuk membuat presentasi
    setPresentationUrl('https://example.com/nine-creativities-presentation.pptx');
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 p-4 sm:p-8 relative overflow-hidden">
      <BackgroundArt />
      <div className="max-w-4xl mx-auto relative z-10">
        <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors mb-8 inline-block">
          <ArrowLeft className="mr-2 inline" /> Kembali ke Beranda
        </Link>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-blue-600">Generator Presentasi</h1>
          <p className="text-xl text-gray-600">Buat laporan kegiatan pembuatan website Nine Creativities dalam format PPT</p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Konten Presentasi</h2>
          <ul className="list-disc list-inside space-y-2">
            {slides.map((slide, index) => (
              <li key={index} className="text-gray-700">
                <span className="font-semibold">{slide.title}</span> - {slide.content}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <Button
            onClick={generatePresentation}
            disabled={isGenerating}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg"
          >
            {isGenerating ? (
              <>
                <Presentation className="animate-spin mr-2" />
                Membuat Presentasi...
              </>
            ) : (
              <>
                <Presentation className="mr-2" />
                Buat Presentasi
              </>
            )}
          </Button>
        </div>

        {presentationUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-lg text-gray-700 mb-4">Presentasi Anda siap!</p>
            <Button
              as="a"
              href={presentationUrl}
              download
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <Download className="mr-2" />
              Unduh Presentasi
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PresentationGenerator;