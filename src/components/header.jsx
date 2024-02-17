import Logo from "../assets/logo.png"
import Close from "../assets/icons/close.svg"
import HamburgerMenu from "../assets/icons/hamburger-menu.svg"
import Navbar from "./navbar"
import React from 'react'
import { ReactDOM } from 'react-dom';

export default function header() {
    const [isMenuHidden, setIsMenuHidden] = React.useState(true);
    function showMenu() {
        setIsMenuHidden(prevState => {
            return !prevState
            }
        );
    }
    return (
        <header className={`w-full h-14 ${isMenuHidden? 'sm:w-16' : ''} sm:h-screen fixed z-1 bg-lemon-chiffon-light`}>
            <div className="p-2 sm:p-4 relative flex items-center justify-between sm:flex-col sm:place-content-between sm:items-center sm:w-16 sm:h-screen"> 
                <img src={Logo} className="block h-8 w-12"></img>
                <h4 className="hidden sm:block sm:-rotate-90 sm:w-44 sm:font-shalimar sm:text-26">Sarika Mangalpally</h4>
                <div className="relative" onClick={showMenu}>
                    <img src={HamburgerMenu} className={`${isMenuHidden?'block w-5 sm:w-6': 'hidden'}`} ></img>
                    <img src={Close} className={`${isMenuHidden? 'hidden': 'block w-5 sm:w-6'}`}></img>
                </div>
            </div>
            <Navbar showNav={isMenuHidden}/>
        </header>
    )
}
