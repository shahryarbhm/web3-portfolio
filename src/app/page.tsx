import { portfolioConfig } from '@/config/portfolio';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const { siteInfo } = portfolioConfig;
  
  return (
    <div className="grid grid-rows-[60px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="row-start-1">
        <Navbar />
      </div>

      <main className="flex flex-col gap-24 row-start-2 items-center">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="row-start-3 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>{siteInfo.copyright}</p>
      </footer>
    </div>
  );
}
