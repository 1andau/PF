import * as React from "react";
import photo from '../../assets/images/screenshot.png'
import snake from '../../assets/images/snake.jpeg'
import guide from '../../assets/images/guide.png'
import sneakers from '../../assets/images/sneakers.png'
import validate from '../../assets/images/validate.png'
import spoty from '../../assets/images/spoty.png'
import { Button } from "../index";
import { Tags } from "../../pages/styled";
import './project.scss'


export interface IProjectCardProps {
    name: string;
    description: string;
    tags: string[];
    repoLink: string;
    image: string;
  }


 export const CardImages = {
 	PF: {
 		sm: photo,
 		md: photo,
 	},
	 SnakeGame:{
		sm: snake,
		md: snake,
	 }, 
	 ValidateForm:{
		sm: validate,
		md: validate,
	 }, 
	 Guide:{
		sm: guide,
		md: guide,
	 }, 
	 Sneakers:{
		sm: sneakers,
		md: sneakers,
	 }, 
	 Spotify:{
		sm: spoty,
		md: spoty,
	 }, 
}
const ProjectCard = (
     { name, description, image, tags, repoLink }: IProjectCardProps
    ) => {
	const cardRef = React.useRef<HTMLDivElement>(null);
	return (
		<div className='card' key={name} ref={cardRef}>
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
		<div className='card__links'>
			<Button size="small" href={repoLink} target="_blank" rel="noopener noreferrer" link>
				Project
			</Button>
			<Tags>
            
            {tags.map((tag) => (
              <p
                key={tag}>
                {tag}
              </p>
            ))}

          </Tags>

			<Button size="small" href={repoLink} target="_blank" rel="noopener noreferrer" link>
				Github
			</Button>
		</div>
	</div>
	);
};

export { ProjectCard };
