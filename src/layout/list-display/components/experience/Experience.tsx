import months from '../../../../data/months';
import ExperienceType from '../../../../types/experienceType';
import { faAngleRight } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './experience.css';

type ExperienceProps = {
  experience: ExperienceType;
}

const Experience = ({experience: { img, name, role, startDate, endDate, description, bulletPoints }}: ExperienceProps) => {

  return (
    <div className='experience__wrapper'>
      <div className='experience__main-block'>
        <img className='experience__img' src={img} alt={name}/>
        <div className='experience__header'>

          <div className='experience__title'>
            <h2>{name}</h2>
            <h3>{role}</h3>
          </div>

          <div className='experience__dates'>
            { endDate ?
              <>{`( ${months[startDate.getMonth()]} ${startDate.getFullYear()}`} - {`${months[endDate.getMonth()]} ${endDate.getFullYear()} )`}</>
            :
              <>{`( ${months[startDate.getMonth()]} ${startDate.getFullYear()}`} - {`Current )`}</>
            }
          </div>

          <div className='experience__description'>
            {description}
          </div>

          <div className='experience__bullet-points-wrapper'>
            {bulletPoints?.map((bullet,i)=>(
              <div key={i} className='experience__bullet-point'>
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