import Divider from '../components/divider/Divider';
import './projects.css';

const Projects: React.FC = () => {

  return (
    <div className='content__screen'>
      <div className='center'>
        <h1 className='page-title reveal'>
            Projects
        </h1>
      </div>
      <Divider/>
    </div>
  );
};

export default Projects;