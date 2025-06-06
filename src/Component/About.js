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
                        <a href="https://www.salesforce.com/trailblazer/agartman1" target="_blank"><img
                            className="trailheadBadge" alt="Ranger Trailhead Badge" src={rangerBadge}/></a>
                    </div>
                    <div className="contactLinks">
                        <a
                            href="#contact"
                            className="embeddedLinks aboutLink">
                            Work With Me

                        </a>
                    </div>
                    <div className="aboutLinks">
                        <a
                            href="#skills"
                            className="embeddedLinks skillsLink">
                            Check my Skills
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}