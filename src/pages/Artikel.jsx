import React, { useState } from 'react';
import BackgroundArt from '../components/BackgroundArt';
import ArticleHeader from '../components/ArticleHeader';
import ArticleCard from '../components/ArticleCard';

const Artikel = () => {
  const [expandedArticle, setExpandedArticle] = useState(null);

  const articles = [
    {
      title: "APA ITU TEKNOLOGI?",
      author: "Alea",
      readTime: "5 menit",
      tags: ["Teknologi", "Inovasi"],
      content: `
# Teknologi: Mengubah Dunia Kita

Teknologi adalah **keseluruhan sarana** untuk menyediakan barang-barang yang diperlukan bagi kelangsungan dan kenyamanan hidup manusia. Penggunaan teknologi oleh manusia dimulai dengan pengubahan sumber daya alam menjadi alat-alat sederhana.

> Secara singkat, teknologi adalah penerapan pengetahuan dunia untuk mencapai tujuan praktis.

## Dampak Teknologi dalam Kehidupan Sehari-hari

Teknologi telah mengubah cara kita hidup, bekerja, dan berinteraksi. Beberapa contoh teknologi yang mungkin kamu gunakan sehari-hari:

1. **Smartphone**: Alat komunikasi multifungsi yang menghubungkan kita dengan dunia.
2. **Internet**: Jaringan global yang memungkinkan pertukaran informasi secara instan.
3. **Transportasi modern**: Mobil, pesawat, dan kereta yang memudahkan perjalanan.
4. **Peralatan rumah tangga**: Kulkas, mesin cuci, dan microwave yang membantu pekerjaan rumah.

🌟 **Fun Fact**: Tahukah kamu? Komputer pertama seberat 27 ton dan membutuhkan ruangan sebesar lapangan tenis untuk menempatkannya!

## Perkembangan Teknologi Terkini

Perkembangan teknologi terus berlanjut, membawa kita ke era digital yang semakin canggih. Beberapa teknologi terbaru yang sedang berkembang:

- Kecerdasan Buatan (AI)
- Internet of Things (IoT)
- Realitas Virtual dan Augmented Reality
- Blockchain
- Quantum Computing

🌟 **Fun Fact**: 90% dari data dunia saat ini diciptakan hanya dalam dua tahun terakhir. Bayangkan betapa cepatnya perkembangan teknologi!

## Tantangan dan Peluang

Meskipun teknologi membawa banyak manfaat, kita juga harus waspada terhadap tantangannya:

- Privasi dan keamanan data
- Ketergantungan teknologi
- Dampak lingkungan dari produksi perangkat elektronik

Namun, dengan penggunaan yang bijak, teknologi dapat menjadi alat yang luar biasa untuk memecahkan masalah global dan meningkatkan kualitas hidup manusia.

🌟 **Fun Fact**: Ada lebih banyak perangkat yang terhubung ke internet daripada jumlah manusia di Bumi! Ini menunjukkan betapa terkoneksinya dunia kita saat ini.

## Kesimpulan

Teknologi akan terus berevolusi dan mempengaruhi kehidupan kita. Penting bagi kita untuk tetap up-to-date dengan perkembangan teknologi sambil tetap kritis dalam penggunaannya. Mari kita manfaatkan teknologi untuk menciptakan masa depan yang lebih baik bagi semua orang.

[Baca lebih lanjut tentang perkembangan teknologi terbaru](https://www.techradar.com/news/world-of-tech/future-tech)
      `,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-4 sm:p-8">
      <BackgroundArt />
      <div className="max-w-4xl mx-auto relative z-10">
        <ArticleHeader title="Artikel" />
        <div className="space-y-12">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              article={article}
              isExpanded={expandedArticle === index}
              onToggleExpand={() => setExpandedArticle(expandedArticle === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artikel;