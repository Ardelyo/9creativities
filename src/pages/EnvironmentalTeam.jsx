import React from 'react';
import { Droplet } from 'lucide-react';
import TeamPageLayout from '../components/TeamPageLayout';
import TeamMembersGrid from '../components/TeamMembersGrid';
import ProjectShowcase from '../components/ProjectShowcase';

const EnvironmentalTeam = () => {
  const teamMembers = [
    { name: "Aira", role: "Ketua Tim", image: "https://iili.io/2FQOQuS.md.png" },
    { name: "Asyifa R", role: "Anggota Tim", image: "https://iili.io/2FQNp7p.md.png" },
    { name: "Anandita", role: "Anggota Tim", image: "https://iili.io/2FQNheS.md.png" },
    { name: "Noval", role: "Anggota Tim", image: "https://iili.io/2FQOGZF.md.png" },
    { name: "Indina", role: "Anggota Tim", image: "https://iili.io/2FQeFwP.md.png" },
    { name: "Ashyffa K", role: "Anggota Tim", image: "https://iili.io/2FQOkuI.md.png" },
    { name: "Aldy", role: "Anggota Tim", image: "https://iili.io/2FQObne.md.png" },
    { name: "Bayu P", role: "Anggota Tim", image: "https://iili.io/2FQNm2R.md.png" },
  ];

  const projects = [
    {
      id: 1,
      title: "Filter Air Ramah Lingkungan",
      description: "Sistem pemurnian air menggunakan bahan alami dan berkelanjutan.",
      image: "/placeholder.svg",
      type: "water",
      details: "Proyek Filter Air Ramah Lingkungan kami menggunakan kombinasi bahan alami seperti pasir, kerikil, arang aktif, dan tanaman air untuk menciptakan sistem pemurnian air yang efektif dan ramah lingkungan.",
      howItWorks: [
        "Pengumpulan dan persiapan bahan filter alami",
        "Penyusunan lapisan filter dalam wadah berkelanjutan",
        "Proses filtrasi air melalui lapisan-lapisan bahan alami",
        "Pengujian kualitas air hasil filtrasi",
        "Perawatan dan regenerasi bahan filter secara berkala",
        "Edukasi masyarakat tentang penggunaan dan manfaat filter air"
      ],
      impact: "Proyek ini dapat menyediakan akses air bersih yang terjangkau bagi masyarakat, mengurangi risiko penyakit yang ditularkan melalui air, dan meningkatkan kesadaran tentang pentingnya konservasi air.",
      photos: [
        "/IMG-20240920-WA0078.jpg", "/IMG-20240920-WA0076.jpg", "/IMG-20240920-WA0081.jpg",
        "/IMG-20240920-WA0072.jpg", "/IMG-20240920-WA0065.jpg", "/IMG-20240920-WA0066.jpg",
        "/IMG-20240920-WA0062.jpg", "/IMG-20240920-WA0061.jpg", "/IMG-20240920-WA0063.jpg",
        "/IMG-20240920-WA0060.jpg", "/IMG-20240920-WA0059.jpg", "/IMG-20240920-WA0058.jpg"
      ]
    }
  ];

  const backgroundPattern = `
    <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 5 L45 15 L45 35 L25 45 L5 35 L5 15 Z" stroke="currentColor" fill="none"/>
    </svg>
  `;

  return (
    <TeamPageLayout
      teamName="Teknologi Lingkungan"
      accentColor="green"
      gradientFrom="green-400"
      gradientTo="emerald-600"
      icon={Droplet}
      backgroundPattern={backgroundPattern}
    >
      <div className="space-y-16">
        <TeamMembersGrid teamMembers={teamMembers} accentColor="green" />
        {projects.map(project => (
          <ProjectShowcase 
            key={project.id} 
            project={project}
            accentColor="green"
          />
        ))}
      </div>
    </TeamPageLayout>
  );
};

export default EnvironmentalTeam;