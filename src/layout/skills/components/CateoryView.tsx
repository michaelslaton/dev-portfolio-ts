import {default as skillsList} from '../../../data/skillsData';
import SkillType from '../../../types/skill.type';
import Skill from './Skill';
import '../skills.css';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const CategoryView: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { ref: visibilityRef, inView: visible } = useInView();
  if (visible && isVisible !== true) setIsVisible(true);
  
  const createCategoryListing = (title: string, arr: SkillType[], order: number): JSX.Element => {
    const includedSkills: SkillType[] = arr.filter((skill)=> skill.category.split(', ').includes(title));

    return (
      <div
        ref={visibilityRef}
        style={{transitionDelay: `${order * 50}ms`}}
        className={`skill-display__category  ${isVisible ? 'skill-display__fade-in' : 'skill-display__fade-out'}`}
      >

        <span className='skill-display__category-title'>{title}</span>

        <div className='skill-display__divider'/>

        <div className='skill-display__skills-list'>
          {includedSkills.map((skill)=>(
            <Skill key={skill.id} data={skill}/>
          ))}
        </div>
        
      </div>
    );
  };

  return (
    <div className='skill-display__wrapper'>
      { createCategoryListing('Front-End', skillsList, 1) }
      { createCategoryListing('Back-End', skillsList, 2) }
      { createCategoryListing('Language', skillsList, 3) }
      { createCategoryListing('Testing', skillsList, 4) }
      { createCategoryListing('Version-Control', skillsList, 5) }
      { createCategoryListing('Other', skillsList, 6) }
    </div>
  );
};

export default CategoryView;