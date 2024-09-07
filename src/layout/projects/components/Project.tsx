import ProjectType from '../../../types/project.type';
import '../projects.css';

type ProjectProps = {
  data: ProjectType;
}

const Project: React.FC<ProjectProps> = ({ data }) => {

  return (
    <div className='project'>
      <div className="project__header">
        <img
          src={data.img}
          className='project__hero-img'
        />
        <div className='project__header-info'>
          <h2>{data.name}</h2>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;