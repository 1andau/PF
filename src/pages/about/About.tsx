import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img from '../../assets/images/Sarah.jpeg'; 
import { aboutInfo } from "pages/skills/data";
import { tabAnimation } from "home/Home";
import { DestinationTitle, MainContainer } from "GlobalStyles";

const About = () => {
    const [info] = useState(aboutInfo[0]); 

  return (
    <MainContainer>
    <DestinationTitle>
      <span>03</span>
      <h1>Chapter.About.</h1>
    </DestinationTitle>

    <div className="MainInfo">
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.1 }}
      className="portfolio-img"   
    >
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
  </MainContainer>
)
}

export default About