import AboutMe from "./AboutMe/AboutMe";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Progress from "./Progress/Progress";
import Projects from "./Projects/Projects";
import Skill from "./Skill/Skill";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Education></Education>
            <Skill></Skill>
            <Progress></Progress>
            <Projects></Projects>
            <Experience></Experience>
            <Contact></Contact>
        </div>
    );
};

export default Home;