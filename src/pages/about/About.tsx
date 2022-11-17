import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img from '../../assets/images/Sarah.jpeg'; 
import { aboutInfo } from "./data";
import { tabAnimation } from "home/Home";
import { DestinationTitle, MainContainer } from "GlobalStyles";
import { experienceData, ExperienceType } from "./data";
import styles from './about.module.scss';
import Experiece from "./Experiece";

const About = () => {
const [info] = useState(aboutInfo[0]); 

const category = Object.values(ExperienceType)
const [activeTab, setActiveTab] = useState(ExperienceType.UW);

const handleTabClick = useCallback((JobTitle: ExperienceType) => {
  setActiveTab(JobTitle);
}, []);

console.log(handleTabClick);

  return (
    <MainContainer>
    <DestinationTitle>
      <span>03</span>
      <h1>Chapter.About.</h1>
    </DestinationTitle>

    {/* <div className="MainInfo">
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.1 }}
      className="portfolio-img">
    <img id="Photo" src={img} alt=""/>
    </motion.div>


    <motion.div
      whileInView={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.8 }}
      className="portfolioDetail"
    >
 
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          key={info.name}
          variants={tabAnimation}
          initial="hidden"
          animate={
            info.name === info.name ? "show" : "hidden"
          }
          exit="hidden"
          className="portfolio-facts"
        >
          <h1>{info.name}</h1>
          <p>{info.description}</p>
 
        </motion.div>
      </AnimatePresence>
    </motion.div>
    
  </div>   */}


<section className='tabs'>
<div className='tabs__list'>
{category.map((value) => (
  		<button
      onClick={() => handleTabClick(value)} key={value}
    className={activeTab === value ? 'active': '' }
    >
      {value}
    </button>
))}
</div>

<div className={styles.tabs__pannel}>
{experienceData.map((value) => (
 <Experiece
 responsibilities={value.responsibilities}
 name = {value.name}
 company={value.company}
 startDate = {value.startDate}
 endDate = {value.endDate}
 stack = {value.stack}
 type = {value.type}
key={value.name}
/> 

))}


</div>







</section>






  
  </MainContainer>
)
}

export default About