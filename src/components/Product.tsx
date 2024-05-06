'use client'
import React,{useState} from 'react'
import { BsFilterLeft } from "react-icons/bs";
import { BsFilter } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Product = () => {

    const [clicked,setClicked]=useState(false);

    const handleFilterButton=() => {
        setClicked(!clicked);
    }

  return (
        <div className='flex flex-col justify-center my-[18vh]'>
            <div className='pl-[3vw] mb-[2vw]'>
                <button onClick={handleFilterButton} className='flex gap-2'>
                    <BsFilterLeft size={30} className={`${clicked?'hidden':''}`}/>
                    <BsFilter size={30} className={`${clicked?'':'hidden'}`}/>
                    <h1 className='font-semibold text-xl'>Filter</h1>    
                    <IoIosArrowForward size={28} className={`${clicked?'':'hidden'}`}/>
                    <IoIosArrowBack size={28} className={`${clicked?'hidden':''}`}/>
                </button>
            </div>
            <div className='flex justify-center'>
                <div className={`h-[100vh] w-1/4 bg-red-700 ${clicked?'hidden':''}`}>
                    hello
                </div>
                <div className={`w-[90%] h-[100%] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 justify-evenly ${!clicked?'ml-[3vw] gap-1 gap-y-10':''}`}>
                    <div className={`w-[20vw] h-[30vw] border-2 border-white relative ${!clicked?'w-[15vw] h-[20vw]':''}`}>
                        <div className='absolute bottom-0 text-white flex flex-col justify-center pl-[2vw] text-xl leading-relaxed h-[12vh] w-full fade z-10'>
                            <h2>Sheer Pullover T-Shirt</h2>
                            <h2 className='font-semibold'>$12.89</h2>
                        </div>
                        <img src={'/cat6.jpg'} alt="cat1" className='object-cover h-full w-full'/>
                    </div>
                    <div className={`w-[20vw] h-[30vw] border-2 border-white relative ${!clicked?'w-[15vw] h-[20vw]':''}`}>
                        <div className='absolute bottom-0 text-white flex flex-col justify-center pl-[2vw] text-xl leading-relaxed h-[12vh] w-full fade z-10'>
                            <h2>Sheer Pullover T-Shirt</h2>
                            <h2 className='font-semibold'>$12.89</h2>
                        </div>
                        <img src={'/cat6.jpg'} alt="cat1" className='object-cover h-full w-full'/>
                    </div>
                    <div className={`w-[20vw] h-[30vw] border-2 border-white relative ${!clicked?'w-[15vw] h-[20vw]':''}`}>
                        <div className='absolute bottom-0 text-white flex flex-col justify-center pl-[2vw] text-xl leading-relaxed h-[12vh] w-full fade z-10'>
                            <h2>Sheer Pullover T-Shirt</h2>
                            <h2 className='font-semibold'>$12.89</h2>
                        </div>
                        <img src={'/cat6.jpg'} alt="cat1" className='object-cover h-full w-full'/>
                    </div>
                    <div className={`w-[20vw] h-[30vw] border-2 border-white relative ${!clicked?'w-[15vw] h-[20vw]':''}`}>
                        <div className='absolute bottom-0 text-white flex flex-col justify-center pl-[2vw] text-xl leading-relaxed h-[12vh] w-full fade z-10'>
                            <h2>Sheer Pullover T-Shirt</h2>
                            <h2 className='font-semibold'>$12.89</h2>
                        </div>
                        <img src={'/cat6.jpg'} alt="cat1" className='object-cover h-full w-full'/>
                    </div>
                    <div className={`w-[20vw] h-[30vw] border-2 border-white relative ${!clicked?'w-[15vw] h-[20vw]':''}`}>
                        <div className='absolute bottom-0 text-white flex flex-col justify-center pl-[2vw] text-xl leading-relaxed h-[12vh] w-full fade z-10'>
                            <h2>Sheer Pullover T-Shirt</h2>
                            <h2 className='font-semibold'>$12.89</h2>
                        </div>
                        <img src={'/cat6.jpg'} alt="cat1" className='object-cover h-full w-full'/>
                    </div>
                    <div className={`w-[20vw] h-[30vw] border-2 border-white relative ${!clicked?'w-[15vw] h-[20vw]':''}`}>
                        <div className='absolute bottom-0 text-white flex flex-col justify-center pl-[2vw] text-xl leading-relaxed h-[12vh] w-full fade z-10'>
                            <h2>Sheer Pullover T-Shirt</h2>
                            <h2 className='font-semibold'>$12.89</h2>
                        </div>
                        <img src={'/cat6.jpg'} alt="cat1" className='object-cover h-full w-full'/>
                    </div>
                    <div className={`w-[20vw] h-[30vw] border-2 border-white relative ${!clicked?'w-[15vw] h-[20vw]':''}`}>
                        <div className='absolute bottom-0 text-white flex flex-col justify-center pl-[2vw] text-xl leading-relaxed h-[12vh] w-full fade z-10'>
                            <h2>Sheer Pullover T-Shirt</h2>
                            <h2 className='font-semibold'>$12.89</h2>
                        </div>
                        <img src={'/cat6.jpg'} alt="cat1" className='object-cover h-full w-full'/>
                    </div>
                    <div className={`w-[20vw] h-[30vw] border-2 border-white relative ${!clicked?'w-[15vw] h-[20vw]':''}`}>
                        <div className='absolute bottom-0 text-white flex flex-col justify-center pl-[2vw] text-xl leading-relaxed h-[12vh] w-full fade z-10'>
                            <h2>Sheer Pullover T-Shirt</h2>
                            <h2 className='font-semibold'>$12.89</h2>
                        </div>
                        <img src={'/cat6.jpg'} alt="cat1" className='object-cover h-full w-full'/>
                    </div>
                </div>
            </div>
            
        </div>
  )
}

export default Product