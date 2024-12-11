import { portfolioConfig } from '@/config/portfolio';

export default function WorkExperienceSection() {
    const { workExperience } = portfolioConfig;

    return (
        <section className="relative min-h-screen w-[98%] mx-auto px-8 py-20" id="experience">
            {/* Background gradient */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-purple-900 to-purple-950" />

                {/* Animated circles */}
                <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
                <div className="absolute top-0 right-4 w-96 h-96 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
            </div>

            <h2 className="text-4xl font-bold mb-16 text-center text-white/90">
                Work
            </h2>

            <div className="space-y-16 backdrop-blur-sm bg-black/10 rounded-2xl p-12">
                {workExperience.items.map((experience) => (
                    <div
                        key={experience.title}
                        className="relative pl-10 border-l-2 border-blue-500/20 hover:border-purple-500/40 transition-colors"
                    >
                        {/* Title and Duration */}
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-2xl font-semibold text-blue-400">
                                    {experience.title}
                                </h3>
                                <p className="text-base text-gray-400 mt-1">
                                    {experience.duration}
                                </p>
                            </div>
                            <div className="text-right">
                                <span className="text-gray-300">
                                    {experience.company}
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                            {experience.description}
                        </p>

                        {/* Activities */}
                        <div className="space-y-3 mb-6">
                            <h4 className="text-base font-medium text-gray-400">Activities</h4>
                            <ul className="list-none space-y-3">
                                {experience.activities.map((activity, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-blue-400 mr-3">-</span>
                                        <span className="text-gray-300 text-lg">{activity}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                            <h4 className="text-base font-medium text-gray-400 mb-3">Techniques</h4>
                            <p className="text-gray-300 text-lg">
                                {experience.techniques}
                            </p>
                        </div>

                        {/* Location */}
                        <div className="mt-6 text-base text-gray-400">
                            {experience.company} | {experience.location}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 