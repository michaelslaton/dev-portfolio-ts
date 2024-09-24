import Divider from '../components/divider/Divider';
import projectData from '../../data/projectData';
import { useState } from 'react';
import ProjectType from '../../types/project.type';
import Project from './components/Project';
import { useInView } from 'react-intersection-observer';
import './projects.css';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { ref: visibilityRef, inView: visible } = useInView();
  if (visible && isVisible !== true) setIsVisible(true);
  const formattedProjectList: ProjectType[] = [...projectData].reverse();

  return (
    <div className='content__screen'>
      <h1 className='page-title reveal'>Projects</h1>
      <Divider />

      <div className='projects-display__container'>
        <div className='projects__list' ref={visibilityRef}>
          {formattedProjectList
            .map((project,i) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                style={{transitionDelay: `${i * 50}ms`}}
                className={`projects__list-item 
                  ${project.id === selectedProject?.id ? 'selected' : ''}
                  ${isVisible ? 'projects__list-item__slide-up' : 'projects__list-item__slide-down'}
                  `}
              >
                {project.name}
              </div>
            ))}
        </div>
        <div></div>
        {selectedProject && <Project data={selectedProject} />}
      </div>
    </div>
  );
};

export default Projects;
