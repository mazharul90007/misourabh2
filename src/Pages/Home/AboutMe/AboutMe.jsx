import Lottie from "lottie-react";
import person from '../../../../public/person.json'


const AboutMe = () => {
    return (
        <div className="my-16">
            <h2 className=" text-center text-4xl font-rye mb-5">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="col-span-1 flex justify-center items-center">
                    <Lottie animationData={person} className="w-96"></Lottie>
                </div>
                <div className="col-span-1">

                    <p className="text-gray-500">I am Mazharul Islam Sourabh, a passionate Junior Web Developer with a strong focus on MERN stack development. My programming journey began in January 2023, and since then, I have been dedicated to honing my skills and staying up-to-date with the latest technologies. <br />

                        I have completed various web development courses from renowned institutes such as UY-Lab, BITM, and Programming Hero. These courses have provided me with a solid foundation in web development, including front-end and back-end technologies. Through hands-on projects and real-world applications. <br />

                        What excites me most about web development is the ability to create interactive, user-friendly websites and applications that solve real-world problems. As I continue to grow as a developer, I am eager to work on more challenging projects, collaborate with other developers, and contribute to the ever-evolving tech landscape.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;