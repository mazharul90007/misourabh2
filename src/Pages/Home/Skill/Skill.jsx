import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiFirebase, SiExpress, SiMongodb, SiDaisyui } from "react-icons/si";
import Marquee from "react-fast-marquee";


const Skill = () => {
    return (
        <div className="my-12">
            <section className="">
                <h2 className=" text-center text-4xl font-rye mb-5">Technical Skills</h2>

                <div className="">
                    <Marquee autoFill pauseOnHover>
                        <div className="text-center mx-4 p-4 border border-r-2 border-b-2 border-black shadow-lg rounded-md">
                            <FaHtml5 className="text-orange-600 text-5xl mx-4" />
                            <p className="mt-2 text-gray-800">HTML5</p>
                        </div>
                        <div className="text-center mx-4 p-4 border border-r-2 border-b-2 border-black shadow-lg rounded-md">
                            <FaCss3Alt className="text-blue-600 text-5xl mx-4" />
                            <p className="mt-2 text-gray-800">CSS3</p>
                        </div>
                        <div className="text-center mx-4 p-4 border border-r-2 border-b-2 border-black shadow-lg rounded-md">
                            <SiTailwindcss className="text-sky-500 text-5xl mx-4" />
                            <p className="mt-2 text-gray-800">Tailwind CSS</p>
                        </div>
                        <div className="text-center mx-4 p-4 border border-r-2 border-b-2 border-black shadow-lg rounded-md">
                            <SiBootstrap className="text-purple-600 text-5xl mx-4" />
                            <p className="mt-2 text-gray-800">Bootstrap</p>
                        </div>
                        <div className="text-center mx-4 p-4 border border-r-2 border-b-2 border-black shadow-lg rounded-md">
                            <SiDaisyui className="text-teal-500 text-5xl mx-4" />
                            <p className="mt-2 text-gray-800">DaisyUI</p>
                        </div>
                        <div className="text-center mx-4 p-4 border border-r-2 border-b-2 border-black shadow-lg rounded-md">
                            <FaJs className="text-yellow-500 text-5xl mx-4" />
                            <p className="mt-2 text-gray-800">JavaScript</p>
                        </div>
                        <div className="text-center mx-4 p-4 border border-r-2 border-b-2 border-black shadow-lg rounded-md">
                            <FaReact className="text-cyan-500 text-5xl mx-4" />
                            <p className="mt-2 text-gray-800">React</p>
                        </div>
                        <div className="text-center mx-4 p-4 border border-r-2 border-b-2 border-black shadow-lg rounded-md">
                            <SiFirebase className="text-orange-500 text-5xl mx-4" />
                            <p className="mt-2 text-gray-800">Firebase</p>
                        </div>
                        <div className="text-center mx-4 p-4 border border-r-2 border-b-2 border-black shadow-lg rounded-md">
                            <FaNodeJs className="text-green-500 text-5xl mx-4" />
                            <p className="mt-2 text-gray-800">Node.js</p>
                        </div>
                        <div className="text-center mx-4 p-4 border border-r-2 border-b-2 border-black shadow-lg rounded-md">
                            <SiExpress className="text-gray-700 text-5xl mx-4" />
                            <p className="mt-2 text-gray-800">Express.js</p>
                        </div>
                        <div className="text-center mx-4 p-4 border border-r-2 border-b-2 border-black shadow-lg rounded-md">
                            <SiMongodb className="text-green-600 text-5xl mx-4" />
                            <p className="mt-2 text-gray-800">MongoDB</p>
                        </div>
                    </Marquee>
                </div>
            </section>
        </div>
    );
};

export default Skill;