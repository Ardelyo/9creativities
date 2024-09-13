# Nine Creativities

Nine Creativities adalah platform web inovatif yang menampilkan proyek-proyek kreatif dan teknologi yang dikembangkan oleh siswa-siswi kelas 9C. Website ini menggabungkan desain modern dengan fungsionalitas yang kuat untuk memberikan pengalaman pengguna yang menarik dan informatif.

## Fitur Utama

1. **Halaman Beranda (Index):**
   - Menampilkan empat kartu navigasi utama: Teknologi Lingkungan, Teknologi Pangan, Teknologi Informasi, dan Teknologi Komunikasi.
   - Animasi Framer Motion untuk transisi yang halus.
   - Latar belakang gradien dinamis dengan elemen dekoratif.

2. **Halaman Tim:**
   - Setiap tim memiliki halaman dedikasi dengan:
     - Pengenalan tim dan fokus proyek.
     - Profil anggota tim (foto, nama, peran, minat).
     - Deskripsi detail proyek utama.
     - Galeri foto proyek dan dokumentasi.
   - Desain responsif untuk berbagai ukuran layar.

3. **Fitur Robot C (Chatbot):**
   - Antarmuka chat interaktif dengan AI assistant.
   - Menggunakan API Gemini untuk respons yang relevan dan informatif.
   - Fitur pertanyaan lanjutan untuk memperdalam pemahaman.

4. **Navigasi dan Desain:**
   - Komponen DynamicIsland untuk navigasi utama.
   - Animasi transisi halaman dengan Framer Motion.
   - Tema warna konsisten untuk setiap tim.

5. **Teknologi yang Digunakan:**
   - React untuk pengembangan frontend.
   - Tailwind CSS untuk styling.
   - Framer Motion untuk animasi.
   - React Router untuk navigasi.
   - Komponen UI dari Shadcn/ui.

6. **Responsivitas dan Aksesibilitas:**
   - Desain fully responsive.
   - Penggunaan atribut ARIA untuk aksesibilitas.

7. **Performa:**
   - Optimisasi gambar dan aset.
   - Lazy loading untuk komponen dan gambar.

## Konsep Robot C

Robot C adalah fitur chatbot AI yang terintegrasi dalam website Nine Creativities. Berikut adalah penjelasan detail tentang konsep dan teknologi yang digunakan:

1. **Tujuan:**
   Robot C dirancang untuk memberikan informasi interaktif kepada pengunjung website tentang proyek-proyek Nine Creativities dan topik teknologi terkait.

2. **Antarmuka Pengguna:**
   - Tampilan chat yang intuitif dan responsif.
   - Input teks untuk pertanyaan pengguna.
   - Tombol kirim untuk mengirim pesan.
   - Area tampilan chat untuk menampilkan percakapan.

3. **Teknologi Utama:**
   - **React:** Digunakan untuk membangun komponen UI yang interaktif dan dinamis.
   - **Tailwind CSS:** Memberikan styling yang konsisten dan responsif.
   - **Framer Motion:** Menyediakan animasi smooth untuk transisi dan interaksi UI.
   - **API Gemini:** Menggunakan model bahasa AI canggih dari Google untuk menghasilkan respons.

4. **Fitur-fitur Teknis:**
   - **Manajemen State:** Menggunakan React hooks (useState, useEffect) untuk mengelola state percakapan.
   - **Asynchronous API Calls:** Menggunakan fetch API untuk berkomunikasi dengan Gemini API.
   - **Markdown Rendering:** Menggunakan react-markdown untuk menampilkan respons terformat.
   - **Scroll Otomatis:** Implementasi useRef untuk scroll otomatis ke pesan terbaru.

5. **Keamanan:**
   - Input API key dari pengguna untuk autentikasi dengan Gemini API.
   - Penyimpanan API key secara lokal (tidak dikirim ke server).

6. **Konteks Khusus:**
   Robot C diprogram dengan pengetahuan khusus tentang Nine Creativities, termasuk informasi tentang tim-tim proyek dan inovasi mereka.

7. **Pertanyaan Lanjutan:**
   - Fitur yang menganalisis respons AI untuk menghasilkan pertanyaan lanjutan yang relevan.
   - Membantu pengguna memperdalam pemahaman mereka tentang topik yang dibahas.

8. **Optimisasi Performa:**
   - Lazy loading untuk komponen chat.
   - Throttling pada input pengguna untuk mengurangi beban API.

9. **Aksesibilitas:**
   - Penggunaan atribut ARIA untuk memastikan chatbot dapat diakses oleh pengguna dengan kebutuhan khusus.
   - Kontras warna yang baik untuk keterbacaan.

10. **Responsivitas:**
    - Desain adaptif yang menyesuaikan dengan berbagai ukuran layar (mobile, tablet, desktop).
    - Penggunaan Flexbox dan Grid untuk layout yang fleksibel.

Robot C merupakan contoh integrasi teknologi AI modern dalam konteks pendidikan, memungkinkan interaksi yang lebih mendalam dengan konten website dan memperkaya pengalaman belajar pengunjung Nine Creativities.