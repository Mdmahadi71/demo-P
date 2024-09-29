import React, { useEffect, useState } from 'react'
import { HiMiniBarsArrowDown, HiMiniBarsArrowUp } from "react-icons/hi2";
import DarkandLight from './DarkandLight';

const Navbar = () => {
    let [show, setShow] = useState(false);
   

   
   

    return (
        <div  className={`lg:py-[15px] py-[20px] dark:bg-white dark:text-white bg-black lg:h-auto lg:border-b-[2px] border-white dark:border-black duration-300 ${show ? 'min-h-[300px]' : ''}`}>
            <div className="container">
                <div className="flex justify-between items-center py-[30px] lg:py-0">
                    <div className={`w-[15%] lg:static cursor-pointer absolute duration-300 ${show ? 'top-[250px]' : 'top-[30px]'}`}>
                        <h2 className='font-openG font-bold text-[22px] text-white dark:text-black'>LOREM</h2>
                    </div>

                    <div className={`w-[85%] lg:flex justify-between items-center absolute lg:static duration-300 ${show ? 'top-0 right-0 dark:bg-white bg-black w-full' : 'top-[-300px] right-0 w-full'}`}>
                        <div className="lg:w-[70%]">
                            <ul className='lg:flex lg:gap-x-[40px] justify-center my-4 lg:my-0 text-center lg:text-start'>
                                <li className='font-openG font-semibold text-[18px] text-white dark:text-black hover:text-Sky duration-300'><a href="#home">Home</a></li>
                                <li className='font-openG font-semibold text-[18px] text-white dark:text-black hover:text-Sky duration-300'><a href="#About">About</a></li>
                                <li className='font-openG font-semibold text-[18px] text-white dark:text-black hover:text-Sky duration-300'><a href="#Skills">Skills</a></li>
                                <li className='font-openG font-semibold text-[18px] text-white dark:text-black hover:text-Sky duration-300'><a href="#Contact">Contact</a></li>
                                <div className=' text-center lg:text-start'>
                                    <DarkandLight />
                                </div>
                            </ul>
                        </div>

                        
                       

                        <div className="lg:w-[15%] text-center lg:my-0 my-3 ">
                            <button className='px-[15px] py-[8px] bg-Sky font-openG font-medium text-[17px] text-white dark:text-white hover:bg-blue-800 duration-300 rounded-[5px]'>
                                Hire Me
                            </button>
                        </div>
                    </div>

                 
                    <div onClick={() => setShow(!show)} className={`lg:hidden text-white dark:text-black absolute cursor-pointer right-[10px] duration-300 ${show ? 'top-[250px]' : 'top-[40px]'}`}>
                        {show ? <HiMiniBarsArrowUp className='text-[30px]' /> : <HiMiniBarsArrowDown className='text-[30px]' />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
