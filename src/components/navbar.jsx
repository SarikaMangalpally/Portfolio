import React from "react";
export default function Navbar(props) {
    
    const showList = props.showNav

    const navListItems = ['home', 'about', 'Portfolio', 'Contact Me']
    return (
        <nav className={`${showList? '': 'bg-lemon-chiffon-light w-full absolute sm:top-0 sm:ml-14 sm:w-9/12 sm:transfrom sm:translate-y-1/2'}`}>
            <ul className={`${showList ? 'hidden': ' text-center'} h-full sm:top-0`}>
            {navListItems.map(listItem => {

                const route = console.log(listItem.split(' ').length > 1 ? listItem.split(' ').join('-') : listItem);
                return (
                    <li className="nav-list-item"><a href={`/${route}`} className="nav-list-names ">{listItem}</a></li>
                    )
            })}
                {/* <li className="nav-list-item"><a href="#" className="nav-list-names ">home</a></li>
                <li className="nav-list-item"><a href="#" className="nav-list-names ">About</a></li>
                <li className="nav-list-item"><a href="#" className="nav-list-names ">Portfolio</a></li>
                <li className="nav-list-item"><a href="#" className="nav-list-names ">Projects</a></li>
                <li className="nav-list-item"><a href="#" className="nav-list-names ">Contact</a></li> */}
            </ul>
        </nav>
    )
}