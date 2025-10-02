import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "DB 4 LOL",
      date: "Aug 2025",
      description:
        "A full-stack MERN app integrating with the Riot Games API to display champion builds, player stats, and game data. Implements version tracking and automatic database synchronization.",
      features: [
        "RESTful API backend with Node.js/Express",
        "MongoDB version-tracked persistence",
        "Upstash Redis rate limiting",
        "React.js front-end with Tailwind CSS/DaisyUI",
      ],
      tech: ["MERN", "Riot API", "Redis", "Tailwind CSS"],
      github: "https://github.com/Kevin4663",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-base-200">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="max-w-5xl mx-auto justify-center">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
