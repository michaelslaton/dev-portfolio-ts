import { NavigateFunction, useNavigate } from 'react-router-dom';
import { default as skillsList } from '../../../data/skillsData';
import Skill from '../../skills/components/Skill';
import '../homePage.css';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const SkillsSummary: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const { ref: visibilityRef, inView: visible } = useInView();
  if(visible && isVisible !== true) setIsVisible(true);

  return (
    <div className='skills-summary__wrapper' ref={visibilityRef}>
      <h2
        className={`widget-title ${isVisible ? 'slide-in' : 'slide-out'}`}
      >
        Skills Summary
      </h2>

      <div className={`skills-summary__list ${isVisible ? 'slide-up' : 'slide-down'}`}>
        {skillsList.map((skill) => {
          if (skill.homePage) return <Skill key={skill.id} data={skill} />;
        })}
      </div>
      
      <div className={`see-more--wrapper ${isVisible ? 'slide-in' : 'slide-out'}`}>
        <div
          onClick={() => navigate('/skills')}
          className='see-more'
        >
          See more...
        </div>
      </div>
    </div>
  );
};

export default SkillsSummary;
