import { useEffect, useMemo, useState } from 'react';
import { Location, useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleDown } from '@fortawesome/fontawesome-free-solid';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Experience from './components/Experience';
import ExperienceType from '../../types/experienceType';
import experienceData from '../../data/experienceData';
import './experience.css';
import SectionHeader from '../components/section-header/SectionHeader';

type ExperienceStateType = {
  selectedExperience: ExperienceType | undefined;
  showItems: boolean;
};

const ExperienceDisplay = () => {
  const location: Location = useLocation();
  const queryParams: URLSearchParams = new URLSearchParams(location.search);
  const id: string | null = queryParams.get('id');
  const [experienceState, setExperienceState] = useState<ExperienceStateType>({
    selectedExperience: undefined,
    showItems: true,
  });
  const formattedExperienceList: ExperienceType[] = useMemo(() => [...experienceData].reverse(), [experienceData]);
  const { ref: visibilityRef, inView: isVisible } = useInView();

  useEffect(() => {
    if (id) {
      const foundExperience = experienceData.find((exp) => exp.id === Number(id)) || undefined;
      setExperienceState((prev) => ({ ...prev, selectedExperience: foundExperience }));
    } else if (!id && !experienceState.selectedExperience) {
      setExperienceState((prev) => ({
        ...prev,
        selectedExperience: formattedExperienceList[0] || undefined,
      }));
    }
  }, [id, experienceState.selectedExperience, formattedExperienceList]);

  const displayExperienceListItems = (listItem: ExperienceType) => {
    const getIcon = () => {
      if (!experienceState.showItems && experienceState.selectedExperience?.id === listItem.id) return faAngleLeft;
      if (experienceState.showItems) return faAngleDown;
      return null;
    };
    const icon = getIcon();
    return (
      <>
        {icon && <span className='list-chevron'><FontAwesomeIcon icon={icon as IconProp} /></span>}
        {` ${listItem.name}`}
      </>
    );
  };

  return (
    <div className='content__screen'>     
      <SectionHeader title='Experience'/>

      <div className='experience-display__container'>
        <div
          className='experience__list'
          ref={visibilityRef}
        >
          { formattedExperienceList.map((experience,i)=>(
            <div
              key={experience.id}
              onClick={() => setExperienceState((prev) => ({
                  ...prev,
                  showItems: !prev.showItems,
                  selectedExperience: prev.selectedExperience?.id === experience.id ? prev.selectedExperience : experience,
                }))
              }
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
