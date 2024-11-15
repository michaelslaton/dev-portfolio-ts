import {default as skillsList} from '../../../data/skillsData';
import SkillType from '../../../types/skill.type';
import Skill from './Skill';
import '../skills.css';

const CategoryView: React.FC = () => {
  
  const createCategoryListing = (title: string, arr: SkillType[]): JSX.Element => {
    const includedSkills: SkillType[] = arr.filter((skill)=> skill.category.split(', ').includes(title));

    return (
      <div className='skill-display__category'>

        <span>{title}</span>

        <div className='skill-display__divider'/>

        <div className='skill-display__skills-list'>
          {includedSkills.map((skill)=>(
            <Skill data={skill}/>
          ))}
        </div>
        
      </div>
    );
  };

  return (
    <div className='skill-display__wrapper'>
      { createCategoryListing('Front-End', skillsList) }
      { createCategoryListing('Back-End', skillsList) }
      { createCategoryListing('Language', skillsList) }
      { createCategoryListing('Testing', skillsList) }
      { createCategoryListing('Version-Control', skillsList) }
      { createCategoryListing('Other', skillsList) }
    </div>
  );
};

export default CategoryView;