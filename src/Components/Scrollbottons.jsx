import React, { useEffect, useState } from 'react'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const Scrollbottons = () => {
    let [ToptoBtm ,setToptoBtm] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll" , ()=>{
            if(window.scrollY > 100){
                setToptoBtm(true)
            }else{
                setToptoBtm(false)
            }
        })
    },[])

 
    let singUp = (()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    })

  return (
    <div>
      <div className=" container">
        {ToptoBtm &&
            <button className=' lg:w-[50px] w-[35px] lg:h-[50px] h-[35px] lg:right-[50px] right-[10px] lg:bottom-[30px] bottom-[10px] text-[35px] lg:text-[50px] bg-Sky  fixed z-10' onClick={singUp}><MdKeyboardDoubleArrowUp/></button>
        }
      </div>
    </div>
  )
}

export default Scrollbottons
