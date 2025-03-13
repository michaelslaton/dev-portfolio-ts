import { useInView } from 'react-intersection-observer';
import Skill from '../../skills/components/Skill';
import { default as skillsList } from '../../../data/skillsData';
import { useState } from 'react';
import ClickForMoreButton from './click-for-button/ClickForMoreButton';
import '../homePage.css';

const SkillsSummary = () => {
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
          A selection of the skills I consider my strongest and most enjoyable to work with.
        </article>

        <ClickForMoreButton url={'/skills'}/>
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