import {React} from 'react';
import Arrow from '../assets/icons/arrow.svg';

export default function AboutMe () {
    let title = 'About Me'
    let introduction = "Welcome to my corner of the digital universe! With a robust background spanning five years in application development, I've honed my skills as both a full-stack and frontend engineer at a dynamic startup in India."
    let educationSummary = "Currently on the cusp of graduating with a Master's degree in Computer Science from the University of Louisiana at Lafayette this May."
    let closingSummary = "Thriving in cross-functional collaborations, I excel at leveraging diverse perspectives to deliver impactful results. Eager to embark on my next journey, I'm actively seeking full-time opportunities to contribute my expertise and creativity to cutting-edge projects. Let's build something extraordinary together!"
    return (
        <div className='text-left my-8 xs:mb-20 relative sm:max-w-screen-md mx-4 sm:mx-5 md:mx-auto'>
            <h2 className='font-oswald-light text-32 xs:text-36 lg:text-40 xl:text-54'>
                {title}
            </h2>
            <div className='mx-auto font-karla-light'>
                <div className='space-y-4 text-16 xs:text-20 py-4'>
                    <p className='leading-relaxed'>
                        {introduction}
                    </p>
                    <p className='leading-relaxed'>
                        {educationSummary}
                    </p>
                    <p className='leading-relaxed'>
                        {closingSummary}
                    </p>
                </div>
                <div className='flex justify-between font-oswald-light my-4 py-2 text-16'>
                    <a href="/About" className='underline'>Know more<img src={Arrow} className='inline w-2 mx-2 rotate-45'></img></a>
                    <a target='_blank' href='https://drive.google.com/file/d/1mYp69yvZh2Kh6OpZ44uFr3JrtYaIpzuf/view?usp=drive_link' rel="noreferrer" className='underline'>Download Resume</a>
                </div>
            </div>
        </div>
    )
}