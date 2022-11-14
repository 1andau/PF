import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { DestinationTitle } from 'GlobalStyles';
import { dest } from 'pages/Project/data';
import './Home.scss'; 
import CV from '../assets/CV/cv-Sarah.pdf'; 
import spaceImg from '../assets/images/space.png'; 
export const Home = () => {

    const [isSelected] = React.useState(dest[0]);

  return (
    <div className="destinationContainer">
      <DestinationTitle>
        <span>01</span>
        <h1>Chapter.Familiarization.</h1>
      </DestinationTitle>

      <div className="MainInfo">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.1 }}
          className="portfolio-img"   
        >
        <img id="SarahSpace" src={spaceImg} alt=""/>

        </motion.div>




        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className="portfolioDetail"
        >
     

          <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
              key={isSelected.name}
              variants={tabAnimation}
              initial="hidden"
              animate={
                isSelected.name === isSelected.name ? "show" : "hidden"
              }
              exit="hidden"
              className="portfolio-facts"
            >
              <h1>{isSelected.name}</h1>
              <p>{isSelected.description}</p>
              <hr />
              <div className="portfolio-stats">
                <div className="stat">
                  <h2>Work experience:</h2>
                  <h3>{isSelected.distance}</h3>
                </div>
                <div className="stat">
                  <h2>More information in my CV</h2>
                  <h3><a href={CV} download>CV</a></h3>  
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
        
      </div>
    </div>
  )
}
 export const tabAnimation = {
    hidden: {
      y: 200,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

