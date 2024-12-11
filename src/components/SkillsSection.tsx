import { portfolioConfig } from '@/config/portfolio';

const getColorGradient = (percentage: number) => {
    return `linear-gradient(to bottom, 
        rgba(59, 130, 246, ${percentage * 0.003}), 
        rgba(147, 51, 234, ${percentage * 0.004})
    )`;
};

export default function SkillsSection() {
    const { skills } = portfolioConfig;

    // Take only the first 13 skills to form a rhombus pattern
    const rhombusSkills = skills.items.slice(0, 13);

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center px-2 py-20" id="skills">
            <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center">
                <h2 className="text-4xl md:text-3xl sm:text-2xl font-bold mb-16 text-white/90">Skills</h2>

                <div className="rhombus-grid-container">
                    <div className="rhombus-grid">
                        {rhombusSkills.map(({ name, icon: Icon, percentage = 80 }, index) => (
                            <div key={name} className="rhombus-item">
                                <div className="rhombus-content group">
                                    <div className="rhombus-inner">
                                        {/* Liquid fill effect */}
                                        <div
                                            className="absolute bottom-0 left-0 w-full transition-all duration-500 ease-out group-hover:opacity-70"
                                            style={{
                                                height: `${percentage}%`,
                                                background: getColorGradient(percentage),
                                                transform: 'translateY(100%)',
                                                animation: `fillUp 1s ease-out forwards ${index * 0.1}s`
                                            }}
                                        />

                                        {/* Glass reflection */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                                        <Icon className="relative z-10 w-6 h-6 text-blue-400" />
                                        <span className="relative z-10 text-xs text-white text-center mt-1">{name}</span>
                                        <span
                                            className="relative z-10 text-xs bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
                                        >
                                            {percentage}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 