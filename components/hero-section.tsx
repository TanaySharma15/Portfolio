"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
const roles = [
  "Full Stack Developer",
  "Backend Engineer",
  "DevOps Enthusiast",
  "Web3 Developer",
  "Problem Solver",
  "Tech Innovator",
];

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentText = roles[currentRole];

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentText.substring(0, displayText.length - 1)
            : currentText.substring(0, displayText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

  useEffect(() => {
    if (typeof window !== "undefined" && gsap) {
      // Animate hero elements on load
      const tl = gsap.timeline({ delay: 1 });

      tl.fromTo(
        ".hero-title",
        { opacity: 0, y: 50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          ".hero-buttons",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.3"
        );
    }
  }, []);

  useEffect(() => {
    const checkButtonStyles = () => {
      const button = document.querySelector(".debug-button") as HTMLElement;
      if (button) {
        const computedStyles = window.getComputedStyle(button);
        console.log(
          "[v0] Button background color:",
          computedStyles.backgroundColor
        );
        console.log("[v0] Button text color:", computedStyles.color);
        console.log("[v0] Button border:", computedStyles.border);
      }
    };

    // Check styles after component mounts
    setTimeout(checkButtonStyles, 1000);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl floating-animation" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl floating-animation"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl floating-animation"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Tanay Sharma</span>
          </h1>

          <div className="hero-subtitle text-2xl md:text-4xl text-muted-foreground mb-8 h-16 flex items-center justify-center">
            <span className="border-r-2 border-emerald-600 pr-2 animate-pulse">
              {displayText}
            </span>
          </div>

          <p className="hero-description text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about creating innovative solutions and building scalable
            applications that make a difference. Let's turn ideas into reality.
          </p>
        </div>

        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div
            className="debug-button"
            onClick={scrollToProjects}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                scrollToProjects();
              }
            }}
            style={{
              display: "inline-block",
              padding: "16px 32px",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#059669",
              color: "#ffffff",
              border: "none",
              outline: "none",
              textDecoration: "none",
              userSelect: "none",
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.backgroundColor = "#047857";
              target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.backgroundColor = "#059669";
              target.style.transform = "scale(1)";
            }}
          >
            View My Work
          </div>

          <button
            onClick={scrollToContact}
            className="cursor-hover px-8 py-4 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300"
            style={{
              backgroundColor: "transparent",
              color: "rgb(5, 150, 105)",
              border: "2px solid rgb(5, 150, 105)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgb(5, 150, 105)";
              e.currentTarget.style.color = "rgb(255, 255, 255)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "rgb(5, 150, 105)";
            }}
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-emerald-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-emerald-600 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
