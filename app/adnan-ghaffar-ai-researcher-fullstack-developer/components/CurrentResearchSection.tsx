// app/components/CurrentResearchSection.tsx
import React from 'react';
import {
  Zap, Cpu, GitBranch, Shield, Users, Target,
  TrendingUp, Globe, Database, Network, Rocket, MessageSquare,
  ArrowRight, CheckCircle
} from 'lucide-react';

const CurrentResearchSection = () => {
  const researchAreas = [
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "AI Workflow Optimization",
      description: "Enhancing efficiency and reliability of AI-driven processes across organizational systems",
      gradient: "from-purple-500 to-pink-500",
      focus: ["Process automation", "Efficiency enhancement", "System integration"],
      status: "Active Research"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Responsible AI Systems",
      description: "Developing ethical frameworks and transparent methodologies for AI implementation",
      gradient: "from-pink-500 to-rose-500",
      focus: ["Ethical considerations", "Transparency", "Bias mitigation"],
      status: "Ongoing Study"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalable Automation Research",
      description: "Designing automation systems that maintain performance and reliability at scale",
      gradient: "from-rose-500 to-orange-500",
      focus: ["System longevity", "Scalability", "Performance optimization"],
      status: "Core Focus"
    }
  ];

  const collaborationAreas = [
    {
      type: "Researchers",
      description: "Academic and industry research partnerships",
      icon: <Users className="w-6 h-6" />
    },
    {
      type: "Technologists",
      description: "Technical innovation and development collaboration",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      type: "Institutions",
      description: "Organizational research initiatives and programs",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const emergingChallenges = [
    "Ethical AI implementation frameworks",
    "Cross-industry automation standards",
    "Long-term system maintainability",
    "Human-AI collaboration models",
    "Sustainable AI development practices",
    "Real-time decision system optimization"
  ];

  return (
    <section id="current-research" className="relative py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Abstract network pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="networkPattern" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="4" fill="currentColor" />
                <circle cx="10" cy="10" r="2" fill="currentColor" />
                <circle cx="70" cy="10" r="2" fill="currentColor" />
                <circle cx="10" cy="70" r="2" fill="currentColor" />
                <circle cx="70" cy="70" r="2" fill="currentColor" />
                <path d="M40 40 L10 10 M40 40 L70 10 M40 40 L10 70 M40 40 L70 70"
                  stroke="currentColor" strokeWidth="0.5" fill="none" />
                <path d="M10 10 L70 10 L70 70 L10 70 Z"
                  stroke="currentColor" strokeWidth="0.5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#networkPattern)" />
          </svg>
        </div>

        {/* Gradient accents */}
        <div className="absolute top-1/3 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <Rocket className="w-8 h-8 text-purple-500 mr-3" />
            <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Ongoing Research Initiatives
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Current Areas of Exploration in AI & Automation
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Advancing the frontiers of artificial intelligence through focused research on emerging challenges and collaborative innovation
          </p>
        </div>

        {/* Introduction Content */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 border-gradient-to-r">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start mb-6">
                  <div className="mr-4 p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10">
                    <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                      Emerging Research Focus
                    </h3>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Adnan continues to explore <strong className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">emerging challenges and opportunities</strong> in artificial intelligence and automation research. Current interests include AI workflow optimization, responsible AI systems, and scalable automation research that accounts for ethical considerations and system longevity.
                </p>
              </div>

              <div>
                <div className="flex items-start mb-6">
                  <div className="mr-4 p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
                    <Network className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      Collaborative Approach
                    </h3>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  He remains <strong className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">open to collaboration</strong> with researchers, technologists, and institutions interested in advancing applied AI through shared knowledge and experimentation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Research Areas Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Primary Research Areas
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-gradient-to-r transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${area.gradient}`}>
                    <div className="text-white">{area.icon}</div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10">
                    <span className="text-xs font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                      {area.status}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {area.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {area.description}
                </p>

                {/* Focus Areas */}
                <div className="space-y-3">
                  {area.focus.map((focus, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mr-3"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{focus}</span>
                    </div>
                  ))}
                </div>

                {/* Progress Indicator */}
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Research Progress</span>
                    <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                      Active
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                      style={{ width: `${70 + (index * 10)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Collaboration Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5 rounded-2xl p-8 border-gradient-to-r">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center mb-4">
                <Users className="w-10 h-10 text-purple-500 mr-3" />
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Open to Collaboration
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Advancing applied AI through shared knowledge and experimentation with diverse partners
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {collaborationAreas.map((collab, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800/50 rounded-xl p-6 text-center group hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 mb-4">
                    {collab.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {collab.type}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {collab.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      <span>Open for collaboration</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              {/* Updated button with Calendly link */}
              <a
                href="https://calendly.com/adnanghaffar"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-3" />
                Discuss Research Collaboration
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Emerging Challenges */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 border-gradient-to-r">
            <div className="flex items-center mb-6">
              <div className="mr-4 p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10">
                <Target className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Emerging Challenges
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {emergingChallenges.map((challenge, index) => (
                <div key={index} className="flex items-start p-4 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5">
                  <CheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-cyan-50 dark:from-gray-800/30 dark:to-cyan-900/10 rounded-2xl p-8 border-gradient-to-r">
            <div className="flex items-center mb-6">
              <div className="mr-4 p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
                <Database className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Research Objectives
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Short-term Goals</h4>
                <ul className="space-y-2">
                  {[
                    "Develop ethical AI implementation frameworks",
                    "Establish scalable automation benchmarks",
                    "Publish collaborative research findings"
                  ].map((goal, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mr-2"></div>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Long-term Vision</h4>
                <ul className="space-y-2">
                  {[
                    "Create sustainable AI development practices",
                    "Establish industry-wide automation standards",
                    "Advance human-AI collaboration models"
                  ].map((vision, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mr-2"></div>
                      {vision}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="inline-block max-w-2xl">
            <div className="relative bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5 rounded-2xl p-8 border-gradient-to-r overflow-hidden">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Join the Research Conversation
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  Interested in collaborating on AI and automation research? Let&apos;s explore how shared knowledge and experimentation can advance the field of applied artificial intelligence.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/adnanghaffar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Start Research Discussion
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* No section connector as this is the final content section */}
      </div>
    </section>
  );
};

export default CurrentResearchSection;