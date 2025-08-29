"use client"
import React from 'react'
import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".1" className=' w-full rounded-tr-3xl rounded-tl-3xl  bg-[#004D43] h-[65vh]'>
            <div className='pt-28 '>
                <div className='texts w-full border-b-[1px] border-t-[1px]  flex items-center text-white text-[20vw] leading-none whitespace-nowrap uppercase  -tracking-widest font-semibold overflow-hidden border-zinc-500  '>
                    <motion.h1 className='pr-20' initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 5 }} >We Are Ochi</motion.h1>
                    <motion.h1 className='pr-20' initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 5 }} >We Are Ochi</motion.h1>
                    {/* <h1>We Are Ochi</h1> */}

                </div>

            </div>

        </div>
    )
}

export default AboutSection