import "../styles/Resume.css";


const Resume = () => {
  return (
    <section class="resume">
      <h2 >My Resume</h2>
      <a href="/path-to-resume.pdf" download>Download Resume</a>
      <ul>
        <h2 class='frontskill'>Front end devlopment skills</h2>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        {/* List other skills */}
      </ul>
      <h2>Back end development skills</h2>
      <ul>
        <li>Javascript</li>
        <li>Node.js</li>
        <li>Typescript</li>
      </ul>
      <h2>Other skills</h2>
      <ul>
        <li>Git</li>
        <li>Debugging</li>
        <li>Prompt generation</li>
        <li>Problem solving</li>
      </ul>
    </section>
  );
}

export default Resume;
