import './about.scss'

export interface ExperienceProps{
  name: string; 
  company: string; 
  startDate: string; 
  endDate: string; 
  responsibilities: string[]; 
  stack: string[]; 
  type: 'Work experience' | 'Education' | string;
}

 const Experiece = ({name,startDate,endDate, type,  responsibilities, stack, company }:ExperienceProps ) => {	
	
  return (
	<>

				<ul className={`${'tab'} ${company.length > 1 ? 'tab__line' : ""}`}>
							<li  className='tab__item'>
							<h3 className='tab__title'>{company}</h3>

								<h3 className='tab__title'>{name}</h3>
								<p className='tab__date'>
									{startDate} - {endDate}
								</p>


								<ul className='tab__description'>
									{responsibilities.map((item: string, k: number) => (
										<li key={k} className='tab__description_item'>
											{item}
										</li>
									))}
								</ul>



								<ul className='tab__skills'>
									{stack.map((item: string, k: number) => (
										<li key={k} className='tab__skills_item'>
											{item}
										</li>
									))}
								</ul>
							</li>
				</ul>

</>



       )
}

export {Experiece}