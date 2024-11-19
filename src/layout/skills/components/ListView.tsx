import {default as skillsList} from '../../../data/skillsData';
import SkillType from '../../../types/skill.type';
import GroupedItem from '../../../types/groupedItemType';
import Skill from './Skill';
import '../skills.css';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const ListView: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { ref: visibilityRef, inView: visible } = useInView();
  if (visible && isVisible !== true) setIsVisible(true);

  const groupItemsByAlphabet = (arr: SkillType[]): GroupedItem[] => {
    const groupedItems = new Map();
  
    arr.forEach((item) => {
      const firstLetter = item.name[0].toUpperCase();

      if (!groupedItems.has(firstLetter)) {
        groupedItems.set(firstLetter, []);
      }
  
      groupedItems.get(firstLetter)!.push(item);
    });
  
    const result: GroupedItem[] = [];
    groupedItems.forEach((items, title) => {
      result.push({
        title,
        items
      });
    });
  
    return result.sort((a, b) => a.title.localeCompare(b.title));
  };

  return (
    <div
      ref={visibilityRef}
      className='skill-display__wrapper'
    >
      { groupItemsByAlphabet(skillsList).map((group,i)=>(
        <div
          key={i}
          style={{transitionDelay: `${i * 50}ms`}}
          className={`skill-display__category ${isVisible ? 'skill-display__fade-in' : 'skill-display__fade-out'}`}
        >

          <span>{group.title}</span>

          <div className='skill-display__divider'/>

          <div className='skill-display__skills-list'>
            {group.items.map((skill)=>(
              <Skill key={skill.id} data={skill}/>
            ))}
          </div>
          
        </div>
      )) }
    </div>
  );
};

export default ListView;