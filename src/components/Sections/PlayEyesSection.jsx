"use client";
import React, { useEffect, useState } from 'react'

const PlayEyesSection = () => {
    const [lineRotate, setlineRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setlineRotate(angle);
        });

    }, [])

    return (
        <div className='lg:block hidden w-full h-screen bg-white'>
            <div className='w-full h-full bg-center bg-cover bg-[url("/images/ochi-animated-bg.jpg")] flex items-center justify-center'>
                <div className='flex items-center justify-between gap-16 '>

                    <div className='w-[15vw] h-[15vw] rounded-full bg-white flex items-center justify-center'>
                        <div className='relative overflow-hidden w-[10vw] h-[10vw] rounded-full bg-[#212121] flex items-center justify-center'>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[1.2vw] font-light tracking-tight">
                                PLAY
                            </div>

                            <div style={{ rotate: `${lineRotate}deg` }} className='line   w-full h-[1.5vw]  flex items-center justify-end'>
                                <div className='h-[1.1vw] w-[1.1vw] rounded-full bg-white'></div>

                            </div>
                        </div>
                    </div>
                    <div className='w-[15vw] h-[15vw] rounded-full bg-white flex items-center justify-center'>
                        <div className='relative overflow-hidden w-[10vw] h-[10vw] rounded-full bg-[#212121] flex items-center justify-center'>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[1.2vw] font-light tracking-tight">
                                PLAY
                            </div>

                            <div style={{ rotate: `${lineRotate}deg` }} className='line   w-full h-[1.5vw]  flex items-center justify-end'>
                                <div className='h-[1.1vw] w-[1.1vw] rounded-full bg-white'></div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PlayEyesSection