
import { useInView } from 'react-intersection-observer';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import experienceData from '../../../data/experienceData';
import ExperienceType from '../../../types/experienceType';
import months from '../../../data/months';
import '../homePage.css';

const RecentExperience = () => {
  const navigate: NavigateFunction = useNavigate();
  const mostRecentExperience: ExperienceType | undefined = [...experienceData].pop();
  const { ref: visibilityRef, inView: isVisible } = useInView();

  const createDateString = ({ startDate, endDate }: ExperienceType): string => {
    const formatDate = (date?: Date): string => 
      date ? `${months[date.getMonth()]} ${date.getFullYear()}` : 'Current';
  
    const startDateString = formatDate(startDate);
    const endDateString = formatDate(endDate);
  
    return `( ${startDateString} - ${endDateString} )`;
  };

  return (
    <div
      className='widget'
      ref={visibilityRef}
      onClick={()=> navigate(`/experience?id=${mostRecentExperience?.id}`)}
    >
      <div className='widget-info'>
        <h2>
          {mostRecentExperience?.name}
        </h2>

        <div className='widget__experience-dates'>
          {mostRecentExperience && createDateString(mostRecentExperience)}
        </div>

        <article>
          {mostRecentExperience?.description}
        </article>

        <div className='widget__click-for-more'>
          Click for more!
        </div>
      </div>

      <img className='widget-hero' src={mostRecentExperience?.img} alt={mostRecentExperience?.name}/>
    </div>
  );
};

export default RecentExperience;