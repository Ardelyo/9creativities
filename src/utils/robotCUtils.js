import { toast } from "@/components/ui/use-toast";

const greetings = [
  "Halo! 👋 Apa kabar?",
  "Hai sobat! 😊 Semoga harimu menyenangkan!",
  "Selamat datang di Nine Creativities! 🎉",
  "Hei there! 🌟 Siap untuk berinovasi?",
];

const emojis = ["😊", "👍", "🚀", "💡", "🌈", "🎨", "🔬", "🌱", "🤖", "📚"];

const funFacts = [
  "Tahukah kamu? Air yang kita minum hari ini mungkin pernah diminum oleh dinosaurus! 🦕💧",
  "Fakta seru: Tempe adalah superfood Indonesia yang kaya protein dan probiotik! 🇮🇩🍽️",
  "Menariknya, website pertama di dunia masih online sampai sekarang! 🖥️🌐",
  "Komunikasi modern kita lebih cepat 10 juta kali lipat dibanding 100 tahun lalu! 📱⚡",
];

const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

const processMessage = (message) => {
  let response = `${getRandomItem(greetings)}\n\n`;

  if (message.toLowerCase().includes("nine creativities")) {
    response += "Nine Creativities adalah showcase inovasi teknologi yang keren dari siswa kelas 9C! 🎓💡 Kami fokus pada 4 bidang teknologi: Lingkungan, Pangan, Informasi, dan Komunikasi. Keren kan? 😎\n\n";
  }

  if (message.toLowerCase().includes("lingkungan")) {
    response += "Tim Teknologi Lingkungan kami sedang mengembangkan Filter Air Ramah Lingkungan. Bayangkan bisa minum air bersih tanpa merusak alam! 🌿💧 Keren ya?\n\n";
  }

  if (message.toLowerCase().includes("pangan")) {
    response += "Tim Teknologi Pangan kami sibuk mengembangkan Tempe, Yoghurt Probiotik, dan Tape yang super enak dan sehat! 🍽️🥛 Mau coba?\n\n";
  }

  if (message.toLowerCase().includes("informasi")) {
    response += "Tim Teknologi Informasi kami sedang membangun website keren ini! 🖥️🌐 Gimana menurutmu? Keren kan?\n\n";
  }

  if (message.toLowerCase().includes("komunikasi")) {
    response += "Tim Teknologi Komunikasi kami sedang membuat Kampanye Edukasi Teknologi yang seru abis! 📢🎨 Penasaran?\n\n";
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
                  text: `${processMessage(message)}`,
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