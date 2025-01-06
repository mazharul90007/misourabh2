import Lottie from "lottie-react";
import education from "../../../../public/education2.json";

const Education = () => {
    return (
        <div className="my-16">
            <section>
                {/* Section Heading */}
                <h2 className="text-center text-4xl font-rye mb-8">Education</h2>

                {/* Content Container */}
                <div className="flex flex-col md:flex-row justify-center gap-6 p-6">
                    {/* Description Part */}
                    <div className="space-y-6 md:w-1/2 w-full">
                        {/* Bachelor's Degree */}
                        <div className="p-6 border border-black border-r-2 border-b-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                            <h3 className="text-2xl font-bold text-gray-800">
                                Bachelor of Science in Mathematics
                            </h3>
                            <p className="text-gray-600 mt-2 leading-relaxed">
                                <strong>Institution:</strong> Government Titumir College, Dhaka
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                <strong>Year of Passing:</strong> 2020
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                <strong>Address:</strong> A.K. Khandakar Road, Mohakhali, Dhaka, Bangladesh
                            </p>
                        </div>

                        {/* Higher Secondary School */}
                        <div className="p-6 border border-black border-r-2 border-b-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                            <h3 className="text-2xl font-bold text-gray-800">
                                Higher Secondary School Certificate (HSC)
                            </h3>
                            <p className="text-gray-600 mt-2 leading-relaxed">
                                <strong>Institution:</strong> Government Science College, Dhaka
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                <strong>Year of Study:</strong> 2012 - 2014
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                <strong>Group:</strong> Science
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                <strong>Address:</strong> 34/B, West Farmgate - Tejturi Bazar Rd, Dhaka, Bangladesh
                            </p>
                        </div>
                    </div>

                    {/* Animation Part */}
                    <div className="md:w-1/2 w-full flex justify-center items-center">
                        <Lottie 
                            animationData={education} 
                            className="h-96 w-full max-w-full object-contain" 
                            aria-label="Education animation" 
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Education;
