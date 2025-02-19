import months from '../../../../data/months';
import ExperienceType from '../../../../types/experienceType';
import { faAngleRight } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './experience.css';

type ExperienceProps = {
  experience: ExperienceType;
}

const ExperienceInfo = ({experience: { startDate, endDate, description, bulletPoints }}: ExperienceProps) => {

  return (
      <>
        <div className='experience__dates italic'>
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

      </>
  );
};

export default ExperienceInfo;