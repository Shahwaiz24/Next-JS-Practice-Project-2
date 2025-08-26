import React from 'react'

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
                        // if (index === 1) {
                        //     return (
                        //         <div className='masked ' key={index}>
                        //             <div className='w-fit flex '>
                        //                 <div className='bg-green-500 relative top-[0.5vw] rounded-lg h-[6.5vw] w-[9vw]'></div>
                        //                 <h1 key={index} className='text-[9vw] h-full flex items-center uppercase leading-[7.5vw]  tracking-tighter '>{e}</h1>
                        //             </div>
                        //         </div>
                        //     );
                        // }
                        // return (
                        //     <div className='masked ' key={index} >
                        //         <div className='w-fit flex '>
                        //             <h1 key={index} className='text-[9vw] h-full flex items-center uppercase leading-[7.5vw]  tracking-tighter '>{e}</h1>
                        //         </div>
                        //     </div>
                        // );
                    })
                }
            </div>
        </div>
    )
}

export default HeroSection