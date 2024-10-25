import React from 'react';
import { Cpu } from 'lucide-react';
import TeamPageLayout from '../components/TeamPageLayout';
import TeamMembersGrid from '../components/TeamMembersGrid';
import ProjectShowcase from '../components/ProjectShowcase';

const InformationTechnology = () => {
  const teamMembers = [
    { name: "Lio", role: "Ketua Tim", image: "/ardellio.jpg" },
    { name: "Cinta", role: "Anggota Tim", image: "/cinta.jpg" },
    { name: "Satria", role: "Anggota Tim", image: "/Satria.jpg" },
    { name: "Dimas", role: "Anggota Tim", image: "/dimas.jpg" },
    { name: "Alea", role: "Anggota Tim", image: "/Alea.jpg" },
    { name: "Agnia", role: "Anggota Tim", image: "/Agnia.jpg" },
    { name: "Ritme", role: "Anggota Tim", image: "/IMG_20240920_161517.png" },
    { name: "Geovart", role: "Anggota Tim", image: "/geo.png" },
  ];

  const projects = [
    {
      id: 1,
      title: "Website Nine Creativities",
      description: "Platform showcase proyek inovatif kelas 9C.",
      type: "tech",
      howItWorks: [
        "Pengembangan UI/UX yang responsif",
        "Implementasi fitur interaktif",
        "Integrasi konten multimedia",
        "Optimasi performa website",
        "Pengujian lintas platform"
      ],
      impact: "Memfasilitasi kolaborasi dan berbagi pengetahuan antar tim.",
      photos: [
        "/2_20240926_191949_0000.png",
        "/3_20240926_191950_0001.png",
        "/4_20240926_191950_0002.png"
      ]
    }
  ];

  const backgroundPattern = `
    <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="30" height="30" stroke="currentColor" fill="none" />
      <circle cx="25" cy="25" r="8" stroke="currentColor" fill="none" />
    </svg>
  `;

  return (
    <TeamPageLayout
      teamName="Teknologi Informasi"
      accentColor="blue"
      gradientFrom="blue-400"
      gradientTo="indigo-600"
      icon={Cpu}
      backgroundPattern={backgroundPattern}
    >
      <div className="space-y-16">
        <TeamMembersGrid teamMembers={teamMembers} accentColor="blue" />
        {projects.map(project => (
          <ProjectShowcase 
            key={project.id} 
            project={project}
            accentColor="blue"
          />
        ))}
      </div>
    </TeamPageLayout>
  );
};

export default InformationTechnology;