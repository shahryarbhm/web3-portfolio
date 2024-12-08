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
                        className="border dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        {project.image && (
                            <div className="relative h-48 w-full">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {project.description}
                            </p>

                            <div className="mb-4 flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        GitHub →
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        Live Demo →
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 