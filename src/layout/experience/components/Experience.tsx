import months from "../../../data/months";
import ExperienceType from "../../../types/experienceType";
import { faAngleRight } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
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

          <div className='experience__dates'>
            { data.endDate ?
              <>{`${months[data.startDate.getMonth()]} ${data.startDate.getFullYear()}`} - {`${months[data.endDate.getMonth()]} ${data.endDate.getFullYear()}`}</>
            :
              <>{`${months[data.startDate.getMonth()]} ${data.startDate.getFullYear()}`} - Current</>
            }
          </div>

          <div className='experience__description'>
            {data.description}
          </div>

          <div className='experience__bullet-points-wrapper'>
            {data.bulletPoints?.map((bullet)=>(
              <div className='experience__bullet-point'>
                <span className='experience__bullet-point--arrow'><FontAwesomeIcon icon={faAngleRight as IconProp}/></span> {bullet}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;