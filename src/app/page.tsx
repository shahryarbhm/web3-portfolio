import { portfolioConfig } from '@/config/portfolio';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import WorkExperienceSection from '@/components/WorkExperienceSection';

export default function Home() {
  const { siteInfo } = portfolioConfig;

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <main className="flex flex-col gap-24 items-center px-4 md:ml-20">
        <HeroSection />

        <div className="w-full max-w-6xl mx-auto space-y-24">
          <WorkExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>

      <footer className="text-center text-sm text-gray-600 dark:text-gray-400 mt-16 mb-24 md:mb-16">
        <p>{siteInfo.copyright}</p>
      </footer>
    </div>
  );
}
