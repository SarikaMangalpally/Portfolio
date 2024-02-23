import React, { useCallback, useEffect, useRef, useState } from 'react'
import SkillList from "../skillsList"

export default function Skills() {
    const list = SkillList.skills
    const title = 'skills'

    return (
        <div className='py-4 xs:py-14 xmd:py-16 bg-black/5'>
            <h2 className='uppercase text-center font-oswald-light text-32 xs:text-36 lg:text-40 xl:text-54'>{title}</h2>
            <div className='overflow-hidden mt-6'>
                <div className='flex whitespace-nowrap' role='marquee'>
                    <ul className='flex animate-marquee'>
                        {
                            list.map(listItem => {
                            return (
                                <li key={listItem.title} className='mx-3 xs:mx-5 px-4 h-24 w-24'>
                                    <img src={listItem.image} className='h-full w-full max-w-none'></img>
                                </li>
                                )
                            })
                        }
                    </ul>
                    <ul className='flex animate-marquee'>
                        {
                            list.map(listItem => {
                            return (
                                <li key={listItem.title} className='mx-3 xs:mx-5 px-4 h-24 w-24'>
                                    <img src={listItem.image} className='h-full w-full max-w-none'></img>
                                </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}