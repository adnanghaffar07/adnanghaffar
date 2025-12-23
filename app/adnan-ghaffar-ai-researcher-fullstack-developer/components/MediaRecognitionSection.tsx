// app/components/MediaRecognitionSection.tsx
import React from 'react';
import {
  Newspaper, TrendingUp, Mic, Globe, Zap, Target,
  Award, BarChart, ExternalLink, Quote, Star, Users
} from 'lucide-react';

const MediaRecognitionSection = () => {
  const mediaFeatures = [
    {
      publication: "Forbes",
      title: "AI & Automation Perspectives",
      description: "Featured for insights into AI thought leadership, automation trends, and responsible application of intelligent systems.",
      icon: <TrendingUp className="w-7 h-7" />,
      gradient: "from-purple-500 to-blue-500",
      category: "Thought Leadership",
      featured: true
    },
    {
      publication: "LA Weekly",
      title: "Innovation & Technology Leadership",
      description: "Highlighted for approach to technology leadership and innovation, emphasizing applied AI and thoughtful system design.",
      icon: <Zap className="w-7 h-7" />,
      gradient: "from-blue-500 to-cyan-500",
      category: "Innovation",
      featured: false
    },
    {
      publication: "CEO Weekly",
      title: "Executive & Technical Vision",
      description: "Covered perspective on aligning technical depth with leadership vision in AI-driven systems.",
      icon: <Target className="w-7 h-7" />,
      gradient: "from-cyan-500 to-green-500",
      category: "Leadership",
      featured: false
    },
    {
      publication: "Tech Times",
      title: "Applied AI & Automation Systems",
      description: "Featured work on applied AI expertise, focusing on automation and machine learning in real-world use cases.",
      icon: <Mic className="w-7 h-7" />,
      gradient: "from-green-500 to-yellow-500",
      category: "Technology",
      featured: false
    },
    {
      publication: "NY Weekly",
      title: "AI Industry Impact Analysis",
      description: "Highlighted analysis of AI industry trends and broader implications on business and society.",
      icon: <Globe className="w-7 h-7" />,
      gradient: "from-yellow-500 to-orange-500",
      category: "Analysis",
      featured: false
    },
    {
      publication: "News Blaze",
      title: "AI & Automation Trends Commentary",
      description: "Featured commentary on automation insights, system scalability, and emerging challenges in applied AI.",
      icon: <Newspaper className="w-7 h-7" />,
      gradient: "from-orange-500 to-red-500",
      category: "Commentary",
      featured: false
    },
    {
      publication: "The Brainz Magazine",
      title: "Innovation & Digital Transformation",
      description: "Recognized role in digital transformation thought leadership and research-based decision making.",
      icon: <Award className="w-7 h-7" />,
      gradient: "from-red-500 to-pink-500",
      category: "Recognition",
      featured: false
    },
    {
      publication: "Analytics Insight",
      title: "Data Driven AI & Machine Learning",
      description: "Covered work in machine learning expertise and data-driven AI systems for intelligent automation.",
      icon: <BarChart className="w-7 h-7" />,
      gradient: "from-pink-500 to-purple-500",
      category: "Analytics",
      featured: false
    }
  ];

  const statistics = [
    {
      value: "8+",
      label: "Global Publications",
      icon: <Newspaper className="w-5 h-5" />
    },
    {
      value: "Global",
      label: "Media Reach",
      icon: <Globe className="w-5 h-5" />
    },
    {
      value: "AI Focus",
      label: "Expertise Coverage",
      icon: <Zap className="w-5 h-5" />
    },
    {
      value: "Thought Leadership",
      label: "Primary Theme",
      icon: <Users className="w-5 h-5" />
    }
  ];

  return (
    <section id="media-recognition" className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Newspaper pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="newsPattern" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M20 0 L20 100 M40 0 L40 100 M60 0 L60 100 M80 0 L80 100" stroke="currentColor" strokeWidth="0.5" />
                <path d="M0 20 L100 20 M0 40 L100 40 M0 60 L100 60 M0 80 L100 80" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#newsPattern)" />
          </svg>
        </div>

        {/* Gradient accents */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <Newspaper className="w-8 h-8 text-purple-500 mr-3" />
            <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Featured in Global Media
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Media Recognition & AI Discourse Contributions
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            Adnan&apos;s work and perspectives on artificial intelligence and automation have been featured across multiple global publications, focusing on thought leadership and the evolving role of AI in modern systems.
          </p>
        </div>

        {/* Statistics Banner */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5 rounded-2xl p-6 border-gradient-to-r">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-lg md:text-3xl font-bold mb-1 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Publication (Forbes) */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border-gradient-to-r relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur-3xl opacity-10"></div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8">
                  <div className="flex items-center justify-center lg:justify-start mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 mb-4">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                        Featured Publication
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      Forbes
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Global business media leader
                    </p>
                  </div>
                </div>

                <div className="lg:w-2/3">
                  <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      AI & Automation Perspectives
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      Forbes has featured Adnan for his insights into AI thought leadership, automation trends, and the responsible application of intelligent systems in complex environments.
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Quote className="w-4 h-4 mr-2" />
                      <span>Thought leadership and strategic AI insights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Media Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Media Features & Coverage
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaFeatures.slice(1).map((media, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-gradient-to-r transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {/* Publication Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${media.gradient} mr-3`}>
                      {media.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{media.publication}</h4>
                      <div className="flex items-center mt-1">
                        <div className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10">
                          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent font-medium">
                            {media.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-500 transition-colors" /> */}
                </div>

                {/* Content */}
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {media.title}
                </h5>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {media.description}
                </p>

                {/* Bottom Status */}
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Media Feature
                    </span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Published
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/30 dark:to-gray-900/30 rounded-2xl p-8 border-gradient-to-r">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-6 md:mb-0">
                <div className="text-center">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10">
                    <Quote className="w-10 h-10 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-4">
                  &quot;These features focus on thought leadership, research-informed insights, and discussions around the evolving role of AI in modern systems.&quot;
                </p>
                <div className="h-px w-24 bg-gradient-to-r from-purple-500 to-blue-500 mb-4"></div>
                <p className="text-gray-600 dark:text-gray-400">
                  Media recognition spans across technology, business, and innovation publications, highlighting diverse aspects of AI expertise and thought leadership.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Media Impact */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-800/30 dark:to-purple-900/10 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Global
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Media Reach</div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Publications across multiple continents
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800/30 dark:to-blue-900/10 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              AI Focus
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Expertise Coverage</div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Consistent theme across all features
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-cyan-50 dark:from-gray-800/30 dark:to-cyan-900/10 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-600 to-green-500 bg-clip-text text-transparent">
              Leadership
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Primary Angle</div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Thought leadership perspective
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MediaRecognitionSection;