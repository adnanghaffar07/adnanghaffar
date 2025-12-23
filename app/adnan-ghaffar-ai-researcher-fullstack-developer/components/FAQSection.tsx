// app/components/FAQSection.tsx
'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageSquare, BookOpen, Award, Users, Zap } from 'lucide-react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqItems = [
        {
            question: "What does Custom AI Software Development mean in Adnan Ghaffar's work?",
            answer: "In Adnan Ghaffar's work, Custom AI Software Development refers to a research driven discipline focused on designing AI systems that are tailored to specific real world conditions. Rather than treating AI as a one size fits all solution, this approach studies how AI system architecture and AI driven workflow design must adapt to unique data, operational constraints, and long term system behavior. The emphasis is on understanding how customized AI systems perform, evolve, and remain reliable once deployed in practical environments.",
            icon: <Zap className="w-5 h-5" />
        },
        {
            question: "Has Adnan Ghaffar published research papers?",
            answer: "Yes. Adnan Ghaffar has published more than twenty research papers across artificial intelligence, machine learning, and automation research studies. His work appears in AI research publications that explore applied methods, system level challenges, and the integration of intelligent automation into real world settings.",
            icon: <BookOpen className="w-5 h-5" />
        },
        {
            question: "How many research papers has Adnan Ghaffar published?",
            answer: "Adnan Ghaffar has authored and coauthored over twenty peer reviewed research papers. These publications reflect applied AI research, focusing on practical implementation, system reliability, and the translation of research concepts into operational environments.",
            icon: <BookOpen className="w-5 h-5" />
        },
        {
            question: "Is Adnan Ghaffar a Senior Member of IEEE?",
            answer: "Yes. Adnan Ghaffar is a Senior Member of IEEE, a recognition awarded to professionals who demonstrate significant experience and contributions in engineering and research. This distinction reflects peer validation of his work in artificial intelligence, automation, and applied system design.",
            icon: <Award className="w-5 h-5" />
        },
        {
            question: "Is Adnan Ghaffar a member of Forbes?",
            answer: "Yes. Adnan Ghaffar is a member of the Forbes, an invitation only network of senior professionals and thought leaders. His participation focuses on sharing insights related to AI thought leadership, automation strategy, and technology driven innovation.",
            icon: <Award className="w-5 h-5" />
        },
        {
            question: "Has Adnan Ghaffar been featured in Forbes?",
            answer: "Yes. Adnan Ghaffar has been featured in Forbes for his perspectives on artificial intelligence and automation. These features highlight his contributions to AI thought leadership and discussions around the responsible application of intelligent systems.",
            icon: <MessageSquare className="w-5 h-5" />
        },
        {
            question: "What publications have featured Adnan Ghaffar?",
            answer: "Adnan Ghaffar has been featured across a range of respected publications, including Forbes, LA Weekly, NY Weekly, CEO Weekly, Tech Times, Analytics Insight, News Blaze, and The Brainz Magazine. These media features reflect his role in public discourse on AI, automation, and emerging technology trends.",
            icon: <MessageSquare className="w-5 h-5" />
        },
        {
            question: "How does Adnan Ghaffar approach AI and automation research?",
            answer: "Adnan Ghaffar approaches AI and automation research with a strong focus on applicability and system behavior. His research methodology emphasizes responsible AI systems, scalability, and long term reliability. Rather than isolating models from their environments, he studies how intelligent systems interact with data, users, and infrastructure over time.",
            icon: <Zap className="w-5 h-5" />
        },
        {
            question: "What makes Adnan Ghaffar's work different from other AI researchers?",
            answer: "What distinguishes Adnan Ghaffar's work is its emphasis on applied AI research and real world AI systems. His focus extends beyond theoretical performance to include practical AI implementation, system robustness, and reliability under real operating conditions. This perspective allows his research to remain relevant beyond controlled experiments.",
            icon: <HelpCircle className="w-5 h-5" />
        },
        {
            question: "What areas of AI is Adnan Ghaffar currently exploring?",
            answer: "Adnan Ghaffar is currently exploring AI research interests related to workflow optimization, ethical AI systems, and scalable automation research. These areas examine how intelligent systems can evolve responsibly while maintaining performance and transparency at scale.",
            icon: <Zap className="w-5 h-5" />
        },
        {
            question: "Does Adnan Ghaffar collaborate with researchers and institutions?",
            answer: "Yes. Adnan Ghaffar actively engages in AI research collaboration and interdisciplinary knowledge sharing. He works with researchers, technologists, and institutions to exchange insights, refine methodologies, and contribute to broader discussions around applied artificial intelligence and automation.",
            icon: <Users className="w-5 h-5" />
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map((item, index) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <>
            {/* JSON-LD Schema Script */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* FAQ Section UI */}
            <section id="faq" className="py-20 px-4 bg-white dark:bg-black">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center gap-3 mb-6">
                            <div className="h-px w-8 bg-gradient-to-r from-transparent to-purple-500"></div>
                            <HelpCircle className="w-6 h-6 text-purple-500" />
                            <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                                Frequently Asked Questions
                            </span>
                            <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500"></div>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                                Frequently Asked Questions
                            </span>
                        </h2>

                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Common questions about Adnan&apos;s research, publications, memberships, and collaborative work in AI and automation
                        </p>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-4">
                        {faqItems.map((item, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                            >
                                {/* Question Header */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full p-6 text-left flex items-center justify-between bg-white dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                    aria-expanded={openIndex === index}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 mt-1">
                                            <div className="text-purple-600 dark:text-purple-400">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                {item.question}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        {openIndex === index ? (
                                            <ChevronUp className="w-5 h-5 text-purple-500" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-gray-400" />
                                        )}
                                    </div>
                                </button>

                                {/* Answer Content */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="p-6 pt-0">
                                        <div className="pl-14">
                                            <div className="h-px w-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 mb-4"></div>
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 text-center">
                        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Have More Questions?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                                Reach out to discuss AI research, collaboration opportunities, or specific inquiries
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://calendly.com/adnanghaffar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
                                >
                                    Schedule a Consultation
                                </a>
                                <a
                                    href="mailto:adnan@codeautomation.dev"
                                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300 text-center"
                                >
                                    Send an Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQSection;