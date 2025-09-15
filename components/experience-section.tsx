"use client";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Secure Entry",
    period: "March 2025 - July 2025",
    description:
      "Built and maintained multiple projects from conception to deployment. Specialized in real-time applications.",
    technologies: [
      "React.js",
      "Next.js",
      "Express.js",
      "Github",
      "Redis",
      "PostgreSQL",
      "Websockets",
    ],
  },
  {
    title: "Backend Developer",
    company: "Care Connect",
    period: "July 2025 - August 2025",
    description:
      "Developed robust APIs and microservices architecture. Optimized database performance and implemented automated testing strategies.",
    technologies: [
      "Express.js",
      "Typescript",
      "PostgreSQL",
      "Redis",
      "Ngnix",
      "Supabase bucket",
      "Python",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="gradient-text">Experience</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 z-10" />

                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="ml-12 md:ml-0 bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-hover">
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold gradient-text">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">
                          {exp.company}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {exp.period}
                        </p>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
