import ProgressBar from "@ramonak/react-progress-bar";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiFirebase, SiExpress, SiMongodb, SiDaisyui } from "react-icons/si";
import Lottie from "lottie-react";
import coding from '../../../../public/coding.json'

const Progress = () => {
    return (
        <div className="my-16">
            <h2 className=" text-center text-4xl font-rye mb-5">Progress</h2>
            <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-10">
                <div className="col-span-1">
                    <Lottie animationData={coding}></Lottie>
                </div>
                <div className="col-span-1 space-y-2">
                    {/* HTML */}
                    <div className="flex items-center">
                        <div>
                            <FaHtml5 className="text-orange-600 text-4xl" />
                        </div>
                        <div className="w-full"><ProgressBar completed={95} bgColor={'#EA580B'} width={'100%'} height={15}/></div>
                    </div>
                    {/* CSS */}
                    <div className="flex items-center">
                        <div>
                            <FaCss3Alt className="text-blue-600 text-4xl" />
                        </div>
                        <div className="w-full"><ProgressBar completed={90} bgColor={"#2663EB"} width={'100%'} height={15}/></div>
                    </div>
                    {/* TAILWIND CSS */}
                    <div className="flex items-center">
                        <div>
                            <SiTailwindcss className="text-sky-500 text-4xl" />
                        </div>
                        <div className="w-full"><ProgressBar completed={90} bgColor={"#0DA5E9"} width={'100%'} height={15}/></div>
                    </div>
                    {/* BOOTSTRAP */}
                    <div className="flex items-center">
                        <div>
                            <SiBootstrap className="text-purple-600 text-4xl" />
                        </div>
                        <div className="w-full"><ProgressBar completed={85} bgColor={"#9333EA"} width={'100%'} height={15}/></div>
                    </div>
                    {/* DAISYUI */}
                    <div className="flex items-center">
                        <div>
                            <SiDaisyui className="text-teal-500 text-4xl" />
                        </div>
                        <div className="w-full"><ProgressBar completed={95} bgColor={"#13B8A6"} width={'100%'} height={15}/></div>
                    </div>
                    {/* JAVASCRIPT */}
                    <div className="flex items-center">
                        <div>
                            <FaJs className="text-yellow-500 text-4xl " />
                        </div>
                        <div className="w-full"><ProgressBar completed={90} bgColor={"#EAB307"} width={'100%'} height={15}/></div>
                    </div>
                    {/* React */}
                    <div className="flex items-center">
                        <div>
                            <FaReact className="text-cyan-500 text-4xl " />
                        </div>
                        <div className="w-full"><ProgressBar completed={95} bgColor={"#05B6D4"} width={'100%'} height={15}/></div>
                    </div>
                    {/* FIREBASE */}
                    <div className="flex items-center">
                        <div>
                            <SiFirebase className="text-orange-500 text-4xl " />
                        </div>
                        <div className="w-full"><ProgressBar completed={80} bgColor={"#F97317"} width={'100%'} height={15}/></div>
                    </div>
                    {/* NODEJS */}
                    <div className="flex items-center">
                        <div>
                            <FaNodeJs className="text-green-500 text-4xl " />
                        </div>
                        <div className="w-full"><ProgressBar completed={70} bgColor={"#21C55E"} width={'100%'} height={15}/></div>
                    </div>
                    {/* EXPRESS */}
                    <div className="flex items-center">
                        <div>
                            <SiExpress className="text-gray-700 text-4xl " />
                        </div>
                        <div className="w-full"><ProgressBar completed={75} bgColor={"#374151"} width={'100%'} height={15}/></div>
                    </div>
                    {/* MONGODB */}
                    <div className="flex items-center">
                        <div>
                            <SiMongodb className="text-green-600 text-4xl " />
                        </div>
                        <div className="w-full"><ProgressBar completed={70} bgColor={"#16A34A"} width={'100%'} height={15}/></div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Progress;