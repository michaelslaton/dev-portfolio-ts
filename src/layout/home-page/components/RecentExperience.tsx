
import { useInView } from 'react-intersection-observer';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import experienceData from '../../../data/experienceData';
import ExperienceType from '../../../types/experienceType';
import months from '../../../data/months';
import '../homePage.css';
import { useState } from 'react';

const RecentExperience = () => {
  const navigate: NavigateFunction = useNavigate();
  const mostRecentExperience: ExperienceType | undefined = [...experienceData].pop();
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const { ref: visibilityRef, inView: isVisible } = useInView();
  if( isVisible && !hasAnimated) setHasAnimated(true);

  const createDateString = ({ startDate, endDate }: ExperienceType): string => {
    const formatDate = (date?: Date): string => 
      date ? `${months[date.getMonth()]} ${date.getFullYear()}` : 'Current';
  
    const startDateString = formatDate(startDate);
    const endDateString = formatDate(endDate);
  
    return `( ${startDateString} - ${endDateString} )`;
  };

  return (
    <div
    className={`widget ${hasAnimated ? 'widget__slide-in' : 'widget__slide-out'}`}
      ref={visibilityRef}
    >
      <div className='widget-info'>
        <h2>
          Recent Experience: <span className='italic'>{mostRecentExperience?.name}</span>
        </h2>

        <div className='widget__sub-title italic'>
          {mostRecentExperience && createDateString(mostRecentExperience)}
        </div>

        <article>
          {mostRecentExperience?.description}
        </article>

        <div
          className='widget__click-for-more italic'
          onClick={()=> navigate(`/experience?id=${mostRecentExperience?.id}`)}
        >
          Click for more!
        </div>
      </div>

      <img className='widget-hero' src={mostRecentExperience?.img} alt={mostRecentExperience?.name}/>
    </div>
  );
};

export default RecentExperience;