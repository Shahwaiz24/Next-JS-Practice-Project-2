import React from 'react'
import { MdArrowOutward } from "react-icons/md";


const HeroSection = () => {
    const headings = [
        "We Create",
        "Eye Opening",
        "Presentations"
    ];
    return (
        <div className='w-full h-screen pt-2 '>
            <div className='textStructures mt-32 px-[4vw]'>
                {
                    headings.map((e, index) => {
                        return (
                            <div className='masked' key={index}>
                                <div className='w-fit flex items-end overflow-hidden'>
                                    {index === 1 && (<div className='mr-[1vw]  bg-green-500 h-[5.2vw] relative -top-[1vw] rounded-md  w-[8vw]'></div>)}
                                    <h1 key={index} className=' text-[7vw]   uppercase   -tracking-wider leading-[7.0vw]'>{e}</h1>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className='mt-[10vw] border-t-[1px] border-zinc-700'>
                <div className='px-[4vw] pt-[1vw] flex justify-between items-center'>
                    {
                        ["For Public and Private companies", "from the First pitch to IPO", "Start the Project"].map((e, index) => {
                            if (index === 2) {
                                return (
                                    <div key={index} className='px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-zinc-100 hover:text-zinc-900 transition-all duration-400  text-[1.5vw]  lg:text-[1vw] rounded-full uppercase text-white border-zinc-300 border-[1px]'>
                                        <p className=' whitespace-nowrap'>{e}</p>
                                        <MdArrowOutward />

                                    </div>
                                );
                            }
                            return (
                                <p key={index} className='text-[1.5vw]  lg:text-[1vw] whitespace-nowrap capitalize font-medium'>{e}</p>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default HeroSection