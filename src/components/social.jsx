import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function Social() {
  const circlesRef = useRef([]);

  useEffect(() => {
    const circles = circlesRef.current;
    const tl = gsap.timeline({ repeat: -1 }); // infinite loop

    // Each circle animation
    circles.forEach((circle) => {
      tl.fromTo(
        circle,
        { strokeDasharray: 283, strokeDashoffset: 283 }, // hidden
        { strokeDashoffset: 0, duration: 1, ease: "none" } // draw
      ).to(circle, { strokeDashoffset: 283, duration: 0.5, ease: "none" }); // hide again
    });
  }, []);

  const icons = [
    { icon: <FaFacebook />, link: "https://www.facebook.com/tihitna.sete.9" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/setetihitna/" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/feed/" },
    { icon: <FaTwitter />, link: "https://x.com/" },
    { icon: <FaGithub />, link: "https://github.com/Tihitna" },
  ];

  return (
    <div className="social absolute lg:bottom-[5%] bottom-[2%] left-[3%] md:w-auto w-[93%]">
      <div className="social-icons md:gap-10 flex md:text-xl sm:text-lg  gap-4 justify-between  ">
        {icons.map((item, i) => (
          <Link
            key={i}
            to={item.link}
            target="_blank"
            className="relative flex items-center justify-center w-12 h-12 hover:bg-white/20 hover:backdrop-blur-md rounded-full"
          >
            {/* SVG Ring */}
            <svg className="absolute w-14 h-14 " viewBox="0 0 100 100">
              <circle
                ref={(el) => (circlesRef.current[i] = el)}
                cx="50"
                cy="50"
                r="45"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
            </svg>

            {/* Icon */}
            <div className="relative z-10 ">{item.icon}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Social;
