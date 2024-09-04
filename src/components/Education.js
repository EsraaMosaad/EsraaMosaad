import React from "react";
import { motion, useScroll } from "framer-motion";

import { useRef } from "react";

import LiIcon from "./LiIcon";


const EducationCard = ({ type,time,place,info }) => {
    const ref =useRef(null);
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]" >
            <LiIcon  reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {place}
                </span>
                <p className="font-medium w-full md:text-sm">{info}</p>
            </motion.div>
        </li>

    );
};

const Education = () => {
    const ref =useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mt-16 xs:text-4xl">
               Education
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div style={{ scaleY: scrollYProgress }}
                 className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light 
                 md:w-[2px] md:left-[30px] xs:left-[20px]"/>
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2" >
                    <EducationCard
                    type={'Bachelor of Computer Science and Artificial Intelligence'}
                    place={'Cairo University'}
                    time={'Jan 2019 - Aug 2023'}
                    info={'Established a solid foundation in computer science, transitioned to the AI department with a focus on advanced Machine Learning, and graduated with excellent marks on a final project that applied AI to job recommendation systems.'}
                    
                    />
                    <EducationCard
                    type={'Specialized training in Digital IC Design and Verification'}
                    place={'The American University in Cairo'}
                    time={'Sep 2023 - May 2024'}
                    info={'Gained proficiency in digital circuits through practical training, designed and analyzed circuits using Cadence, created digital systems with Verilog in Quartus, implemented transistors with Tanner, and effectively managed time to meet project deadlines.'}                    
                    />

                </ul>
            </div >
        </div >

    );
};
export default Education