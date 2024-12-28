import { useInView } from 'react-intersection-observer';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import Skill from '../../skills/components/Skill';
import { default as skillsList } from '../../../data/skillsData';
import '../homePage.css';

const SkillsSummary = () => {
  const navigate: NavigateFunction = useNavigate();
  const { ref: visibilityRef, inView: isVisible } = useInView();

  return (
    <div
    className='widget'
    ref={visibilityRef}
    >
      <div className='widget-info'>
        <h2>
          Skills
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