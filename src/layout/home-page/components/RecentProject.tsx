
import { NavigateFunction, useNavigate } from 'react-router-dom';
import projectData from '../../../data/projectData';
import '../homePage.css';
import ProjectType from '../../../types/project.type';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import SkillType from '../../../types/skill.type';
import skillsData from '../../../data/skillsData';

const RecentProject: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const mostRecentProject: ProjectType | undefined = [...projectData].pop();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { ref: visibilityRef, inView: visible } = useInView();
  if(visible && isVisible !== true) setIsVisible(true);
  const projectSkills: SkillType[] = [];

  for (let i = 0; i < mostRecentProject!.tech.length; i++) {
    const foundSkill = skillsData.find((skill) => skill.id === mostRecentProject!.tech[i]);
    if (foundSkill) projectSkills.push(foundSkill!);
  };

  return (
    <div
      className='recent-project__wrapper'
      ref={visibilityRef}
    >
      <h2
        className={`widget-title ${isVisible ? 'slide-in' : 'slide-out'}`}
      >
        Recent Project
      </h2>

      <div className={`recent-project__img--wrapper ${isVisible ? 'slide-up' : 'slide-down'}`}>
        <div className='recent-project__img--overlay'>
          <h3 className='recent-project__title'>{mostRecentProject!.name}</h3>
          <p>{mostRecentProject!.description}</p>
          <section className='recent-project__skills-list'>
            Tech: {projectSkills.map((skill) => (
              <div className='recent-project__skills-list--item'>
                {`${skill.name}, `}
              </div>
            ))}
          </section>
        </div>

        <img
          src={mostRecentProject?.img}
          className='recent-project__img'
          alt='Most Recent Project'
        />
      </div>

      <div className={`see-more--wrapper ${isVisible ? 'slide-in' : 'slide-out'}`}>
        <div
          onClick={() => navigate('/projects')}
          className='see-more'
        >
          More Projects...
        </div>
      </div>
    </div>
  );
};

export default RecentProject;