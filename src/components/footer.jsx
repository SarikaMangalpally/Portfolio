import Instagram from "../assets/icons/instagram.svg"
import Linkedin from "../assets/icons/linkedin.svg"
import Git from "../assets/icons/git.svg"
import Twitter from "../assets/icons/twitter.svg"
import LocationCompass from "../assets/icons/location-compass.svg"
import MailArrow from "../assets/icons/mail-arrow.svg"

export default function Footer() {
    return (
        <footer className="pt-16 px-3 md:pt-16 md:px-6 text-white bg-gradient-to-r from-olive-dark to-olive-light  md:grid md:grid-cols-12 md:gap-3 xl:px-48">
            <div className="ml-2 mr-5.5 mb-10 md:col-span-6 md:col-start-1 lg:col-span-5 xl:col-span-4">
                <h6 className="text-sm md:text-base font-oswald uppercase leading-tight tracking-wide">About Me</h6>
                <p className="text-xs md:text-sm opacity-70 leading-5 mt-6 mb-2">I am a graduate student at University of Louisiana at Lafayette. I love to develop applicaitons that makes tasks more automated.</p>
                <h4 className="font-shalimar text-white text-32 md:text-40 leading-11">Sarika Mangalpally</h4>
            </div>
            <div className="mb-10 ml-2 mr-5.5 md:col-span-6  md:col-start-7 md:ml-0 lg:col-span-2 lg:col-start-6 xl:col-start-5">
                <h6 className="text-sm md:text-base font-oswald uppercase leading-tight tracking-wide">navigations</h6>
                <ul className="capitalize text-xs md:text-sm opacity-70 leading-5 mt-6 mb-2 space-y-1.5">
                    <li><a href='/'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>portfolio</a></li>
                    <li><a href='#'>Projects</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>
            <div className="mb-10 ml-2 mr-5.5 md:col-span-6 md:col-start-1 md:col-end-7 md:row-start-2 lg:col-span-4 lg:col-start-8 lg:row-start-1 lg:ml-0 xl:col-start-7">
                <h6 className="text-sm md:text-base font-oswald uppercase leading-tight tracking-wide">Contacts</h6>
                <ul className="capitalize text-mango text-xs opacity-70 leading-5 mt-6 md:mt-4 mb-2 space-y-1.5">
                    <li className="flex">
                        <img src={LocationCompass} className="mr-3.5"></img>Lafayette, Louisiana
                    </li>
                    <li className="flex">
                        <img src={MailArrow} className="mr-3.5"></img>
                        <a href="mailto:sarikamangalpally@hotmail.com" className="lowercase">sarikamangalpally@hotmail.com</a>
                    </li>
                </ul>
                <p className="relative">
                    <a href="#" className="md:text-18 hover-on-message-transition capitalize font-oswald-light tracking-wide opacity-80 text-base leading-11 pt-5">send message</a>
                </p>
            </div>
            <div className="mb-10 ml-2 md:col-span-6 md:col-start-7 md:row-start-2 md:ml-0 lg:col-span-2 lg:row-start-1 lg:col-start-11 xl:col-start-10 xl:col-span-3">
                <h6 className="text-sm md:text-base font-oswald uppercase leading-tight tracking-wide">Follow me here</h6>
                <ul className="mt-10 md:mt-6 flex space-x-2.5 lg:space-x-0 lg:grid lg:grid-cols-2 lg:gap-2 xl:flex  xl:space-x-1">
                    <li className="social-links relative"><a  href="https://www.linkedin.com/in/sarikamangalpally/" className="absolute translate-x-2.5 translate-y-2.5"><img src={Linkedin} className="h-4 md:h-5"></img></a></li>
                    <li className="social-links relative"><a  href="https://github.com/SarikaMangalpallyli" className=""><img src={Git} className="absolute translate-x-2.5 translate-y-2.5"></img></a></li>
                    <li className="social-links relative "><a  href="https://www.instagram.com/sarikamadipoju/" className=""><img src={Instagram} className="absolute translate-x-2.5 translate-y-2.5"></img></a></li>
                    <li className="social-links relative"><a  href="https://twitter.com/sarikamadipoju" className=""><img src={Twitter} className="absolute translate-x-2.5 translate-y-2.5"></img></a></li>
                    
                </ul>
            </div>
            <p className="text-center text-xs font-karla leading-tight tracking-wide opacity-50 border-solid border-t-1 py-4 md:py-8 border-white/30 md:row-span-1 md:col-span-12">Made with love by Sarika Mangalpally | &copy; 2024</p>
        </footer>
    )
}
