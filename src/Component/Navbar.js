import { ArrowRightIcon } from "@heroicons/react/outline";
import React, { useEffect } from "react";
import ThemeSelector from "../ThemeSelector";
import WebFont from 'webfontloader';
import {useTheme} from "../theme/useTheme";

export default function Navbar({ selectedTheme, setSelectedTheme }) {

    const { getFonts } = useTheme();

    useEffect(() => {
        WebFont.load({ google: { families: getFonts() } });
    }, [getFonts]);

    return(
        <header className="section-header navBarHeader">
            <div className="container">
                <div className="navBar">
                    <h1 className="navBarTitle title">Austin Rizer</h1>
                    <nav className="navContainer">
                        <a href="#about" className="aboutNav navItem subHeader">About</a>
                        <a href="#experience" className="experienceNav navItem subHeader">Experiences</a>
                        <a href="#skills" className="skillsNav navItem subHeader">
                        Skills
                        </a>
                        <a href="#art" className="artNav navItem subHeader">Art</a>
                        <a href="#contact" className="contactNav navItem subHeader">
                        Contact
                            <ArrowRightIcon className="contactNavIcon icon navItem subHeader"/>
                        </a>
                    </nav>
                    <div className="themeContainer">
                        <ThemeSelector setter={ setSelectedTheme } />
                        <div className="selectedTheme">
                            <p>Current Theme: <u>{selectedTheme.name}</u></p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}