
import { NavigateFunction, useNavigate } from 'react-router-dom';
import projectData from '../../../data/projectData';
import '../homePage.css';
import ProjectType from '../../../types/project.type';

const RecentProject: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const mostRecentProject: ProjectType | undefined = [...projectData].pop();

  return (
    <div className='recent-project__wrapper'>
      <h2 className='widget-title'>Recent Project</h2>

      <img
        src={mostRecentProject?.img}
        className='recent-project__img'
        alt='Most Recent Project'
      />

      <div className="see-more--wrapper">
        <div
          onClick={() => navigate("/projects")}
          className="see-more"
        >
          More Projects...
        </div>
      </div>
    </div>
  );
};

export default RecentProject;