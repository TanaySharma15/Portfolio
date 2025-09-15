"use client";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a passionate Full-Stack Developer who loves building modern,
                scalable, and user-friendly web applications. I specialize in
                Next.js, React, Node.js, PostgreSQL, and Prisma, with strong
                knowledge of backend architecture, APIs, and real-time systems.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                My goal is to craft high-quality, performance-driven
                applications that not only work seamlessly but also deliver a
                great user experience. Whether it’s developing a SaaS platform,
                an e-commerce store, or a custom AI-powered solution, I’m
                excited to bring ideas to life through clean code and creative
                problem-solving.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community through blog posts and mentoring.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">
                    20+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">
                    Full Stack Projects Completed
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-card p-8 rounded-2xl shadow-xl">
                <img
                  src="/Tanay.jpg"
                  alt="Tanay Sharma"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary to-secondary rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
