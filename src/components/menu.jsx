/* eslint-disable react-hooks/rules-of-hooks */
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link, Outlet } from "react-router-dom";

function menu() {
  
  useGSAP(() => {
    const menuItems = document.querySelectorAll("ul li");
    gsap.from(menuItems, {
      x: -500,
      opacity: 0,
        duration:2,
        ease: "power4.out",
        stagger: 0.1,
    });
  });
  return (
    <>
      <ul className="xl:pl-96 md:pt-10 lg:space-y-16 xl:text-5xl md:text-4xl lg:pl-80  md:pl-52 md:space-y-14 text-2xl space-y-12 pl-16 pt-20 xxs:pt-7 xs:text-3xl xs:space-y-14 font-rubikMono tracking-widest font-semibold ">
        <li>
          <Link
            to="/"
            className="relative hover:tracking-[1rem]  text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            About
          </Link>
        </li>
        <li className=" ">
          <Link
            to="/projects"
            className="relative hover:tracking-[1rem]  text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className="hover:tracking-[1rem] relative text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:tracking-[1rem] relative  text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Contact
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
export default menu;
