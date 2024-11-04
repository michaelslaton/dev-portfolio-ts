import ExperienceType from "../../../types/experienceType";
import '../experience.css';

type ExperienceProps = {
  data: ExperienceType;
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {

  return (
    <div className='experience__wrapper'>
      <div className='experience__main-block'>
        <img className='experience__img' src={data.img} alt={data.name}/>
        <div className='experience__header'>
          <div className='experience__title'>
            <h2>{data.name}</h2>
            <h3>{data.role}</h3>
          </div>
          <div className='experience__description'>
            {data.description}
          </div>
          <div className='experience__bullet-points-wrapper'>
            {data.bulletPoints?.map((bullet)=>(
              <div className='experience__bullet-point'>
                - {bullet}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;