
export default function AboutPage() {
  return (
    <section className="container mx-auto flex h-[calc(100vh-8rem)] items-center justify-center text-center">
      <h1 className="text-4xl font-bold">Resume</h1>
      <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[10px] before:bg-[#974AAA] before:rounded-full">
      <p className="mt-4 text-lg text-muted-foreground">
        Experienced, problem-solving oriented, and dedicated software engineer specializing in Javascript/Typescript
since 2017. Skilled in robust integration, complex web app development, and quality assurance with both
manual and automated testing. Proficient in ReactJS for web and React Native for mobile front-end, and
NodeJS for backend and REST APIs. Dedicated to enhancing UI/UX, continuous learning, and contributing
to collaborative team environments
      </p>
      </div>
    </section>
  );
}
