import { portfolioConfig } from '@/config/portfolio';

const getColorGradient = (percentage: number) => {
    // Red for low percentages, yellow for medium, green for high
    if (percentage < 50) {
        // Red to Yellow gradient
        return `linear-gradient(to bottom, 
      rgba(239, 68, 68, 0.2), 
      rgba(239, 68, 68, 0.4)
    )`;
    } else if (percentage < 75) {
        // Yellow to Light Green gradient
        return `linear-gradient(to bottom, 
      rgba(234, 179, 8, 0.2), 
      rgba(234, 179, 8, 0.4)
    )`;
    } else {
        // Green gradient
        return `linear-gradient(to bottom, 
      rgba(34, 197, 94, 0.2), 
      rgba(34, 197, 94, 0.4)
    )`;
    }
};

export default function SkillsSection() {
    const { skills } = portfolioConfig;

    return (
        <section className="w-full max-w-2xl mx-auto px-4" id="skills">
            <h2 className="text-2xl font-bold mb-8 text-center">{skills.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {skills.items.map(({ name, icon: Icon, description, percentage = 80 }) => (
                    <div
                        key={name}
                        className="relative flex flex-col items-center gap-2 bg-black/20 backdrop-blur-lg rounded-xl p-6 transition-all hover:scale-105 overflow-hidden group"
                        title={description}
                    >
                        {/* Liquid fill effect */}
                        <div
                            className="absolute bottom-0 left-0 w-full transition-all duration-500 ease-out group-hover:opacity-70"
                            style={{
                                height: `${percentage}%`,
                                background: getColorGradient(percentage),
                                transform: 'translateY(100%)',
                                animation: 'fillUp 1s ease-out forwards'
                            }}
                        />

                        {/* Glass reflection */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                        <Icon className="relative z-10 w-8 h-8 text-gray-200" />
                        <span className="relative z-10 text-sm">{name}</span>
                        <span
                            className={`relative z-10 text-xs ${percentage < 50 ? 'text-red-400' :
                                    percentage < 75 ? 'text-yellow-400' :
                                        'text-green-400'
                                }`}
                        >
                            {percentage}%
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
} 