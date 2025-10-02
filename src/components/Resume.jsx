const Resume = () => {
  return (
    <section id="resume" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Resume</h2>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-1">
          <div className="rounded-lg overflow-hidden border shadow bg-base-100">
            <iframe
              src="/resume.pdf"
              title="Resume"
              className="embed-iframe border-0"
            />
          </div>
          <p className="mt-2 text-sm">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Open resume in new tab
            </a>
          </p>
        </div>

        <div className="w-full md:w-64 flex-shrink-0">
          <div className="p-4 rounded-lg border shadow bg-base-100">
            <p className="mb-4">Download a copy.</p>
            <a
              href="/resume.pdf"
              download
              className="btn btn-primary w-full mb-2"
            >
              Download Resume (PDF)
            </a>

            <p className="mb-4">Conact me at</p>
            <a
              href="mailto:kevinhin0830@gmail.com"
              className="btn btn-primary w-full mb-2"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
