import * as React from "react";
import {  Home, Loader } from "../../components/index";


const Project = React.lazy(() =>
	import("../../components").then(({ Project }) => ({
		default: Project,
	}))
);
const Contact = React.lazy(() =>
import("../../components").then(({ Contact }) => ({
		default: Contact,
	}))
);
const About = React.lazy(() =>
import("../../components").then(({ About }) => ({
		default: About,
	}))
);

const Skills = React.lazy(() =>
import("../../components").then(({ Skills }) => ({
		default: Skills,
	}))
);



const Hero = () => {
    React.useEffect(() => {
		if (window.location.hash) {
			const id = window.location.hash.substring(1);

			setTimeout(() => {
				const el = document.getElementById(id);
				if (el) {
					el.scrollIntoView();
					el.focus();
				}
			}, 0);
		}
	});


    return(
      <>
      <Home/>
        <React.Suspense fallback = {<Loader/>}>
        <Project />
		<About/>
        <Skills/>
		<Contact/>
        </React.Suspense>   
        </>
    )
}

export {Hero}; 