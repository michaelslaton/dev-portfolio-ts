
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

  return (
    <div
      className='widget'
      ref={visibilityRef}
    >
      <div className='widget-info'>
        <h2>
          {mostRecentExperience?.name}
        </h2>
        <article>
          {mostRecentExperience?.description}
        </article>
      </div>

      <img className='widget-hero' src={mostRecentExperience?.img} alt={mostRecentExperience?.name}/>
    </div>
  );
};

export default RecentExperience;