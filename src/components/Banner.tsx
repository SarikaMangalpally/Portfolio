import ProfilePicture from '@assets/BannerImage.jpg'

// import TypeWriterHook from '@/hooks/TypeWriterHook'

const Banner: React.FC = () => {
    // const professionWorkList = ['software engineering', 'fullStack development', 'web development', 'Frontend development', 'Automation Testing']
    const bannerDetails = {
        Name: 'Sarika',
        welcomeText: 'Happy to see you here!',
        description: 'Passionate to design and develop software applications leveraging',
        skills: ['AI', 'React', 'AWS', 'DevOps'],
        previousWorkPlace: [{'ULL': 'https://louisiana.edu/'}, {'Able': 'https://www.able.do/' }]
    }
    // const displayText = TypeWriterHook({ texts: professionWorkList, speed: 100 });
    // console.log(displayText)
    return (
        <div className="h-screen bg-slate-800 text-white text-opacity-70">
            <div className='z-0 h-full w-full'>
                <img src={ProfilePicture} alt="profile picture" className='object-cover w-full h-full'/>
            </div>
            <div className='w-full lg:max-w-screen-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 text-center z-1 '>
                <h1 className="text-44 md:text-54 xl:text-64 font-shalimar animate-fade-in leading-none">
                    <span>Hello, I'm {bannerDetails.Name}.</span>
                    <br />
                    <span>{bannerDetails.welcomeText}</span>
                </h1>
                {/* <div>
                    <p className='text-24 md:text-40 lg:leading-loose font-oswald-light  capitalize'>I do, <span className={`text-amber-400`}>{displayText}</span>
                    </p>
                </div> */}
                <div className='animate-fade-in-out'>
                    <p className='text-20 md:text-26 xl:text-30 mt-4 font-mono leading-tight tracking-tight'>
                        {bannerDetails.description} <span className='text-lime-800'>{bannerDetails.skills.map((item, index)=> {return `${item}${index < bannerDetails.skills.length-1?', ': ''}`})}</span>
                    </p>
                    <div className='text-20 font-mono tracking-tight'>
                        <p className=''>
                            Software Engineer @ <a href="https://i3developers.com/" className='text-amber-400'>i3Developers</a>
                        </p>
                        <p>
                            Previously worked @ {

                                bannerDetails.previousWorkPlace.map((item, index)=> {
                                    const [key, value] = Object.entries(item)[0];
                                    return (
                                        // <li key={index}>
                                        <>
                                            <a href={value} target="_blank" className='text-amber-400'>{key}</a>
                                            {index<bannerDetails.previousWorkPlace.length-1? ', ' : ''}
                                            </>
                                        // </li>
                                    )
                                })}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner