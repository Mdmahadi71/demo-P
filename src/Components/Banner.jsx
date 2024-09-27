import React from 'react'
import bannerImg from '../assets/banner.png'
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsDownload } from "react-icons/bs";
import { Typewriter ,handleType } from 'react-simple-typewriter'
import { FaFacebookSquare ,FaLinkedin ,FaInstagramSquare ,FaGithub  } from "react-icons/fa";

const Banner = () => {

    const handleDone = () => {

    }
    return (
        <div className=' py-[50px] bg-black'>
            <div className=" container">
                <div className=" lg:flex justify-between gap-x-[20px] items-center">
                    <div className="lg:w-[40%]">
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

                            <div className=" flex gap-x-4 justify-center items-center my-2 ">
                                <FaFacebookSquare  className=' text-[22px] cursor-pointer'/>
                                <FaLinkedin className=' text-[22px] cursor-pointer' />
                                <FaInstagramSquare className=' text-[22px] cursor-pointer' />
                                <FaGithub className=' text-[22px] cursor-pointer' />
                            </div>
                          
                            <button className=" flex justify-center mx-auto gap-x-2 items-center py-2 px-[16px] bg-Sky hover:bg-black text-black  hover:text-white duration-300 rounded-[5px] my-[10px] ">
                                <BsDownload />
                                <h3 className=' font-openG font-medium text-[17px]'>Download CV </h3>
                            </button>
                         
                        </div>
                    </div>
                    <div className="lg:w-[65%] my-4 lg:my-0">
                        <div className="">
                            <h4 className=' font-openG font-bold text-[32px] text-Sky'>Hi</h4>
                           <h2 className=' font-openG font-semibold text-[22px] text-Sky '>Lorem ipsum dolor sit amet.</h2>
                            <h1 style={{paddingTop: '1rem', margin: 'auto 0', fontWeight: 'bold'  }}>
                                {' '}
                                <span style={{color: '#0ea5e9', fontWeight: 'bold', fontFamily: "Gowun Batang", fontSize:'25px'  }}>
                                   
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
                            <h2 className=' font-openG font-normal text-[16px] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non maxime quis quos, 
                                laboriosam harum unde consequatur voluptas quasi iste sed cumque rem quas odit cupiditate incidunt commodi quam! 
                                Veniam magni, ipsa natus ratione molestiae laboriosam 
                                fuga quis dignissimos dicta quod illum voluptas iure ab officia eum illo voluptate nemo.</h2>

                            <button className=' py-2 px-4 bg-[#00FFFF] font-openG font-semibold text-[20px] text-black rounded-[5px] my-3'>Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
