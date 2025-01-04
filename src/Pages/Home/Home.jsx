import AboutMe from "./AboutMe/AboutMe";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Skill from "./Skill/Skill";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Experience></Experience>
            <Skill></Skill>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;