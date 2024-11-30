import { useState } from 'react';
import { Location, useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Divider from '../components/divider/Divider';
import Experience from './components/Experience';
import ExperienceType from '../../types/experienceType';
import experienceData from '../../data/experienceData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/fontawesome-free-solid';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './experience.css';

type ExperienceStateType = {
  selectedExperience: ExperienceType | null;
  showItems: boolean;
};

const ExperienceDisplay: React.FC = () => {
  const location: Location = useLocation();
  const queryParams: URLSearchParams = new URLSearchParams(location.search);
  const id: string | null = queryParams.get('id');
  const [experienceState, setExperienceState] = useState<ExperienceStateType>({
    selectedExperience: null,
    showItems: true,
  });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { ref: visibilityRef, inView: visible } = useInView();
  const formattedExperienceList: ExperienceType[] = [
    ...experienceData,
  ].reverse();
  
  if (visible && isVisible !== true) setIsVisible(true);
  
  if (Number(id) !== 0 && experienceState.selectedExperience === null) {
    const foundExperience: ExperienceType | undefined = experienceData.find(
      (experience) => experience.id === Number(id)
    );
    if (foundExperience) setExperienceState({ ...experienceState, selectedExperience: foundExperience });
  };

  if (formattedExperienceList[0] && !experienceState.selectedExperience && !id) setExperienceState({ ...experienceState, selectedExperience: formattedExperienceList[0] });

  const displayExperienceListItems = (listItem: ExperienceType) => {

    if(!experienceState.showItems && experienceState.selectedExperience?.id === listItem.id){
      return (
        <>
          <span className='list-chevron'>
            <FontAwesomeIcon icon={faAngleRight as IconProp}/>
          </span>
          {` ${listItem.name}`}
        </>
      );
    }
    else if(experienceState.showItems){
      return (
        <>
          <span className='list-chevron'>
            <FontAwesomeIcon icon={faAngleDown as IconProp}/>
          </span>
          {` ${listItem.name}`}
        </>
      );
    }
    else {
      return (
        <>
          <span className='list-chevron'>
          </span>
          {` ${listItem.name}`}
        </>
      );
    };
  };

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
          className='experience__list'
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
              { displayExperienceListItems(experience) }
            </div>
          )) }
        </div>

        {experienceState.selectedExperience && <Experience data={experienceState.selectedExperience} />}

      </div>
    </div>
  );
};

export default ExperienceDisplay;
