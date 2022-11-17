import {useState, useCallback} from 'react'
import styles from './about.module.scss'; 
import {ExperienceType} from './data'

type ExperienceProps = {
  name: string; 
  company: string; 
  startDate: string; 
  endDate: string; 
  responsibilities: string[]; 
  stack: string[]; 
  type: 'UpWork' | 'T-Mobile' | string;
}

const Experiece = ({name,startDate,endDate, type,  responsibilities, stack, company }:ExperienceProps ) => {	
	const category = Object.values(ExperienceType)
	const [activeTab, setActiveTab] = useState(ExperienceType.UW);
	
	const handleTabClick = useCallback((JobTitle: ExperienceType) => {
	  setActiveTab(JobTitle);
	}, []);

  return (
	<>

				<ul className={`${styles.tab} ${company.length > 1 ? styles.tab__line : ""}`}>
							<li  className={styles.tab__item}>
								<h3 className={styles.tab__title}>{name}</h3>
								<p className={styles.tab__date}>
									{startDate} - {endDate}
								</p>


								<ul className={styles.tab__description}>
									{responsibilities.map((item: string, k: number) => (
										<li key={k} className={styles.tab__description_item}>
											{item}
										</li>
									))}
								</ul>



								<ul className={styles.tab__skills}>
									{stack.map((item: string, k: number) => (
										<li key={k} className={styles.tab__skills_item}>
											{item}
										</li>
									))}
								</ul>
							</li>
				</ul>

</>



       )
}

export default Experiece