// pages/skills.js


export default function Skills() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">My Skills</h1>
        <p className="text-gray-600 text-lg leading-relaxed text-center mb-8">
          As a versatile web developer and designer with deep knowledge of SEO, I possess a strong command over multiple programming languages and frameworks, making me proficient in creating dynamic, user-centered, and optimized web solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Frontend Development</h2>
            <p className="text-gray-600">
              Expert in HTML, CSS, JavaScript, and modern libraries like React and Next.js for building responsive, interactive, and visually engaging user interfaces.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Backend Development</h2>
            <p className="text-gray-600">
              Proficient in Node.js, Express, and MongoDB, allowing me to create robust and scalable backends to support diverse web applications.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">UI/UX Design</h2>
            <p className="text-gray-600">
              Skilled in designing intuitive, user-friendly interfaces with a strong focus on aesthetics, usability, and user experience.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">SEO Optimization</h2>
            <p className="text-gray-600">
              Knowledgeable in SEO best practices, helping to boost web visibility and rankings on search engines through optimized coding and structure.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Programming Languages</h2>
            <p className="text-gray-600">
              Proficient in JavaScript, Python, and PHP, giving me the versatility to build diverse web solutions and handle complex functionalities.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Version Control & Deployment</h2>
            <p className="text-gray-600">
              Experienced with Git and GitHub for version control, and skilled in deploying applications using platforms like Vercel and Heroku.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
