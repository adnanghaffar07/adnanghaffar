// app/page.tsx
import { Metadata } from 'next';
import React from 'react'
import HeroSection from './components/HeroSection'
import ResearchFocusSection from './components/ResearchFocusSection'
import AISystemsSection from './components/AISystemsSection'
import CustomAISection from './components/CustomAISection'
import ResearchBackgroundSection from './components/ResearchBackgroundSection'
import MembershipsSection from './components/MembershipsSection'
import MediaRecognitionSection from './components/MediaRecognitionSection'
import CurrentResearchSection from './components/CurrentResearchSection'
import FAQSection from './components/FAQSection'

// Add this metadata export
export const metadata: Metadata = {
  title: 'Adnan Ghaffar AI Researcher and Full Stack AI Software Developer',
  description: 'Adnan Ghaffar is a full stack AI software developer and AI researcher with 20+ research publications across IEEE, IRE, SSRN, and ResearchGate, and features in Forbes, LA Weekly, and global tech publications.',
  keywords: ['AI Researcher', 'Full Stack Developer', 'AI Software Developer', 'Machine Learning', 'Artificial Intelligence', 'Automation Architect', 'IEEE Member', 'Forbes Councils'],
  authors: [{ name: 'Adnan Ghaffar' }],
  creator: 'Adnan Ghaffar',
  publisher: 'Adnan Ghaffar',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://adnanghaffar.com/adnan-ghaffar-ai-researcher-fullstack-developer',
    title: 'Adnan Ghaffar AI Researcher and Full Stack AI Software Developer',
    description: 'Adnan Ghaffar is a full stack AI software developer and AI researcher with 20+ research publications across IEEE, IRE, SSRN, and ResearchGate, and features in Forbes, LA Weekly, and global tech publications.',
    siteName: 'Adnan Ghaffar',
    images: [
      {
        url: 'https://adnanghaffar.com/og-image.jpg', // Add your OG image URL here
        width: 1200,
        height: 630,
        alt: 'Adnan Ghaffar - AI Researcher & Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adnan Ghaffar AI Researcher and Full Stack AI Software Developer',
    description: 'Adnan Ghaffar is a full stack AI software developer and AI researcher with 20+ research publications across IEEE, IRE, SSRN, and ResearchGate, and features in Forbes, LA Weekly, and global tech publications.',
    images: ['https://adnanghaffar.com/og-image.jpg'], // Add your Twitter image URL here
    creator: '@adnanghaffar', // Add your Twitter handle if you have one
  },
  alternates: {
    canonical: 'https://adnanghaffar.com/adnan-ghaffar-ai-researcher-fullstack-developer',
  },
  verification: {
    // Add Google Search Console verification if you have it
    // google: 'your-google-verification-code',
  },
}

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Adnan Ghaffar",
    "url": "https://adnanghaffar.com/adnan-ghaffar-ai-researcher-fullstack-developer",
    "jobTitle": [
      "AI Researcher",
      "Automation Architect",
      "Full Stack AI Software Developer"
    ],
    "description": "Adnan Ghaffar is an AI researcher, automation architect, and full stack AI software developer with over a decade of experience in applied artificial intelligence, machine learning, and real world system design. He has published more than 20 research papers across IEEE, IRE, SSRN, and ResearchGate, and has been featured in Forbes, LA Weekly, NY Weekly, and other global technology publications.",
    "knowsAbout": [
      "Artificial Intelligence Research",
      "Machine Learning",
      "Applied AI Systems",
      "Automation Architecture",
      "AI Driven Workflow Design",
      "Custom AI Software Development",
      "Enterprise AI Systems",
      "Responsible AI",
      "AI System Architecture",
      "Business Automation"
    ],
    "affiliation": [
      {
        "@type": "Organization",
        "name": "IEEE",
        "description": "Senior Member of IEEE"
      },
      {
        "@type": "Organization",
        "name": "Forbes Councils"
      }
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "IEEE",
        "memberRole": "Senior Member"
      },
      {
        "@type": "Organization",
        "name": "Forbes Councils"
      }
    ],
    "sameAs": [
      "https://scholar.google.com/citations?user=3loqVSYAAAAJ",
      "https://www.researchgate.net",
      "https://hq.ssrn.com",
      "https://www.irejournals.com",
      "https://www.forbes.com",
      "https://www.lawweekly.com",
      "https://www.nyweekly.com",
      "https://www.ceoweekly.com",
      "https://www.techtimes.com",
      "https://www.analyticsinsight.net"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Urban Higher Secondary Schools"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Independent AI Researcher & Consultant"
    }
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Page Content */}
      <div>
        <HeroSection/>
        <ResearchFocusSection/>
        <AISystemsSection/>
        <CustomAISection/>
        <ResearchBackgroundSection/>
        <MembershipsSection/>
        <MediaRecognitionSection/>
        <CurrentResearchSection/>
        <FAQSection/>
      </div>
    </>
  )
}

export default page