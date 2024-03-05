import React from "react";
import Usertie from "../assets/icons/user-tie.svg"
import Graduate from "../assets/icons/user-graduate.svg"
import Desktop from "../assets/icons/desktop.svg"
import HelloGif from "../assets/hello.gif"
import AboutMeComponent from "../components/aboutMe"
import ContactFormComponent from "../components/contactForm"
import SkillsComponent from "../components/skills"

export default function Home() {
    return (
        <div className="">
            <div className="pt-20 md:py-12 lg:py-0 sm:flex">
                <div className="md:w-1/2 relative ml-5 xs:ml-7 md:ml-20 sm:my-auto xl:mt-54">
                    <h1 className="font-karla-bold text-32 xs:text-36 lg:text-40 xl:text-54 leading-8 lg:leading-10 xl:leading-none tracking-tighter uppercase w-11/12">
                        Hi, <br></br>
                        I'm Sarika .
                        <br></br>
                        <span className="text-mango">Software Developer</span>
                    </h1>
                    <div className="font-karla-medium my-6 w-full text-14">
                        <div className="flex">
                            <img src={Desktop} className="w-4 mr-1"></img>
                            <p className="leading-5">
                            Previously worked @ <a href="https://www.able.do/" className="text-mango">Able.do</a>
                            </p>
                        </div>
                        <div className="flex">
                            <img src={Graduate} className="w-4 mr-1"></img>
                            <span className="leading-5">
                                Currently a <span className="text-goldenrod-dark w-full">Graduate Assistant</span> @ <a href="https://louisiana.edu/" className="w-full text-mango">ULL</a>
                            </span>
                        </div>
                        <div className="flex">
                            <img src={Usertie} className="w-4 mr-1"></img> 
                            <p className="text-[#bbb] w-full">
                                Actively looking for full-time position.
                            </p>
                        </div>
                    </div>
                    <div className="space-x-2 cursor-pointer">
                        <a href="/hire-me" className="inline-block bg-olive-light text-white py-2 px-4 rounded-lg  hover:transform hover:-translate-y-0.5 drop-shadow-lg shadow-lime-90 active:scale-75 active:ease-in active:duration-300">Hire Me</a>
                        <a href="#" className="inline-block underline drop-shadow-lg shadow-lime-900 py-2 px-4 rounded-lg hover:transform hover:-translate-y-0.5 bg-olive-light bg-opacity-5 active:scale-75 active:ease-in active:duration-300">Portfolio</a>
                    </div>
                </div>
                <div className="md:w-1/2 lg:h-full">
                    <img src={HelloGif} className="w-full overflow-clip"></img>
                </div>
            </div>
            <AboutMeComponent/>
            <SkillsComponent/>
            <ContactFormComponent/>
        </div>
    )
}