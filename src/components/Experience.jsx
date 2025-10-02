const Experience = () => {
  const experiences = [
    {
      title: "Advanced Repair Agent",
      company: "Best Buy, Geek Squad",
      date: "Aug 2024 — Present",
      location: "Westland, MI",
      bullets: [
        "Utilized diagnostic equipment and testing tools to evaluate and repair hardware components",
        "Troubleshot software issues via monitoring tools, crash dumps, and logs",
        "Provided technical support to customers via phone, email, and in-person consultations",
      ],
    },
    {
      title: "Customer Service Representative",
      company: "Microcenter",
      date: "Nov 2021 — Dec 2022",
      location: "Madison Heights, MI",
      bullets: [
        "Met company goals for warranty plan attachment and customer account creation",
        "Processed POS transactions and returns accurately while ensuring customer satisfaction",
        "Provided basic technical support and product information to customers",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.title}
            className="p-6 rounded-xl shadow bg-base-100 border"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-sm text-gray-500">
                  {exp.company} · {exp.location}
                </p>
              </div>
              <div className="text-sm text-gray-500">{exp.date}</div>
            </div>
            <ul className="list-disc list-inside mt-4 space-y-1 text-sm">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
