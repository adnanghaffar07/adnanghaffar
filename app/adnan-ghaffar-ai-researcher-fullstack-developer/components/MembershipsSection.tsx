// app/components/MembershipsSection.tsx
'use client';

import React from 'react';
import { 
  Award, Briefcase, Shield, Star, Globe, Users,
  ExternalLink, CheckCircle, ArrowRight, BadgeCheck
} from 'lucide-react';

const MembershipsSection = () => {
  const memberships = [
    {
      organization: "IEEE",
      level: "Senior Member",
      icon: <Award className="w-6 h-6" />,
      description: "A distinction awarded to professionals who have demonstrated significant experience, technical leadership, and contributions to engineering and research.",
      color: "purple",
      link: "https://www.ieee.org",
      highlights: [
        "Sustained professional experience",
        "Peer-reviewed technical contributions",
        "Global research community recognition"
      ]
    },
    {
      organization: "Forbes",
      level: "Member",
      icon: <Briefcase className="w-6 h-6" />,
      description: "An invitation-only organization where executives and thought leaders share insights on business, technology, and industry innovation.",
      color: "blue",
      // link: "https://councils.forbes.com",
      highlights: [
        "AI and automation perspectives",
        "Technology leadership insights",
        "Industry discourse contributions"
      ]
    }
  ];

  const credentials = [
    {
      icon: <Shield className="w-5 h-5" />,
      value: "10+ Years",
      label: "Technical Leadership",
      description: "Recognized contributions to AI and automation engineering"
    },
    {
      icon: <Star className="w-5 h-5" />,
      value: "20+ Papers",
      label: "Research Impact",
      description: "Peer-reviewed publications in AI and systems design"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      value: "Global",
      label: "Recognition",
      description: "International professional organization memberships"
    },
    {
      icon: <Users className="w-5 h-5" />,
      value: "Industry",
      label: "Influence",
      description: "Contributions to technology discourse and leadership"
    }
  ];

  return (
    <section id="memberships" className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-purple-500"></div>
            <BadgeCheck className="w-6 h-6 text-purple-500" />
            <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Professional Credentials
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Professional Memberships
            </span>
            <span className="block text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-400 mt-4">
              & Technical Credentials
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Recognized memberships and credentials validating expertise in AI research and technology leadership
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-2xl p-8 md:p-10 border border-gray-200 dark:border-gray-800">
            <div className="grid md:grid-cols-2 gap-8">
              {/* IEEE */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    IEEE Senior Member
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    A distinction reflecting sustained professional experience and recognized contributions to technology and engineering, representing peer recognition within the global research community.
                  </p>
                </div>
              </div>
              
              {/* Forbes */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Forbes
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Member of an invitation-only organization contributing perspectives on AI, automation, and technology leadership, reinforcing standing in both technical research and industry discourse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Membership Details */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {memberships.map((membership, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${
                      membership.color === 'purple' ? 'from-purple-500 to-blue-500' : 'from-blue-500 to-cyan-500'
                    }`}>
                      <div className="text-white">{membership.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {membership.organization}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                          {membership.level}
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                          Verified
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <a 
                    href={membership.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </a> */}
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  {membership.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3">
                  {membership.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Status */}
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Membership Status
                    </span>
                    <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Technical Credentials
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Quantified expertise and professional recognition metrics
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((cred, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10">
                    <div className="text-purple-600 dark:text-purple-400">
                      {cred.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                    {cred.value}
                  </div>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {cred.label}
                </h4>
                
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {cred.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Combined Impact */}
        <div className="bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-2xl p-8 border border-purple-200 dark:border-purple-900/30">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Combined Professional Impact
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              These memberships and credentials collectively reinforce Adnan&apos;s position as a recognized expert in artificial intelligence research and technology leadership, bridging technical depth with industry influence.
            </p>
            
            {/* Impact Metrics */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-md md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  IEEE
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Technical Excellence</div>
              </div>
              
              <div className="text-center">
                <div className="text-md md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Forbes
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Industry Leadership</div>
              </div>
              
              <div className="text-center">
                <div className="text-md md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  Combined
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Holistic Impact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipsSection;