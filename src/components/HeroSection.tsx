import { portfolioConfig } from '@/config/portfolio';

export default function HeroSection() {
    const { siteInfo } = portfolioConfig;

    return (
        <section
            className="relative min-h-screen w-full flex items-center justify-center m-4"
            id="home"
        >
            {/* Background container with border radius */}
            <div className="absolute inset-4 rounded-2xl overflow-hidden">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-900/50 dark:via-purple-900/50 dark:to-pink-900/50" />

                {/* Animated circles */}
                <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/30 dark:bg-blue-700/30 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
                <div className="absolute top-0 right-4 w-72 h-72 bg-purple-400/30 dark:bg-purple-700/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400/30 dark:bg-pink-700/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                    {siteInfo.title}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {siteInfo.description}
                </p>
            </div>
        </section>
    );
} 