import Lottie from "lottie-react";
import education from '../../../../public/education2.json'

const Education = () => {
    return (
        <div className="my-12">
            <section className="">
                <h2 className=" text-center text-4xl font-rye mb-5">Education</h2>

                <div className="p-6 flex justify-center gap-4">
                    {/* Description Part */}
                    <div className="space-y-4 w-1/2">
                        {/* Bachelor's Degree */}
                        <div className="p-6 border  border-black border-r-2 border-b-2 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-800">Bachelor of Science in Mathematics</h3>
                            <p className="text-gray-600 mt-2">
                                <strong>Institution:</strong> Government Titumir College, Dhaka
                            </p>
                            <p className="text-gray-600">
                                <strong>Year of Passing:</strong> 2020
                            </p>
                            <p className="text-gray-600">
                                <strong>Address:</strong> A.K. Khandakar Road, Mohakhali, Dhaka, Bangladesh
                            </p>
                        </div>

                        {/* Higher Secondary School */}
                        <div className="p-6 border border-black border-r-2 border-b-2 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-800">Higher Secondary School Certificate (HSC)</h3>
                            <p className="text-gray-600 mt-2">
                                <strong>Institution:</strong> Government Science College, Dhaka
                            </p>
                            <p className="text-gray-600">
                                <strong>Year of Study:</strong> 2012 - 2014
                            </p>
                            <p className="text-gray-600">
                                <strong>Group:</strong> Science
                            </p>
                            <p className="text-gray-600">
                                <strong>Address:</strong> 34/B, West Farmgate - Tejturi Bazar Rd, Dhaka, Bangladesh
                            </p>
                        </div>
                    </div>

                    {/* Image Part */}
                    <div className="w-1/2 flex justify-items-end items-center">
                        <Lottie animationData={education} className="h-96 w-auto"></Lottie>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Education;