import Hero from "../components/Hero";
import ExploreMore from "../components/ExploreMore";
import Overview from "../components/Overview";
import Curriculum from "../components/Curriculum ";
import ProgramsSection from "../components/ProgramsSection";
const Homepage = () => {
    return (
        <>
            <Hero />
            <Overview />
            <ProgramsSection />
            <Curriculum />
            <ExploreMore />
        </>
    );
}

export default Homepage;