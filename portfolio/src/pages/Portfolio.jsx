import React from "react";
import Project from "../components/Project.jsx";
import "../styles/portfolio.css";

import "../styles/portfolio.css";

//make my own projects

const projects = [
    { title: "Weather Dashboard", image: '/assets/weather.png', url:"https://github.com/NicMiller35/9-module-challenge" },
    { title: "Employee Tracker", image: '/assets/tracker.png', url:"https://github.com/NicMiller35/10-module-challenge" },
    { title: "README Generator", image: '/assets/readme.png', url:"https://github.com/NicMiller35/readme-challenge" },
    { title: "SlackPacking", image: '/assets/slack2.png', url:"https://github.com/D-Wargle/First-Project" },
    { title: "Vehicle Builder", image: '/assets/builder.png', url:"https://github.com/NicMiller35/8-module-challenge" },
    { title: "React Portfolio", image: '/assets/portfolio.png', url:"https://github.com/NicMiller35/12-module-challenge" },
];

export default function Portfolio() {
    return (
        <div class='port'>
            <h1 class= 'porth1'>Portfolio</h1>
            <div className="portfolio-container">
                {projects.map((project, index) => (
                    <Project key={index} title={project.title} image={project.image} url={project.url} />
                ))}
            </div>
        </div>
    );
}
