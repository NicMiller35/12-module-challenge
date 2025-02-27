import "../styles/resume.css";


const Resume = () => {
  return (
    <section class="resume">
      <h2 >My Resume</h2>
      <a href="/assets/SE-Resume.pdf" download>Download Resume</a>
      <ul>
        <h2 class='frontskill'>Front end devlopment skills</h2>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Bootstrap</li>
        

        
      </ul>
      <h2>Back end development skills</h2>
      <ul>
        <li>Javascript</li>
        <li>Node.js</li>
        <li>Typescript</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
      </ul>
      <h2>Other skills</h2>
      <ul>
        <li>Git/Terminal</li>
        <li>Debugging</li>
        <li>Prompt Engineering</li>
        <li>Problem solving</li>
      </ul>
    </section>
  );
}

export default Resume;
