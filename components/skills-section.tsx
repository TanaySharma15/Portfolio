"use client";

import { useEffect, useRef } from "react";

const skillsData = [
  // Line 1 - Frontend & UI
  {
    line: 1,
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "📘" },
      { name: "JavaScript", icon: "🟨" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Vue.js", icon: "💚" },
      { name: "HTML5", icon: "🧡" },
      { name: "CSS3", icon: "🔵" },
      { name: "Sass", icon: "🌸" },
      { name: "Figma", icon: "🎯" },
    ],
  },
  // Line 2 - Backend & Database
  {
    line: 2,
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Express.js", icon: "🚀" },
      { name: "FastAPI", icon: "⚡" },
      { name: "GraphQL", icon: "🔗" },
      { name: "Redis", icon: "🔴" },
      { name: "Prisma", icon: "💎" },
      { name: "MySQL", icon: "🐬" },
    ],
  },
  // Line 3 - DevOps & Tools
  {
    line: 3,
    skills: [
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "⚙️" },
      { name: "Git", icon: "📝" },
      { name: "Linux", icon: "🐧" },
      { name: "Nginx", icon: "🌐" },
      { name: "CI/CD", icon: "🔄" },
      { name: "Jest", icon: "🃏" },
      { name: "Webpack", icon: "📦" },
      { name: "Vite", icon: "⚡" },
    ],
  },
];

export default function SkillsSection() {
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateScroll = (
      element: HTMLElement,
      direction: number,
      speed: number
    ) => {
      let scrollAmount = 0;
      const scroll = () => {
        scrollAmount += direction * speed;
        if (element) {
          element.style.transform = `translateX(${scrollAmount}px)`;
          if (Math.abs(scrollAmount) >= element.scrollWidth / 2) {
            scrollAmount = 0;
          }
        }
        requestAnimationFrame(scroll);
      };
      scroll();
    };

    if (line1Ref.current) animateScroll(line1Ref.current, -1, 0.5);
    if (line2Ref.current) animateScroll(line2Ref.current, 1, 0.3);
    if (line3Ref.current) animateScroll(line3Ref.current, -1, 0.4);
  }, []);

  return (
    <section id="skills" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="gradient-text">Skills</span>
          </h2>

          <div className="space-y-8">
            {skillsData.map((lineData) => (
              <div key={lineData.line} className="relative">
                <div className="overflow-hidden">
                  <div
                    ref={
                      lineData.line === 1
                        ? line1Ref
                        : lineData.line === 2
                        ? line2Ref
                        : line3Ref
                    }
                    className="flex gap-6 whitespace-nowrap"
                    style={{ width: "max-content" }}
                  >
                    {/* Duplicate skills for seamless loop */}
                    {[...lineData.skills, ...lineData.skills].map(
                      (skill, index) => (
                        <div
                          key={`${skill.name}-${index}`}
                          className="skill-item flex items-center gap-3 bg-card/50 backdrop-blur-sm px-6 py-4 rounded-full border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer group hover:scale-110 hover:bg-primary/10"
                        >
                          <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                            {skill.icon}
                          </span>
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hover over any skill to see it in action. These technologies power
              my development workflow and enable me to build scalable, modern
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
