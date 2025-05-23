import React, { useState } from "react";
import {experiences} from "../data";

import {
    ChevronDownIcon,
    ChevronUpIcon
} from "@heroicons/react/outline";

export default function Experience() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    }

    return (
        <section id="experience">
            <div className="container">
                <div>
                    <h1 className="experience-title section-header">Job Experience</h1>
                </div>
                <div className="experiences">
                    {experiences.map((experience, index) => {
                        const isExpanded = expandedIndex === index;

                        return (
                            <div
                                key={index}
                                className={isExpanded ? "expanded experienceItem" : "experienceItem"}
                            >
                                {/* Header row containing Company name and toggle icon */}
                                <div
                                    onClick={() => handleToggle(index)}
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        cursor: "pointer",
                                        alignItems: "center"
                                    }}
                                >
                                    <h3 className="experienceCompany">
                                        {experience.company}
                                    </h3>
                                    {isExpanded ? (
                                        <ChevronUpIcon style={{ width: 24, height: 24 }} />
                                    ) : (
                                        <ChevronDownIcon style={{ width: 24, height: 24 }} />
                                    )}
                                </div>

                                {/* Conditionally rendered content: only visible if expanded */}
                                {isExpanded && (
                                    <div style={{ marginTop: "10px" }}>
                                        <h4 className="experienceTitle">
                                            {experience.title}
                                        </h4>
                                        <p className="experienceDates">
                                            {experience.dates}
                                        </p>
                                        <p className="experienceDescription">
                                            {experience.description}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}