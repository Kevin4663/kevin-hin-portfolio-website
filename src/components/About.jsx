const About = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-lg">
        I’m a passionate tech enthusiast and full-stack developer. I love
        exploring new technologies and building projects that solve real-world
        problems. My hobbies include esports, gaming and tinking with PCs from
        Raspberry Pi's to custom builds
      </p>
      <div className="mt-8 space-y-1">
        <p>
          <strong>Languages:</strong> Python, JavaScript, C++, Java, HTML, CSS
        </p>
        <p>
          <strong>Technologies:</strong> Node.js, React.js, Express.js, MongoDB
        </p>
        <p>
          <strong>Tools:</strong> VS Code, Git
        </p>
      </div>
    </section>
  );
};

export default About;
