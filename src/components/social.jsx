import { Link, Outlet } from 'react-router-dom';
function Social() {
    return (
        <>
            <div className="social absolute xl:right-3 lg:right-[1px] sm:right-0 xs:right-0 xxs:right-0 md:right-0 top-24">
                <div className="social-icons lg:mx-5 md:mx-0 xs:mx-0 xxs:mx-0 flex-row items-center ">
                    <Link to="https://www.facebook.com/tihitna.sete.9" target="_blank" >
                        <div className='hover:rounded-full hover:shadow-lg hover:shadow-yellowColor p-2 px-3 my-12 flex justify-center xs:px-2 xxs:px-2'>
                            <img src="./facebook.png" className="w-7 xs:w-6 xxs:w-6" alt="" />
                        </div>
                    </Link>
                    <Link to="https://www.instagram.com/setetihitna/" target="_blank" >
                        <div className='hover:rounded-full hover:shadow-lg hover:shadow-yellowColor p-2 px-3 my-12 flex justify-center xs:px-2 xxs:px-2'>
                            <img src="./instagram.png" className="w-5 xs:w-4 xxs:w-4" alt="" />
                        </div>
                    </Link>
                    <Link to="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F" target="_blank" >
                        <div className='hover:rounded-full hover:shadow-lg hover:shadow-yellowColor p-2 px-3 my-12 flex justify-center xs:px-2 xxs:px-2'>
                            <img src="./linkedin.png" className="w-5 xs:w-4 xxs:w-4" alt="" />
                        </div>
                    </Link>
                    <Link to="https://x.com/?logout=1727367337922" target="_blank" >
                        <div className='hover:rounded-full hover:shadow-lg hover:shadow-yellowColor p-2 px-3 my-12 flex justify-center xs:px-2 xxs:px-2'>
                            <img src="./twitter.png" className="w-5 xs:w-4 xxs:w-4" alt="" />
                        </div>
                    </Link>
                    <Link to="https://github.com/Tihitna" target="_blank">
                        <div className='hover:rounded-full hover:shadow-lg hover:shadow-yellowColor p-2  my-12 flex justify-center xs:px-2 xxs:px-2'>
                            <img src="./github.png" className="w-5 xs:w-4 xxs:w-4" alt="" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Social