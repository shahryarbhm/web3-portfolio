import { portfolioConfig } from '@/config/portfolio';

export default function HeroSection() {
    const { siteInfo } = portfolioConfig;

    return (
        <section className="text-center max-w-3xl" id="home">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                {siteInfo.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
                {siteInfo.description}
            </p>
        </section>
    );
} 