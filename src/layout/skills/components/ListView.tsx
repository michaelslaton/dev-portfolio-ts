import {default as skillsList} from '../../../data/skillsData';
import SkillType from '../../../types/skill.type';
import GroupedItem from '../../../types/groupedItemType';
import Skill from './Skill';
import '../skills.css';

const ListView: React.FC = () => {

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
    <div className='skill-display__wrapper'>
      { groupItemsByAlphabet(skillsList).map((group)=>(
        <div className='skill-display__category'>

          <span>{group.title}</span>

          <div className='skill-display__divider'/>

          <div className='skill-display__skills-list'>
            {group.items.map((skill)=>(
              <Skill data={skill}/>
            ))}
          </div>
          
        </div>
      )) }
    </div>
  );
};

export default ListView;