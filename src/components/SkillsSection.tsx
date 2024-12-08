import { portfolioConfig } from '@/config/portfolio';

export default function SkillsSection() {
    const { skills } = portfolioConfig;

    return (
        <section className="w-full max-w-2xl" id="skills">
            <h2 className="text-2xl font-bold mb-4 text-center">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill) => (
                    <div key={skill} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 text-center">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
} 