import Image from 'next/image'
import React from 'react'

const Card = ({ title, paragraph, logo, borderColor }) => {
    return (
        <div className={`w-[360px] rounded shadow-md border-t-8 ${borderColor} p-6`}>
            <div>
                <h3 className='text-[20px] font-semibold pb-3 opacity-80'>{title}</h3>
                <p className='text-[15px] opacity-60 pb-12'>{paragraph}</p>
            </div>
            <div className='flex justify-end'>
                <Image
                    src={logo}
                    height={60}
                    width={60}
                    alt='logo'

                />

            </div>

        </div>
    )
}

export default Card