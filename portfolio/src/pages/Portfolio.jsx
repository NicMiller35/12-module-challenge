import React from "react";
import Project from "../components/Project.jsx";
import "../styles/portfolio.css";

import "../styles/portfolio.css";

//make my own projects

const projects = [
    { title: "Weather Dashboard", image: 'src/assets/images.jpg', url:"https://github.com/MavMMSZ/weather-dashboard" },
    { title: "Employee Tracker", image: 'src/assets/images.jpg', url:"https://github.com/MavMMSZ/employee-tracker" },
    { title: "README Generator", image: 'src/assets/images.jpg', url:"https://github.com/MavMMSZ/readMeGenerator" },
    { title: "Vacation Calculator", image: 'src/assets/images.jpg', url:"https://github.com/HarrisCH258/Vacation-Budget-Calculator" },
    { title: "Vehicle Builder", image: 'src/assets/images.jpg', url:"https://github.com/MavMMSZ/vehicle-builder" },
    { title: "React Portfolio", image: 'src/assets/images.jpg', url:"https://github.com/MavMMSZ/react-portfolio" },
];

export default function Portfolio() {
    return (
        <div class='port'>
            <h1>Portfolio</h1>
            <div className="portfolio-container">
                {projects.map((project, index) => (
                    <Project key={index} title={project.title} image={project.image} url={project.url} />
                ))}
            </div>
        </div>
    );
}
