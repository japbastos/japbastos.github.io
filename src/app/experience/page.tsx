'use client';

import { useState } from 'react';
import { Briefcase, Download, Globe } from 'lucide-react';

const experiences = [
// ... (rest of the experiences array remains the same)
  {
    company: 'Confiax Seguros',
    role: 'Technical Lead',
    period: 'Oct 2024 – Present',
    location: 'Remote, Brasil',
    context:
      'Led the renewal of a platform over six years old that faced maintenance and scalability challenges.',
    bullets: [
      'Structured a new project in Next.js 15, defining modern architecture and quality standards',
      'Standardized unit testing with Jest and technical documentation to ensure longevity',
      'Established componentization guidelines with Shadcn UI, Storybook, and TailwindCSS',
      'Implemented React Hook Form + Zod for validations and Zustand for state management',
      'Led the migration from MySQL to PostgreSQL, ensuring greater scalability and performance',
      'Maintained legacy system built with NestJS and React during the transition'
    ],
    stack: [
      'Next.js 15',
      'React',
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'Jest',
      'Shadcn UI',
      'Zustand',
      'TailwindCSS'
    ]
  },
  {
    company: 'Rede ConfiaX',
    role: 'Senior Full-Stack Developer',
    period: 'Oct 2021 – Oct 2024',
    location: 'Remote, Brasil',
    context:
      'Developed and maintained the 4Seg API, creating efficient and scalable endpoints for multiple features.',
    bullets: [
      'Implemented integrations with partners, including insurance quote queues with Bull and webhooks',
      'Built authorization and permissions systems using CASL in NestJS and React',
      'Designed the OAuth 2.0 authentication API, strengthening user management and security',
      'Optimized workflows and UX, helping triple the number of daily analyses on the platform'
    ],
    stack: ['NestJS', 'React', 'TypeScript', 'Node.js', 'Bull', 'CASL', 'MySQL']
  },
  {
    company: 'Japbastos',
    role: 'Senior Software Engineer (Freelance)',
    period: 'Oct 2018 – Present',
    location: 'Remote, Brasil',
    context:
      'Working on freelance projects helping companies modernize their digital presence and build custom web solutions.',
    bullets: [
      'Developed front-end layout for a US real estate AI platform using React and Tailwind CSS (VAL Property AI)',
      'Built initial front-end for an e-commerce platform using Next.js and MedusaJS (Mercado Único)',
      'Contributed to a web ordering portal using PHP and developed a Node.js chat microservice (Pede.ai)'
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'MedusaJS', 'Node.js', 'PHP']
  },
  {
    company: 'Catskillet',
    role: 'Mid-level Backend Developer',
    period: 'March 2021 – October 2021',
    location: 'Remote, Brasil',
    context:
      'Worked on fintech and telemedecine solutions, focusing on service segmentation and real-time communication.',
    bullets: [
      'Segmented card management systems at Hub Fintech enabling white-label solutions',
      'Documented APIs with Swagger and ensured quality with Jest unit tests',
      'Implemented real-time communication with medical equipment using WebSocket and audio streaming (H.ai)'
    ],
    stack: ['Node.js', 'Express', 'Jest', 'Swagger', 'WebSocket']
  },
  {
    company: 'AGRODAN',
    role: 'Junior Full-Stack Developer',
    period: 'August 2020 – March 2021',
    location: 'Belém de São Francisco - PE, Brasil',
    context:
      'Contributed to internal management and modular georeferenced agricultural planning systems.',
    bullets: [
      'Developed backend with Node.js/Express and Sequelize/Oracle',
      'Built frontend in React and integrated external services',
      'Led the creation of a georeferenced system resulting in significant financial gains'
    ],
    stack: ['React', 'Node.js', 'Express', 'Sequelize', 'Oracle']
  },
  {
    company: 'CIn/Motorola',
    role: 'Software Engineer Resident',
    period: 'Jan 2018 – Nov 2018',
    location: 'Recife - PE, Brasil',
    context:
      'Worked and completed the coursework in a software engineering residency focused on QA and testing within a globally distributed Agile team, but did not formally complete the postgraduate program.',
    bullets: [
      'Worked in an international Scrum-based team with strict scope and deadlines, strengthening autonomy and delivery discipline',
      'Fixed and maintained automated test suites using an internal Python testing framework, improving regression reliability',
      'Executed manual and automated testing on mobile devices (smartphones and headphones) for Brazilian and US markets',
      'Supported test automation using Selenium and JUnit, combining Java and Python development',
      'Contributed to process improvement practices aligned with quality models such as CMMI'
    ],
    stack: ['Python', 'Java', 'Android', 'Selenium', 'JUnit', 'Scrum', 'CMMI']
  }
];

export default function ExperiencePage() {
  const [cvLang, setCvLang] = useState<'pt' | 'en'>('en');

  const cvFiles = {
    pt: '/cv/JoaoBastos_EngSoftware.pdf',
    en: '/cv/JoaoBastos_SoftwareEngineer.pdf'
  };

  return (
    <section className="container mx-auto h-full overflow-auto px-4 md:px-6 text-justify">
      <div className="relative mx-auto max-w-4xl py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold">Experience</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm md:text-base">
              My professional journey and technical expertise.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex bg-zinc-100 dark:bg-zinc-900 ring-1 ring-zinc-200 dark:ring-white/10 rounded-full p-1 shadow-inner">
              <button
                onClick={() => setCvLang('pt')}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  cvLang === 'pt'
                    ? 'bg-purple-600 text-white shadow-[0_0_10px_rgba(147,51,234,0.3)]'
                    : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200'
                }`}
              >
                PT-BR
              </button>
              <button
                onClick={() => setCvLang('en')}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  cvLang === 'en'
                    ? 'bg-purple-600 text-white shadow-[0_0_10px_rgba(147,51,234,0.3)]'
                    : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200'
                }`}
              >
                US-EN
              </button>
            </div>

            <a
              href={cvFiles[cvLang]}
              download
              className="group flex items-center gap-2 bg-white dark:bg-zinc-900 border border-purple-500/30 px-5 py-2.5 rounded-xl text-sm font-medium text-purple-600 dark:text-purple-300 transition-all hover:bg-purple-500/10 hover:border-purple-500/60 active:scale-95 shadow-md dark:shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Download CV
            </a>
          </div>
        </div>

        <div className="relative">
          {/* Timeline line - starts at center of first icon (top-4) and ends at center of last icon (bottom-4) */}
          <div className="absolute top-4 bottom-4 left-4 w-px bg-gradient-to-b from-purple-500/60 via-purple-500/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative flex gap-6 md:gap-8">
                {/* Timeline dot */}
                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white dark:bg-zinc-900 ring-2 ring-purple-500 shadow-md dark:shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                  <Briefcase className="h-4 w-4 text-purple-500 dark:text-purple-400" />
                </div>

                {/* Card */}
                <div className="w-full rounded-2xl border border-purple-500/30 bg-white/80 dark:bg-zinc-900/60 p-5 md:p-6 shadow-lg backdrop-blur transition-all hover:border-purple-500/50">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 text-left">
                    <h3 className="text-lg font-semibold leading-tight">
                      {exp.company} —{' '}
                      <span className="text-purple-400">{exp.role}</span>
                    </h3>
                    <span className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                      {exp.period} • {exp.location}
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed text-left">
                    {exp.context}
                  </p>

                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300 text-left">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2 justify-start">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-[10px] md:text-xs text-purple-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
