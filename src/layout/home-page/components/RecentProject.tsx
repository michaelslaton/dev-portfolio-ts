
import { useMemo } from 'react';
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
  const { ref: visibilityRef, inView: isVisible } = useInView();

  const projectSkills = useMemo(() => {
    if (!mostRecentProject?.tech) return [];
    return mostRecentProject.tech
      .map((tech) => skillsData.find((skill) => skill.id === tech))
      .filter((skill): skill is SkillType => Boolean(skill));
  }, [mostRecentProject]);

  const renderSkillsList = (skills: SkillType[]) => (
    <section className='recent-project__skills-list'>
      {`Tech: `}
      {skills.map((skill) => (
        <div key={skill.id} className='recent-project__skills-list--item'>
          {`${skill.name}, `}
        </div>
      ))}
    </section>
  );

  return (
    <div
      className='widget'
      ref={visibilityRef}
    >
      <div className='widget-info'>
        <h2>
          {mostRecentProject?.name}
        </h2>
        <article>
          {mostRecentProject?.description}
        </article>
      </div>

      <img className='widget-hero' src={mostRecentProject?.img} alt={mostRecentProject?.name}/>
    </div>
  );
};

export default RecentProject;