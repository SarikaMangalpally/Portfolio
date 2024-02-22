import React from 'react'
import SkillList from "../skillsList"

export default function Skills() {
    const list = SkillList.skills;
    const title = 'skills'
    return (
        <div>
            <h2 className='uppercase text-center font-oswald-light text-32 xs:text-36 lg:text-40 xl:text-54'>{title}</h2>
            <div className='flex flex-nowrap my-5 py-5 overflow-hidden'>
                <ul className='space-x-6 h-16 xs:h-24 flex items-center justify-center flex-nowrap animate-marquee'>
                    {
                        list.map(listItem => {
                        return (
                            <li key={listItem.title} className='w-24 object-contain place-self-center'>
                                <img src={listItem.image} className='h-full w-full max-w-none'></img>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}