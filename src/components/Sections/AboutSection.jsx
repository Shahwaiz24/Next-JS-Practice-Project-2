"use client"
import React from 'react'
import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <div className='w-full rounded-tr-3xl rounded-tl-3xl  bg-[#004D43] h-[50vh]'>
            <div className='pt-32 '>
                <div className='texts w-full border-b-[1px] border-t-[1px]  flex items-center text-white text-[15vw] leading-none whitespace-nowrap uppercase gap-9 tracking-tighter font-semibold overflow-hidden border-zinc-500 '>
                    <motion.h1 >We Are Ochi</motion.h1>
                    <motion.h1>We Are Ochi</motion.h1>
                    {/* <h1>We Are Ochi</h1> */}

                </div>

            </div>

        </div>
    )
}

export default AboutSection