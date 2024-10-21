import { useState } from 'react';
import Divider from '../components/divider/Divider';
import experienceData from '../../data/experienceData';
import ExperienceType from '../../types/experienceType';
import Experience from './components/Experience';
import { useInView } from 'react-intersection-observer';
import './experience.css';

const ExperienceDisplay: React.FC = () => {
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

      <div
        className='experience-list__wrapper'
        ref={visibilityRef}
      >
        { formattedExperienceList.map((experience)=>(
          <Experience data={experience}/>
        )) }
      </div>
    </div>
  );
};

export default ExperienceDisplay;
