import React from 'react'
import bannerImg from '../assets/banner.png'
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsDownload } from "react-icons/bs";
import { Typewriter ,handleType } from 'react-simple-typewriter'

const Banner = () => {

    const handleDone = () => {

    }
    return (
        <div className=' py-[50px]'>
            <div className=" container">
                <div className=" flex justify-between gap-x-[20px] items-center">
                    <div className="w-[40%]">
                        <div className=" border-[2px] border-black text-center py-[40px] px-[10px] rounded-tl-[100px] rounded-br-[100px] bg-[#00FFFF]">

                            <div className=" w-[200px] h-[200px] mx-auto border-[5px] border-black rounded-[50%] 
                            transform translate-[-50%] overflow-hidden  hover:shadow-xl shadow-black ">
                                <img src={bannerImg} className=' w-full h-full' alt="" />
                            </div>
                            <div className="">
                                <h3 className=' font-openG font-bold text-[22px] text-blue-600 my-[8px]'>Lorem ipsum dolor sit.</h3>
                                <h5 className=' font-openG font-medium text-[17px] text-blue-500'>Frontend developer With react </h5>
                            </div>
                            <div className=" flex gap-x-2 items-center justify-center">
                                <MdEmail/>
                                <h3 className=' font-openG font-medium text-[15px] text-blue-500'>mahadialmasud@gmail.com</h3>
                            </div>
                            <div className=" flex gap-x-2 items-center justify-center">
                                <FaLocationDot/>
                                <h3 className=' font-openG font-medium text-[15px] text-blue-500'>Dhaka, Bangladesh</h3>
                            </div>
                          
                            <button className=" flex justify-center mx-auto gap-x-2 items-center py-2 px-[16px] bg-Sky  rounded-[5px] my-[10px] ">
                                <BsDownload />
                                <h3 className=' font-openG font-medium text-[17px] text-black'>Download CV </h3>
                            </button>
                         
                        </div>
                    </div>
                    <div className="w-[65%]">
                        <div className="">
                            <h4 className=' font-openG font-bold text-[32px] '>Hi</h4>
                           <h2 className=' font-openG font-semibold text-[22px] text- '>Lorem ipsum dolor sit amet.</h2>
                            <h1 style={{paddingTop: '1rem', margin: 'auto 0', fontWeight: 'bold'  }}>
                                {' '}
                                <span style={{color: '#0ea5e9', fontWeight: 'bold', fontFamily: "Sedan",  }}>
                                   
                                    <Typewriter
                                        words={["I'm a Devloper ", "I'm a Freelancer "]}
                                        loop={true}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                        onLoopDone={handleDone}
                                        onType={handleType}
                                    />
                                </span>
                            </h1>
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non maxime quis quos, 
                                laboriosam harum unde consequatur voluptas quasi iste sed cumque rem quas odit cupiditate incidunt commodi quam! 
                                Veniam magni, ipsa natus ratione molestiae laboriosam 
                                fuga quis dignissimos dicta quod illum voluptas iure ab officia eum illo voluptate nemo.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
