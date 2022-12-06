import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img from '../../assets/images/Sarah.jpeg'; 
import { aboutInfo } from "./data";
import { DestinationTitle, MainContainer } from "../../GlobalStyles";
import { experienceData, ExperienceType } from "./data";
import { Experiece } from "../index";
import  './about.scss';
import { tabAnimation } from "../../utils/utils";

 const About = () => {
const [info] = useState(aboutInfo[0]); 

const category = Object.values(ExperienceType)
const [activeTab, setActiveTab] = useState(ExperienceType.WEXP);
const sectionRef = useRef<HTMLDivElement>(null);

const handleTabClick = useCallback((name: ExperienceType) => {
  setActiveTab(name);
}, []);

console.log(handleTabClick);

  return (
    <MainContainer id="about">
    <DestinationTitle>
      <span>03</span>
      <h1>Chapter.About.</h1>
    </DestinationTitle>

    <div className="MainInfo" >
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
    
  </div>  


<section className='tabs' ref={sectionRef}>
<div className='tabs__list'>
{category
.map((value, i) => (
  		<button
      onClick={() => handleTabClick(value)} key={i}
    className={`${'tabs__list_item'} ${
      activeTab === value ? 'tabs__list_item_active' : ""
    }`}
    >
      {value}
    </button>
))}
</div>

<div className='tabs__pannel'>
{experienceData
.filter((value) => value.type === activeTab)
.map((value) => (
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

export { About}
