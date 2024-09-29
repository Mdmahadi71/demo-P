import React, { useState ,useEffect} from 'react'
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";


const DarkandLight = () => {
    let [theme, setTheme] = useState(false);
    
    useEffect(() => {
        if (theme) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);
  return (
      <div>
          <div>
              <button onClick={() => setTheme(!theme)} className= 'px-[14px] py-2  bg-slate-50  dark:bg-black rounded-[3px]' >
                  {theme ? <CiLight /> : <MdDarkMode />}
              </button>
          </div>
      </div>
  )
}

export default DarkandLight
