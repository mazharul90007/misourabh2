import { NavLink } from "react-router-dom";



const Navbar = () => {
    const navList = <>
        <NavLink to={'/'}><li>Home</li></NavLink>
        <NavLink to={'/resume'}><li>Resume</li></NavLink>
        <NavLink to={'/contact'}><li>Contact</li></NavLink>
    </>
    return (
        <div className="navbar bg-paper">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navList}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">miSourabh</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal flex gap-5 px-1">
                    {navList}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="py-2 px-4 border border-black border-r-2 border-b-2 rounded-md hover:scale-90 transition-transform duration-300 font-bold font-cinzel">
                    Download Resume
                </button>
            </div>
        </div>
    );
};

export default Navbar;