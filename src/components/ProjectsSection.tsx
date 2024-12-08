import { portfolioConfig } from '@/config/portfolio';
import Image from 'next/image';

export default function ProjectsSection() {
    const { projects } = portfolioConfig;

    return (
        <section className="w-full max-w-6xl" id="projects">
            <h2 className="text-2xl font-bold mb-4 text-center">{projects.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
                {projects.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.items.map((project) => (
                    <div
                        key={project.title}
                        className="relative group rounded-xl overflow-hidden h-[400px] transition-all duration-300 hover:shadow-2xl"
                    >
                        <div className="absolute inset-0">
                            <Image
                                src={project.coverImage}
                                alt={project.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className={`absolute inset-0 ${project.gradient || 'bg-black/50'}`} />
                        </div>

                        <div className="relative h-full p-6 flex flex-col justify-end text-white">
                            <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-8">
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>

                                <p className="text-gray-100 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {project.description}
                                </p>

                                <div className="mb-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {project.skills.map(({ name, icon: Icon }) => (
                                        <div
                                            key={name}
                                            className="flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-white/10 backdrop-blur-sm"
                                        >
                                            <Icon className="w-4 h-4" />
                                            <span>{name}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-blue-300 transition-colors"
                                        >
                                            GitHub →
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-blue-300 transition-colors"
                                        >
                                            Live Demo →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 