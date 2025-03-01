# 12-module-challenge
[![Netlify Status](https://api.netlify.com/api/v1/badges/c63fa48b-509a-45df-a819-4eefc92db57c/deploy-status)](https://app.netlify.com/sites/stellar-alpaca-8f0ab7/deploys)
# Description
This project is a personal portfolio website designed to showcase my skills, experience, and projects as a full stack developer in training. The portolio contains an about me, contact, resume, and project section. This portfolio project was built using React and features responsive design, making it accessible and visually appealing across devices.
## Table of Contents
- [Insallation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)
## Usage
![alt text](portfolio/public/assets/portfolio.png)
- <https://github.com/NicMiller35/12-module-challenge>
- <https://stellar-alpaca-8f0ab7.netlify.app/>
## Contribution
Nic Miller



## License
This is licensed under <https://opensource.org/licenses/MIT>
## Questions
If you have questions you can reach me at my GitHub or email below.
- <https://github.com/NicMiller35>
- nicmiller13@gmail.com


header {
    background-color: #0F4C75; /* Deep Teal */
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }
  
  header h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 3em;
    color: #FFD166; /* Soft Gold for contrast */
    margin: 0;
  }
  
  header nav {
    font-family: 'Roboto', sans-serif;
  }
  
  header ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 15px;
  }
  
  header ul li a {
    text-decoration: none;
    color: #FFD166; /* Soft Gold text */
    font-size: 1.2em;
    padding: 10px;
    transition: color 0.3s ease, background-color 0.3s ease;
    border-radius: 5px;
  }
  
  header ul li a:hover {
    color: #0F4C75; /* Deep Teal text */
    background-color: #B0A8B9; /* Warm Gray */
  }
  
  .about {
    background: url('your-background-image.jpg') center/cover no-repeat, #FAF3E0; /* Light Ivory fallback */
    color: #0F4C75; /* Deep Teal text */
    font-family: 'Roboto', sans-serif;
    padding: 20px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .about-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: rgba(255, 209, 102, 0.5); /* Soft Gold overlay for contrast */
    border-radius: 10px;
  }
  
  .about-text {
    width: 60%;
    padding: 5px;
  }
  
  .aboutPic {
    width: 500px;
    height: 300px;
    padding: 20px;
    border-radius: 10px;
  }
  
  .container {
    position: relative;
    display: grid;
    grid-template-rows: repeat(2, 1);
    grid-gap: 20px;
    width: 20%;
    margin: 40px;
    padding: 0px;
    border: 1px solid #0F4C75; /* Deep Teal border */
  }
  
  .porth1 {
    background-color: #B0A8B9; /* Warm Gray */
    color: #0F4C75; /* Deep Teal text */
    margin: 0;
  }
  
  .portfolio-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    padding: 20px;
    background-color: #FAF3E0; /* Light Ivory */
  }
  
  .project-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #FAF3E0; /* Light Ivory */
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    padding: 10px;
    width: 100%;
  }
  
  .image-container {
    position: relative;
    width: 75%;
  }
  
  .image {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }
  
  .middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  
  .container:hover .image {
    opacity: 0.3;
  }
  
  .container:hover .middle {
    opacity: 1;
  }
  
  .text {
    color: #0F4C75; /* Deep Teal text */
    font-size: 40px;
  }
  
  .image-container:hover .image {
    opacity: 0.3;
  }
  
  .image-container:hover .middle {
    opacity: 1;
  }
  