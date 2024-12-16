
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
    <div className='recent-project__wrapper' ref={visibilityRef}>
      <h2 className={`widget-title ${isVisible ? 'slide-in' : 'slide-out'}`}>
        Recent Project
      </h2>

      <div
        className={`recent-project__img--wrapper ${
          isVisible ? 'slide-up' : 'slide-down'
        }`}
        onClick={() => navigate(`/projects?id=${mostRecentProject?.id}`)}
      >
        <div className='recent-project__img--overlay'>
          <h3 className='recent-project__title'>{mostRecentProject!.name}</h3>
          <p>{mostRecentProject!.description}</p>
          {renderSkillsList(projectSkills)}
        </div>

        <img
          src={mostRecentProject?.img}
          className='recent-project__img'
          alt='Most Recent Project'
        />
      </div>

      <div
        className={`see-more--wrapper ${isVisible ? 'slide-in' : 'slide-out'}`}
      >
        <div onClick={() => navigate('/projects')} className='see-more'>
          More Projects...
        </div>
      </div>
    </div>
  );
};

export default RecentProject;