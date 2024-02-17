
import React from "react";
export default function Navbar(props) {
    
    const showList = props.showNav
    console.log("showlist",showList)
    return (
        <nav className={`${showList? '': 'bg-lemon-chiffon-light w-full absolute sm:top-0 sm:ml-14 sm:w-9/12 sm:transfrom sm:translate-y-1/2'}`}>
            <ul className={`${showList ? 'hidden': ' text-center'} h-full sm:top-0`}>
                <li className="nav-list-item"><a href="#" className="nav-list-names ">home</a></li>
                <li className="nav-list-item"><a href="#" className="nav-list-names ">About</a></li>
                <li className="nav-list-item"><a href="#" className="nav-list-names ">Portfolio</a></li>
                <li className="nav-list-item"><a href="#" className="nav-list-names ">Projects</a></li>
                <li className="nav-list-item"><a href="#" className="nav-list-names ">Contact</a></li>
            </ul>
        </nav>
    )
}