import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import data from './db.json'; 
import './Home.scss'; 
import CV from '../assets/cv-Sarah.pdf'; 
export const Home = () => {

    const [isSelected] = React.useState(data.destinations[0]);

  return (
    <div className="destination-container">
      <div className="destination-title">
        <span>01</span>
        <h1>Chapter.Familiarization.</h1>
      </div>

      <div className="portfolio-info">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.1 }}
          className="portfolio-img"   
        >

          <motion.img
            whileInView={{ rotate: [0, 40] }}
            transition={{ ease: "linear", duration: 6, repeat: Infinity }}
            src={isSelected.images.png}
       
          />
        </motion.div>


        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className="portfolio-detail"
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
const tabAnimation = {
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

