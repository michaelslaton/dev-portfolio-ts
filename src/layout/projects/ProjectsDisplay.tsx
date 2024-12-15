import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Divider from '../components/divider/Divider';
import Project from './components/Project';
import ProjectListItem from './components/ProjectListItem';
import ProjectType from '../../types/project.type';
import projectData from '../../data/projectData';
import './projects.css';

const ProjectsDisplay: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const formattedProjectList = [...projectData].reverse();
  const { ref: visibilityRef, inView: isVisible } = useInView();
  const [ projectState, setProjectState ] = useState<{
    selectedProject: ProjectType | null;
    showItems: boolean;
  }>({
    selectedProject: null,
    showItems: true,
  });
  
  useEffect(()=>{
    if(id){
      const foundProject = formattedProjectList.find((project)=> project.id === Number(id));
      if(foundProject) setProjectState({...projectState, selectedProject: foundProject});
    }
  },[]);

  const handleClick = (project: ProjectType): void => {
    if(!projectState.showItems) setProjectState({showItems: true, selectedProject: project});
    else setProjectState({showItems: false, selectedProject: project})
  }

  return (
    <div className='content__screen'>
      <div className='page-title__wrapper'>
        <h1 className='page-title reveal'>Projects</h1>
      </div>

      <Divider />

      <div className='projects-display__container'>
        <div className='projects__list' ref={visibilityRef}>
          {formattedProjectList.map((project) => (
            <ProjectListItem
              key={project.id}
              project={project}
              isSelected={projectState.selectedProject?.id === project.id}
              showItems={projectState.showItems}
              isVisible={isVisible}
              onClick={() => handleClick(project)}
            />
          ))}
        </div>

        {projectState.selectedProject && <Project data={projectState.selectedProject} />}
      </div>
    </div>
  );
};

export default ProjectsDisplay;