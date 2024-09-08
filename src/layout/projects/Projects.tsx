import Divider from '../components/divider/Divider';
import projectData from '../../data/projectData';
import './projects.css';
import { useState } from 'react';
import ProjectType from '../../types/project.type';
import Project from './components/Project';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  return (
    <div className='content__screen'>
      <div className='center'>
        <h1 className='page-title reveal'>
            Projects
        </h1>
      </div>
      <Divider/>

      <div className="projects-display__container">
        <div className='projects__list'>
          {projectData.map((project)=>(
            <div
              key={project.id}
              onClick={()=> setSelectedProject(project)}
              className={`projects__list-item ${project.id === selectedProject?.id ? 'selected' : ''}`}
            >
              {project.name}
            </div>
          ))}
        </div>
        { selectedProject &&
          <Project data={selectedProject}/>
        }
      </div>

    </div>
  );
};

export default Projects;