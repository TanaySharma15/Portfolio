"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("");

  const loadingTexts = [
    "Initializing portfolio...",
    "Loading projects...",
    "Setting up animations...",
    "Almost ready...",
    "Welcome!",
  ];

  useEffect(() => {
    let textIndex = 0;
    const textTimer = setInterval(() => {
      if (textIndex < loadingTexts.length) {
        setCurrentText(loadingTexts[textIndex]);
        textIndex++;
      }
    }, 800);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          clearInterval(textTimer);
          if (typeof window !== "undefined" && gsap) {
            gsap.to(".loading-screen", {
              opacity: 0,
              scale: 0.9,
              duration: 0.8,
              ease: "power2.inOut",
              onComplete: () => setIsLoading(false),
            });
          } else {
            setTimeout(() => setIsLoading(false), 500);
          }
          return 100;
        }
        return prev + 1.5;
      });
    }, 40);

    return () => {
      clearInterval(timer);
      clearInterval(textTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-screen fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl floating-animation" />
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-xl floating-animation"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl font-bold gradient-text mb-4 animate-pulse">
            Tanay Sharma
          </h1>
          <p className="text-muted-foreground text-lg h-8 flex items-center justify-center">
            {currentText}
          </p>
        </div>

        <div className="w-80 h-3 bg-muted rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground font-mono">
          {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
}
