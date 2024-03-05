import React from 'react'
export default function HireMe(props) {
    const title = props.title
    return (
        <div className='mx-auto'>
            <h2 className='Capitalize font-oswald-light text-32 xs:text-36 lg:text-40 xl:text-54'>
                {title}
            </h2>
            <div>
                <form>

                </form>
            </div>
        </div>
    )
}