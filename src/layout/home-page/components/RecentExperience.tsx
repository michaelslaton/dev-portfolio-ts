
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import experienceData from '../../../data/experienceData';
import ExperienceType from '../../../types/experienceType';
import months from '../../../data/months';
import '../homePage.css';

const RecentExperience: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const mostRecentExperience: ExperienceType | undefined = [...experienceData].pop();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { ref: visibilityRef, inView: visible } = useInView();
  if(visible && isVisible !== true) setIsVisible(true);

  return (
    <div
      className='recent-project__wrapper'
      ref={visibilityRef}
    >
      <h2
        className={`widget-title ${isVisible ? 'slide-in' : 'slide-out'}`}
      >
        Recent Experience
      </h2>

      <div className={`recent-project__img--wrapper ${isVisible ? 'slide-up' : 'slide-down'}`}>
        <div className='recent-project__img--overlay'>
          <h3 className='recent-project__title'>{mostRecentExperience!.role} at {mostRecentExperience!.name}</h3>
          <h3 className='recent-experience__date'>
            { mostRecentExperience!.endDate ?
              <>{`( ${months[mostRecentExperience!.startDate.getMonth()]} ${mostRecentExperience!.startDate.getFullYear()}`} - {`${months[mostRecentExperience!.endDate.getMonth()]} ${mostRecentExperience!.endDate.getFullYear()} )`}</>
            :
              <>{`( ${months[mostRecentExperience!.startDate.getMonth()]} ${mostRecentExperience!.startDate.getFullYear()}`} - {`Current )`}</>
            }            
          </h3>
          <p>{mostRecentExperience!.description}</p>
        </div>

        <img
          src={mostRecentExperience?.img}
          className='recent-project__img'
          alt='Most Recent Project'
        />
      </div>

      <div className={`see-more--wrapper ${isVisible ? 'slide-in' : 'slide-out'}`}>
        <div
          onClick={() => navigate('/experience')}
          className='see-more'
        >
          Full Experience List...
        </div>
      </div>
    </div>
  );
};

export default RecentExperience;