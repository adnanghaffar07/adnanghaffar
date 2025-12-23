// app/components/ResearchBackgroundSection.tsx
import React from 'react';
import {
  BookOpen, Award, FileText, GraduationCap, Users, Globe,
  ChevronRight, ExternalLink, CheckCircle
} from 'lucide-react';

const ResearchBackgroundSection = () => {
  const publications = [
    {
      platform: "IEEE",
      icon: <Award className="w-6 h-6" />,
      title: "Senior Member of IEEE",
      description: "A distinction awarded to professionals demonstrating significant experience, technical leadership, and contributions to engineering and research.",
      gradient: "from-purple-500 to-blue-500",
      link: "https://www.ieee.org"
    },
    {
      platform: "ResearchGate",
      icon: <FileText className="w-6 h-6" />,
      title: "Research Publications",
      description: "Publications exploring AI transformation in business automation, healthcare, education, and emerging industries.",
      gradient: "from-blue-500 to-cyan-500",
      link: "https://www.researchgate.net"
    },
    {
      platform: "SSRN",
      icon: <BookOpen className="w-6 h-6" />,
      title: "AI-Driven Development",
      description: "Research on AI-driven software development and business automation frameworks for modern organizations.",
      gradient: "from-cyan-500 to-green-500",
      link: "https://www.ssrn.com"
    },
    {
      platform: "Education",
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Educational Research",
      description: "Studies on AI integration in classroom settings and technology-assisted learning frameworks.",
      gradient: "from-green-500 to-yellow-500",
      link: "#"
    },
    {
      platform: "IRE/IEEE",
      icon: <Users className="w-6 h-6" />,
      title: "Affiliated Publications",
      description: "Research on AI in business automation, entrepreneurship, and digital innovation frameworks.",
      gradient: "from-yellow-500 to-orange-500",
      link: "https://www.irejournals.com"
    }
  ];

  const researchFocusAreas = [
    "Applied Artificial Intelligence",
    "Business Automation Frameworks",
    "Real-World AI Implementation",
    "Enterprise System Scalability",
    "Educational AI Integration",
    "Sustainable AI Systems",
    "Intelligent Automation",
    "Digital Business Innovation"
  ];

  return (
    <section id="research-background" className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>

        {/* Academic pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="academicPattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="currentColor" />
                <circle cx="10" cy="10" r="1" fill="currentColor" />
                <circle cx="50" cy="10" r="1" fill="currentColor" />
                <circle cx="10" cy="50" r="1" fill="currentColor" />
                <circle cx="50" cy="50" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#academicPattern)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <BookOpen className="w-8 h-8 text-purple-500 mr-3" />
            <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Academic & Professional Credentials
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Research Background & Professional Authority
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            Maintaining a strong academic and professional presence alongside industry work through peer-reviewed research and practical contributions
          </p>
        </div>

        {/* Introduction Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Main Description */}
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 border-gradient-to-r">
              <div className="flex items-center mb-6">
                <div className="mr-4 p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10">
                  <Globe className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                    Academic & Professional Presence
                  </h3>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Adnan maintains a strong academic and professional presence alongside his industry work. His research and publications focus on <strong className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">applied artificial intelligence</strong>, business automation, and real-world AI implementation, with an emphasis on frameworks that can be adopted beyond theoretical environments.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  His work spans peer-reviewed journals, research platforms, and education-focused publications, reinforcing both academic credibility and practical relevance.
                </p>
              </div>
            </div>

            {/* Research Focus Areas */}
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-800/30 dark:to-purple-900/10 rounded-2xl p-8 border-gradient-to-r">
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Research Focus Areas
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {researchFocusAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Publications Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Research Publications & Contributions
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-gradient-to-r transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {/* Platform Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${pub.gradient} bg-opacity-10`}>
                    {pub.icon}
                    <span className="ml-2 text-sm font-semibold text-black">
                      {pub.platform}
                    </span>
                  </div>
                  {/* {pub.link !== "#" && (
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-500 transition-colors" />
                  )} */}
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {pub.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {pub.description}
                </p>

                {/* Key Highlights */}
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    <span>Peer-Reviewed Research</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    <span>Practical Implementation Focus</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Research Descriptions */}
        <div className="space-y-8 mb-16">
          {/* IEEE Section */}
          <div className="bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5 rounded-2xl p-6 md:p-8 border-gradient-to-r">
            <div className="flex items-start">
              <div className="mr-6 flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Senior Member of IEEE
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Adnan Ghaffar is a Senior Member of IEEE, a distinction awarded to professionals who have demonstrated significant experience, technical leadership, and contributions to engineering and research. This recognition reflects his sustained work in artificial intelligence, automation systems, and applied system design, as well as his involvement in advancing research that connects academic theory with real-world implementation.
                </p>
              </div>
            </div>
          </div>

          {/* ResearchGate Section */}
          <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 md:p-8 border-gradient-to-r">
            <div className="flex items-start">
              <div className="mr-6 flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Research Publications and Contributions on ResearchGate
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Adnan has contributed extensively to ResearchGate, where his publications explore how artificial intelligence is transforming business automation, healthcare, education, and emerging industries. His research on this platform includes studies on AI-powered autonomous agents, intelligent automation frameworks, sustainable AI systems, and the evolving role of AI in workforce transformation.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  These publications emphasize practical frameworks, operational impact, and system-level thinking rather than isolated model performance, aligning academic research with real deployment challenges.
                </p>
              </div>
            </div>
          </div>

          {/* SSRN Section */}
          <div className="bg-gradient-to-r from-cyan-500/5 via-green-500/5 to-yellow-500/5 rounded-2xl p-6 md:p-8 border-gradient-to-r">
            <div className="flex items-start">
              <div className="mr-6 flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  SSRN Publications on AI-Driven Software Development and Automation
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Adnan&apos;s work is also published on SSRN, including research focused on AI-driven software development and business automation frameworks. His SSRN publications examine how artificial intelligence can enhance efficiency, transparency, and decision support in modern organizations, with a forward-looking perspective on AI adoption trends and system scalability. This body of work contributes to broader academic and professional discourse around applied artificial intelligence and enterprise automation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education & IRE/IEEE Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Research */}
          <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 border-gradient-to-r">
            <div className="flex items-center mb-6">
              <div className="mr-4 p-3 rounded-lg bg-gradient-to-r from-green-500 to-yellow-500">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                Educational and Institutional Research Contributions
              </h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Adnan has contributed research addressing the role of artificial intelligence in education and institutional environments. His work published in contexts such as Urban Higher Secondary Schools explores infrastructural and pedagogical barriers to integrating AI tools in classroom settings, particularly in rural and urban comparisons. These studies highlight how AI can support teacher training, student engagement, and technology-assisted learning when implemented with practical constraints in mind.
            </p>
          </div>

          {/* IRE/IEEE Research */}
          <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800/30 dark:to-blue-900/10 rounded-2xl p-8 border-gradient-to-r">
            <div className="flex items-center mb-6">
              <div className="mr-4 p-3 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                IRE and IEEE-Affiliated Research Publications
              </h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Adnan has published research through IRE and IEEE-affiliated education and research outlets, focusing on integrating AI into business automation and entrepreneurship. These publications examine practical frameworks for streamlining operations, intelligent automation in management systems, and the role of AI as a catalyst for digital business innovation.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              His work in these journals reinforces his position as a researcher focused on applied AI, operational efficiency, and responsible automation.
            </p>
          </div>
        </div>

        {/* Section Connector */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center space-x-4 text-gray-400">
            <div className="h-px w-24 bg-gradient-to-r from-purple-500 to-transparent"></div>
            <span className="text-sm bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Next: Professional Memberships
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-blue-500"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ResearchBackgroundSection;