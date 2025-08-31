"use client";
import React, { useState } from 'react'
import { MdArrowOutward } from "react-icons/md";
const ApproachSection = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full rounded-tr-3xl rounded-tl-3xl  bg-[#CDEA68] pt-20  relative z-10'>
            <div className='px-[4vw] pb-[4vw] lg:text-[4vw] text-[5vw] font-medium tracking-tight whitespace-pre-line text-zinc-900 leading-none'>
                <p>We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.</p>
            </div>
            <div className='pb-[2vw] border-t-[1px] border-zinc-400 w-full'>
                <div className='flex pt-[2vw] px-[4vw] justify-between  items-start'>
                    <div className='left-div w-1/2'>
                        <h1 className='lg:text-[3vw] text-[4vw] text-zinc-900'>How we can help:</h1>
                        <div onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)} className='peer lg:w-[12vw]  w-[18vw] lg:h-[4vw] h-[5vw] whitespace-nowrap  mt-3 rounded-full bg-zinc-900 flex items-center lg:gap-5 lg:group-hover:gap-3 group-hover:gap-1 gap-2 justify-center lg:text-[1.3vw] text-[2.2vw] group hover:bg-black transition-all duration-500'>
                            <p>  Learn More</p>
                            <div className='bg-white p-[5px]  transition-all duration-500  group-hover:p-4 text-black  rounded-full '>
                                <MdArrowOutward className='hidden group-hover:block' />
                            </div>

                        </div>
                    </div>
                    <div className='Right-div w-1/2 '>
                        <div className={` ${hovered && "h-[52vh]"}  transition-all duration-500 h-[50vh] w-full rounded-2xl bg-center bg-cover bg-[url("/images/ApproachImg.jpg")]`}>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ApproachSection