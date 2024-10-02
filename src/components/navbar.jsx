import { useEffect, useState } from 'react';
import {Link, Outlet, useLocation} from 'react-router-dom'
function Navbar(){
    const location = useLocation();
    const [active, setActive] = useState("/")
    const [openMenu, setOpenMenu] = useState(false)
    useEffect(()=>{
        setActive(location.pathname)
    }
    ,[location.pathname])
    const toggleMenu = () =>{
        setOpenMenu(!openMenu)
    }
    return(
        <>
        <div className="navbar xl:px-28 md:px-20 sm:px-10 xs:px-5 xxs:px-5 py-5">
            <div className="container grid grid-cols-2 lg:flex lg:justify-between">
                <div className="logo font-bold md:text-4xl sm:text-3xl xs:text-2xl xxs:text-2xl">
                    <Link to="/">Tihitna.</Link>
                </div>
                <div className="nav-button lg:hidden flex justify-end">
                    <button onClick={toggleMenu} >
                    <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
                    </button>
                </div>
           
                    <ul className={`lg:flex xl:gap-32 lg:gap-20 font-semibold text-sm py-4 transition-all duration-300 ease-in-out ${openMenu ? "fixed right-0 w-3/4 z-50 p-5 h-screen block text-center space-y-20  navBox top-0":"hidden"}`}>
                    <div className='flex justify-start px-5 mt-3 mb-10 lg:hidden'>
                        <button onClick={toggleMenu}>
                            <img src="./close.png" className='w-5' alt="" />
                        </button>
                    </div>
                        <li className={`${active === "/"? "border-b border-yellowColor  ": ""} py-1 md:w-28 lg:w-auto md:mx-auto`}>
                            <Link to="/">About</Link>
                        </li>
                        <li className={`${active === "/projects"? "border-b border-yellowColor ": ""} py-1 md:w-28 lg:w-auto md:mx-auto`}>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li className={`${active === "/services"? "border-b border-yellowColor ": ""} py-1 md:w-28 lg:w-auto md:mx-auto`}>
                            <Link to="/services">Services</Link>
                        </li>
                        <li className={`${active === "/contact"? "border-b border-yellowColor": ""} py-1 md:w-28 lg:w-auto md:mx-auto`}>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                
            </div>
        </div>
        <Outlet />
        </>
    )
}
export default Navbar