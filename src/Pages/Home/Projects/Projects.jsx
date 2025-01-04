import { useState } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useState(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
            })
    }, [])
    return (
        <div>
            <h2 className=" text-center text-4xl font-rye mb-5">Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    projects.map((project, index) => <div key={index} className="group relative w-full h-64 bg-cover bg-center rounded-lg overflow-hidden shadow-lg">
                        {/* Zooming Background */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            style={{ backgroundImage: `url(${project.image})` }}
                        ></div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-40 transition duration-300 ease-in-out"></div>

                        {/* Text Content */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 text-white transition duration-300 ease-in-out">
                            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                            {/* <p className="text-sm text-center px-4">{description}</p> */}
                            <button className="text-sm py-2 px-4 bg-gray-400 border border-black border-r-2 border-b-2 rounded-md hover:scale-95 transition-transform duration-300 font-bold font-cinzel">
                            View Details
                        </button>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;