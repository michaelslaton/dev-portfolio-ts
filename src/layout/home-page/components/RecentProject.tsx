
import { NavigateFunction, useNavigate } from 'react-router-dom';
import projectData from '../../../data/projectData';
import '../homePage.css';
import ProjectType from '../../../types/project.type';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const RecentProject: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const mostRecentProject: ProjectType | undefined = [...projectData].pop();
  const [isVisible, setIsVisible] = useState(false);
  const { ref: visibilityRef, inView: visible } = useInView();
  if(visible && isVisible !== true) setIsVisible(true);

  return (
    <div
      className='recent-project__wrapper'
      ref={visibilityRef}
    >
      <h2
        className={`widget-title ${isVisible ? 'slide-in' : 'slide-out'}`}
      >
        Recent Project
      </h2>

      <div className={`${isVisible ? 'slide-up' : 'slide-down'}`}>
        <img
          src={mostRecentProject?.img}
          className='recent-project__img'
          alt='Most Recent Project'
        />
      </div>

      <div className={`see-more--wrapper ${isVisible ? 'slide-in' : 'slide-out'}`}>
        <div
          onClick={() => navigate('/projects')}
          className='see-more'
        >
          More Projects...
        </div>
      </div>
    </div>
  );
};

export default RecentProject;