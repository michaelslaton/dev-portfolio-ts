import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Location, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/fontawesome-free-solid';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Divider from '../components/divider/Divider';
import Project from './components/Project';
import ProjectType from '../../types/project.type';
import projectData from '../../data/projectData';
import './projects.css';

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

  const displayProjectListItems = (listItem: ProjectType) => {
    if(!projectState.showItems && projectState.selectedProject?.id === listItem.id){
      return (
        <>
          <span className='list-chevron'>
            <FontAwesomeIcon icon={faAngleRight as IconProp}/>
          </span>
          {` ${listItem.name}`}
        </>
      );
    }
    else if(projectState.showItems){
      return (
        <>
          <span className='list-chevron'>
            <FontAwesomeIcon icon={faAngleDown as IconProp}/>
          </span>
          {` ${listItem.name}`}
        </>
      );
    }
    else {
      return (
        <>
          <span className='list-chevron'>
          </span>
          {` ${listItem.name}`}
        </>
      );
    };
  };

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
                { displayProjectListItems(project) }
              </div>
            ))}
        </div>
        
        {projectState.selectedProject && <Project data={projectState.selectedProject} />}
        
      </div>
    </div>
  );
};

export default ProjectsDisplay;
