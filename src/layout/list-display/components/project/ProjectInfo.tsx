import skillsData from '../../../../data/skillsData';
import ProjectType from '../../../../types/project.type';
import SkillType from '../../../../types/skill.type';
import './project.css';

type ProjectProps = {
  project: ProjectType;
};

const ProjectInfo = ({ project: { description, tech, code, codeb, demo } }: ProjectProps) => {

  const projectSkills: SkillType[] = tech
    .map((techId) => skillsData.find((skill) => skill.id === techId))
    .filter(Boolean) as SkillType[];

  return (
    <>
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
    </>
  );
};

export default ProjectInfo;
