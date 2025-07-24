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
      liveLink: "doc.jpg",
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
    <div>
      <h1>These are my Projects</h1>
      {/* {projects.map((project, index) => (
        <ul>
          <li key={project.id}></li>
        </ul>
      ))} */}
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-gray-700 mt-1">{project.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                Tech Stack: {project.techStack.join(", ")}
              </p>
              <div className="mt-3 flex gap-4">
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-600 underline"
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
