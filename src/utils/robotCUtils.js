import { toast } from "@/components/ui/use-toast";

const emojis = ["😊", "👍", "🚀", "💡", "🌈", "🎨", "🔬", "🌱", "🤖", "📚"];

const funFacts = [
  "Tahukah kamu? Air yang kita minum hari ini mungkin pernah diminum oleh dinosaurus! 🦕💧",
  "Fakta seru: Tempe adalah superfood Indonesia yang kaya protein dan probiotik! 🇮🇩🍽️",
  "Menariknya, website pertama di dunia masih online sampai sekarang! 🖥️🌐",
  "Komunikasi modern kita lebih cepat 10 juta kali lipat dibanding 100 tahun lalu! 📱⚡",
];

const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

const processMessage = (message) => {
  let response = "";

  if (message.toLowerCase().includes("nine creativities")) {
    response += "Nine Creativities adalah showcase inovasi teknologi yang keren dari siswa kelas 9C! 🎓💡 Kami fokus pada 4 bidang teknologi: Lingkungan, Pangan, Informasi, dan Komunikasi. Proyek ini menampilkan kreativitas dan kerja keras teman-teman kami dalam mengembangkan solusi inovatif untuk masalah kontemporer. 😎\n\n";
    response += "Struktur organisasi Nine Creativities terdiri dari:\n";
    response += "1. Tim Teknologi Lingkungan: Fokus pada pengelolaan air, udara, tanah, dan solusi berkelanjutan. Proyek utama mereka adalah Filter Air Ramah Lingkungan. 🌿💧\n";
    response += "2. Tim Teknologi Pangan: Mengembangkan produk pangan inovatif seperti Tempe, Yoghurt Probiotik, dan Tape. 🍽️🥛\n";
    response += "3. Tim Teknologi Informasi: Bertanggung jawab atas pengembangan website Nine Creativities. 💻🌐\n";
    response += "4. Tim Teknologi Komunikasi: Fokus pada penyebaran informasi dan edukasi teknologi melalui Kampanye Edukasi Teknologi. 📢🎨\n\n";
    response += "Keren kan? Ada yang ingin kamu ketahui lebih lanjut? 😊\n\n";
  }

  if (message.toLowerCase().includes("lingkungan")) {
    response += "Tim Teknologi Lingkungan kami sedang mengembangkan Filter Air Ramah Lingkungan. Proyek ini menggunakan kombinasi bahan alami seperti pasir, kerikil, arang aktif, dan tanaman air untuk menciptakan sistem pemurnian air yang efektif dan ramah lingkungan. Bayangkan bisa minum air bersih tanpa merusak alam! 🌿💧 Keren ya?\n\n";
    response += "Tim ini juga pernah berkunjung ke PDAM Tirtawening untuk mempelajari proses pengolahan air bersih skala besar. Pengalaman ini memperkaya pemahaman mereka tentang teknologi pengolahan air. Mau tahu lebih banyak?\n\n";
  }

  if (message.toLowerCase().includes("pangan")) {
    response += "Tim Teknologi Pangan kami sibuk mengembangkan produk pangan inovatif yang sehat dan lezat! 🍽️🥛 Proyek-proyek utama mereka meliputi:\n";
    response += "1. Produksi Tempe: Mengembangkan tempe dengan bahan lokal dan proses fermentasi optimal.\n";
    response += "2. Yoghurt Probiotik: Membuat yoghurt kaya probiotik menggunakan bahan-bahan lokal.\n";
    response += "3. Tape: Berinovasi dalam pembuatan tape dengan variasi bahan baku lokal.\n\n";
    response += "Semua produk ini menggabungkan pengetahuan tradisional dengan teknologi modern. Mau coba? 😋\n\n";
  }

  if (message.toLowerCase().includes("informasi")) {
    response += "Tim Teknologi Informasi kami sedang membangun website keren ini! 🖥️🌐 Website Nine Creativities adalah platform untuk memperkenalkan proyek-proyek inovatif dari berbagai tim teknologi kami. Mereka menggunakan teknologi modern seperti React dan Tailwind CSS untuk membuat pengalaman pengguna yang menarik dan responsif. Gimana menurutmu? Keren kan?\n\n";
  }

  if (message.toLowerCase().includes("komunikasi")) {
    response += "Tim Teknologi Komunikasi kami sedang membuat Kampanye Edukasi Teknologi yang seru abis! 📢🎨 Mereka menciptakan serangkaian konten digital yang informatif dan menarik tentang teknologi informasi, komunikasi, pangan, dan lingkungan. Tujuannya adalah untuk mengkomunikasikan ide-ide kompleks dalam format yang mudah dipahami oleh berbagai kalangan. Penasaran dengan konten-konten keren mereka?\n\n";
  }

  if (response === "") {
    response += "Terima kasih atas pertanyaanmu! Sayangnya, saya belum memiliki informasi spesifik tentang itu. Tapi, aku bisa cerita banyak tentang proyek-proyek Nine Creativities. Mau tahu yang mana? 😊\n\n";
  }

  response += `${getRandomItem(funFacts)}\n\n`;
  response += "Ada lagi yang ingin kamu ketahui tentang Nine Creativities? Aku siap membantu! 😊";

  return response + " " + getRandomItem(emojis);
};

export const handleSendMessage = async (apiKey, message, setChat, setIsLoading) => {
  if (!apiKey || !message) return;

  setIsLoading(true);
  setChat((prevChat) => [...prevChat, { role: "user", content: message }]);

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Kamu adalah Robot C, asisten AI yang cerdas dan ramah untuk Nine Creativities. Berikan respons untuk pesan berikut dengan gaya yang santai, informatif, dan menggunakan emoji yang sesuai: ${message}`,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Gagal mendapatkan respons dari API Gemini");
    }

    const data = await response.json();
    const aiResponse = data.candidates[0].content.parts[0].text;

    setChat((prevChat) => [
      ...prevChat,
      { role: "assistant", content: aiResponse },
    ]);
  } catch (error) {
    console.error("Error memanggil API Gemini:", error);
    toast({
      title: "Ups, ada masalah!",
      description: "Maaf, Robot C sedang bingung. Coba lagi nanti ya! 😅",
      variant: "destructive",
    });
  } finally {
    setIsLoading(false);
  }
};

export const getPromptSuggestions = () => [
  "Apa itu Nine Creativities?",
  "Ceritakan tentang proyek lingkungan",
  "Apa saja inovasi teknologi pangan?",
];