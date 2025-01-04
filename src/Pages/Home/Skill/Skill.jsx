import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiFirebase, SiExpress, SiMongodb, SiDaisyui } from "react-icons/si";


const Skill = () => {
    return (
        <div className="my-12">
            <section className="">
            <h2 className=" text-center text-4xl font-rye mb-5">Technical Skills</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    <div className="text-center">
                        <FaHtml5 className="text-orange-600 text-5xl mx-auto" />
                        <p className="mt-2 text-gray-800">HTML5</p>
                    </div>
                    <div className="text-center">
                        <FaCss3Alt className="text-blue-600 text-5xl mx-auto" />
                        <p className="mt-2 text-gray-800">CSS3</p>
                    </div>
                    <div className="text-center">
                        <SiTailwindcss className="text-sky-500 text-5xl mx-auto" />
                        <p className="mt-2 text-gray-800">Tailwind CSS</p>
                    </div>
                    <div className="text-center">
                        <SiBootstrap className="text-purple-600 text-5xl mx-auto" />
                        <p className="mt-2 text-gray-800">Bootstrap</p>
                    </div>
                    <div className="text-center">
                        <SiDaisyui className="text-teal-500 text-5xl mx-auto" />
                        <p className="mt-2 text-gray-800">DaisyUI</p>
                    </div>
                    <div className="text-center">
                        <FaJs className="text-yellow-500 text-5xl mx-auto" />
                        <p className="mt-2 text-gray-800">JavaScript</p>
                    </div>
                    <div className="text-center">
                        <FaReact className="text-cyan-500 text-5xl mx-auto" />
                        <p className="mt-2 text-gray-800">React</p>
                    </div>
                    <div className="text-center">
                        <SiFirebase className="text-orange-500 text-5xl mx-auto" />
                        <p className="mt-2 text-gray-800">Firebase</p>
                    </div>
                    <div className="text-center">
                        <FaNodeJs className="text-green-500 text-5xl mx-auto" />
                        <p className="mt-2 text-gray-800">Node.js</p>
                    </div>
                    <div className="text-center">
                        <SiExpress className="text-gray-700 text-5xl mx-auto" />
                        <p className="mt-2 text-gray-800">Express.js</p>
                    </div>
                    <div className="text-center">
                        <SiMongodb className="text-green-600 text-5xl mx-auto" />
                        <p className="mt-2 text-gray-800">MongoDB</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skill;