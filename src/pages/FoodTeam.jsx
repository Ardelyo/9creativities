import React from 'react';
import { Utensils } from 'lucide-react';
import TeamPageLayout from '../components/TeamPageLayout';
import TeamMembersGrid from '../components/TeamMembersGrid';
import ProjectShowcase from '../components/ProjectShowcase';

const FoodTeam = () => {
  const teamMembers = [
    { name: "Rizka", role: "Ketua Tim", image: "https://iili.io/2FQkugj.md.png" },
    { name: "Fadillah", role: "Anggota Tim", image: "https://iili.io/2FQk20G.md.png" },
    { name: "Nabillah", role: "Anggota Tim", image: "https://iili.io/2FQkIqu.md.png" },
    { name: "Nurul", role: "Anggota Tim", image: "https://iili.io/2FQkf5l.md.png" },
    { name: "Fikri", role: "Anggota Tim", image: "https://iili.io/2FQkqe2.md.png" },
    { name: "Revan", role: "Anggota Tim", image: "https://iili.io/2FQe6WF.md.png" },
    { name: "Keanu", role: "Anggota Tim", image: "https://iili.io/2FQegDP.md.png" },
    { name: "Abyan", role: "Anggota Tim", image: "https://iili.io/2FQeQUv.md.png" },
    { name: "Ridho", role: "Anggota Tim", image: "https://iili.io/2FQekUx.md.png" },
  ];

  const projects = [
    {
      id: 1,
      title: "Produksi Tempe",
      description: "Pengembangan tempe dengan bahan lokal dan proses fermentasi optimal.",
      type: "food",
      howItWorks: [
        "Seleksi dan persiapan kedelai lokal berkualitas",
        "Proses perendaman dan pengupasan kulit kedelai",
        "Perebusan kedelai untuk mensterilkan dan melunakkan",
        "Inokulasi dengan ragi tempe",
        "Fermentasi dalam kondisi terkontrol",
        "Pengemasan dan penyimpanan"
      ],
      impact: "Mendukung petani lokal dan mempromosikan makanan tradisional yang sehat.",
      photos: [
        "/IMG-20240920-WA0049.jpg", "/IMG-20240920-WA0051.jpg", "/IMG-20240920-WA0048.jpg",
        "/IMG-20240920-WA0046.jpg", "/IMG-20240920-WA0045.jpg", "/IMG-20240920-WA0044.jpg"
      ]
    },
    {
      id: 2,
      title: "Produksi Yoghurt",
      description: "Inovasi yoghurt probiotik dengan bahan lokal.",
      type: "food",
      howItWorks: [
        "Seleksi susu berkualitas tinggi",
        "Pasteurisasi susu",
        "Inokulasi dengan kultur probiotik",
        "Fermentasi terkontrol",
        "Pendinginan dan pengemasan"
      ],
      impact: "Meningkatkan kesehatan masyarakat melalui produk probiotik.",
      photos: [
        "/IMG-20240920-WA0037.jpg", "/IMG-20240920-WA0036.jpg", "/IMG-20240920-WA0035.jpg",
        "/IMG-20240920-WA0028.jpg", "/IMG-20240920-WA0025.jpg", "/IMG-20240920-WA0024.jpg"
      ]
    }
  ];

  const backgroundPattern = `
    <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 25C10 15 25 15 25 25C25 35 40 35 40 25" stroke="currentColor" fill="none" strokeWidth="2"/>
    </svg>
  `;

  return (
    <TeamPageLayout
      teamName="Teknologi Pangan"
      accentColor="orange"
      gradientFrom="orange-400"
      gradientTo="red-500"
      icon={Utensils}
      backgroundPattern={backgroundPattern}
    >
      <div className="space-y-16">
        <TeamMembersGrid teamMembers={teamMembers} accentColor="orange" />
        {projects.map(project => (
          <ProjectShowcase 
            key={project.id} 
            project={project}
            accentColor="orange"
          />
        ))}
      </div>
    </TeamPageLayout>
  );
};

export default FoodTeam;