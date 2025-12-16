"use client";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, Outlet , useLocation} from "react-router-dom";
function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState("/");
  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);
  return (
    <>
      <div className="navbar xl:px-28 lg:px-20 md:px-14 sm:px-10 xs:px-5 xxs:px-5 md:py-10 py-8 ">
        <div className="container grid grid-cols-2">
          <div className="logo font-bold lg:text-5xl md:text-4xl text-3xl  font-alexBrush">
            <Link to="/">Tihitna.</Link>
          </div>

          <div className="nav-button flex justify-end ">
            {active === "/menu" ? (
              <Link to={"/"}>
                <FaTimes className="lg:h-7 lg:w-7 w-5 h-5" />
              </Link>
            ) : (
              <Link to={"/menu"}>
                <FaBars className="lg:h-7 lg:w-7 w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
export default Navbar;
