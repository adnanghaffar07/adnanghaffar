// app/components/AISystemsSection.tsx
'use client';

import React from 'react';
import {
  Database, Cpu, GitMerge, BarChart, ShieldCheck, Settings,
  Zap, Layers, CheckCircle, ArrowRight, GitBranch
} from 'lucide-react';

const AISystemsSection = () => {
  const systemComponents = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Pipelines",
      description: "Robust data ingestion, processing, and feature engineering",
      color: "purple"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "ML Models",
      description: "Production-grade models with version control and monitoring",
      color: "blue"
    },
    {
      icon: <GitMerge className="w-6 h-6" />,
      title: "Automation Workflows",
      description: "Intelligent orchestration of business processes",
      color: "cyan"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Monitoring Systems",
      description: "Real-time performance tracking and anomaly detection",
      color: "green"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Testing Framework",
      description: "Comprehensive testing from unit to integration",
      color: "yellow"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Maintenance",
      description: "Continuous improvement and system updates",
      color: "orange"
    }
  ];

  const architecturalPrinciples = [
    "Thoughtful design for long-term maintainability",
    "Clear separation of concerns between components",
    "Focus on system reliability and stability",
    "Methodical testing at every system layer",
    "Scalability from initial deployment to enterprise scale",
    "Continuous monitoring and improvement"
  ];

  const methodologyItems = [
    "Automated Testing Suites",
    "Real-time Monitoring Dashboards",
    "Performance Benchmarking",
    "Continuous Integration Pipelines"
  ];

  return (
    <section id="ai-systems" className="relative py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-purple-500"></div>
            <Zap className="w-6 h-6 text-purple-500" />
            <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Real-World Implementation
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Designing AI Systems
            </span>
            <span className="block text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-400 mt-4">
              for Production Environments
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Bridging theoretical research with practical, production-ready implementations
          </p>
        </div>

        {/* Main Content Block */}
        <div className="mb-16">
          {/* Introduction Card */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-2xl p-8 md:p-10 border border-gray-200 dark:border-gray-800 mb-12">
            <div className="flex items-start gap-6">
              <div className="hidden md:block flex-shrink-0">
                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500">
                  <Layers className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  From Research to Production
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  A significant part of Adnan&apos;s work involves <span className="font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">designing and implementing real world AI systems</span> that bridge research and execution. These systems combine multiple components—data pipelines, machine learning models, and intelligent automation workflows—into cohesive, production-ready solutions.
                </p>
              </div>
            </div>
          </div>

          {/* System Components */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                System Architecture Components
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Comprehensive building blocks for robust AI systems
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemComponents.map((component, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-500/50 dark:hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className={`flex items-center gap-4 mb-4 ${component.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                      component.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                        component.color === 'cyan' ? 'text-cyan-600 dark:text-cyan-400' :
                          component.color === 'green' ? 'text-green-600 dark:text-green-400' :
                            component.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                              'text-orange-600 dark:text-orange-400'
                    }`}>
                    <div className={`p-3 rounded-lg bg-${component.color === 'purple' ? 'purple' :
                        component.color === 'blue' ? 'blue' :
                          component.color === 'cyan' ? 'cyan' :
                            component.color === 'green' ? 'green' :
                              component.color === 'yellow' ? 'yellow' :
                                'orange'
                      }-500/10`}>
                      {component.icon}
                    </div>
                    <h4 className="text-lg font-bold">{component.title}</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {component.description}
                  </p>
                  {/* <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Component {index + 1}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-all" />
                  </div> */}
                </div>
              ))}
            </div>
          </div>

          {/* Methodology & Principles */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Principles */}
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10">
                  <Cpu className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Architectural Principles
                </h3>
              </div>

              <div className="space-y-4">
                {architecturalPrinciples.map((principle, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{principle}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Methodology */}
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-800/50 dark:to-purple-900/10 rounded-2xl p-8 border border-purple-200 dark:border-purple-900/30">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
                  <GitBranch className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Methodology & Deployment
                </h3>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-8">
                His experience in AI system architecture emphasizes thoughtful design choices, clear separation of concerns, and long-term reliability. He pays close attention to methodology, including how systems are tested, monitored, and improved after deployment.
              </p>

              <div className="space-y-3">
                {methodologyItems.map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Focus on Tradeoffs */}
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-purple-200 dark:border-purple-900/30">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <ShieldCheck className="w-8 h-8 text-purple-500" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Focus on System Tradeoffs
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              By focusing on tradeoffs and constraints, Adnan ensures that AI-driven decision systems remain stable, scalable, and aligned with their intended purpose rather than becoming brittle or overly complex.
            </p>
          </div>

          {/* Balanced Systems */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Performance vs Maintainability",
                description: "Balancing speed and efficiency with long-term code health and ease of updates"
              },
              {
                title: "Accuracy vs Explainability",
                description: "Achieving high model performance while maintaining transparency and interpretability"
              },
              {
                title: "Innovation vs Reliability",
                description: "Introducing cutting-edge features while ensuring system stability and uptime"
              }
            ].map((balance, idx) => (
              <div key={idx} className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 text-center">
                <div className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-3">
                  {balance.title}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {balance.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-10 pt-8 border-t border-purple-200 dark:border-purple-900/30">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-purple-500 to-blue-500"></div>
              <span className="mx-4 text-lg text-gray-500 dark:text-gray-400">&quot;</span>
              <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
            <p className="text-xl text-gray-700 dark:text-gray-300 italic text-center max-w-3xl mx-auto">
              Real-world AI systems must balance competing priorities to deliver sustainable, effective solutions that stand the test of time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISystemsSection;