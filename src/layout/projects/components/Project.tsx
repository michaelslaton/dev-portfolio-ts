import ProjectType from '../../../types/project.type';
import skillsData from '../../../data/skillsData';
import SkillType from '../../../types/skill.type';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import '../projects.css';

type ProjectProps = {
  data: ProjectType;
};

const Project: React.FC<ProjectProps> = ({ data }) => {
  const projectSkills: SkillType[] = [];
  const [isVisible, setIsVisible] = useState(false);
  const { ref: visibilityRef, inView: visible } = useInView();
  if (visible && isVisible !== true) setIsVisible(true);

  for (let i = 0; i < data.tech.length; i++) {
    const foundSkill = skillsData.find((skill) => skill.id === data.tech[i]);
    if (foundSkill) projectSkills.push(foundSkill!);
  }

  return (
    <div
      className={`project ${
        isVisible ? 'project__slide-up' : 'project__slide-down'
      }`}
      ref={visibilityRef}
    >
      <div className='project__header'>
        <img src={data.img} className='project__hero-img' />
        <div className='project__header-info'>
          <div className='project__header--title-wrapper'>
            <h2>{data.name}</h2>
            <h3>{data.type}</h3>
          </div>

          <p>{data.description}</p>

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
            {data.codeb ? (
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
            ) : (
              <a
                href={data.code}
                className='project__code-buttons-item'
                target='_blank'
              >
                Code
              </a>
            )}
            {data.demo && (
              <a
                href={data.demo}
                className='project__code-buttons-item'
                target='_blank'
              >
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
      {data.screenShots.length ? (
        <div className='project__screenshots'>
          {data.screenShots.map((image, i) => (
            <div key={i}>
              <img
                className='project__screenshots-item'
                src={image}
                alt='Screenshot'
              />
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Project;
