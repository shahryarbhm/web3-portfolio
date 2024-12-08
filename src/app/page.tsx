import { portfolioConfig } from '@/config/portfolio';

export default function Home() {
  const { siteInfo, skills, featuredProjects } = portfolioConfig;
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        {/* Hero Section */}
        <section className="text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {siteInfo.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {siteInfo.description}
          </p>
        </section>

        {/* Skills Section */}
        <section className="w-full max-w-2xl">
          <h2 className="text-2xl font-bold mb-4 text-center">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div key={skill} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 text-center">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects Preview */}
        <section className="w-full max-w-2xl">
          <h2 className="text-2xl font-bold mb-4 text-center">Featured Projects</h2>
          <div className="grid gap-6">
            {featuredProjects.map((project) => (
              <div key={project.title} className="border dark:border-gray-700 rounded-lg p-6">
                <h3 className="font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <a 
                  href={project.link}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {project.linkText}
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Simplified footer */}
      <footer className="row-start-3 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>{siteInfo.copyright}</p>
      </footer>
    </div>
  );
}
