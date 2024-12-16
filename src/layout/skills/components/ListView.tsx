import {default as skillsList} from '../../../data/skillsData';
import SkillType from '../../../types/skill.type';
import Skill from './Skill';
import '../skills.css';
import { useInView } from 'react-intersection-observer';
import { useMemo } from 'react';

const ListView = () => {
  const { ref: visibilityRef, inView: isVisible } = useInView();

  const groupedSkills = useMemo(() => {
    const groupedItems = new Map<string, SkillType[]>();
  
    skillsList.forEach((skill) => {
      const firstLetter = skill.name[0].toUpperCase();
      if (!groupedItems.has(firstLetter)) {
        groupedItems.set(firstLetter, []);
      }
      groupedItems.get(firstLetter)!.push(skill);
    });
  
    return Array.from(groupedItems.entries())
      .map(([title, items]) => ({ title, items }))
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [skillsList]);

  return (
    <div
      ref={visibilityRef}
      className='skill-display__wrapper'
    >
      {groupedSkills.map((group, i) => (
        <div
          key={group.title}
          style={{ transitionDelay: `${i * 50}ms` }}
          className={`skill-display__category ${isVisible ? 'skill-display__fade-in' : 'skill-display__fade-out'}`}
        >
          <span className='skill-display__category-title'>{group.title}</span>

          <div className='skill-display__divider' />

          <div className='skill-display__skills-list'>
            {group.items.map((skill) => (
              <Skill key={skill.id} data={skill} />
            ))}
          </div>
          
        </div>
      )) }
    </div>
  );
};

export default ListView;