import {default as skillsList} from '../../../data/skillsData';
import SkillType from '../../../types/skill.type';
import '../skills.css';
import Skill from './Skill';

type GroupedItem = {
  letter: string;
  items: SkillType[];
};


const ListView: React.FC = () => {

  const groupItemsByAlphabet = (items: SkillType[]): GroupedItem[] => {
    // Create a Map to group items by their starting letter
    const groupedItems = new Map();
  
    items.forEach((item) => {
      const firstLetter = item.name[0].toUpperCase();

      if (!groupedItems.has(firstLetter)) {
        groupedItems.set(firstLetter, []);
      }
  
      groupedItems.get(firstLetter)!.push(item);
    });
  
    // Convert the Map into an array of objects, sorting each letter group
    const result: GroupedItem[] = [];
    groupedItems.forEach((items, letter) => {
      result.push({
        letter,
        items
      });
    });
  
    // Sort the final array by letter
    return result.sort((a, b) => a.letter.localeCompare(b.letter));
  };

  const thingy = groupItemsByAlphabet(skillsList);
  console.log(thingy)


  return (
    <div className='list-view__wrapper'>
      {thingy.map((thing)=>(
        <>
          {thing.letter}
          <div className='alphabet-divider'/>
          <div className='list-view__skills-list'>
            {thing.items.map((skill)=>(
              <Skill data={skill}/>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default ListView;