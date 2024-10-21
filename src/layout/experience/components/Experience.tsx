import ExperienceType from "../../../types/experienceType";
import '../experience.css';

type ExperienceProps = {
  data: ExperienceType;
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {

  return (
    <div className='experience__wrapper'>
      {data.name}
    </div>
  );
};

export default Experience;