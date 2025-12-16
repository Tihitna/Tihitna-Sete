// import { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);
function Home() {
  //     const [chosen, setChosen] =useState("")
  //     const certificates = [
  //         {
  //             "src":"./certificates/degree.png",
  //             "title":"Bachelors Degree Certificate"
  //         },
  //         {
  //             "src":"./certificates/flutter.png",
  //             "title":"Introduction To Flutter Certificate"
  //         },
  //         {
  //             "src":"./certificates/js.png",
  //             "title":"Javascript For Beginners Certificate"
  //         },
  //         {
  //             "src":"./certificates/python.jpg",
  //             "title":"Python Certificate"
  //         },
  //         {
  //             "src":"./certificates/react certificate.png",
  //             "title":"ReactJs Tutorial Certificate"
  //         },
  //         {
  //             "src":"./certificates/siltawi.png",
  //             "title":"Web Development Training Certificate"
  //         }
  //     ];
  // function showImage(index){
  //    setChosen(certificates[index]);

  // }
  // const close = () =>{
  //     setChosen("")
  // }

  useGSAP(() => {
    // existing text animation
    const name = document.querySelectorAll(".name");
    name.forEach((name) => {
      const split = new SplitText(name, { type: "chars", charsClass: "char" });
      gsap.from(split.chars, {
        x: 300,
        opacity: 0,
        duration: 1.7,
        ease: "power4",
        stagger: 0.05,
      });
    });

   
  }, []);


  return (
    <>
      <div className="container  flex-row items-center xl:px-28 lg:px-16 md:px-10 sm:px-5 xs:px-5 xxs:px-5 max-w-screen-2xl">
        <div className="hero space-y-5 text-center w-full m-auto xl:pt-[13%] lg:pt-[10%]  sm:pt-[40%] xs:pt-[40%] xxs:pt-[20%]">
          <div className="md:space-x-3 font-medium font-monoton name lg:text-8xl md:text-6xl xs:text-4xl text-3xl space-x-1 overflow-hidden md:word-space-lg word-space-sm ">
            TIHITNA SETE.
          </div>
          <div className="lg:text-2xl md:text-xl font-raleway leading-8 md:leading-normal">
            AI ENGINEER, FRONT-END DEVELOPER & UI/UX DESIGNER
          </div>
          <div className="flex md:flex-row flex-col justify-center md:gap-32 gap-5 font-raleway lg:text-2xl md:text-xl">
            <a
              href=""
              className="relative inline-block text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              → See My Projects
            </a>
            <a
              href=""
              className="relative inline-block text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              → More About Me
            </a>
          </div>
        </div>

        <div className="certificate mt-5">
          <h2 className="font-bold lg:text-4xl sm:text-2xl xs:text-xl xxs:text-lg xxs:px-0 xxs:text-center xxs:pt-5 px-10">
            {/* Certificates & Awards */}
          </h2>

          <div className="overflow-hidden relative scroll-smooth ">
            <div className="absolute inset-y-0 left-0 lg:w-16 lg:h-[167px] sm:w-8 sm:h-[135px] xs:w-8 xs:h-[120px] xxs:w-8 xxs:h-[120px] top-4 z-50 rounded-sm bg-gradient-to-r from-gray-300 to-transparent pointer-events-none"></div>

            <div className="absolute inset-y-0 right-0 lg:w-16 lg:h-[167px] sm:w-8 sm:h-[135px] xs:w-8 xs:h-[120px] xxs:w-8 xxs:h-[120px] top-4 z-50 rounded-sm bg-gradient-to-l from-gray-300 to-transparent pointer-events-none"></div>
            {/* <div className="certificates flex xs:gap-3 xxs:gap-3 lg:gap-10 md:gap-5 sm:gap-5  mt-5 w-max images overflow-visible my-5">

                            {certificates.map(function (certificate, index) {
                                return (
                                    <img key={index} src={certificate.src} onClick={()=>showImage(index)} className="rounded-xl lg:w-60 lg:h-40 xl:w-60 xl:h-40 sm:w-40 sm:h-32 xs:w-32 xxs:h-28 xxs:w-32 xs:h-28 shadow-sm shadow-gray-500 transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer hover:z-10" alt="" />
                                )
                            })}
                            {certificates.map(function (certificate, index) {
                                return (
                                    <img key={index} src={certificate.src} onClick={() => showImage(index)} className="rounded-xl lg:w-60 lg:h-40 xl:w-60 xl:h-40 sm:w-40 sm:h-32 xs:w-32 xs:h-28 xxs:h-28 xxs:w-32 shadow-sm shadow-gray-500 transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer hover:z-10" alt="" />
                                )
                            })}
                        </div> */}
          </div>
        </div>
        {/* {chosen!== "" && (
                        <div className= "fixed top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2  cardbox  rounded-lg lg:w-[580px] md:w-[500px] sm:w-[450px] xs:w-[320px] xl:w-auto" >
                    <div className="flex justify-between xl:px-10 lg:px-7 sm:px-5 xs:px-5 border-b border-yellowColor py-5">
                        <h3 className="font-bold xl:text-2xl lg:text-xl sm:text-xl xs:text-md">{chosen.title}</h3>
                        <img src="./close.png" alt="close" onClick={close} className="w-5 h-5 mt-2 xs:w-4 xs:h-4 cursor-pointer"/>
                    </div>
                    <div className="card py-10 xl:px-20 lg:px-12 md:px-10 sm:px-5 xs:px-5">
                        <img src={chosen.src} alt="" className="w-[600px] rounded-lg" />
                    </div>
                </div>
                    )
                }
                 */}
      </div>
    </>
  );
}

export default Home;
