
import { useMemo, useState } from 'react';
import { useNavigate, type NavigateFunction } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import ProjectType from '../../../types/project.type';
import SkillType from '../../../types/skill.type';
import projectData from '../../../data/projectData';
import skillsData from '../../../data/skillsData';
import '../homePage.css';

const RecentProject = () => {
  const navigate: NavigateFunction = useNavigate();
  const mostRecentProject: ProjectType | undefined = [...projectData].pop();
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const { ref: visibilityRef, inView: isVisible } = useInView();
  if( isVisible && !hasAnimated) setHasAnimated(true);

  const projectSkills = useMemo(() => {
    if (!mostRecentProject?.tech) return [];
    return mostRecentProject.tech
      .map((tech) => skillsData.find((skill) => skill.id === tech))
      .filter((skill): skill is SkillType => Boolean(skill));
  }, [mostRecentProject]);

  const renderSkillsList = (skills: SkillType[]) => (
    <section className='widget__skills-list'>
      {skills.map((skill) => (
        <a
          key={skill.id}
          className='project__skills-item'
          href={skill.url}
          target='_blank'
        >
          {`${skill.name}`}
        </a>
      ))}
    </section>
  );

  return (
    <div
    className={`widget ${hasAnimated ? 'widget__slide-in' : 'widget__slide-out'}`}
      ref={visibilityRef}
    >
      <div className='widget-info'>
        <h2>
          Recent Project: <span className='italic'>{mostRecentProject?.name}</span>
        </h2>

        <div className='widget__sub-title italic'>
          {mostRecentProject?.subTitle}
        </div>

        <article>
          {mostRecentProject?.description}
        </article>

        <div>
          {renderSkillsList(projectSkills)}
        </div>

        <div
          className='widget__click-for-more italic'
          onClick={()=> navigate(`/projects?id=${mostRecentProject?.id}`)}
        >
          Click for more!
        </div>
      </div>

      <img className='widget-hero' src={mostRecentProject?.img} alt={mostRecentProject?.name}/>
    </div>
  );
};

export default RecentProject;