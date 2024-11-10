// pages/experience.js
import React from 'react';

export default function Experience() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">My Experience</h1>
        <p className="text-gray-600 text-lg leading-relaxed text-center mb-8">
          With a background in web development, design, and SEO, and expertise in multiple programming languages, I have a diverse range of experiences that shape my approach to creating impactful, user-centered, and technically robust solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Frontend Developer</h2>
            <p className="text-gray-600">
              Worked on designing and implementing responsive, visually appealing user interfaces with technologies like React and Next.js. Focused on creating interactive and intuitive experiences for users.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Backend Developer</h2>
            <p className="text-gray-600">
              Developed backend functionality using Node.js, Express, and MongoDB, ensuring robust data handling and smooth server-side operations.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">UI/UX Designer</h2>
            <p className="text-gray-600">
              Applied design principles to create user-friendly interfaces, prioritizing ease of use and visually appealing layouts, focusing on user experience and interface design.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">SEO Specialist</h2>
            <p className="text-gray-600">
              Implemented SEO best practices across projects, optimizing website content and structure to enhance search engine visibility and improve organic reach.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Project Manager</h2>
            <p className="text-gray-600">
              Led teams in various projects, coordinating tasks, setting timelines, and ensuring successful project delivery while meeting client expectations.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Programming Mentor</h2>
            <p className="text-gray-600">
              Provided guidance and mentorship in programming, sharing knowledge in JavaScript, Python, and PHP, to support others in building their technical skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
