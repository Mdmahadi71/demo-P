import React, { useState, useEffect } from 'react';
import { Line, Circle } from 'rc-progress';
import { FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

const skills = [
    { name: 'HTML', percent: 95, logo: <FaHtml5 /> },
    { name: 'CSS', percent: 90, logo: <FaCss3 /> },
    { name: 'JavaScript', percent: 70, logo: <FaJs /> },
    { name: 'Tailwind CSS', percent: 90, logo: <RiTailwindCssFill /> },
    { name: 'TypeScript', percent: 50, logo: <BiLogoTypescript /> },
];

const circelbar = [
    { name: 'Creativity', percent: 85 },
    { name: 'Communication', percent: 80 },
    { name: 'Problem Solving', percent: 85 },
    { name: 'Team Work', percent: 90 },
];

const Skills = () => {
    const [progress, setProgress] = useState(skills.map(() => 0));
    const [circless, setCircless] = useState(circelbar.map(() => 0));

  
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress.map((p, i) => {
                    const targetPercent = skills[i].percent > 90 ? 90 : skills[i].percent;
                    const newProgress = p + 1;
                    if (newProgress >= targetPercent) {
                        return targetPercent;
                    }
                    return newProgress;
                })
            );
        }, 20);

        return () => clearInterval(interval); 
    }, []);

    
    useEffect(() => {
        const interval = setInterval(() => {
            setCircless((prevCircless) =>
                prevCircless.map((p, i) => {
                    const targetPercent = circelbar[i].percent > 90 ? 90 : circelbar[i].percent;
                    const newProgress = p + 1;
                    if (newProgress >= targetPercent) {
                        return targetPercent;
                    }
                    return newProgress;
                })
            );
        }, 20);

        return () => clearInterval(interval); 
    }, []);

    return (
        <div id='Skills'  className='py-[20px] dark:bg-white dark:text-black bg-black'>
            <div className="container">
                <div className="text-center">
                    <h2 className='font-openG font-bold text-[32px] text-white border-b-[2px] dark:border-black border-white dark:text-black'>Skills</h2>
                </div>
                <div className="lg:flex justify-between my-[20px]">
                    
                    <div className="lg:w-[45%]">
                        <h2 className="text-[32px] font-bold font-openG mb-4 text-Sky text-center lg:text-start">Technical Skills</h2>
                        {skills.map((skill, index) => (
                            <div key={index} className="mb-4">
                                <div className="flex items-center gap-x-4 my-3">
                                    <i className='text-[32px] text-white'>{skill.logo}</i>
                                    <h4 className='font-openG font-semibold text-[22px] text-Sky'>{skill.name}</h4>
                                </div>
                                <Line percent={progress[index]} strokeWidth={2} strokeColor="#00BFFF" />
                                <span className='font-openG font-semibold text-[22px] text-Sky'>{progress[index]}%</span>
                            </div>
                        ))}
                    </div>

                    
                    <div className="lg:w-[45%]">
                    <h2 className="text-[32px] font-bold font-openG mb-4 text-Sky text-center lg:text-start">Professional Skills</h2>
                       <div className=" flex flex-wrap justify-between items-center">
                       {circelbar.map((item, index) => (
                            <div key={index} className="mb-4">
                                <h2 className="font-openG font-semibold text-[22px]  text-Sky">{item.name}</h2>
                                <Circle 
                                    percent={circless[index]} 
                                    strokeWidth={6} 
                                    className='w-[100px] h-[100px]' 
                                    strokeColor="#00BFFF" 
                                />
                                <p className='font-openG font-semibold text-[22px] text-Sky'>{circless[index]}%</p>
                            </div>
                        ))}
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
