import ProjectType from '../../../types/project.type';
import skillsData from '../../../data/skillsData';
import '../projects.css';
import SkillType from '../../../types/skill.type';

type ProjectProps = {
  data: ProjectType;
}

const Project: React.FC<ProjectProps> = ({ data }) => {
  const projectSkills: SkillType[] = [];

  for(let i=0;i<data.tech.length;i++){
    const foundSkill = skillsData.find((skill)=> skill.id === data.tech[i]);
    console.log(foundSkill)
    projectSkills.push(foundSkill!);
  }
  console.log(projectSkills)

  return (
    <div className='project'>
      <div className='project__header'>
        <img
          src={data.img}
          className='project__hero-img'
        />
        <div className='project__header-info'>
          <h2>{data.name}</h2>

          <p>{data.description}</p>

          <div className='project__skills-list'>
            {projectSkills.map((skill)=>(
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
            { data.codeb ?
              <>
                <a
                  href={data.code}
                  className='project__code-buttons-item'
                  target='_blank'
                >
                  F: Code
                </a>
                <a
                  className='project__code-buttons-item'
                  href={data.codeb}
                  target='_blank'
                >
                  B: Code
                </a>
              </>
              :
              <a
                href={data.code}
                className='project__code-buttons-item'
                target='_blank'
              >
                Code
              </a>
            }
            { data.demo &&
              <a
                href={data.demo}
                className='project__code-buttons-item'
                target='_blank'
              >
                Demo
              </a>
            }
          </div>

        </div>
      </div>
    </div>
  );
};

export default Project;