import { FaLinkedin, FaGithubSquare  } from "react-icons/fa";

const Banner = () => {
    return (
        <div>
            <div className="hero bg-paper w-full">
                <div className="hero-content max-w-[1440px] w-full mx-auto px-4 flex-col-reverse md:flex-row">
                    {/* Left Section */}
                    <div className="md:w-1/2 flex-col justify-start space-y-4">
                        <h1 className="text-4xl md:text-5xl  font-rye">Mazharul Islam Sourabh</h1>
                        <h3 className="text-2xl md:text-3xl font-semibold">Web Developer</h3>
                        <p className="text-xl font-semibold text-gray-500">I create user-friendly interface for fast-growing startups</p>
                        <button className="py-2 px-4 border border-black border-r-2 border-b-2 rounded-md hover:scale-90 transition-transform duration-300 font-bold font-cinzel">
                            View Resume
                        </button>
                        <div className="flex gap-3 text-3xl ">
                            <div className="p-1 border border-r-2 border-b-2 shadow-md rounded  border-black hover:scale-95 transition-transform duration-300 cursor-pointer"><FaLinkedin /></div>

                            <div className="p-1 border border-r-2 border-b-2 shadow-md rounded  border-black hover:scale-95 transition-transform duration-300 cursor-pointer"><FaGithubSquare /></div>
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className="md:w-1/2 flex justify-end">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            alt="A professional portrait"
                            className="rounded-lg shadow-xl max-w-full h-auto border border-r-4 border-b-4 border-black p-12"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;