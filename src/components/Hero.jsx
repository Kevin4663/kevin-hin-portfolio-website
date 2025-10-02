const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center p-6 pt-28"
    >
      <h1 className="text-5xl font-bold mb-4">
        Hi, I’m <span className="text-primary">Kevin Hin</span>
      </h1>
      <p className="text-lg max-w-2xl">
        I build tools I’d actually use — turning my interests in gaming and tech
        into real, functional web apps.
      </p>
      <div className="mt-6 flex gap-4">
        <a href="#projects" className="btn btn-primary">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
