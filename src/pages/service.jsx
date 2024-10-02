import { useState } from "react"

function Services(){
    const [show, setShow] = useState("")
    const [show2, setShow2] = useState("")
    const [show3, setShow3] = useState("")
    const [arrow, setArrow] = useState("./down.png")
    const [arrow2, setArrow2] = useState("./down.png")
    const [arrow3, setArrow3] = useState("./down.png")
    
    const changeShow = () =>{
        if(show===""){
            setShow("show")
            setArrow("./up.png")
        }
        else{
            setShow("")
            setArrow("./down.png")
        }
    }
    const changeShow2 = () =>{
        if(show2===""){
            setShow2("show")
            setArrow2("./up.png")
        }
        else{
            setShow2("")
            setArrow2("./down.png")
        }
    }
    const changeShow3 = () =>{
        if(show3===""){
            setShow3("show")
            setArrow3("./up.png")
        }
        else{
            setShow3("")
            setArrow3("./down.png")
        }
    }
    return(
        <>
        <div className="container">
            <div className="services w-screen">
                <div className="flex justify-center lg:flex-row md:flex-col sm:flex-col xs:flex-col xxs:flex-col gap-7 items-center">
                    <div className="border border-pinkColor rounded-lg py-5 px-3 xl:w-80 lg:w-72 md:w-96 sm:w-80 xs:w-72 xxs:w-60 text-center  flex-row items-center box" >
                        <div className="flex justify-center">
                        <img src="./development.png" className="w-9 xxs:w-7" alt="" />
                        </div>
                        <h2 className="font-semibold text-2xl xxs:text-xl">Web Development</h2>
                        <p className="text-sm mt-2">Create responsive and fully functional web applications and websites.</p>
                        <div className={`${show === ""? "hidden":"flex gap-1 flex-wrap justify-center mt-5  lang"}   `}>
                            <span className="border rounded-full px-4 py-1 bg-pinkColor text-sm">Wordpress</span>
                            <span className="border rounded-full px-4 py-1 bg-pinkColor text-sm">HTML</span>
                            <span className="border rounded-full px-4 py-1 bg-pinkColor text-sm">CSS</span>
                            <span className="border rounded-full px-4 py-1 bg-pinkColor text-sm">PHP</span>
                            <span className="border rounded-full px-4 py-1 bg-pinkColor text-sm">Mysql</span>
                            <span className="border rounded-full px-4 py-1 bg-pinkColor text-sm">Javascript</span>
                            <span className="border rounded-full px-4 py-1 bg-pinkColor text-sm">ReactJS</span>
                            <span className="border rounded-full px-4 py-1 bg-pinkColor text-sm">MongoDB</span>
                            <span className="border rounded-full px-4 py-1 bg-pinkColor text-sm">Bootstrap</span>
                            <span className="border rounded-full px-4 py-1 bg-pinkColor text-sm">Tailwind</span>
                        </div>
                        <div className="flex justify-center -mb-3 mt-3">
                            <img src={arrow} className="w-3 cursor-pointer" onClick={changeShow} alt="" />
                        </div>
                    </div>
                    <div className="border border-pinkColor rounded-lg py-5 px-3 xl:w-80 lg:w-72 md:w-96 sm:w-80 xs:w-72 xxs:w-60 text-center  flex-row items-center box" >
                        <div className="flex justify-center">
                        <img src="./customization.png" className="w-9 xxs:w-7" alt="" />
                        </div>
                        <h2 className="font-semibold text-2xl xxs:text-xl">Web Customization</h2>
                        <p className="text-sm mt-2">Customize previously developed web applications and websites.</p>
                        <div className={`${show2 === ""? "hidden":"flex gap-1 flex-wrap justify-center mt-5  lang"}   `}>
                            <span className="border rounded-full px-4 py-1 bg-pinkColor text-sm">Wordpress</span>
                            <span className="border rounded-full px-4 py-1 bg-pinkColor text-sm">HTML</span>
                            <span className="border rounded-full px-4 py-1 bg-pinkColor text-sm">CSS</span>
                            <span className="border rounded-full px-4 py-1 bg-pinkColor text-sm">PHP</span>
                            <span className="border rounded-full px-4 py-1 bg-pinkColor text-sm">Mysql</span>
                            <span className="border rounded-full px-4 py-1 bg-pinkColor text-sm">Javascript</span>
                            <span className="border rounded-full px-4 py-1 bg-pinkColor text-sm">ReactJS</span>
                            <span className="border rounded-full px-4 py-1 bg-pinkColor text-sm">MongoDB</span>
                            <span className="border rounded-full px-4 py-1 bg-pinkColor text-sm">Bootstrap</span>
                            <span className="border rounded-full px-4 py-1 bg-pinkColor text-sm">Tailwind</span>
                        </div>
                        <div className="flex justify-center -mb-3 mt-3">
                            <img src={arrow2} className="w-3 cursor-pointer" onClick={changeShow2} alt="" />
                        </div>
                    </div>
                    <div className="border border-pinkColor rounded-lg py-5 px-3 xl:w-80 lg:w-72 md:w-96 sm:w-80 xs:w-72 xxs:w-60 text-center  flex-row items-center box" >
                        <div className="flex justify-center">
                        <img src="./design.png" className="w-9 xxs:w-7" alt="" />
                        </div>
                        <h2 className="font-semibold text-2xl xxs:text-xl">UI/UX Design</h2>
                        <p className="text-sm mt-2">Creating user-friendly and visually appealing UI/UX designs.</p>
                        <div className={`${show3 === ""? "hidden":"flex gap-1 flex-wrap justify-center mt-5  lang"}   `}>
                            <span className="border rounded-full px-4 py-1 bg-pinkColor text-sm">Figma</span>
                        </div>
                        <div className="flex justify-center -mb-3 mt-3">
                            <img src={arrow3} className="w-3 cursor-pointer" onClick={changeShow3} alt="" />
                        </div>
                    </div>
                </div>
                <div className="detailed mt-14 lg:w-[900px] md:w-[570px] sm:w-[570px] xs:w-[300px] xxs:w-[250px] mx-auto">
                    <div className="frontEnd flex gap-5 lg:flex-row md:flex-col xs:flex-col sm:flex-col xxs:flex-col">
                        <h3 className="font-semibold text-2xl xs:text-xl xxs:text-lg">Front-end Development:</h3>
                        <div className="icons flex gap-16 xs:gap-5 xxs:gap-4">
                            <img src="./html.svg" className="w-10 xs:w-8 xxs:w-7" alt="" />
                            <img src="./css.svg" className="w-10 xs:w-8 xxs:w-7" alt="" />
                            <img src="./js.svg" className="w-10 xs:w-8 xxs:w-7" alt="" />
                            <img src="./reactjs.svg" className="w-10 xs:w-8 xxs:w-7" alt="" />
                            <img src="./bootstrap.png" className="w-10 xs:w-8 xxs:w-7" alt="" />
                            <img src="./tailwind.png" className="w-10 xs:w-8 xxs:w-7" alt="" />
                        </div>
                    </div>
                    <div className="backEnd flex gap-5 mt-7 lg:flex-row md:flex-col xs:flex-col sm:flex-col xxs:flex-col">
                        <h3 className="font-semibold text-2xl xs:text-xl xxs:text-lg">Back-end Development:</h3>
                        <div className="icons flex gap-16 -mt-3 xs:gap-5 xxs:gap-4">
                            <img src="./mongodb.svg" className="w-10 xs:w-8 xxs:w-7" alt="" />
                            <img src="./mysql.svg" className="w-16 xs:w-13 xxs:w-12" alt="" />
                            <img src="./expressjs.svg" className="w-9 xs:w-7 xxs:w-6" alt="" />
                            <img src="./node.svg" className="w-12 xs:w-10 xxs:w-9" alt="" />
                            <img src="./php.svg" className="w-12 xs:w-10 xxs:w-9"  alt="" />
                        </div>
                    </div>
                    <div className="design flex gap-5 mt-7 mb-10 xs:flex-col xxs:flex-col">
                        <h3 className="font-semibold text-2xl w-64 text-right xs:text-xl xs:text-left xxs:text-left xxs:text-lg">UI/UX Design:</h3>
                        <img src="./figma.png" className="w-10 xs:w-8 xxs:w-7"  alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Services