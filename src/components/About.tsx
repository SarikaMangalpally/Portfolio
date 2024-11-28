import DownloadFromCloud from '@assets/icons/downloadFromCloud.svg'
import WomanPointDownwards from '@assets/illustrations/womanPointingDown.svg'

const About: React.FC = () => {
    return (
        // <div className=''>
            <div className=" relative mx-auto  p-5 md:max-w-screen-sm lg:max-w-screen-md z-0">
                {/* <div className=''> */}
                    <img src={WomanPointDownwards} alt="A woman pointing downwads" className='absolute top-0 -translate-y-5 md:-translate-y-10 left-4 md:left-1 z-10 w-28 md:w-36 h-28 md:h-36'/> 
                {/* </div> */}
                <h2 className="text-40 md:text-44 py-3">
                    <span className='z-20 relative'>Ab</span>
                    <span className='z-0 relative'>o</span>
                    <span className='z-20 relative'>ut</span>
                </h2>
                <p className="text-gray-600 mb-5 xl:text-18">
                I'm a passionate Software Engineer with expertise in building full-stack applications
                that prioritize user experience and performance. My approach combines technical excellence
                with user-centric design principles, ensuring that every project I undertake is not only
                functionally robust but also delivers exceptional value to end-users.
                </p>
                <p className="text-gray-600 mb-5 xl:text-18">
                With a strong foundation in system architecture and modern development practices,
                I specialize in creating SEO-optimized, scalable solutions that stand the test of time.
                My experience spans across various technologies and frameworks, allowing me to choose
                the right tools for each unique challenge.
                </p>
                <div className="mt-12 space-x-5">
                    <a href="/about" className="capitalize xl:text-18 px-8 py-3 lg:px-10 lg:py-4 rounded-md bg-black text-white">learn more &#8594;</a>
                    <a href="/resume" target='_blank' className="capitalize xl:text-18 px-8 py-3 lg:px-10 lg:py-3.5 rounded-md text-gray-700 bg-gray-100 inline-flex">
                        Resume
                    <img src={DownloadFromCloud} alt="download from cloud" className='w-8 h-6 ml-2'></img>
                    </a>
                </div>
            </div>
        // </div>
    )
}
export default About