import { Link } from "react-router-dom"

function WebProjects(){
    const webProjects = [
        {
            "title":"Responsive Portfolio Using HTML And CSS",
            "img":"./projects/alpha.png",
            "link":"https://portfolio-tihitna.vercel.app/"
        },
        {
            "title":"E-commerce website",
            "img":"./projects/joy.png",
            "link":""
        },
        {
            "title":"Telegebeya Responsive Website ",
            "img":"./projects/telegebeya.png",
            "link":"https://tele-gebeya.vercel.app/"
        },
        {
            "title":"Blog Website ",
            "img":"./projects/blog.png",
            "link":"https://github.com/Tihitna/blog"
        },
        {
            "title":"Calculator ",
            "img":"./projects/calculator.png",
            "link":"https://github.com/Tihitna/calculator"
        },
        {
            "title":"Registration Form ",
            "img":"./projects/registrationform.png",
            "link":"https://github.com/Tihitna/RegisterationForm"
        },
        {
            "title":"Travel Journal ",
            "img":"./projects/traveljournal.png",
            "link":"https://github.com/Tihitna/Travel-Journal"
        },
        {
            "title":"Don Website",
            "img":"./projects/don.png",
            "link":"https://don-clients.onrender.com/"
        }
    ]
    return(
        <>
        <div className="project mt-10">
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 xl:w-[1140px] lg:w-[850px] md:w-[650px] sm:w-[450px] sm:grid-cols-2 xs:w-[190px] xxs:w-[190px] xxs:grid-cols-1 xs:grid-cols-1 gap-10 mx-auto mb-10">
                        {webProjects.map(function(project, index){
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
        </>
    )
}
export default WebProjects