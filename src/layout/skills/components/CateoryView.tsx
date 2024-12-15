import { default as skillsList } from '../../../data/skillsData';
import SkillType from '../../../types/skill.type';
import Skill from './Skill';
import '../skills.css';
import { useInView } from 'react-intersection-observer';
import { useMemo } from 'react';

const CATEGORIES = ['Front-End', 'Back-End', 'Language', 'Testing', 'Version-Control', 'Other'];

const CategoryView: React.FC = () => {
  const { ref: visibilityRef, inView: isVisible } = useInView();

  const skillsByCategory = useMemo(() => {
    const categoryMap: Record<string, SkillType[]> = {};
    CATEGORIES.forEach((category) => {
      categoryMap[category] = skillsList.filter(skill => skill.category.split(', ').includes(category));
    });
    return categoryMap;
  }, [skillsList]);

  return (
    <div className='skill-display__wrapper' ref={visibilityRef}>
      {CATEGORIES.map((category, i) => (
        <div
          key={category}
          style={{ transitionDelay: `${i * 50}ms` }}
          className={`skill-display__category ${isVisible ? 'skill-display__fade-in' : 'skill-display__fade-out'}`}
        >
          <span className='skill-display__category-title'>{category}</span>

          <div className='skill-display__divider' />

          <div className='skill-display__skills-list'>
            {skillsByCategory[category].map((skill) => (
              <Skill key={skill.id} data={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryView;