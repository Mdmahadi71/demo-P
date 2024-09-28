import React from 'react'
import { FaFacebookSquare ,FaLinkedin ,FaInstagramSquare ,FaGithub  } from "react-icons/fa";
import Scrollbottons from './Scrollbottons';

const Contact = () => {
  return (
      <div id='Contact' className=' py-[20px] bg-black'>
          <div className=" container">
              <div className=" lg:flex justify-between gap-x-[20px] items-center">
                  <div className="lg:w-[48%]">
                      <h3 className=' font-openG font-bold text-[32px] text-Sky text-center lg:text-start'>Contact Me</h3>
                      <p className=' font-openG font-normal text-[16px] text-Sky text-center lg:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illum odio ullam nulla
                          sed eos esse earum accusantium sit
                          corporis voluptas, placeat harum nesciunt, magni officiis? Libero vero placeat error.</p>
                          <h6 className=' font-openG font-normal text-[16px] text-Sky text-center lg:text-start my-4' >+8801300000000</h6>
                      <div className=" flex gap-x-4  items-center my-2 justify-center lg:justify-start ">
                          <FaFacebookSquare className=' text-[22px] cursor-pointer text-white' />
                          <FaLinkedin className=' text-[22px] cursor-pointer text-white' />
                          <FaInstagramSquare className=' text-[22px] cursor-pointer text-white' />
                          <FaGithub className=' text-[22px] cursor-pointer text-white' />
                      </div>
                     
                  </div>
                  <div className="lg:w-[48%] mx-auto">
                    <div className=" my-2">
                        <h3 className=' font-openG font-semibold text-[18px] text-white'>Your Name</h3>
                        <input type="text" name="" className=' border-[2px] border-Sky bg-black w-full h-[50px] outline-none' placeholder='Name' required id="" />
                    </div>
                    <div className="my-2">
                        <h3 className=' font-openG font-semibold text-[18px] text-white'>Your Email</h3>
                        <input type="email" name="" className=' border-[2px] border-Sky bg-black w-full h-[50px] outline-none' placeholder='Email' required id="" />
                    </div>
                    <div className="my-2">
                        <h3 className=' font-openG font-semibold text-[18px] text-white'>Your Subject</h3>
                        <input type="text" name="" className=' border-[2px] border-Sky bg-black w-full h-[50px] outline-none' placeholder='Subject' required id="" />
                    </div>
                    <div className=" my-2">
                        <h3 className=' font-openG font-semibold text-[18px] text-white'>Your Massage</h3>
                        
                        <textarea name="" type="text" className=' border-[2px] border-Sky bg-black w-full h-[50px] outline-none' placeholder='Massage' id=""/>
                    </div>
                    <button className=' py-3 px-5 bg-Sky  text-[18px] font-openG font-semibold '>Send Message</button>
                  </div>
              </div>
              <Scrollbottons/>
          </div>
      </div>
  )
}

export default Contact
