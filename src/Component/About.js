import React from "react";
import profilePhoto from "../assets/IMG_0506.JPG";
import rangerBadge from "../assets/ranger.png"

export default function About() {
    return (
        <section id="about">
            <div className="container">
                <h1 className="title intro">
                    Hi, I'm Austin.
                </h1>
                <div className="profilePhotoContainer">
                    <img
                        className="profilePhoto"
                        alt="hero"
                        src={profilePhoto}
                    />
                </div>
                <div className="flex justify-center nav-links">
                    <p>
                        I am a passionate software developer and Salesforce engineer
                        with a background in photography and the creative arts.
                        I specialize in building efficient, user-friendly applications
                        that solve real-world problems. With experience in both frontend and backend
                        development,
                        I bring a holistic approach to software engineering.
                    </p>
                    <div className="trailheadBadgesContainer">
                        <a href="https://www.salesforce.com/trailblazer/agartman1" target="_blank"><img className="trailheadBadge" alt="Ranger Trailhead Badge" src={rangerBadge}/></a>
                    </div>
                    <a
                        href="#contact"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Work With Me
                    </a>
                    <a
                        href="#skills"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        Check my Skills
                    </a>
                </div>
            </div>
        </section>
    )
}