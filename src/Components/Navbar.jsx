import React, { useState } from 'react'
import { HiMiniBarsArrowDown ,HiMiniBarsArrowUp } from "react-icons/hi2";

const Navbar = () => {
    let [show,setshow] =useState(false)
    return (
        <div className={`lg:py-[15px] py-[20px] bg-black lg:h-auto duration-300 ${show == true ? ' min-h-[250px]' : ''}`}>
            <div className=" container">
                <div className=" flex justify-between items-center py-[30px] lg:py-0 ">
                    <div className={`w-[15%] lg:static cursor-pointer absolute duration-300 ${show ==true ? 'top-[200px]' :' top-[30px]'}`}>
                        <h2 className=' font-openG font-bold text-[22px] text-white '>LOREM</h2>
                    </div>

                    <div className={`w-[85%] lg:flex justify-between items-center  absolute lg:static duration-300 ${show==true ? ' top-0 right-0 bg-[red] w-full ' :' top-[-300px] right-0 w-full '}`}>
                        <div className="lg:w-[70%] ">
                            <ul className=' lg:flex lg:gap-x-[40px] justify-center my-4 lg:my-0 text-center lg:text-start'>
                                <li className=' font-openG font-semibold text-[18px] text-white hover:text-Sky duration-300'>Home</li>
                                <li className=' font-openG font-semibold text-[18px] text-white hover:text-Sky duration-300'>About</li>
                                <li className=' font-openG font-semibold text-[18px] text-white hover:text-Sky duration-300'>Skill</li>
                                <li className=' font-openG font-semibold text-[18px] text-white hover:text-Sky duration-300'>Contact</li>
                            </ul>
                        </div>

                        <div className="lg:w-[15%] text-center">
                            <button className=' px-[15px] py-[8px] bg-Sky font-openG font-medium text-[17px] text-white hover:bg-blue-800 duration-300 rounded-[5px] '>Hare Me</button>
                        </div>
                    </div>
                    <div onClick={()=>setshow(!show)} className={` lg:hidden text-white absolute cursor-pointer  right-[10px] duration-300  ${show == true ? 'top-[200px] '  :'top-[40px] '}`}>
                        {show==true ? <HiMiniBarsArrowUp className=' text-[30px]'/> : < HiMiniBarsArrowDown className=' text-[30px]'/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
