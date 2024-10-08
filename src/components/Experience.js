import React from "react";
import { motion, useScroll } from "framer-motion";

import { useRef } from "react";

import LiIcon from "./LiIcon";


const ExperienceCard = ({ position, company,companyLink, time,address, work }) => {
    const ref =useRef(null);
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]" >
            <LiIcon  reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position}&nbsp;@&nbsp;
                    <a className="text-primary capitalize dark:text-primaryDark" href={companyLink} target="_blank">{company}</a></h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | <span className="underline">{address}</span>
                </span>
                <p className="font-medium w-full md:text-sm">{work}</p>
            </motion.div>
        </li>

    );
};

const Experience = () => {
    const ref =useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mt-16 xs:text-4xl">
                Experience
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div style={{ scaleY: scrollYProgress }}
                 className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                 md:w-[2px] md:left-[30px] xs:left-[20px]"/>
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2" >
                    <ExperienceCard
                    position={' IBM Data Scientist'}
                    company={'Digital Egypt Pioneers Initiative - DEPI'}
                    companyLink={'https://depi.gov.eg/'}
                    time={'Apr 2024 - Sep 2024'}
                    address={'Cairo'}
                    work={'Developed a Streamlit dashboard for the Spotify dataset with interactive visualizations of artists, built a web scraping tool to automate data extraction for top IT companies worldwide, enhancing data collection efficiency, and performed exploratory data analysis (EDA) on various datasets, uncovering key insights through Python visualizations.'}
                     />

                   <ExperienceCard 
                   position={'AI Intern'}
                   company={'ASDC '}
                   companyLink={'https://www.rasid.com.eg/'}
                   time={'Nov 2023 - Dec 2023'}
                   address={'Remote'}
                   work={'Analyzed customer groups using AI and machine learning, optimized GPU-accelerated data processing, implemented YOLOv8 for segmentation and object detection, and ensured optimal model performance by efficiently handling large images.'}

                    />
                    <ExperienceCard 
                    position={'Machine Learning Intern'}
                    companyLink={'https://home.technohacks.co.in/'}
                    company={'TechnoHacks EduTech '}
                    time={'Nov 2023 - Nov 2023'}
                    address={'Remote'}
                    work={'Developed a diabetes prediction model using medical data, created a fraud detection model to prevent financial loss, and built an image classification model with CIFAR-10 for accurate categorization into ten categories'} 
                    /> 
                    <ExperienceCard
                    position={'AI Intern'}
                    companyLink={'https://www.nti.sci.eg/'}
                    company={'National Telecommunication Institute (NTI)'}
                    time={'Sep 2022 - Sep 2022'}
                    address={'Nasr City'}
                    work={
                        'Gained proficiency in data preparation for machine learning, utilized various datasets, explored diverse models including Naive Bayes, SVM, CNNs, and RNNs, collaborated on a research project, and enhanced communication skills through group presentations. an AI model to detect anomalies in medical imaging data, and used it to predict patient outcomes.'}
                    />

                </ul>
            </div >
        </div >

    );
};
export default Experience