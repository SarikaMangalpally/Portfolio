// import Background from '@assets/contactCardBackground.png';
import Desk from '@assets/young-woman-working-at-desk.png';
import Git from '@assets/icons/git.svg';
import LinkedIn from '@assets/icons/linkedin.svg';
import Twitter from '@assets/icons/twitter.svg';
import Phone from '@assets/icons/phone.svg';
import Email from '@assets/icons/email.svg';

import Click from '@assets/animations/click.gif';
import QRCode from 'qrcode';
import React, {useEffect, useState} from 'react';


interface Detail {
    Name: string;
    Profession: string;
    Email: string;
    Phone: string;
    LinkedIn: string;
}
interface ContactCardProps {
    details: Detail
}
const ContactCard:React.FC<ContactCardProps> = ({details}) => {
    const [showBackCard, setShowBackCard] = useState(false);
    const [cardDetails, setCardDetails] = useState<Detail>({
        Name: '', 
        Profession: '', 
        Email: '', 
        Phone: '', 
        LinkedIn: ''
    });

    useEffect(() => {
        const generateQRCode = async () => {
            try {
                const qrCodeCanvas = document.getElementById('qrcode') as HTMLCanvasElement;
                if(qrCodeCanvas && cardDetails.LinkedIn) {
                    // qrCodeCanvas.getContext('2d')?.clearRect(0, 0, qrCodeCanvas.width, qrCodeCanvas.height);

                    await QRCode.toCanvas(qrCodeCanvas, cardDetails.LinkedIn, {
                        width: 200,
                        margin: 1,
                    })
                }
                
            } catch (err) {
                console.error('QR code generation failed:', err);
            }
        }
        if(showBackCard) {
            generateQRCode();
        }
    }, [showBackCard, cardDetails.LinkedIn]);

    useEffect(() => {
        setCardDetails(details);
    }, [details]);

    const handleCardClick = () => {
        setShowBackCard(!showBackCard);
    }
    return (
        <div className='relative'>
            <h2 className='text-center text-34 md:text-40 pb-7'>Let's Connect..</h2>
            <div className='relative mx-auto max-w-lg rounded-md bg-black ' onClick={handleCardClick}>
                <div id='business-card' className={`relative text-white text-center `}>
                    {showBackCard? 
                        <div id='qrcode-card' className={`shadow-back-contact-card p-11 text-white flex place-content-center space-x-4 bg-black rounded-md transition-transform duration-700 transform ${showBackCard? 'translate-x-1/2': 'translate-x-0 opacity-0'}`}>
                            <div className='my-auto font-karla-light text-16'>
                                <p className='inline-flex'><img src={Email} className='my-1.5 w-5 h-5 mr-2'/>{cardDetails.Email}</p>
                                <p className='inline-flex'><img src={Phone} className='my-1.5 w-4 h-4 mr-2'/>{cardDetails.Phone}</p>
                                <p className='flex mt-10 space-x-2'>
                                    <span className='w-6 h-6'><img src={Git} /></span>
                                    <span className='w-6 h-6'><img src={Twitter} /></span>
                                    <span className='w-6 h-6'><img src={LinkedIn} /></span>
                                    <span>/sarikamangalpally</span>
                                </p>
                            </div>
                            <canvas id='qrcode' className={`p-4`}></canvas>
                        </div>
                        :
                        <div className={`shadow-front-contact-card rounded-md  pl-11 flex place-self-center space-x-5 transition-transform duration-700 ${!showBackCard ? 'translate-x-0 opacity-100' : 'translate-x-1/2 opacity-0'}`}>
                            <div className='my-auto'>
                                <h2 className='font-karla text-18'>{cardDetails.Name}</h2>
                                <p className='font-alex-brush'>@ {cardDetails.Profession}</p>
                                <div>

                                </div>
                            </div>
                            <img src={Desk} alt="young woman working at desk" className='h-72 '/>
                        </div>
                    }
                </div>
            </div>
            <img src={Click} alt="" className={`absolute bottom-0 ${!showBackCard? 'animate-moveRightToLeft left-1/2' : 'hidden'}`} />
        </div>
    )
}
export default ContactCard