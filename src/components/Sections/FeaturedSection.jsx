"use client";
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { MdArrowOutward } from "react-icons/md";

const FeaturedSection = () => {

    const items = [
        {
            "title": "Salience Labs",
            "imagePath": '/images/Featured/Salience-Labs.png',

        },
        {
            "title": "Medallia Experience",
            "imagePath": "/images/Featured/Medallia-Experience.png",

        },
        {
            "title": "AH2 & Matt Horn",
            "imagePath": "/images/Featured/AH2.png",

        },
        {
            "title": "Vise",
            "imagePath": "/images/Featured/VISE.png",

        },
        {
            "title": "Softstart",
            "imagePath": "/images/Featured/SoftStart.jpg",

        },
        {
            "title": "Fyde",
            "imagePath": "/images/Featured/FYDE.png",

        },
        {
            "title": "All Things Go",
            "imagePath": "/images/Featured/All-Things-Go.png",

        },
        {
            "title": "Trawa",
            "imagePath": "/images/Featured/TRAWA.jpg",

        },
        {
            "title": "Cardboard Spaceship",
            "imagePath": "/images/Featured/CS.png",

        },
        {
            "title": "Premium Blend",
            "imagePath": "/images/Featured/PB.png",

        },
    ];
    const [isImageHovered, setisImageHovered] = useState({ "hovered": false, index: 0, "title": "" });
    const setHovered = (isHovered, index, title) => {
        setisImageHovered({ hovered: isHovered, index: index, "title": title });
    }
    const splitCharacters = (word) => {
        if (typeof word !== "string") return [];
        return word.split("") ?? [];
    };
    return (
        <div className='w-full py-[5vw]'>
            <div className='text-[5vw] text-white leading-none tracking-tight border-b-[1px] pb-[4vw] border-zinc-700'>
                <h1 className='px-[4vw]'>Featured projects</h1>
            </div>
            <div className='px-[4vw] mt-[5vw]'>
                <div className="flex mb-[5vw] flex-wrap gap-[2vw] w-full">
                    {items.map((e, index) => {
                        const isLeft = index % 2 !== 0;
                        let title = e.title;
                        return (
                            <div
                                key={index}
                                className="w-full lg:w-[48%] relative h-[80vh] flex flex-col gap-[1vw] items-center "
                            >
                                <h1
                                    key={index}
                                    className={`absolute 
                                        hidden
                 
                ${isImageHovered.index === index && isImageHovered.hovered && "lg:flex"} 
                lg:top-1/2 
                ${isLeft ? "lg:-left-[-0%] lg:-translate-x-1/2" : `lg:-right-[-0%] lg:translate-x-1/2`} 
                 lg:-translate-y-1/2  
                text-[#CDEA68] text-[4vw] whitespace-nowrap text-bold overflow-hidden tracking-tight leading-none z-[9] transition-all duration-500
            `}
                                >
                                    {splitCharacters(title).map((e, i) => {
                                        const char = e === " " ? "\u00A0" : e;

                                        return (
                                            <motion.span
                                                key={i}
                                                initial={{ y: "100%" }}
                                                animate={
                                                    isImageHovered.index === index && isImageHovered.hovered
                                                        ? { y: "0%" }
                                                        : { y: "100%" }
                                                }
                                                transition={{
                                                    ease: [0.68, -0.6, 0.32, 1.6], // 🔥 custom ease in-out bounce type
                                                    duration: i * 0.05,
                                                    // har ek ka actual duration            // har char thora delay ke sath
                                                }}
                                                className="inline-block"
                                            >
                                                {char}
                                            </motion.span>
                                        );
                                    })}


                                </h1>
                                <div className='flex w-full flex-row items-center justify-start gap-[0.5vw]'>
                                    <div className='h-[0.6vw] w-[0.6vw] rounded-full bg-white'></div>
                                    <h1 className='lg:text-[1.2vw] text-[1.8vw] uppercase font-regular tracking-tighter text-white'>{e.title}</h1>
                                </div>
                                <div
                                    onMouseEnter={() => setHovered(true, index, e.title)}
                                    onMouseLeave={() => setHovered(false, index, e.title)}

                                    style={{
                                        backgroundImage: `url(${e.imagePath})`,


                                    }} className={` ${isImageHovered.index === index && isImageHovered.hovered ? "hover:scale-95" : "hover:scale-0"} transition-all duration-500 cursor-pointer h-full w-full bg-center bg-cover overflow-hidden rounded-xl`}></div>
                            </div>
                        );
                    })}
                </div>
                <div className='flex justify-center items-center w-full'>
                    <div
                        className='px-[1.8vw] py-[1vw] h-[4vw]  w-[19.5vw]  uppercase whitespace-nowrap gap-[2vw] rounded-full bg-zinc-900 flex items-center justify-between lg:text-[1vw] text-[2vw] group hover:bg-black transition-all duration-500'>
                        <p> View all case studies</p>
                        <div className='bg-white p-[5px]  transition-all duration-500  group-hover:p-4 text-black  rounded-full '>
                            <MdArrowOutward className='hidden group-hover:block' />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default FeaturedSection