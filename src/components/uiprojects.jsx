import { Link, Outlet } from "react-router-dom"

function UIProjects(){
    const Ui = [
        {
            "title":"Design For Dental Clinic",
            "img":"./projects/dondesign.png",
            "link":"https://www.figma.com/design/4SZjhSD5osWIECtLU7ogKd/Don?node-id=0-1&node-type=canvas&t=zVYEFGDrcsNtb9rN-0"
        },
        {
            "title":"Store Management Design",
            "img":"./projects/joydesign.png",
            "link":"https://www.figma.com/design/Fu2MpoFri5Q5Gs7FFNdMWw/Untitled?t=MDrOCSZ3fp9kMEiJ-0"
        },
        {
            "title":"Portfolio Website Design",
            "img":"./projects/portfolio design.png",
            "link":"https://www.figma.com/design/9cYqHlJ4PFu1V30caDFsRr/Untitled?t=MDrOCSZ3fp9kMEiJ-0"
        }
    ]
    return(
        <>
        <div className="project mt-10">
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 xl:w-[1140px] lg:w-[850px] md:w-[650px] sm:w-[450px] sm:grid-cols-2 xs:w-[190px] xxs:w-[190px] xxs:grid-cols-1 xs:grid-cols-1 gap-10 mx-auto mb-10">
                        {Ui.map(function(project, index){
                            return(
                                <Link to={project.link} target="_blank">
                                <div key={index} className="border border-pinkColor rounded-lg xl:w-60 xs:w-[190px] text-center  flex-row items-center box hover:scale-105 hover:shadow-lg hover:shadow-gray cursor-pointer">
                            <img src={project.img} className="xl:w-60 xl:h-52 lg:h-48 lg:w-52 md:w-48 md:h-44 sm:w-52 sm:h-48 xs:w-48 xs:h-40 xxs:w-48 xxs:h-40 rounded-lg" alt="" />
                            <h3 className=" text-center font-[500] py-5 text-md px-3">{project.title}</h3>
                        </div>
                                </Link>
                            )
                        })}
                        
                    </div>
        </div>
        <Outlet/>
        </>
    )
}
export default UIProjects