import React from 'react'
import styles from './contactForm.module.scss';
import { projects } from 'pages/Project/data';
import { Card } from './Card';
import { MainContainer } from 'GlobalStyles';

export const Contact = () => {
	const sectionRef = React.useRef<HTMLDivElement>(null);

  return (

	<MainContainer>

<section className={styles.projects}  ref={sectionRef}>
	<h1>hello</h1>

	<div className={styles.projects__container}>
		{projects.map((value) => (
				<Card
					key={value.name}
					name={value.name}
					description={value.description}
					repoLink={value.repoLink}
					image={value.image}
					tags={value.tags}
					type={value.type}
				/>
			))}


	</div>
</section>
	</MainContainer>



 )
}

