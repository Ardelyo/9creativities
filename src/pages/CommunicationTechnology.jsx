import React from 'react';
import { Wifi } from 'lucide-react';
import TeamPageLayout from '../components/TeamPageLayout';
import TeamMembersGrid from '../components/TeamMembersGrid';
import ProjectShowcase from '../components/ProjectShowcase';

const CommunicationTechnology = () => {
  const teamMembers = [
    { name: "Julia", role: "Ketua Tim", image: "/2_20240926_191949_0000.png" },
    { name: "Zaki", role: "Anggota Tim", image: "/3_20240926_191950_0001.png" },
    { name: "Pandu", role: "Anggota Tim", image: "/4_20240926_191950_0002.png" },
    { name: "Ilham", role: "Anggota Tim", image: "/5_20240926_191951_0003.png" },
    { name: "Rahmat", role: "Anggota Tim", image: "/6_20240926_191951_0004.png" },
    { name: "Salwa", role: "Anggota Tim", image: "/7_20240926_191951_0005.png" },
    { name: "Keyla", role: "Anggota Tim", image: "/8_20240926_191952_0006.png" },
    { name: "Andika", role: "Anggota Tim", image: "/9_20240926_191952_0007.png" },
    { name: "Aulia", role: "Anggota Tim", image: "/10_20240926_191952_0008.png" },
  ];

  const projects = [
    {
      id: 1,
      title: "Dokumentasi Multimedia",
      description: "Dokumentasi komprehensif proyek-proyek Nine Creativities.",
      type: "communication",
      howItWorks: [
        "Perencanaan konten multimedia",
        "Produksi video dan foto",
        "Pengeditan dan post-production",
        "Distribusi konten",
        "Pengumpulan feedback"
      ],
      impact: "Meningkatkan visibilitas dan pemahaman tentang proyek-proyek inovatif.",
      photos: [
        "/5_20240926_191951_0003.png",
        "/6_20240926_191951_0004.png",
        "/7_20240926_191951_0005.png"
      ]
    }
  ];

  const backgroundPattern = `
    <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="20" stroke="currentColor" fill="none" />
      <path d="M25 5 C35 25 15 25 25 45" stroke="currentColor" fill="none" />
    </svg>
  `;

  return (
    <TeamPageLayout
      teamName="Teknologi Komunikasi"
      accentColor="purple"
      gradientFrom="purple-400"
      gradientTo="pink-500"
      icon={Wifi}
      backgroundPattern={backgroundPattern}
    >
      <div className="space-y-16">
        <TeamMembersGrid teamMembers={teamMembers} accentColor="purple" />
        {projects.map(project => (
          <ProjectShowcase 
            key={project.id} 
            project={project}
            accentColor="purple"
          />
        ))}
      </div>
    </TeamPageLayout>
  );
};

export default CommunicationTechnology;