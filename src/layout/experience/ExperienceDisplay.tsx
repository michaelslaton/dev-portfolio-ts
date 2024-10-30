import { useState } from 'react';
import Divider from '../components/divider/Divider';
import experienceData from '../../data/experienceData';
import ExperienceType from '../../types/experienceType';
import Experience from './components/Experience';
import { useInView } from 'react-intersection-observer';
import './experience.css';

type ExperienceStateType = {
  selectedExperience: ExperienceType | null;
  showItems: boolean;
};

const ExperienceDisplay: React.FC = () => {
  const [ experienceState, setExperienceState ] = useState<ExperienceStateType>({
    selectedExperience: null,
    showItems: true,
  });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { ref: visibilityRef, inView: visible } = useInView();
  if (visible && isVisible !== true) setIsVisible(true);
  const formattedExperienceList: ExperienceType[] = [...experienceData].reverse();

  return (
    <div className='content__screen'>
      <div className='page-title__wrapper'>
        <h1 className='page-title reveal'>
          Experience
        </h1>
      </div>
      <Divider />

      <div className='experience-display__container'>
        <div
          className='experience-list__wrapper'
          ref={visibilityRef}
        >
          { formattedExperienceList.map((experience,i)=>(
            <div
              key={experience.id}
              onClick={() => setExperienceState({
                showItems: !experienceState.showItems,
                selectedExperience: experience,
              })}
              style={{transitionDelay: `${i * 50}ms`}}
              className={`projects__list-item 
                ${experience.id === experienceState.selectedExperience?.id ? 'selected' : ''}
                ${isVisible ? 'projects__list-item__slide-up' : 'projects__list-item__slide-down'}
                ${experienceState.showItems || experienceState.selectedExperience?.id === experience.id ? 'show' : 'no-show'}
                `}
            >
              {experience.name}
            </div>
          )) }
        </div>

        {experienceState.selectedExperience && <Experience data={experienceState.selectedExperience} />}

      </div>
    </div>
  );
};

export default ExperienceDisplay;
