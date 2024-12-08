import { portfolioConfig } from '@/config/portfolio';

export default function SkillsSection() {
    const { skills } = portfolioConfig;

    return (
        <section className="w-full max-w-2xl" id="skills">
            <h2 className="text-2xl font-bold mb-4 text-center">{skills.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {skills.items.map(({ name, icon: Icon, description }) => (
                    <div
                        key={name}
                        className="flex flex-col items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 transition-transform hover:scale-105"
                        title={description}
                    >
                        <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm">{name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
} 