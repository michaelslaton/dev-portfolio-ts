import Divider from '../components/divider/Divider';
import projectData from '../../data/projectData';
import { useState } from 'react';
import ProjectType from '../../types/project.type';
import Project from './components/Project';
import { useInView } from 'react-intersection-observer';
import './projects.css';
import { Location, useLocation } from 'react-router-dom';

type ProjectStateType = {
  selectedProject: ProjectType | null;
  showItems: boolean;
};

const ProjectsDisplay: React.FC = () => {
  const location: Location = useLocation();
  const queryParams: URLSearchParams = new URLSearchParams(location.search);
  const id: string | null = queryParams.get('id');
  const [projectState, setProjectState] = useState<ProjectStateType>({
    selectedProject: null,
    showItems: true,
  });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { ref: visibilityRef, inView: visible } = useInView();
  const formattedProjectList: ProjectType[] = [...projectData].reverse();
  
  if (visible && isVisible !== true) setIsVisible(true);
  
  if (Number(id) !== 0 && projectState.selectedProject === null) {
    const foundExperience: ProjectType | undefined = projectData.find(
      (project) => project.id === Number(id)
    );
    if (foundExperience) setProjectState({ ...projectState, selectedProject: foundExperience });
  };
  
  if (formattedProjectList[0] && !projectState.selectedProject && !id) setProjectState({ ...projectState, selectedProject: formattedProjectList[0] });

  return (
    <div className='content__screen'>
      <div className='page-title__wrapper'>
        <h1 className='page-title reveal'>
          Projects
        </h1>
      </div>
      <Divider />

      <div className='projects-display__container'>
        <div className='projects__list' ref={visibilityRef}>
          {formattedProjectList
            .map((project,i) => (
              <div
                key={project.id}
                onClick={() => setProjectState({
                  showItems: !projectState.showItems,
                  selectedProject: project,
                })}
                style={{transitionDelay: `${i * 50}ms`}}
                className={`projects__list-item 
                  ${project.id === projectState.selectedProject?.id ? 'selected' : ''}
                  ${isVisible ? 'projects__list-item__slide-up' : 'projects__list-item__slide-down'}
                  ${projectState.showItems || projectState.selectedProject?.id === project.id ? 'show' : 'no-show'}
                  `}
              >
                {project.name}
              </div>
            ))}
        </div>
        
        {projectState.selectedProject && <Project data={projectState.selectedProject} />}
        
      </div>
    </div>
  );
};

export default ProjectsDisplay;
