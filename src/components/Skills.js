import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
    return (
        <motion.div className="flex items-center justify-center rounded-full font-semibold
        bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent 
        xs:text-dark xs:dark:text-light  xs:font-bold xs:shadow-light xs:hover:bg-light"
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y  ,transition: { duration: 1.5 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>

    )


}
const Skills = () => {
    return (
        <>
            <h2 className=" font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">Skills</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight 
            dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
            lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm">

                <motion.div className="flex items-center justify-center rounded-full font-semibold
             bg-dark text-light p-6 shadow-dark  cursor-pointer dark:bg-light dark:text-dark
             lg:p-4  md:p-2  xs:p-1 xs:text-xs"
                    whileHover={{ scale: 1.05 }}>
                    Data Science
                </motion.div>




                <Skill name="Python" x="-5vw" y="-9vw" />
                <Skill name="Pandas" x="-22vw" y="-4vw" />
                <Skill name="SQL" x="20vw" y="0vw" />
                <Skill name="NumPy" x="-10vw" y="8vw" />
                <Skill name="Scikit-learn" x="9vw" y="-19vw" />
                <Skill name="Keras" x="-10vw" y="20vw" />
                <Skill name="NLTK" x="19vw" y="14vw" />
                <Skill name="Matplotlib" x="-32vw" y="4vw" />
                <Skill name="Seaborn" x="-20vw" y="-15vw" />
                <Skill name="Streamlit" x="30vw" y="-8vw" />
                <Skill name="Github" x="-25vw" y="15vw" />
                <Skill name="Jupyter" x="5vw" y="20vw" />
                {/*<Skill name="TensorFlow" x="8vw" y="-18vw" />
                <Skill name="PyTorch" x="-22vw" y="-8vw" />
                <Skill name="Tableau" x="18vw" y="-20vw" />
                <Skill name="Power BI" x="-15vw" y="22vw" />
                <Skill name="Apache Spark" x="12vw" y="16vw" />
                <Skill name="Hadoop" x="-10vw" y="-22vw" />
                <Skill name="AWS" x="25vw" y="10vw" />
                <Skill name="Google Cloud Platform" x="-18vw" y="12vw" />
                <Skill name="Docker" x="15vw" y="-15vw" />
                <Skill name="Airflow" x="-20vw" y="-10vw" />*/}














            </div>
        </>
    )
};

export default Skills