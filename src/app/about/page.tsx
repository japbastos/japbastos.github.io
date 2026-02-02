export default function AboutPage() {
  return (
    <section className="centred container">
      <div className="mx-auto flex w-3xl flex-col gap-6">
        <h1 className="flex justify-start text-4xl font-bold">Resume</h1>
        <div className="quoted">
          <p className="text-2xl italic">
            Software Engineer and Technical Lead with 7+ years of experience
            building scalable web platforms using JavaScript and TypeScript.
            Focused on system architecture, code quality, and developer
            experience.
          </p>
        </div>
        <h1 className="flex justify-start text-4xl font-bold">Experience</h1>

        {/* <ul>
          <li>
            <div className="border-brand-secondary rounded border-4 p-4">
              <p>
                <strong>Software Engineer</strong> at Company Name (2020 -
                Present)
              </p>
            </div>
          </li>
        </ul> */}
      </div>
    </section>
  );
}
