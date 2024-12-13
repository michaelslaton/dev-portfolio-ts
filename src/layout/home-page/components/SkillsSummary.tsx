import { useInView } from 'react-intersection-observer';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import Skill from '../../skills/components/Skill';
import { default as skillsList } from '../../../data/skillsData';
import '../homePage.css';

const SkillsSummary: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const { ref: visibilityRef, inView: isVisible } = useInView();

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