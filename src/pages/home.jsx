import { useState } from "react";

function Home() {
    const [chosen, setChosen] =useState("")
    const certificates = [
        {
            "src":"./certificates/degree.png",
            "title":"Bachelors Degree Certificate"
        },
        {
            "src":"./certificates/flutter.png",
            "title":"Introduction To Flutter Certificate"
        },
        {
            "src":"./certificates/js.png",
            "title":"Javascript For Beginners Certificate"
        },
        {
            "src":"./certificates/python.jpg",
            "title":"Python Certificate"
        },
        {
            "src":"./certificates/react certificate.png",
            "title":"ReactJs Tutorial Certificate"
        },
        {
            "src":"./certificates/siltawi.png",
            "title":"Web Development Training Certificate"
        }
    ];
function showImage(index){
   setChosen(certificates[index]);
    
}
const close = () =>{
    setChosen("")
}
   
    //     const scroll = () => {
    //         if (scrollRef.current) {
    //             const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    //             // Calculate the combined width of all certificates
    //             const totalCertificateWidth = certificates.length * (60 + 10); // Assuming width + margin

    //             // If the scroll has reached the end and can scroll further:
    //             if (scrollLeft + clientWidth >= scrollWidth) {
    //                 // Reset scroll position to the beginning smoothly

    //                 scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    //             } else {
    //                 // Scroll by a fixed amount smoothly
    //                 scrollRef.current.scrollBy({ left: 1, behavior: 'smooth' });
    //             }
    //         }
    //     };

    //     const intervalId = setInterval(scroll, 3); // Adjust the speed here

    //     return () => clearInterval(intervalId); // Cleanup on component unmount
    // }, []);

    return (
        <>
            <div className="container w-screen  flex-row items-center xl:px-28 lg:px-16 md:px-10 sm:px-10 xs:px-10 xxs:px-10 max-w-screen-2xl">
                <div className="hero flex xl:gap-48 lg:gap-32 lg:flex-row sm:flex-col-reverse xs:flex-col-reverse items-center xs:gap-0 xxs:flex-col-reverse xxs:gap-0 sm:gap-0 justify-center w-full m-auto">
                    <div className="left sm:w-[450px] lg:pt-24 sm:pt-10 xs:pt-10 xxs:pt-0">
                        <p className='text-sm'>I am Tihitna Sete Abebe from Ethiopia.</p> <br />
                        <p className='mb-7 leading-6 text-sm text-justify'>
                            Full stack web developer with html, css, js and react.js front end experience, node.js, express.js,
                            Mongo DB and mysql back end experience. I have a bachelor's degree in Electrical and computer
                            engineering stream of computer.
                        </p>
                        <a className='border px-10 py-3 rounded-3xl border-pinkColor text-sm font-semibold hover:bg-pinkColor hover:text-yellowColor' href='./file/MyCV.pdf' download="MyCV.pdf">
                            Download Resume
                        </a>
                    </div>
                    <div className="right lg:w-[250px] sm:w-auto xs:w-auto xxs:w-auto">
                        <img src="./profile.PNG" className="lg:w-[170px] sm:w-[100px] xs:w-[80px] xxs:w-[80px]" alt="" />
                    </div>
                </div>

                <div className="certificate mt-5">
                    <h2 className='font-bold lg:text-4xl sm:text-2xl xs:text-xl xxs:text-lg xxs:px-0 xxs:text-center xxs:pt-5 px-10'>Certificates & Awards</h2>

                    <div className="overflow-hidden relative scroll-smooth " >
                        <div className="absolute inset-y-0 left-0 lg:w-16 lg:h-[167px] sm:w-8 sm:h-[135px] xs:w-8 xs:h-[120px] xxs:w-8 xxs:h-[120px] top-4 z-50 rounded-sm bg-gradient-to-r from-gray-300 to-transparent pointer-events-none"></div>

                        <div className="absolute inset-y-0 right-0 lg:w-16 lg:h-[167px] sm:w-8 sm:h-[135px] xs:w-8 xs:h-[120px] xxs:w-8 xxs:h-[120px] top-4 z-50 rounded-sm bg-gradient-to-l from-gray-300 to-transparent pointer-events-none"></div>
                        <div className="certificates flex xs:gap-3 xxs:gap-3 lg:gap-10 md:gap-5 sm:gap-5  mt-5 w-max images overflow-visible my-5">

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
                        </div>
                    </div>
                </div>
                {chosen!== "" && (
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
                

            </div>

        </>
    );
}

export default Home;
