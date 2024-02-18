import React from "react";
import Usertie from "../assets/icons/user-tie.svg"
import Graduate from "../assets/icons/user-graduate.svg"
import Desktop from "../assets/icons/desktop.svg"
export default function Home() {
    return (
        <div className="pt-20 pb-12 sm:py-12 md:py-0 sm:flex">
            <div className="md:w-1/2 mx-5 md:ml-8 md:my-auto xl:mt-54">
                <h1 className="font-karla-bold text-32 sm:text-36 lg:text-40 xl:text-54 leading-8 lg:leading-10 xl:leading-none tracking-tighter uppercase w-11/12">
                    Hi, <br></br>
                    I'm Sarika .
                    <br></br>
                    <span className="text-mango">Software Developer</span>
                </h1>
                <div className="font-karla-medium my-6 w-full text-14">
                    <div className="flex">
                        <img src={Desktop} className="w-4 mr-1"></img>
                        <p className="leading-5">
                        Previously worked @ <a href="https://www.able.do/">Able.do</a>
                        </p>
                    </div>
                    <div className="flex">
                        <img src={Graduate} className="w-4 mr-1"></img>
                        <span className="leading-5">
                            Currently a <span className="text-mango w-full">Graduate Assistant</span> @ <a href="https://louisiana.edu/" className="w-full">University of Louisiana at Lafayette</a>
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
                    <a href="#" className="inline-block bg-olive-light text-white py-2 px-4 rounded-lg">Hire Me</a>
                    <a href="#" className="inline-block">Contact Me</a>
                </div>
            </div>
            <div className="md:w-1/2 lg:h-full">
                <img src="src/assets/hello.gif" className="w-full overflow-clip"></img>
            </div>
        </div>
    )
}