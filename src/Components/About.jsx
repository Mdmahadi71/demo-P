import React from 'react'
import bannerImg from '../assets/images.jpeg'
const About = () => {
  return (
    <div className=' py-[20px] bg-black'>
      <div className=" container">
        <div className=" text-center">
          <h4 className=' font-openG font-semibold text-[26px] text-white  border-b-[2px] border-white '>About</h4>
        </div>
        <div className=" lg:flex justify-between items-center my-10">
          <div className="lg:w-[59%]">
            <div className="">
                <h2 className=' font-openG font-semibold text-[22px] text-Sky my-2'>Lorem ipsum dolor sit.</h2>
                <p className=' font-openG font-normal text-[16px] text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut facilis dolorem aperiam consequatur corrupti 
                  ab esse deleniti iure atque quos, nisi nesciunt expedita voluptatum explicabo dolore quae unde dolor aspernatur? 
                  Sed necessitatibus aliquid iste ullam maxime enim praesentium? Voluptates
                   impedit quia voluptate rem officia assumenda dolores debitis aliquid dicta iste!</p>

                <div className=" my-4">
                  <button className=' px-4 py-2 bg-Sky font-openG font-semibold text-[16px] text-black rounded-[4px]'>Read more</button>
                </div>
            </div>
          </div>
          <div className="lg:w-[39%]">
            <div className="w-[300px] h-[300px] border-[6px] border-Sky rounded-[50%] overflow-hidden shadow-sm shadow-Sky  ">
               <img src={bannerImg} className=' w-full h-full transform hover:scale-[1.1] duration-300' alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
