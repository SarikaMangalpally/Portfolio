import React from 'react'
import { ReactDOM } from 'react'
import User from '../assets/icons/user.svg'
import Phone from '../assets/icons/phone.svg'
import Email from '../assets/icons/email.svg'

export default function ContactForm() {
    
    const [contactFormDetails, setContactFormDetails] = React.useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })
    const handleChange = (event) => {
        // console.log(event.target.value)
        const {id,value} = event.target;
        setContactFormDetails(previousData => ({...previousData, [id]: value }))
    }
    const handleSubmit = () => {
        console.log('submitted the contact form.')
    }
    return (
        <div className='my-5 xs:my-10'>
            <form onSubmit={handleSubmit} className='relative bg-contact bg-contain bg-center bg-no-repeat px-12 py-20 md:py-32'>
                <div className='relative md:max-w-screen-lg font-karla-light p-5 bg-white/15 backdrop-blur-md rounded-xl shadow-lg xs:mx-auto sm:max-w-4/5 md:px-8'>
                    <fieldset className='mx-auto w-full '>
                        <legend className='uppercase text-center tracking-tight mx-auto xs:my-4 text-32 xs:text-36 lg:text-40 xl:text-54 text-gray-500/50 drop-shadow-3xl'>contact me</legend>
                        <div className='sm:grid sm:grid-cols-2'>
                            <div className='space-y-3 my-4 mx-auto w-4/5 xs:w-full xs:pl-5'>
                                <label  className='flex space-x-2 leading-8 xs:w-11/12'>
                                    <img className="w-4 drop-shadow-md shadow-black/50" src={User}></img>
                                    <input id="name" value={contactFormDetails.name} type='text' placeholder='name' onChange={handleChange} className='w-full drop-shadow-md shadow-black/50 bg-transparent capitalize font-karla-light text-gray-500/25 placeholder:text-gray-800/25 border-b-2 border-white/25 outline-none '></input>
                                </label>
                                <label htmlFor='email' className='flex space-x-2 leading-8 xs:w-11/12'>
                                    <img className="w-4  drop-shadow-md shadow-black/5" src={Email}></img>
                                    <input id="email" value={contactFormDetails.email} type='email' placeholder='email' onChange={handleChange} className='w-full drop-shadow-md shadow-black/50 bg-transparent lowercase font-karla-light text-gray-500/25 placeholder:text-gray-800/25 border-b-2 border-white/25 outline-none'></input>
                                </label>
                                <label htmlFor='phone' className='flex space-x-2 leading-8 xs:w-11/12'>
                                    <img className="w-4  drop-shadow-md shadow-black/5" src={Phone}></img>
                                    <input id="phone" value={contactFormDetails.phone} type='text' placeholder='phone' onChange={handleChange} className='w-full drop-shadow-md shadow-black/50 bg-transparent capitalize font-karla-light text-gray-500/25 placeholder:text-gray-800/25 border-b-2 border-white/25 outline-none'></input>
                                </label>
                            </div>
                            <textarea id="message" value={contactFormDetails.message} placeholder='Message' onChange={handleChange} className='relative text-gray-500/50 placeholder:text-gray-800/25 rounded-lg font-karla-light p-2 bg-white/0 mx-auto w-11/12 xs:w-full my-6 block outline-none xs:h-full xs:my-0 shadow-lg shadow-black/15'/>
                        </div>
                        <button type="submit" className="mx-auto block my-4 xs:my-7 sm:mt-16 bg-indigo-300 px-8 py-2 rounded-lg active:transform active:-translate-y-0.5 hover:scale-75 hover:ease-in hover:duration-100 active:opacity-85 drop-shadow-lg shadow-mango" >Send</button>
                    </fieldset>
                </div>
            </form>
        </div>
    )
}