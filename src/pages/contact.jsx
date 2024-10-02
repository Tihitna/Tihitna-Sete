function Contact(){
    return(
        <>
        <div className="container">
            <div className="contact mt-5">
                <div className="flex justify-center xl:gap-60 lg:gap-20 lg:flex-row sm:flex-col xs:flex-col xxs:flex-col items-center xs:w-screen mb-10">
                    <div className="getInTouch flex-row items-center md:-mt-5 lg:-mt-20 mb-10">
                        <h2 className="font-bold xl:text-6xl lg:text-5xl sm:text-4xl xs:text-3xl xxs:text-3xl">Get In Touch</h2>
                        <div className="info w-52 mx-auto mt-5">
                        <div className="email flex gap-2 mt-2">
                            <img src="./email.png" className="w-4 h-4 my-[3px]" alt="" />
                            <p className="text-sm">tihitnasete58@gmail.com</p>
                        </div>
                        <div className="phone flex gap-2 mt-2 ">
                            <img src="./phone.png" className="w-4 h-4 my-[3px]" alt="" />
                            <p className="text-sm">+251944354184</p>
                        </div>
                        <div className="address flex gap-2 mt-2">
                            <img src="./location.png" className="w-4 h-4 my-[3px]" alt="" />
                            <p className="text-sm">Ethiopia, Addis Ababa, Lideta</p>
                        </div>
                        </div>
                    </div>
                    <div className="form">
                        <form action="">
                            <div className="flex gap-5 xs:flex-col xxs:flex-col">
                                <div className="input-group  ">
                                    <label htmlFor="firstName" className="font-semibold text-sm">First Name</label> <br />
                                    <input type="text" className="bg-transparent border mt-2 border-yellowColor py-2 rounded-lg w-[200px] xs:w-[300px] xxs:w-[250px]" name="firstName" id="firstName"/>
                                </div>
                                <div className="input-group ">
                                    <label htmlFor="lastName" className="font-semibold text-sm">Last Name</label> <br />
                                    <input type="text"  className="bg-transparent border mt-2 border-yellowColor py-2 rounded-lg w-[200px] xs:w-[300px] xxs:w-[250px]" name="lastName" id="lastName"/>
                                </div>
                            </div>
                            <div className="input-group mt-3">
                                <label htmlFor="email" className="font-semibold text-sm">Email Address</label> <br />
                                <input type="email"  className="bg-transparent border mt-2 border-yellowColor py-2 rounded-lg w-[420px] xs:w-[300px] xxs:w-[250px]" name="email" id="email"/>
                            </div>
                            <div className="input-group mt-3">
                                <label htmlFor="phone" className="font-semibold text-sm">Phone Number</label> <br />
                                <input type="text"  className="bg-transparent border mt-2 border-yellowColor py-2 rounded-lg w-[420px] xs:w-[300px] xxs:w-[250px]" name="phone" id="phone"/>
                            </div>
                            <div className="input-group mt-3">
                                <label htmlFor="message" className="font-semibold text-sm">Message</label> <br />
                                <textarea name="message" id="message" rows="4" className="bg-transparent border mt-2 border-yellowColor py-2 rounded-lg xs:w-[300px] xxs:w-[250px] w-[420px]"></textarea>
                            </div>
                            <div className="input-group mt-3">
                                <button className='border px-10 py-3 rounded-lg  w-[200px] xs:w-[150px] xxs:w-[130px] border-yellowColor hover:border-pinkColor text-sm font-bold hover:bg-pinkColor hover:text-yellowColor'>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact