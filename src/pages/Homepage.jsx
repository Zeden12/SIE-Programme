import React from "react";
import Hero from "../components/Hero";
import ExploreMore from "../components/ExploreMore";
import AboutSIE from "../components/ShortAbout";
import Overview from "../components/Overview";
import Curriculum from "../components/Curriculum ";
import ProgramsSection from "../components/ProgramsSection";
const Homepage = () => {
    return (
        <>
            <Hero />
            <Curriculum />
            <ProgramsSection />
            <AboutSIE />
            <Overview />
            <ExploreMore />
        </>
    );
}

export default Homepage;