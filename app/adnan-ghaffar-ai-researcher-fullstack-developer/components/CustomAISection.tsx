// app/components/CustomAISection.tsx
import React from 'react';
import { Code2, FlaskConical, Building, Target, GitBranch, BarChart3, Shield, Users } from 'lucide-react';

const CustomAISection = () => {
  const researchAreas = [
    {
      icon: <FlaskConical className="w-7 h-7" />,
      title: "Applied Study",
      description: "Treating custom development as a research discipline",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: "Tailored Systems",
      description: "AI solutions adapted to specific organizational contexts",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <GitBranch className="w-7 h-7" />,
      title: "Workflow Design",
      description: "AI-driven processes that evolve with requirements",
      gradient: "from-rose-500 to-red-500"
    },
    {
      icon: <Building className="w-7 h-7" />,
      title: "Enterprise Architecture",
      description: "Experimenting with scalable AI system design",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "Performance Evaluation",
      description: "Long-term assessment of custom AI systems",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Responsible Adaptation",
      description: "Maintaining robustness and transparency",
      gradient: "from-yellow-500 to-green-500"
    }
  ];

  const developmentApproach = [
    {
      step: "01",
      title: "Context Analysis",
      description: "Understanding specific requirements and constraints"
    },
    {
      step: "02",
      title: "Design Patterns",
      description: "Identifying optimal architectures for bespoke systems"
    },
    {
      step: "03",
      title: "Validation Framework",
      description: "Establishing metrics for success and reliability"
    },
    {
      step: "04",
      title: "Long-term Refinement",
      description: "Continuous improvement based on performance data"
    }
  ];

  return (
    <section id="custom-ai" className="relative py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>

        {/* Abstract code pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="codePattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 20 L20 0 M20 40 L40 20" stroke="currentColor" strokeWidth="0.5" fill="none" />
                <path d="M0 20 L20 40 M20 0 L40 20" stroke="currentColor" strokeWidth="0.5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#codePattern)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <Code2 className="w-8 h-8 text-purple-500 mr-3" />
            <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Applied Research in Development
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Custom AI Software Development
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Bridging practical implementation with rigorous research methodology
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column: Introduction */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 border-gradient-to-r">
              <div className="flex items-start mb-6">
                <div className="mr-4 p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10">
                  <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                    Research-Driven Development
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Custom AI Software Development Services, when viewed through a research lens, represent an important discipline in applied artificial intelligence. Adnan studies how tailored AI systems are designed, validated, and refined in practical environments where requirements evolve and data conditions change.
                  </p>
                </div>
              </div>
            </div>

            {/* Development Process */}
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-800/30 dark:to-purple-900/10 rounded-2xl p-6 border-gradient-to-r">
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Development Approach
              </h3>
              <div className="space-y-4">
                {developmentApproach.map((item, index) => (
                  <div key={index} className="flex items-start p-4 rounded-lg bg-white/50 dark:bg-gray-800/30">
                    <div className="mr-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center">
                        <span className="text-white font-bold">{item.step}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Research Areas Grid */}
          <div>
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-4 md:p-8 border-gradient-to-r h-full">
              <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Research Areas
              </h3>

              <div className="grid grid-cols-2 gap-3 md:gap-6">
                {researchAreas.map((area, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/30 dark:to-gray-900/30 rounded-xl p-3 md:p-6 border border-gray-200 dark:border-gray-700 hover:border-gradient-to-r transition-all duration-300 hover:scale-105"
                  >
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${area.gradient} mb-4`}>
                      <div className="text-white">{area.icon}</div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{area.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{area.description}</p>
                  </div>
                ))}
              </div>

              {/* Key Insight */}
              <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border-l-4 border-gradient-to-b from-purple-500 to-blue-500">
                <p className="text-gray-700 dark:text-gray-300 italic">
                  &quot;The focus is not on selling solutions but on understanding how bespoke AI implementations differ from generalized models and what design patterns lead to better outcomes.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Work Description */}
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/30 dark:to-gray-900/30 rounded-2xl p-8 border-gradient-to-r">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Practical Implementation Work
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                This work involves AI driven workflow design, experimentation with enterprise AI architecture, and careful evaluation of how custom systems perform over time.
              </p>

              <div className="space-y-4">
                {[
                  "Evolving requirement analysis in dynamic environments",
                  "Data condition change adaptation strategies",
                  "Enterprise-scale architecture experimentation",
                  "Long-term performance tracking and validation"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Research Contribution */}
            <div className="relative bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5 rounded-2xl p-8 border-gradient-to-r overflow-hidden">
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur-2xl opacity-20"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="mr-4 p-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                    Research Contribution
                  </h3>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  By treating custom AI development as an area of applied study, Adnan contributes insights into how intelligent systems can be responsibly adapted to specific contexts without sacrificing robustness or transparency.
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-md md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">100%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Research Focus</div>
                  </div>
                  <div className="text-center">
                    <div className="text-md md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Context</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Specific Adaptation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-md md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Robustness</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Maintained</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center">
          <div className="inline-block max-w-3xl">
            <div className="relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
              <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-4 md:p-8 border-gradient-to-r">
                <p className="text-md md:text-xl text-gray-700 dark:text-gray-300 italic">
                  &quot;Custom AI development represents the frontier where theoretical research meets practical implementation, requiring both technical expertise and methodological rigor.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Connector */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center space-x-4 text-gray-400">
            <div className="h-px w-24 bg-gradient-to-r from-purple-500 to-transparent"></div>
            <span className="text-sm bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Next: Research Background
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-blue-500"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CustomAISection;