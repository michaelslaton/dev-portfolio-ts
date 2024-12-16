import ProjectType from '../../../types/project.type';
import skillsData from '../../../data/skillsData';
import SkillType from '../../../types/skill.type';
import { useInView } from 'react-intersection-observer';
import '../projects.css';

type ProjectProps = {
  data: ProjectType;
};

const Project = ({ data: { img, name, type, description, tech, screenShots, code, codeb, demo } }: ProjectProps) => {
  const { ref: visibilityRef, inView: isVisible } = useInView();

  const projectSkills: SkillType[] = tech
    .map((techId) => skillsData.find((skill) => skill.id === techId))
    .filter(Boolean) as SkillType[];

  return (
    <div
      className={`project ${
        isVisible ? 'project__slide-up' : 'project__slide-down'
      }`}
      ref={visibilityRef}
    >
      <div className='project__header'>
        <img src={img} className='project__hero-img' alt={`${name} hero image`}/>
        <div className='project__header-info'>
          <div className='project__header--title-wrapper'>
            <h2>{name}</h2>
            <h3>{type}</h3>
          </div>

          <p>{description}</p>

          <div className='project__skills-list'>
            {projectSkills.map((skill) => (
              <a
                key={skill.id}
                className='project__skills-item'
                href={skill.url}
                target='_blank'
              >
                {`${skill.name}`}
              </a>
            ))}
          </div>

          <div className='project__code-buttons'>
            <a href={code} className='project__code-buttons-item' target='_blank'>
              {codeb ? 'F: Code' : 'Code'}
            </a>
            {codeb && (
              <a href={codeb} className='project__code-buttons-item' target='_blank'>
                B: Code
              </a>
            )}
            {demo && (
              <a href={demo} className='project__code-buttons-item' target='_blank'>
                Demo
              </a>
            )}
          </div>

        </div>
      </div>
      {screenShots?.length > 0 && (
        <div className='project__screenshots'>
          {screenShots.map((image, i) => (
            <div key={i}>
              <img
                className='project__screenshots-item'
                src={image}
                alt='Screenshot'
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Project;
