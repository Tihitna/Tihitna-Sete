import { useState } from "react"
import { Link } from "react-router-dom"
import AllProjects from "../components/allprojects"
import UIProjects from "../components/uiprojects"
import WebProjects from "../components/webprojects"

function Projects(){
    const [link, setLink] = useState("all")
    return(
        <>
        <div className="container">
            <div className="projects">
                <div className="nav">
                    <ul className="flex justify-center lg:gap-60 md:gap-40 sm:gap-20 xs:gap-10 xxs:gap-5 xxs:text-[12px] font-semibold text-sm">
                        <li>
                            <Link onClick={()=> setLink("all")}>All Projects</Link>
                        </li>
                        <li>
                            <Link onClick={() => setLink("ui")}>UI/UX Projects</Link>
                        </li>
                        <li>
                            <Link onClick={() => setLink("web")}>Web Projects</Link>
                        </li>
                    </ul>
                </div>
                {link ==="all" && ( <AllProjects /> )}
                {link==="ui" && ( <UIProjects/> ) }
                {link==="web" && ( <WebProjects/> ) }

                </div>
            </div>
        
        </>
    )
}
export default Projects