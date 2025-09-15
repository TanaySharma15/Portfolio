"use client";

import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack property booking platform with real-time availability, favorites, reviews, and secure payments. Combines responsive design, advanced database management, and optional AI recommendations to deliver a complete user-centric rental experience.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Collaborative Code Editor",
    description:
      "A real-time collaborative coding platform with syntax highlighting, multi-user editing, and code execution capabilities. Perfect for pair programming, interviews, or online learning, showcasing full-stack architecture and real-time WebSocket integration.",
    image: "/task-management-dashboard.png",
    technologies: ["React", "Express", "MongoDB", "Socket.io", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Evalia",
    description:
      "Evalia analyzes resumes, generates tailored job descriptions, conducts AI-powered interviews, and provides detailed performance summaries. It helps job seekers identify strengths, improve skills, and prepare effectively for real-world opportunities.",
    image: "/ai-content-generator-interface.png",
    technologies: ["Next.js", "OpenAI API", "Prisma", "Tailwind", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Youtube Thumbnail generator",
    description:
      "A dynamic AI-powered YouTube thumbnail generator that creates eye-catching, high-quality thumbnails in seconds. Users can customize designs, text, and visuals, making content stand out while showcasing AI integration, full-stack development, and intuitive user experience.",
    image: "/task-management-dashboard.png",
    technologies: ["React", "Express", "MongoDB", "Socket.io", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="bg-blue-500 px-10 py-2 rounded-full text-white mt-6 hover:cursor-pointer hover:bg-blue-700">
                    Visit
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <div
                key={index}
                className="group rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5">
                  <h4 className="font-semibold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
