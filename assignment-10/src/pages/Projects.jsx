import React from "react";
import doctor from "../assets/doc.jpg";
import inventory from "../assets/inv.jpg";
import portfolio from "../assets/por.jpg";
import weather from "../assets/wea.jpg";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Sishu Childcare App",
      description:
        "A childcare platform with daily logs, parent-teacher chat, and activity tracking.",
      techStack: ["React Native", "Firebase", "Node.js"],
      image: doctor,
      repoLink: "https://github.com/suvashish26/shishu.git",
      liveLink: "https://sishuapp.com",
    },
    {
      id: 2,
      name: "Inventory Manager",
      description:
        "Desktop inventory tracking app with restock, sell, and reporting features.",
      techStack: ["Python", "Tkinter", "SQLite"],
      image: inventory,
      repoLink: "https://github.com/your-username/inventory-manager",
      liveLink: "",
    },
    {
      id: 3,
      name: "Portfolio Website",
      description:
        "A personal site showcasing projects, articles, and contact information.",
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
      image: portfolio,
      repoLink: "https://github.com/your-username/portfolio",
      liveLink: "https://yourname.dev",
    },
    {
      id: 4,
      name: "Nepali Weather App",
      description:
        "Weather forecasting app for Nepali cities using OpenWeatherMap API.",
      techStack: ["React", "API", "Bootstrap"],
      image: weather,
      repoLink: "https://github.com/your-username/nepali-weather",
      liveLink: "",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
        🌟 My Projects
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* {projects.map((project, index) => (
        <ul>
          <li key={project.id}></li>
        </ul>
      ))} */}
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl overflow-hidden border shadow-lg hover:shadow-xl transition duration-300 bg-white"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">Tech Stack:</span>{" "}
                {project.techStack.join(", ")}
              </p>

              <div className="flex gap-4 mt-4">
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
                  >
                    GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
