import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";


const HeroSection = () => {
    const headings = [
        "We Create",
        "Eye Opening",
        "Presentations"
    ];
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen pt-2 '>
            <div className='textStructures mt-32 px-[4vw]'>
                {
                    headings.map((e, index) => {
                        return (
                            <div className='masked' key={index}>
                                <div className='w-fit flex items-end overflow-hidden'>
                                    {index === 1 && (<motion.div initial={{ width: "0%" }} animate={{ width: "8vw" }} transition={{ ease: [0.33, 1, 0.68, 1], duration: 1 }} className='mr-[0.5vw] bg-cover bg-center  bg-[url("/images/landing-animated-image.jpg")] h-[5.2vw] relative -top-[1vw] rounded-md  w-[8vw]'></motion.div>)}
                                    <h1 key={index} className=' text-[7vw]   uppercase  -tracking-wider leading-[7.0vw]'>{e}</h1>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className='mt-[6vw] border-t-[1px] border-zinc-700'>
                <div className='px-[4vw] pt-[1vw] flex justify-between items-center'>
                    {
                        ["For Public and Private companies", "from the First pitch to IPO", "Start the Project"].map((e, index) => {
                            if (index === 2) {
                                return (
                                    <div key={index} className='px-[1.2vw] py-[0.6vw] flex items-center gap-2 cursor-pointer hover:bg-zinc-100 hover:text-zinc-900 transition-all duration-400  text-[1.5vw]  lg:text-[1vw] rounded-full uppercase text-white border-zinc-300 border-[1px]'>
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
                <motion.div
                    className="pt-[9vw] w-full flex items-center justify-center text-zinc-300 font-medium leading-none tracking-wide overflow-hidden h-[40px]"
                >
                    <motion.p
                        animate={{
                            y: [0, -40, 40, 0],   // center → up → down → center
                            opacity: [1, 0, 0, 1] // visible → invisible → invisible → visible
                        }}
                        transition={{
                            duration: 2, // 2 sec full cycle
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        Scroll Down
                    </motion.p>
                </motion.div>
            </div>
        </div>
    )
}

export default HeroSection