// app/components/ResearchFocusSection.tsx
import React from 'react';
import { Cpu, GitBranch, BarChart3, Network, Shield, Activity } from 'lucide-react';

const ResearchFocusSection = () => {
  const researchAreas = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Applied AI Systems",
      description: "Real-world deployment of AI models in production environments",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Automation Research",
      description: "Reducing operational complexity through intelligent workflows",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "System Performance",
      description: "Monitoring and optimizing AI system behavior over time",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Scalability Studies",
      description: "Understanding limitations in deploying at scale",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Explainable AI",
      description: "Prioritizing transparency in ML implementations",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "System Reliability",
      description: "Designing ML systems that remain stable over time",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section id="research-focus" className="relative py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header with Gradient */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500"></div>
            <span className="mx-4 text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Research Focus
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Artificial Intelligence & Automation Systems
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Exploring the intersection of theoretical research and practical implementation in intelligent systems
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 border-gradient-to-r">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Adnan&apos;s research focus lies in <strong className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">applied artificial intelligence</strong> and automation systems that operate in real environments. His work explores how AI models behave once deployed, how automation affects decision making, and how machine learning systems can be designed to remain reliable over time.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/30 dark:to-gray-900/30 rounded-2xl p-8 border-gradient-to-r">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Key Research Areas
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Key areas of exploration include artificial intelligence research related to system performance, automation research centered on reducing operational complexity, and machine learning implementation that prioritizes explainability and maintainability.
              </p>
              <ul className="space-y-3">
                {["AI Model Deployment Analysis", "Decision-Making Automation Impact", "Long-term System Reliability", "Scalability Tradeoff Studies", "Infrastructure Integration"].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mr-3`}></div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Research Areas Grid */}
          <div>
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              {researchAreas.map((area, index) => (
                <div 
                  key={index}
                  className="group bg-white dark:bg-gray-800/50 rounded-xl p-3 md:p-6 border border-gray-200 dark:border-gray-700 hover:border-gradient-to-r transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className={`inline-flex p-1 md:p-3 rounded-lg bg-gradient-to-r ${area.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{area.icon}</div>
                  </div>
                  <h3 className="text-md md:text-lg font-bold text-gray-900 dark:text-white mb-2">{area.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Quote/Callout */}
        <div className="relative bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border-gradient-to-r overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-start">
              <div className="mr-6 hidden md:block">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">AI</span>
                </div>
              </div>
              <div>
                <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed">
                  &quot;Rather than focusing solely on model accuracy, his research examines system behavior, scalability limitations, and the tradeoffs involved in deploying intelligent systems at scale.&quot;
                </p>
                <p className="mt-6 text-gray-700 dark:text-gray-400">
                  This approach allows him to study AI not just as a theoretical construct but as a living system that interacts continuously with users, data, and infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Connector to next section */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center space-x-4 text-gray-400">
            <div className="h-px w-24 bg-gradient-to-r from-purple-500 to-transparent"></div>
            <span className="text-sm bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Next: AI System Design
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-blue-500"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ResearchFocusSection;