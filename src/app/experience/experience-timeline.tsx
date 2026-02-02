import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Rede Confiax',
    role: 'Technical Lead',
    period: 'Oct 2024 – Present',
    location: 'Remote, Brazil',
    context:
      'Leading the modernization and evolution of Confiax’s core insurance platforms.',
    bullets: [
      'Led technical decisions for scalable frontend and backend architecture',
      'Defined code standards, documentation practices, and testing strategies',
      'Acted as the main technical bridge between engineering and stakeholders',
      'Reduced critical production issues through architectural improvements'
    ],
    stack: ['Next.js', 'React', 'Node.js', 'NestJS', 'TypeScript', 'PostgreSQL']
  },
  {
    company: 'Rede Confiax',
    role: 'Senior Software Engineer',
    period: 'Oct 2021 – Oct 2024',
    location: 'Remote, Brazil',
    context: 'Developed and optimized internal management systems and APIs.',
    bullets: [
      'Built and maintained REST APIs focused on performance',
      'Improved workflows and system reliability',
      'Worked closely with product and business teams'
    ],
    stack: ['React', 'Node.js', 'NestJS', 'TypeScript', 'MySQL']
  }
];

export default function ExperienceTimeline() {
  return (
    <section className="relative mx-auto max-w-4xl px-6 py-20">
      <h2 className="mb-12 text-3xl font-semibold">Experience</h2>

      {/* Timeline line */}
      <div className="absolute top-24 left-8 h-full w-px bg-gradient-to-b from-purple-500/60 to-transparent" />

      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative flex gap-8">
            {/* Timeline dot */}
            <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-purple-600/20 ring-2 ring-purple-500">
              <Briefcase className="h-4 w-4 text-purple-400" />
            </div>

            {/* Card */}
            <div className="w-full rounded-2xl border border-purple-500/30 bg-zinc-900/60 p-6 shadow-lg backdrop-blur">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {exp.company} —{' '}
                  <span className="text-purple-400">{exp.role}</span>
                </h3>
                <span className="text-sm text-zinc-400">
                  {exp.period} • {exp.location}
                </span>
              </div>

              <p className="mt-3 text-sm text-zinc-300">{exp.context}</p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
