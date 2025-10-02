const Education = () => {
  return (
    <section id="education" className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>

      <div className="p-6 rounded-xl shadow bg-base-100 border">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold">Wayne State University</h3>
            <p className="text-sm text-gray-500">B.S. Computer Science</p>
          </div>
          <div className="text-sm text-gray-500">Graduation: Summer 2026</div>
        </div>

        <div className="mt-4 text-sm">
          <p>
            <strong>GPA:</strong> 3.0 / 4.0
          </p>
          <p className="mt-2">
            <strong>Relevant Coursework:</strong> OOP, Data Structures &
            Algorithms, Web Development, Database Management
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
