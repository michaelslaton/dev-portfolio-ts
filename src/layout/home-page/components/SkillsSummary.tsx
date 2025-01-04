import { useInView } from 'react-intersection-observer';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import Skill from '../../skills/components/Skill';
import { default as skillsList } from '../../../data/skillsData';
import '../homePage.css';
import { useState } from 'react';

const SkillsSummary = () => {
  const navigate: NavigateFunction = useNavigate();
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const { ref: visibilityRef, inView: isVisible } = useInView();
  if( isVisible && !hasAnimated) setHasAnimated(true);

  return (
    <div
    className={`widget ${hasAnimated ? 'widget__slide-in' : 'widget__slide-out'}`}
    ref={visibilityRef}
    >
      <div className='widget-info'>
        <h2>
          Top Skills
        </h2>
        <article>
        Some stuff about things 
        Some stuff about things 
        Some stuff about things 
        Some stuff about things 
        Some stuff about things 
        Some stuff about things 
        Some stuff about things 
        Some stuff about things 
        Some stuff about things 
        Some stuff about things 
        Some stuff about things 
        Some stuff about things 
        Some stuff about things 
        Some stuff about things 
        Some stuff about things 
        Some stuff about things 
        Some stuff about things 
        Some stuff about things
        </article>

        <div
          className='widget__click-for-more italic'
          onClick={()=> navigate(`/skills`)}
        >
          Click for more!
        </div>
      </div>
      <section>
        {skillsList.map((skill) => {
          if (skill.homePage) return <Skill key={skill.id} data={skill} />;
        })}
      </section>
    </div>
  );
};

export default SkillsSummary;