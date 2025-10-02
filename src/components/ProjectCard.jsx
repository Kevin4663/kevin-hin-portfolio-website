const ProjectCard = ({
  title,
  date,
  description,
  features = [],
  tech = [],
  github,
  live,
}) => {
  return (
    <div className="p-6 rounded-2xl shadow-lg bg-base-100 border hover:shadow-xl transition">
      <h3 className="text-2xl font-bold mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      <p className="mb-3">{description}</p>

      {features.length > 0 && (
        <ul className="list-disc list-inside mb-3 text-sm">
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}

      <p className="text-sm mb-3">
        <strong>Tech:</strong> {tech.join(", ")}
      </p>

      <div className="flex gap-3">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline"
          >
            Github
          </a>
        )}
        {live && live !== "#" && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
