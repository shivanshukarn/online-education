import React, { useState } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr'

const Imaging = () => {
    const images = [
        "/imaging/imaging-1.jpg",
        "/imaging/imaging-2.jpg",
        "/imaging/imaging-3.jpg",
        "/imaging/imaging-4.jpg",
        "/imaging/imaging-5.jpg"
    ]

    const [Values, setValues] = useState(0)
    const decreaseOne = () => {
        setValues(Values - 1)
        if (Values <= 0) {
            setValues(images.length - 1)
        }
    }
    const increaseOne = () => {
        setValues(Values + 1)
        if (Values >= images.length - 1) {
            setValues(0)
        }
    }
    
    // console.log(Values)
    return (
        <>
            <section className="text-gray-600 body-font bg-gray-100">
                <div className="container px-2 py-16 mx-auto flex flex-col">
                    <div className="w-[100%] lg:w-[90%] mx-auto flex">
                        <button className='bg-gray-300 border-0 py-2 px-2 lg:py-6 lg:px-6 focus:outline-none hover:bg-gray-200 font-semibold rounded-full text-xl lg:text-2xl lg:h-16 h-10 flex items-center justify-center mt-[12%] lg:mt-[20%]' id="previous" onClick={decreaseOne}><GrPrevious /></button>
                        <div className="rounded-lg overflow-hidden w-[100%]">
                            <img alt="content" className="object-cover object-center h-full w-full" src={images[Values]} />
                        </div>
                        <button className='bg-gray-300 border-0 py-2 px-2 lg:py-6 lg:px-6 focus:outline-none hover:bg-gray-200 font-semibold rounded-full text-xl lg:text-2xl lg:h-16 h-10 flex items-center justify-center mt-[12%] lg:mt-[20%]' id="next" onClick={increaseOne}><GrNext /></button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Imaging