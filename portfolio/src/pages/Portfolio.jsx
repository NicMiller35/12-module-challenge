import React from "react";
import Project from "../components/Project.jsx";
import "../styles/portfolio.css";




const projects = [
    { title: "Phoebe's Flowers", image: '/assets/Screenshot 2025-02-13 at 1.54.32 PM.png', url:"https://github.com/NicMiller35/Phoebes-Flowers-MERN" },
    { title: "Employee Tracker", image: '/assets/tracker.png', url:"https://github.com/NicMiller35/10-module-challenge" },
    { title: "README Generator", image: '/assets/readme.png', url:"https://github.com/NicMiller35/readme-challenge" },
    { title: "KANBAN", image: '/assets/shot.png', url:"https://github.com/NicMiller35/14--module-challenge" },
    { title: "Vehicle Builder", image: '/assets/builder.png', url:"https://github.com/NicMiller35/8-module-challenge" },
    { title: "Weather Dashboard", image: '/assets/weather.png', url:"https://github.com/NicMiller35/9-module-challenge" }
    
];

export default function Portfolio() {
    return (
        <div class='port'>
            <h1 class= 'portsh1'>Projects</h1>
            <div className="portfolio-container">
                {projects.map((project, index) => (
                    <Project key={index} title={project.title} image={project.image} url={project.url} />
                ))}
            </div>
        </div>
    );
}

  