import LogoImage from "@assets/logo.svg"
import Close from "@assets/icons/close.svg"
import HamburgerMenu from "@assets/icons/hamburger-menu.svg"
import React from "react"
interface NavbarProps {
    navList: string[];
}

const Navbar:React.FC<NavbarProps> = ({navList}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    function toggleMenu() {
        setIsOpen((prevState: boolean) => {
            return !prevState
        })
    }
    
    return (   
        <div className={`${isOpen? 'bg-yellow-100' : ''}  absolute inset-0 z-10 p-4 sm:max-h-24 flex flex-col w-full sm:place-content-center`}>
            <div className="sm:w-4/5 sm:flex sm:relative sm:justify-around sm:mx-auto opacity-70 sm:backdrop-blur-2xl sm:backdrop-opacity-45 sm:bg-white/30 sm:py-4 sm:rounded-xl">
            <div className="flex justify-between items-center">
                <img src={LogoImage} className="w-8"></img>    
                <div className={`relative w-8 h-8 m-2 cursor-pointer sm:hidden`} onClick={toggleMenu}>
                    {<img src={isOpen? Close: HamburgerMenu} alt={isOpen? 'Close Menu' : 'Open Menu'}></img>}
                </div>
            </div>
            <nav className="relative content-center items-start">
                <ul className={`${isOpen? 'space-y-6 text-center': 'hidden'} cursor-pointer list-none sm:float-right sm:flex sm:space-x-4 md:space-x-5`}>
                    {
                        navList.map(listItem => (
                            <li className="text-18" key={listItem}><a href={listItem}>{listItem}</a></li>
                        ))
                    }
                    {/* <li className="text-18">
                        <a href="https://drive.google.com/file/d/1EhhF_9gb041s9wGZe50S0ayHz3c38ZGp/view?usp=drive_link/" target="_blank">Resume</a>
                    </li> */}
                </ul>

            </nav>
            </div>
        </div>
    )
}
export default Navbar;