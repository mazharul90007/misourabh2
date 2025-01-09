
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import profileImg from '../../../assets/profileImg2.png'

const Banner = () => {
    return (
        <div className="mb-16">
            <div className="hero bg-paper w-full">
                <div className="hero-content max-w-[1440px] w-full mx-auto px-4 flex-col-reverse md:flex-row">
                    {/* Left Section */}
                    <div className="md:w-1/2 flex-col justify-start space-y-4">
                        <h1 className="text-4xl md:text-5xl  font-rye">Mazharul Islam Sourabh</h1>
                        <h3 className="text-2xl md:text-3xl font-semibold">Web Developer</h3>
                        <p className="text-xl font-semibold text-gray-500">I create user-friendly interface for fast-growing startups</p>
                        <a href="/sourabh-cv.pdf" target="_blank" rel="noopener noreferrer">
                            <button className="py-2 my-4 px-4 border border-black border-r-2 border-b-2 rounded-md hover:scale-95 transition-transform duration-300 font-bold font-cinzel">
                                View Resume
                            </button>
                        </a>
                        <div className="flex gap-3 text-3xl ">
                            <a href="https://www.linkedin.com/in/mazharul-islam-sourabh-4111b3227/" target="_blank" rel="noopener noreferrer">
                                <div className="p-1 border border-r-2 border-b-2 shadow-md rounded  border-black hover:scale-95 transition-transform duration-300 cursor-pointer"><FaLinkedinIn /></div>
                            </a>

                            <a href="https://github.com/mazharul90007" target="_blank" rel="noopener noreferrer">
                                <div className="p-1 border border-r-2 border-b-2 shadow-md rounded  border-black hover:scale-95 transition-transform duration-300 cursor-pointer"><FaGithub /></div>
                            </a>
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className="md:w-1/2 flex justify-end">
                        <img
                            src={profileImg}
                            alt="A professional portrait"
                            className="rounded-lg shadow-xl max-w-full border border-r-4 border-b-4 border-black h-80"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;