import React from 'react';

export default function AboutMe() {
    return (
        <div className='about'>
            <h1>About Me</h1>
            <div className='about-content'>
                <img className='aboutPic' src='/assets/profile2.JPG' alt='Nic Miller' />
                <p className='about-text'>
                    Hello! I’m Nic Miller, a passionate and driven full-stack developer. My journey into coding has been fueled by a love for problem-solving and a curiosity for how technology shapes our world. I'm building expertise in both front-end and back-end technologies, aiming to create seamless and user-friendly applications. With each project, I’m honing skills in languages, frameworks, and tools that make for efficient, scalable, and impactful software. I’m excited to keep learning and to connect with others in the tech community. Let’s build something great together!
                </p>
            </div>
        </div>
    );
};