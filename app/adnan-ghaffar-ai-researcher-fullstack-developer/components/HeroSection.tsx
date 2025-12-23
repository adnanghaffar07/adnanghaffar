// app/components/HeroSection.tsx
'use client';

import React from 'react';
import { ChevronDown, Cpu, Code2, Brain, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToResearch = () => {
    const researchSection = document.getElementById('research-focus');
    if (researchSection) {
      researchSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const expertiseAreas = [
    { icon: <Brain className="w-5 h-5" />, text: "AI Research" },
    { icon: <Cpu className="w-5 h-5" />, text: "Automation" },
    { icon: <Code2 className="w-5 h-5" />, text: "System Design" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black text-gray-900 dark:text-white px-4 py-12 md:py-20">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Animated gradient line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 via-30% to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column - Hero Text */}
          <div className="lg:w-1/2 text-left">
            {/* Expertise Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {expertiseAreas.map((area, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 dark:border-purple-500/10 backdrop-blur-sm"
                >
                  <span className="text-purple-600 dark:text-purple-400">
                    {area.icon}
                  </span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {area.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight">
              <span className="block bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Adnan
              </span>
              <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                Ghaffar
              </span>
            </h1>

            {/* Subtitle */}
            <div className="space-y-4 mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                AI Researcher & Automation Architect
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 font-light">
                Technology Thought Leader bridging research with real-world AI implementation
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={scrollToResearch}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Explore Research Focus
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#current-research"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('current-research')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300"
              >
                View Current Research
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-8">
              <div className="text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
              <div className="text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  20+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Research Papers</div>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
              <div className="text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  8+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Media Features</div>
              </div>
            </div>
          </div>

          {/* Right Column - About Card */}
          <div className="lg:w-1/2">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gradient-to-r shadow-xl">
              {/* Card Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                    About
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-l from-blue-500 to-transparent"></div>
                </div>
              </div>

              {/* Main Description */}
              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                    Adnan Ghaffar
                  </span> is an AI researcher and automation architect with over a decade of experience working at the intersection of artificial intelligence, machine learning, and real-world system design.
                </p>

                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 border border-purple-500/10">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Research Focus
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    His work focuses on understanding how intelligent systems behave in production environments and how applied artificial intelligence can be used responsibly to solve complex operational problems.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-blue-500/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Cpu className="w-5 h-5 text-blue-500" />
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Machine Learning Practitioner
                    </h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    As a machine learning practitioner, Adnan is deeply interested in how research concepts translate into practical systems that function reliably under real-world constraints.
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-8 p-3 md:pt-6 border-t border-gradient-to-r relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">&quot;</span>
                  </div>
                </div>
                <p className="text-center text-gray-600 dark:text-gray-400 italic">
                  &quot;Driven by curiosity and a strong commitment to building systems that are both technically sound and practically useful.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Clickable */}
        <div className="mt-16 text-center">
          <button
            onClick={scrollToResearch}
            className="group inline-flex flex-col items-center text-gray-400 hover:text-purple-500 transition-colors"
            aria-label="Scroll to research section"
          >
            <span className="text-sm mb-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent font-medium">
              Explore Research
            </span>
            <div className="animate-bounce">
              <ChevronDown className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </div>
          </button>
        </div>
      </div>

      {/* Custom CSS for grid pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(147, 51, 234, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(147, 51, 234, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;