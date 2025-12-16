import { gsap } from "gsap";

import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

gsap.registerPlugin(useGSAP, SplitText);

function Contact() {
  useGSAP(() => {
    const getInTouch = document.querySelectorAll(".getInTouch");
    getInTouch.forEach((getInTouch) => {
      const split = new SplitText(getInTouch, {
        type: "chars",
        charsClass: "char",
      });
      const time = gsap.timeline();
      time.fromTo(
        split.chars,
        {
          y: 80,
          rotateX: 360,
          opacity: 0,
          transformOrigin: "50% 50%",
          duration: 0.4,
        }, // start below, flipped
        {
          y: 0,
          rotateX: 0,
          opacity: 1,
          duration: 0.9,
          ease: "back.in(1.2)",
          stagger: 0.06,
        }
      );
      time.fromTo(
        "input, textarea, button, label",
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.9)",
          stagger: 0.08,
        }
      );
    });
  });
  return (
    <>
      <div className="container">
        <div className="contact mt-5">
          <div className="font-poppins flex justify-center xl:gap-60 lg:gap-20 lg:flex-row sm:flex-col xs:flex-col xxs:flex-col items-center xs:w-screen mb-10">
            <div className="flex-row items-center md:-mt-5 lg:-mt-20  mt-20 ">
              <h2 className="font-bold xl:text-7xl lg:text-6xl  sm:text-5xl xs:text-5xl text-4xl space-x-1 getInTouch font-raleway">
                Get In Touch
              </h2>
              <div className="info md:w-80 w-full  md:text-base text-sm tracking-widest mx-auto mt-7">
                <div className="email flex gap-2 mt-3">
                  <MdEmail className="w-4 h-4 my-[3px]" />
                  <p>tihitnasete58@gmail.com</p>
                </div>
                <div className="phone flex gap-2 mt-3">
                  <MdPhone className="w-4 h-4 my-[3px]" />
                  <p>+251944354184</p>
                </div>
                <div className="address flex gap-2 mt-3">
                  <MdLocationOn className="w-5 h-5 my-[3px]" />
                  <p>Ethiopia, Addis Ababa, Lideta</p>
                </div>
              </div>
            </div>
            <div className="form hidden md:block">
              <form action="">
                <div className="input-group  ">
                  <label htmlFor="name" className="font-semibold text-sm">
                    Name
                  </label>
                  <br />
                  <input
                    type="text"
                    className="bg-transparent border mt-2 py-2  rounded-lg w-[420px] xs:w-[300px] xxs:w-[250px] text-sm"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="flex md:gap-5 xs:flex-col xxs:flex-col">
                  <div className="input-group mt-3">
                    <label htmlFor="email" className="font-semibold text-sm">
                      Email Address
                    </label>{" "}
                    <br />
                    <input
                      type="email"
                      className="bg-transparent border mt-2 py-2 rounded-lg w-[200px] xs:w-[300px] xxs:w-[250px] text-sm"
                      name="email"
                      id="email"
                    />
                  </div>
                  <div className="input-group mt-3">
                    <label htmlFor="phone" className="font-semibold text-sm">
                      Phone Number
                    </label>
                    <br />
                    <input
                      type="text"
                      className="bg-transparent border mt-2  py-2 rounded-lg w-[200px] xs:w-[300px] xxs:w-[250px] text-sm"
                      name="phone"
                      id="phone"
                    />
                  </div>
                </div>

                <div className="input-group mt-3">
                  <label htmlFor="message" className="font-semibold text-sm">
                    Message
                  </label>
                  <br />
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    className="bg-transparent border mt-2 py-2 rounded-lg xs:w-[300px] xxs:w-[250px] w-[420px] text-sm"
                  ></textarea>
                </div>
                <div className="input-group mt-3">
                  <button className="border px-10 py-3 rounded-lg  w-[200px] xs:w-[150px] xxs:w-[130px]  text-sm font-bold hover:bg-white/20">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
