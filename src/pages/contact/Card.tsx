import * as React from "react";
import styles from './contactForm.module.scss'; 
import photo from '../../assets/images/screenshot.png'
import { IProjectCard } from "@/types/project/types";
import { Button } from "pages/button/Butoon";
import { Tags } from "pages/styled";
 export const CardImages = {
 	moviesApp: {
 		sm: photo,
 		md: photo,
 	},
}
const Card = (
     { name, description, image, tags, repoLink, type }: IProjectCard
    ) => {
	const cardRef = React.useRef<HTMLDivElement>(null);
	return (
		<div className={`${styles.card} project`} key={name} ref={cardRef}>
		<h3>{name}</h3>
		<p>{description}</p>
		<picture>
			<source
				media="(min-width: 867px)"
				srcSet={`${CardImages[image as keyof typeof CardImages].sm}, ${
					CardImages[image as keyof typeof CardImages].md
				} 2x`}
			/>
			<source
				media="(min-width: 607px)"
				srcSet={`${CardImages[image as keyof typeof CardImages].sm}, ${
					CardImages[image as keyof typeof CardImages].md
				} 2x`}
			/>
			<source
				media="(min-width: 372px)"
				srcSet={`${CardImages[image as keyof typeof CardImages].sm}, ${
					CardImages[image as keyof typeof CardImages].md
				} 2x`}
			/>
			<img
				src={CardImages[image as keyof typeof CardImages].sm}
				alt={`Project ${name}`}
				width={300}
				height={188}
				loading="lazy"
			/>
		</picture>
		<div className={styles.card__links}>
			<Button size="small" href={repoLink} target="_blank" rel="noopener noreferrer" link>
				Project
			</Button>

			{/* <Tags>
            
            {tags.map((tag) => (
              <p
                key={tag}>
                {tag}
              </p>
            ))}
          </Tags> */}

			<Button size="small" href={repoLink} target="_blank" rel="noopener noreferrer" link>
				Github
			</Button>
		</div>
	</div>
	);
};

export { Card };
