import React from "react";
import me from './images/dylan.jpg';

function About() {
    return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
    <div className="max-w-4xl bg-white shadow-lg rounded-lg p-5">
        <h2 className="text-3xl font-bold text-center mb-4">About NASA</h2>
        <p className="text-lg">
            The National Aeronautics and Space Administration (NASA) is a pivotal force in space exploration, scientific discovery, and aeronautics research. Established in 1958, NASA has led the world in pushing the boundaries of the possible, from landing the first humans on the Moon to exploring the outer reaches of the solar system and beyond. Its missions have not only expanded our understanding of the universe but also improved life on Earth through advancements in technology and environmental monitoring.
        </p>
        <p className="text-lg mt-4">
            Over the decades, NASA has been at the forefront of numerous space exploration milestones, including the Apollo moon-landing missions, the Space Shuttle program, and the Mars Rover explorations. These endeavors have not only showcased human ingenuity and resilience but have also fostered international cooperation and scientific advancement.
        </p>

        <h2 className="text-3xl font-bold text-center mb-4 mt-8">About Me</h2>
        <div className="flex justify-center">
            <img src={me} alt="Dylan Guidry" className="rounded-full h-48 w-48 object-cover m-5" />
        </div>
        <p className="text-lg">
            My name is Dylan Guidry, a passionate web developer with a foundation built at a coding bootcamp. My journey into the world of technology was driven by a fascination with creating and innovating on the web. Specializing in web development, I strive to build immersive and impactful digital experiences that bridge the gap between users and technology.
        </p>
        <p className="text-lg mt-4">
            Through my work, I aim to leverage the power of the web to tell stories, connect people, and solve real-world problems. My journey is one of continuous learning and exploration, inspired by the same spirit of discovery that defines NASA's mission. As I forge my path in the tech industry, I am excited to contribute to projects that push the boundaries of what's possible and make a meaningful difference in the world.
        </p>
    </div>
</div>
    );
}

export default About;